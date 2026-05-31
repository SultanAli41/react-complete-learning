import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] =useState("");
  const [detail,setDetail] =useState("");
  const [task,setTask] =useState([]);
  
  function formhandler(e){
   e.preventDefault();
    const copyTask =[...task];
    copyTask.push({title,detail});
    setTask(copyTask);
   setDetail("");
   setTitle("");
  }

  function delnote(idx){
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
  return (
    <div className='bg-zinc-950 min-h-screen lg:flex'>
<form className='flex gap-4 lg:w-1/2 flex-col items-center' 
onSubmit={(e)=>{formhandler(e)}}>

  <h1 className='text-white items-center py-3 text-3xl font-bold'>Add Notes</h1>
        <input
         type="text" 
         placeholder='Enter Notes Heading' 
         className='px-5 w-2/3 font-medium py-2 border-2 outline-none rounded text-white rounded-2xl'
         value={title}
         onChange={(e)=>{ setTitle(e.target.value)}}
          />
        <textarea 
        type="text"
        placeholder='Enter details here'
        className='px-5 w-2/3 font-medium h-32 py-2  border-2 outline-none text-white rounded-2xl'
        value={detail}
        onChange={(e)=>{setDetail(e.target.value)}}
        ></textarea>
        <button
         type='submit'
        className='bg-blue-600 text-white w-2/3 font-medium py-2 px-5 rounded-3xl' >Add Notes</button>
      </form>
      
      
      <div className='flex flex-col lg:w-1/2 p-2 items-center lg:border-l-2 border-white min-h-screen'>
      <h1 className='text-white  py-3 font-large text-3xl bold font-bold'>Recent Notes</h1>
      <div className='flex gap-10 flex-wrap  py-5 px-10 items-start'>
       {task.map(function(elem,idx){
       return <div className='h-52 w-44 bg-white text-2xl text-black rounded-2xl px-3 py-2 flex flex-col '  key={idx}>
        <h1 className='text-2xl font-bold'>{elem.title}</h1>
        <p className='font-1px text-gray-500 text-xs mt-1'>{elem.detail}</p>
        <button className='bg-red-500 text-white text-xl font-bold  rounded mt-17 active:bg-black' onClick={()=>{delnote(idx)}} >Delete</button>
        </div>
       })}
      </div>
      
      </div>
      </div>
  )
}

export default App
