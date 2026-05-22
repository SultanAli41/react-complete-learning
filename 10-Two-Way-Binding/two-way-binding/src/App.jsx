import React, { useState } from 'react'
function App() {
let [title,setTitle] = useState("");
function FormHandler(e){
  setTitle(e.target.value);
}
function Submit(e){
  e.preventDefault();
  console.log("Form Submitted by",title);
  setTitle("");
}
  return (
    <div>
      <form onSubmit={Submit}> 
        <input type="text" placeholder='Enter your name' value={title} onChange={FormHandler}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
