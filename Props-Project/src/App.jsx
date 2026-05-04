import React from 'react'
import Card from './components/card'
function App() {

 const arr =[
  {
user:"Ali",
age:21
 },
 {
user:"Haider",
age:23
 },
 {
user:"Ahmad",
age:27
 }];
 {arr.forEach(function(val){
    console.log(val.user , val.age);
   })}

  return (
    <div className='parent'>
    </div>
  )
}

export default App

