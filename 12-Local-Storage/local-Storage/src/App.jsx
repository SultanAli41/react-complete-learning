import React from 'react'

const App = () => {
  const user = {
    name:"Ali",
    age:21
  }
  localStorage.setItem("User",JSON.stringify(user));
   console.log(JSON.parse(localStorage.getItem("User")));
  return (
    <h1>Hello</h1>
  )
}

export default App