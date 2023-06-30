import React from 'react';
let isUserDataPresent = false
const SignUp = () => {
	const [Form, setForm] = React.useState({});
	
	function handleForm(e){
	setForm({
		...Form, 
		[e.target.name]: e.target.value
	})
}


async function signInBack(data){
   console.log(data)
    await fetch(`http://localhost:8080/user/ouser/${data.fbId}`).then((res)=>res.json()).then((data)=>{
     
      if(data.msg === "Not Present" ){
        isUserDataPresent = false
        return
      }
      isUserDataPresent = true 
	  console.log(isUserDataPresent)
      return
    }).catch(e=>{
        console.log(e,"error")
        isUserDataPresent = false
        return
    })
    
    console.log("end")
}

const submitForm =async (e) => {
	e.preventDefault();
	
	await fetch(`http://localhost:8080/auth/login`, {
		method:'POST',
		body:JSON.stringify(Form),
		headers:{
			'Content-Type':'application/json'
		}
	})
	.then((res)=> res.json()).then(async (data)=>{
        console.log(data,"lksjfl")
	if(data.msg === `User Created`){
		const UserData = {
			"email": data.email,
			"token": data.token,
			"fbId" : data.id,
		}
		localStorage.setItem("userData", JSON.stringify(UserData))
		console.log(localStorage.getItem("userData"), " user data")
		console.log(localStorage.getItem("username"), " user name")
		await signInBack(UserData)
		setTimeout(() => {
			if(!isUserDataPresent){
				const userData = {
					"email": UserData.email,
					"fbid": UserData.fbId,
					"name": localStorage.getItem("username"),
				}
				fetch('http://localhost:8080/user/create', {
					method: 'POST',
					body: JSON.stringify(userData),
					headers:{
						'Content-Type':'application/json'
					}
			})
		}
			window.location.replace("recipe" )
		}, 1000);
	}
		else if(data.msg === `auth/missing-email`){
			alert("Provide Email and Password")
		}
		else alert(data.msg);
      }
    )
	
}
	return (
		<div className='signupform'>
			<h1>login</h1>
			<form  className="signupform1" onSubmit={submitForm}>
				<input className='signupinput' type='text' placeholder=' Enter Email' name= "email" onChange={handleForm}></input>
				<input className='signupinput' type='password' placeholder='Enter Password' name= "password" onChange={handleForm}></input>
				<input  className='signupinput1' type='submit'></input>
			</form>
		</div>
	);
};

export default SignUp;
