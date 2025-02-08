import React, { useRef, useState } from "react";
import { Button, Form, FloatingLabel, Alert, Container } from "react-bootstrap";
import axios from "axios";

const Updatepass = () => {

    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });
    const emailRef = useRef();
    const currentPasswordRef = useRef();
    const newPasswordRef = useRef();


  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    else{
        setMessage({ text: "", type: "" });

        const email = emailRef.current.value;
        const currentPassword = currentPasswordRef.current.value;
        const newPassword = newPasswordRef.current.value;
    
        try {
          // Step 1: Fetch the user by email
          const response = await axios.get("http://localhost:3005/users", { params: { email } });
    
          if (response.data.length === 0) {
            setMessage({ text: "User not found!", type: "danger" });
            return;
          }
    
          const user = response.data[0];
    
          // Step 2: Check if the current password matches
          if (user.password !== currentPassword) {
            setMessage({ text: "Current password is incorrect!", type: "danger" });
            return;
          }
    
          // Step 3: Update the password
          await axios.patch(`http://localhost:3005/users/${user.id}`, { password: newPassword });
    
          setMessage({ text: "Password updated successfully!", type: "success" });
        } catch (error) {
          setMessage({ text: "Error updating password. Try again!", type: "danger" });
        }
        
    }
    setValidated(true);
  
  };
    return ( 
        <Container className="mt-5">
            {message.text && <Alert variant={message.type}>{message.text}</Alert>}
            <Form className="p-5 w-75 mx-auto my-3" noValidate validated={validated}  onSubmit={handleUpdatePassword}>
                <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                <Form.Control ref={emailRef} type="email" placeholder="name@example.com" required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingCurrentPassword" label="Current Password" className="mb-3">
                <Form.Control ref={currentPasswordRef} type="password" placeholder="Current Password" required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingNewPassword" label="New Password" className="mb-3">
                <Form.Control ref={newPasswordRef} type="password" placeholder="New Password" required />
                </FloatingLabel>

                <Button variant="warning" type="submit" className="w-100">
                Update Password
                </Button>
            </Form>
        </Container>
     );
}
 
export default Updatepass;