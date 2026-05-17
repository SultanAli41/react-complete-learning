import React, { useState } from 'react'
function App() {
   let[Num,setnum]=useState(10);
   let[user,setUser]=useState('Ali');
   let[count,setCount]=useState(0);
   function infnc() {
       setCount(count+1)

      }
      function dcfnc() {
        setCount(count-1)
      }
      function jufnc() {
        setCount(count+5)
      }
  return (
    <div>
      <h1>Value of Num is {Num}
        <br />
        Value of user is {user}
         </h1>
      <button onClick={
        function(){
          setnum(39);
          setUser("Haider");
        }
      }>Change the value</button>
      
      {/* Counter*/}
      <div className='counter'>
        
        <div className='count'>{count}</div>
        <div className='btn.dv'>
         <button className='btn' onClick={infnc}  >increase</button>
        <button className='btn'  onClick={dcfnc}>Decrase</button>
        <button className='btn' onClick={jufnc}>jump by five</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
