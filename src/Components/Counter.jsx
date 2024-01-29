import React, { useState } from 'react'

function Counter() {
  // state creaction 
  const[counter,setCounter]=useState(0)

  // function creaction 
  function increment(){
    setCounter(counter+1)
  }

  function decrement(){
    if(counter<=0){
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
  }

  function reset(){
     setCounter(0)
  }

  return (
    <div>
      <div className="container" style={{marginTop:'165px',marginBottom:'170px'}} >
      <div style={{margin:'25px',padding:'10px'}}>
      <h1 style={{textAlign:'center',padding:'15px'}}>{counter}</h1>
       <div className='text-center'>
       <button onClick={increment} style={{margin:'10px',backgroundColor:'green',color:'white',padding:'8px',borderRadius:'5px',border:'green'}}>Increment</button>
       <button onClick={decrement} style={{margin:'10px',padding:'8px',backgroundColor:'red',color:'white',borderRadius:'5px',border:'red'}}>Decrement</button>
       <button onClick={reset} style={{margin:'10px',padding:'8px',backgroundColor:'blue',color:'white',borderRadius:'5px',border:'blue'}}>Reset</button>
       </div>
      </div>
      </div>
     </div>
  )
}

export default Counter