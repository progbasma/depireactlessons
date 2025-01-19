import React from 'react';
import { useLocation } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg';

const About = () => {
    const location1= useLocation();
   
    return ( 
        <>
        <h1>about page</h1>
        <p>{location1.state}</p>
        <Button variant="danger">Primary</Button>
        <Row>
            <Col>
                <Card >
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card >
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card >
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
       

        </>
     );
}
 
export default About;