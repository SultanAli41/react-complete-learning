import React from 'react'

const Cards = () => {
  return (
    <div className='w-55 h-full rounded-4xl bg-gray-500 overflow-hidden relative'>
     <img className="h-full w-full wrap-anywhere " src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFufGVufDB8fDB8fHww" alt="" />
       <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between py-6 px-6 '>
       
          <h1 className='w-10 h-10 bg-white rounded-full flex justify-center items-center font-semibold text-2xl' >1</h1>
       
       
       <div>
          <p className='leading-6 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dignissimos expedita tempora iste harum quia?</p>
       <div className='flex justify-between mt-4 items-center'>
           <button className='h-8 w-26 bg-blue-700 rounded-4xl text-white'>Satisfied</button>
       <button className='h-8 w-8 bg-blue-700 rounded-full text-white'><i class="ri-arrow-right-long-line"></i></button>
       </div>
       </div>
       
       </div>
    </div>
  )
}

export default Cards
