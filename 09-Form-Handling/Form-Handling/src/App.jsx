import React from 'react'
function formhandler(e){
  e.preventDefault();
  console.log("Form Submited");
}
function App() {
  return (
    <div>
      <form onSubmit={
        (e)=>{
        formhandler(e);
        }
      }>
        <input type="text" name="Enter your name" id="" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
