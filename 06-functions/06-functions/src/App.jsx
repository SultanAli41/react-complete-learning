import React from 'react'

function App() {
  function btnClicked(){
    console.log("Button is clicked")
  }
  function mouseEnter(){
    console.log("Mouse is Entered")
  }
  return (
    <div>
<input  onChange={function(elem){
console.log(elem.target.value);
}} type="text" placeholder='Enter your Name' />

<div className='box' onMouseMove={function(elem){console.log(elem.clientY);}}></div>

    </div>

  )
}

export default App
