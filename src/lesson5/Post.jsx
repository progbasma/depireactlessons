import React, { useEffect ,useState} from 'react';
import { useParams, useSearchParams } from 'react-router';
import axios from 'axios';
const Posts = () => {
    const {id}=useParams();
    const [Postdata, setPostdata] = useState([]);
    //console.log(id);
    useEffect(() => {
        const getpostdata = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
            const data = await response.data;
           
            setPostdata(data);
        }
        getpostdata();
    },[])

   


  
    const [post]=useSearchParams();
    console.log("Search parameter = "+post.getAll("faculty"));

    return ( 
        <>
       <h1>{Postdata.title}</h1>
       <p>{Postdata.body}</p>
        </>
     );
}
 
export default Posts;