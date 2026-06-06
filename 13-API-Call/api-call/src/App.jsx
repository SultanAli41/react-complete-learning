import React, { useState } from 'react'
import axios from 'axios'

function App() {
   /*async function getdata(){
    const resposne = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await resposne.json();
    console.log(data);
   }*/
  //Method 2
  /*async function getdata(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
  }*/
// Using Lorem Picsum API
const [data,setdata]=useState([]);
async function getdata() {
  const response = await axios.get('https://picsum.photos/v2/list');
  setdata(response.data);

}

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      {data.map(function(elem,idx){
        return <h1 key={idx} >Hello , {elem.author} , {idx}</h1>
      })}
 
    </div>
  )
}

export default App
