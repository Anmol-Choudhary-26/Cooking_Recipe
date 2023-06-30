import React from "react";
const op = document.getElementById('op')

export default function Createuser(){
    const [Form , SetForm] = React.useState({});
    function handleForm(e){
             SetForm({
                ...Form, 
                [e.target.name]:e.target.value,
               })
    }
    const submitForm= async (e) => {
        e.preventDefault();
        localStorage.setItem("username", JSON.stringify(Form.username))    
        await fetch(`http://localhost:8080/auth/signup`, {
            method:"POST", 
            body:JSON.stringify(Form),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=> res.json())
        .then(async (data)=>{
            if(data.msg === "verification link send"){
                alert("Verification Link Send!!!!");
                setTimeout(() => {
                op.style.display = "none"
                }, 2000);
                window.location.replace("login");
            }
            else if(data.msg === "auth/admin-restricted-operation"){
                alert("Please provide Email and Password!");
            }
            else{
                alert(data.msg);
            }
        }
        )
    }

    return(
        <>  
       <div className="signupform">
        <h1 >Wellcome to ShareRecipe</h1>
        <form className="signupform1" onSubmit={submitForm}>
            <h2 >SignUp</h2>
            <input className="signupinput" type='text' placeholder="Enter email" name = "email" onChange={handleForm}></input>
            <input className="signupinput" type= 'text' name = 'username' placeholder="Enter Username" onChange={handleForm}></input>
            <input className="signupinput" type= 'password' name = 'password' placeholder="Enter password"onChange={handleForm}></input>
            <input className="signupinput1"  type='submit' ></input>
        </form>
        </div>      
        </>
    )
}

