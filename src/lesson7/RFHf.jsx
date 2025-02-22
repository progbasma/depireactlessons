import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().required().positive().integer(),
  
  });


export default function RFHf() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(SignupSchema),
      });
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
    
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto my-5 p-5 bg-light' >
      <Form.Group as={Row} className="mb-3" >
        <Form.Control type="text" placeholder="First Name" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Control type="text" placeholder="Last Name" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Control type="number" placeholder="Age" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </Form.Group>
      
      <input type="submit" className='btn btn-primary'/>
    </form>
   
  );
}