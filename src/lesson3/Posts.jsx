import React, { useEffect ,useState} from 'react';
import { useParams, useSearchParams } from 'react-router';
const Posts = () => {
    const {id}=useParams();
    console.log(id);
   

  
    const [post]=useSearchParams();
    console.log("Search parameter = "+post.getAll("faculty"));

    return ( 
        <>
       <h1>Post {id}</h1>
        </>
     );
}
 
export default Posts;