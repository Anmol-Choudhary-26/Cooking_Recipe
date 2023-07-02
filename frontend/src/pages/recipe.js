import React from 'react';
import axios from "axios"
import Navbar from '../component/Navbar/index';
import Recipe from '../component/recipe';

const Blogs = () => {
	const [data, setData] = React.useState([]);
	const element = data.map((item, index) => {
		return (
			<Recipe item={item} key={index}/>
		)
	})
      const datafunction = async () => {
            try {
                const result = await axios.get(
                    "https://backend.study-ezy.tech/recipe/", {
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
		datafunction()
		console.log(data)

	
	return (
		<>
		<Navbar/>
		<div className="divdiv">
		{element}
		</div>
		</> 
		);
};

export default Blogs;
