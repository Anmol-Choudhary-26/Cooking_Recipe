import React from "react";

export default function Upload(props){
    const [recipe, setRecipe] = React.useState({});
    const [image, setImage] = React.useState("");
    let cloudimg =""
    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }
    const submitImage = async (e)=>{
        e.preventDefault()
        console.log('TYPE OF ', typeof(image))
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "recipe")
        data.append("cloud_name", "duxuhubym")
        const userId =  JSON.parse(localStorage.getItem("userData"))
        console.log(userId.fbId)
     await fetch("https://api.cloudinary.com/v1_1/duxuhubym/image/upload", {
            method:"POST",
            body:data
    }).then(res=>res.json()).then(async data=>{
        console.log(data.secure_url)
        cloudimg = data.secure_url
        setImage(data.secure_url) 
    }).catch(err=>{
        console.log(err)
    })

    await fetch(`http://localhost:8080/user/ouser/${userId.fbId}`)
    .then(res=>res.json()).then(async data=>{
           console.log(data._id, "author")
            const FinalData = {
            "title": recipe.title,
            "description": recipe.description,
            "ingredients": recipe.ingredients,
            "steps": recipe.steps,
            "images": cloudimg,
            "author": data._id
            }
            await fetch(`http://localhost:8080/recipe/`, {
                method:'POST',
                body:JSON.stringify(FinalData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
       }).then(()=>{
           console.log(recipe, "recipe")
       }).catch(err=>{
           console.log(err)
       })

    }

    return(
        <>
        <div className="signupform"> 
        <h1 >Upload Recipe</h1>
        <form className="signupform1" onSubmit={submitImage}>
            <input type="text" className="signupinput" name="title" placeholder="Title" onChange={handleChange}/>
            <input type="text" className="signupinput" name="description" placeholder="Description" onChange={handleChange}/>
            <input type="text" className="signupinput" name="ingredients" placeholder="ingredient" onChange={handleChange}/>
            <input type="text" className="signupinput" name="steps" placeholder="Steps" onChange={handleChange}/>
            <input type="file" className="signupinput" name="images" placeholder="image" onChange={(e)=>setImage(e.target.files[0])} />
            <input type="submit" className="signupinput1" ></input>
        </form>
        <div className='container-2' >
				<button className='signupinput2' onClick={()=>{window.location.replace("recipe")}}>Go Back</button>
			</div>
        </div>
        </>
    )
}