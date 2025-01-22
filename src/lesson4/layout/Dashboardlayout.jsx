import React ,{ useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { Row  , Col ,Button ,Offcanvas ,Nav } from 'react-bootstrap';
const Dashboardlayout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (  
        <>
            <header className='navbar sticky-top bg-dark flex-md-nowrap p-0 shadow'>
                <NavLink to="/" className="navbar-brand  me-0 px-3 fs-6 text-white"> Company Name Dashboard</NavLink>
                <Button variant="secondary " className="d-lg-none text-white" onClick={handleShow}>
                <span class="navbar-toggler-icon"></span>
                </Button>
            </header>
            <main>
                <Row>
                    <Col lg={2} md={3} className='px-md-4 sidebar border border-right p-0 bg-body-tertiary'>
                        <Offcanvas show={show} onHide={handleClose} responsive="lg" className="vh-100">
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Company Name Dashboard menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav defaultActiveKey="/dashboard" className="flex-column">
                                    <Nav.Link as={NavLink} to="/dashboard/">Dashboard</Nav.Link>
                                    <Nav.Link as={NavLink} to="/dashboard/users">Users</Nav.Link>
                                    <Nav.Link as={NavLink} to="/dashboard/posts">Posts</Nav.Link>
                                    <Nav.Link as={NavLink} to="/dashboard/products">Products</Nav.Link>
                                    
                                    
                                </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                    

                    </Col>

                    <Col lg={10} md={9} className='px-md-4'>
                        <Outlet/>

                    </Col>

                </Row>
            </main>
        </>
     );
}
 
export default Dashboardlayout;