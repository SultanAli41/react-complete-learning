import React, { useEffect, useState } from 'react'

function App() {
  //This run side by side 
 /* const [num , setNum]=useState(0);
    const [num2 , setNum2]=useState(100);
  useEffect(function(){
    console.log("use effect is working");
  },[num,num2]);*/
  const[a,seta] = useState(0);
    const[b,setb] = useState(100);
  function aChanging(){
   console.log("A Change hoo gaya")
  }
  function bChanging(){
     console.log("B Change hoo gaya")
  }
  useEffect(function(){
    console.log("A chal gaya")
  },[a,b])
  return (
    <div>
     {/*<h1>{num}</h1>
      <h1>{num2}</h1>
     <button 
     onMouseEnter={()=>{setNum(num + 1)}}
     onMouseLeave={()=>{setNum2(num2 + 10)}}
     >count</button>*/} 
     <h1>Value of Btn1 is {a}</h1>
      <h1>Value of Btn1 is {b}</h1>
     <button onClick={
      ()=>{seta(a+ 1)}
     }>Btn 1</button>
      
      <button
      onClick={()=>{ setb(b+10) }}
      >Btn 2</button>
      
    </div>
  )
}

export default App
