import React from "react";
import axios from 'axios'
import Recipe from '../component/recipe'
import Navbar  from "../component/Navbar";

const Search = () =>{
    const inputStyle = {
        backgroundColor: "#303245",
        // border-radius: 12px;
        color: "#eee",
        // height: 30px;
        marginBottom: "10px",
        fontSize :"15px",
        fontWeight:"bold",
        borderRadius : "10px",
        height:"30px",
        float:"right"

    };

    const [Form, setForm] = React.useState("");
	console.log(Form)
	function handleForm(e){
	setForm(
		 e.target.value
)
datafunction()
}


const [data, setData] = React.useState([]);
const element = data.map((item, index) => {
    return (
        <Recipe item={item} key={index}/>
    )
})

    const datafunction = async () => {
        try {
            const result = await axios.get(
                `http://localhost:8080/recipe/search/${Form}`, {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
            setData(data => result.data);
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }
    
    

    return (
        <>
		<Navbar/>
        <div className="divdiv2">
            <div>
            <div className='container-2' >
				<button className='signupinput2' onClick={()=>{window.location.replace("recipe")}}>Go back</button>
                 <input style={inputStyle} type="text" placeholder="Search.." name="search" onChange={handleForm} />
			</div>
		</div>
        <div className="divdiv">
		{element}
		</div>
        </div>
		</>
    )
}
export default Search;