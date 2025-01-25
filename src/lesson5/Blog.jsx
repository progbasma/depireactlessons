import React  ,{use, useState ,useEffect}from 'react';
import { Row, Container } from 'react-bootstrap';
import Blogitemcard from './Blogitemcard';
import axios from 'axios';


const Blog = () => {
    const [allposts, setallposts] = useState([]);
    useEffect(() => {
        const getallposts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const data = await response.data;
           
            setallposts(data);
        }
        getallposts();
    },[])
    return ( 
        <Container className='p-5'>
        <Row>
            {allposts.map((post)=>
                <Blogitemcard key={post.id} {...post}/>
            )}
           
        </Row>
        </Container>
     );
}
 
export default Blog;