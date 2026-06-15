import React, { useEffect, useState } from 'react'

function App() {
  //This run side by side 
  const [num , setNum]=useState(0);
    const [num2 , setNum2]=useState(100);
  useEffect(function(){
    console.log("use effect is working");
  },[num]);
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
     <button 
     onMouseEnter={()=>{setNum(num + 1)}}
     onMouseLeave={()=>{setNum2(num2 + 10)}}
     >count</button>
    </div>
  )
}

export default App
