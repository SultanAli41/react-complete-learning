import React, { useState } from 'react'

function App() {
  const [num,setNum]=useState(0);
  const [user,setUser]=useState({name:"Sultan" , age:20})
  function us(){
    let updated ={...user};
    updated.name=98;
    updated.age=17;
    setUser(updated)
  }
  function btnclicked(){
    setNum(prev=>prev+1);
    setNum(prev=>prev+1);
    setNum(prev=>prev+1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>click</button>
      <h1 >{user.name}{user.age}</h1>
      <button onClick={us} >destructure</button>
    </div>
  )
}

export default App
