import React from 'react';
import axios from 'axios';
const Getstrapicateg = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get("http://localhost:1337/api/postcategories");
        console.log(response.data);
    };


    return ( 

        <button onClick={handleSubmit}>click</button>
     );
}
 
export default Getstrapicateg;