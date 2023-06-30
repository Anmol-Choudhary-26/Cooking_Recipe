import React from "react";
import {useNavigate } from 'react-router-dom'
export default function Recipe(props){
    const navigate = useNavigate()
   
    function clickHandler(){
      navigate("/singleRecipe", {state: {item : props}})
    }
    return(
        <>
       <div className="card" onClick={clickHandler} >
        <img src={props.item.images} alt="andrew pic" className="hero-photo"/>
        <div className="card-stat">
            <span>{props.item.title} </span>
        </div>
        <p> <span className="bold">Description: </span><span >{props.item.description}</span> </p>
       
     </div>
        </>
    )
}