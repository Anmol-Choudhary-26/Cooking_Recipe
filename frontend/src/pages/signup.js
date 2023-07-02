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
    await fetch(`https://backend.study-ezy.tech/${data.fbId}`).then((res)=>res.json()).then((data)=>{
     
      if(data.msg === "Not Present" ){
        isUserDataPresent = false
        return
      }
      isUserDataPresent = true 
      return
    }).catch(e=>{
        console.log(e,"error")
        isUserDataPresent = false
        return
    })
}

const submitForm =async (e) => {
	e.preventDefault();
	
	await fetch(`https://backend.study-ezy.tech/auth/login`, {
		method:'POST',
		body:JSON.stringify(Form),
		headers:{
			'Content-Type':'application/json'
		}
	})
	.then((res)=> res.json()).then(async (data)=>{
		console.log(data)
        await fetch(`https://backend.study-ezy.tech/user/ouser/${data.id}`, {
		method:'GET',
		headers:{
			'Content-Type':'application/json'
		}
	}).then((res)=> res.json()).then(async (data1)=>{
		localStorage.setItem("USERID", JSON.stringify(data1._id))
	})
	if(data.msg === `User Created`){
		const UserData = {
			"email": data.email,
			"token": data.token,
			"fbId" : data.id,
		}
		localStorage.setItem("userData", JSON.stringify(UserData))
		await signInBack(UserData)
		setTimeout(() => {
			if(!isUserDataPresent){
				const userData = {
					"email": UserData.email,
					"fbid": UserData.fbId,
					"name": localStorage.getItem("username"),
				}
				fetch('https://backend.study-ezy.tech/user/create', {
					method: 'POST',
					body: JSON.stringify(userData),
					headers:{
						'Content-Type':'application/json'
					}
			}).then((res)=> res.json()).then(async (data)=>{
				console.log(data)
				localStorage.setItem("USERID", JSON.stringify(data._id))
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
			 <h1 >Wellcome to ShareRecipe</h1>
			<form  className="signupform1" onSubmit={submitForm}>
			<h1 className='h'>login</h1>
				<input className='signupinput' type='text' placeholder=' Enter Email' name= "email" onChange={handleForm}></input>
				<input className='signupinput' type='password' placeholder='Enter Password' name= "password" onChange={handleForm}></input>
				<input  className='signupinput1' type='submit'></input>
			</form>
			<div className='container-2' >
                <h3 >Didn't have an account?</h3>
				<button className='signupinput2' onClick={()=>{window.location.replace("sign-up")}}>Sign Up</button>
			</div>
		</div>
	);
};

export default SignUp;
