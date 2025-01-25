import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router';

const Blogitemcard = (props) => {
    return ( 
        <Col md={3} className='mb-3' >
        <Card>
           
          
            <Card.Body>
                
                <Card.Title><NavLink to={`/posts/${props.id}`}>{props.title}</NavLink></Card.Title>
                
                <Card.Text>
                   {props.body}
                </Card.Text>
               
            </Card.Body>
        </Card>
    
        </Col>
     );
}
 
export default Blogitemcard;