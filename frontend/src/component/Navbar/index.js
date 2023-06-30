import React from "react";
import Popup from '../popup.js';

const Navbar = () => {
    const NavStyle = {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "pink",
        borderRadius: "10px",
        color: "white",
        margin: "10px",
        gap: "60%",
        fontFamily: "Arial",
        fontSize: "30px",
        height: "60px",
    };

    const componentStyle = {
        padding: "10px",
    };
   
    const navRight = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center" 
    };
    const inputStyle = {
        borderRadius : "10px",
        height:"30px"

    };
	return (

		<>
			<nav style={NavStyle}>
                <div style={componentStyle}>
                        <a href="/UploadRecipe" >Add Recipes</a>
                        </div>  
                    <div style={navRight}>
                       <input style={inputStyle} type="text" placeholder="Search.." name="search" />
                          <Popup />
                       </div>
                
            </nav>
		</>
	);
};

export default Navbar;
