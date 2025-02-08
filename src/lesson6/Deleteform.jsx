import React ,{ useRef, useState ,useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Deleteform = () => {

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const emailref = useRef();
    const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setError("");

      const email = emailref.current.value;

      try {
     
        const response = await axios.get("http://localhost:3005/users", {
          params: { email },
        });

        if (response.data.length > 0) {
          const user = response.data[0];
          
          

          await axios.delete(`http://localhost:3005/users/${user.id}`);
          toast("User deleted successfully", { type: "success" });
          navigate("/loginf");
        } else {
          setError("User not found!");
       
        }
      } catch (err) {
        setError("Error connecting to server!");
       
      }
    }

    setValidated(true);
  };
    
    return ( 
        <>
        <Container className="mt-5">
        {error && <Alert variant="danger">{error}</Alert>}

        <Form className='p-5 w-75 mx-auto my-3' noValidate validated={validated} onSubmit={handleSubmit}>
            
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                <Form.Control ref={emailref} type="email" placeholder="name@example.com" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"> Looks bad </Form.Control.Feedback>
            </FloatingLabel>
        
        
          
            
            <Button variant="primary" type="submit">
                Delete
            </Button>
        </Form>
        </Container>

        </>
     );
}
 
export default Deleteform;