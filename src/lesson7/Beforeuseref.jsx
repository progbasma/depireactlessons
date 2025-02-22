import React,{useEffect, useRef, useState} from 'react'

function Beforeuseref() {
    const [value,setValue]=useState(0);
   /*  const [counter,setCounter]=useState(0);
    useEffect(() => {
        setCounter(prev=>prev+1);
    },[value]);  */
   const counter=useRef(0);
    useEffect(() => {
        counter.current=counter.current+1;
    }); 



  return (
    <div className='w-50 mx-auto my-4'>
        <button onClick={()=>setValue(prev=>prev+1)}>+</button>
        <p>{value}</p>
        <button onClick={()=>setValue(prev=>prev-1)}>-</button>
    {/*    {  <p>{counter}</p> } */}
       { <p>{counter.current}</p> }

    </div>
  )
}

export default Beforeuseref