import React from 'react'

const App = () => {
  function formhandler(e){
   e.preventDefault();
   console.log("Submited");
  }
  return (
    <div className='bg-zinc-950 h-screen w-screen '>
      <div className='h-1/2 w-1/3 flex flex-col '>
<form className='flex flex-col justify-between' 
onSubmit={(e)=>{formhandler(e)}}>
        <input type="text" placeholder='Enter Notes Heading' className='h-[50px] w-[70%] border-white-100 text-xl rounded-2xl mt-5 bg-white py-1 px-1' />
        <textarea name="" id="" placeholder='Enter details here' className='h-[50px] w-[70%] border-white-100 text-xl rounded-2xl mt-5 bg-white py-1 px-1' ></textarea>
        <button type='submit' className='h-[50px] w-[70%] border-white-100 text-xl rounded-2xl bg-blue-600 text-white  mt-5 py-1 px-1' >Add Notes</button>
      </form>
      </div>
      
    </div>
  )
}

export default App
