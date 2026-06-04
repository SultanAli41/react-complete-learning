import React from 'react'

const App = () => {
   const name = 'Ali';
   const age = 21;
   localStorage.setItem(name,'Ali');
   localStorage.setItem(age,21);
   const umar = localStorage.getItem(age);
    
  return (
   console.log(umar)
  )
}

export default App