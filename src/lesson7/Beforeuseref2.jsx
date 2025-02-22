import React,{useEffect, useRef, useState} from 'react'

function Beforeuseref2() {
    const [value,setvalue]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(value);
        
    }


  return (
    <form action="" className='w-50 mx-auto my-5 p-5 bg-light' onSubmit={handlesubmit}>
        <div className="mb-3">
            <input type="text"
              className="form-control" 
              id="exampleInputEmail1" 
              placeholder='email'
              
              onChange={(e)=>
                            {
                              setvalue(e.target.value);
                              console.log(value);
                              console.log("rerender");
                            }
                      }
              />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Beforeuseref2