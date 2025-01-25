import React from 'react';

import { Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router';

const Shopproduct = (props) => {
    console.log(props);
    return ( 
        <Col md={3} className='mb-3' >
        <Card>
           <div className='position-relative'>
           <Card.Img variant="top" src={props.image} />
           <Card.Text className='position-absolute bottom-0 end-0  badge bg-danger ' >
                   {props.category}
           </Card.Text>
           </div>  
         
            <Card.Body>
                <Card.Title><NavLink to={`/products/${props.id}`}>{props.name}</NavLink></Card.Title>
                
                <Card.Text>
                   Size : {props.size}
                </Card.Text>
                <Card.Text style={{"textDecoration":"line-through","color":"red"}}>
                   {props.old_price} EGP
                </Card.Text>
                <Card.Text>
                   {props.new_price} EGP
                </Card.Text>
               
            </Card.Body>
        </Card>
    
        </Col>
     );
}
 
export default Shopproduct;