import React from "react";
import {  useLocation, useNavigate} from 'react-router-dom'

function SingleRecipe() {
  const location = useLocation();
  const navigate = useNavigate()
    function clickHandler(){
      navigate("/updateRecipe", {state: {item : location.state.item}})
    }
 return(
  <>
 <div className="container">
<div className='container-1'>
<img src={location.state.item.item.images} alt="My Img" className="profile"/>
<div className="container-2">
<h1 className="name"> {location.state.item.item.title}</h1>
<button className="btn" onClick={clickHandler}>Edit</button>
</div>
{/* <h2>Decription:</h2> */}
<h4 ><span className="para">Description: </span> {location.state.item.item.description}</h4>
{/* <h2>Ingredients: </h2> */}
<h4  ><span className="para">Ingredients: </span>{location.state.item.item.ingredients}</h4>
<hr className="hr"/>
<h2>Recipe:</h2>
<p className="para">{location.state.item.item.steps}</p>
</div>

</div>

</>
 )

 };

export default SingleRecipe;
