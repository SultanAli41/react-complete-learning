import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Component/Card';

function App() {
const[userData,setuserData] = useState([]);
const[index,setIndex] = useState(1);
useEffect( ()=>{getdata()},[index]);
async function getdata(){
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
  setuserData(response.data);
}
  return (
    <div className='bg-black min-h-screen text-white'>
     <div className='flex flex-wrap gap-4'>
       {userData.map((item)=>{
        return <Card item={item} key={item.id}/>
        })}  
<div className='flex justify-center ml-10 gap-6 p-4 w-full '>
          <button

className='bg-amber-400 text-black rounded px-4 py-2 font-semibold active:scale-90'
style={{opacity : index<= 1 ? 0.5 : 1}}
          onClick={()=>{if(index>1){setIndex(index - 1)}}}
          >
            Prev
            </button>
          <h1 className='text-4xl'>{index}</h1>
          <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold active:scale-90'
          onClick={()=>{setIndex(index + 1)}}
          >
            Next
          </button>
        </div>

     </div>
    </div>
  )
}
export default App
