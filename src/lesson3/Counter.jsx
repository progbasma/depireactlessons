import React, { useEffect, useState } from 'react';
import { useNavigate ,navigate } from 'react-router-dom';
const Counter = () => {
    let navigate=useNavigate();
    const [car,setCar]=useState({
        name:"bmw",
        color:"red",
        model:2023
    });

   
    
    const changeColor=()=>{
        setCar((car)=>{
            return{
                ...car,
                color:"blue"
            }
        });
       
        
    }

    const [counter1,setCounter1]=useState(0);
    const changeCounter=()=>{
        setCounter1(counter1=>counter1+1);
      
     
    }

    const [counter2,setCounter2]=useState(0);
    const changeCounter2=()=>{
        setCounter2(counter2=>counter2+1);
      
     
    }

    useEffect (()=>{
        setTimeout(() => {
            setCounter1(counter1=>counter1+1);
        }, 1000);
    },[counter1,counter2]);

    const handler1=()=>{
       
        navigate("/about",{state:"welcome from navigate"});
    }
    return ( 
        <>
        <h1>car name is  {car.name} and color is {car.color} and model is {car.model} </h1>
        <button onClick={changeColor}>click</button>

        <h1>counter1 is {counter1}</h1>
        <button onClick={changeCounter}>click</button>

        <h1>counter2 is {counter2}</h1>
        <button onClick={changeCounter2}>click</button>

        <button className='btn btn-primary' onClick={handler1}>go to aboutpage</button>
        </>
     );
}
 
export default Counter;