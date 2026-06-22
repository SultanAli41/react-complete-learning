import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const[userData,setuserData] = useState("Zero Data here")
async function getdata(){
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
  console.log(response.data);
}
  return (
    <div className='bg-black h-screen text-white'>
      <button className='bg-green-600 text-white rounded m-4 py-2 px-2 active:scale-95'
       onClick={()=>{getdata()}}
       >Get images</button>
    </div>
  )
}
export default App
