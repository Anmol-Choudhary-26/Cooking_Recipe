import React from "react";
import Popup from '../popup.js';
import {useNavigate } from 'react-router-dom'

const Navbar = () => {
    const NavStyle = {
        overflow: "hidden",
        display: "flex",
        backgroundColor: "pink",
        borderRadius: "10px",
        color: "white",
        margin: "10px",
        gap:"50%",
        fontFamily: "Arial",
        fontSize: "30px",
        height: "60px",
    };
    
    const navigate = useNavigate()
   
    function clickHandler(){
      navigate("/search")
    }
	return (

		<>
			<nav style={NavStyle}>
                <div className="left">
                        <a href="/UploadRecipe" >Add Recipes</a>
                        </div>  
                    <div className="right">
                       <img className="buttonStyle"  src={`../img/loupe.png`} alt="star logo" onClick={()=>{clickHandler()}} />
                          <Popup />
                       </div>
                
            </nav>
		</>
	);
};

export default Navbar;
