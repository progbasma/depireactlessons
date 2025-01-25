import React from 'react';
import { Card,Row, Col, Container } from 'react-bootstrap';
import all_products from './Productsdata'
import { NavLink } from 'react-router';
import Shopproduct from './Shopproduct';

const Shop = () => {
    console.log(all_products);
    return ( 
        <>
        <Container className='p-5'>
            <Row>
                {all_products.map((product)=>
                    <Shopproduct key={product.id} {...product}/>
                )}
               
            </Row>
        </Container>

        </>
     );
}
 
export default Shop;