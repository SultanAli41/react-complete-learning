import React from 'react'

const Cards = (Props) => {
  return (
    <div className='w-55 h-full rounded-4xl bg-gray-500 overflow-hidden relative'>
     <img className="h-full w-full object-cover" src={Props.img} alt="" />
       <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between py-6 px-6 '>
       
          <h1 className='w-10 h-10 bg-white rounded-full flex justify-center items-center font-semibold text-2xl' >{Props.id + 1}</h1>
       
       
       <div>
          <p className='leading-6 text-white  shadow-black shadow-1xl'>{Props.intro}</p>
       <div className='flex justify-between mt-4 items-center'>
           <button style={{backgroundColor:Props.color}} 
           className='h-8 w-26 bg-blue-700 rounded-4xl text-white'
           >{Props.tag}</button>
       <button className='h-8 w-8 bg-blue-700 rounded-full text-white'><i className="ri-arrow-right-long-line"></i></button>
       </div>
       </div>
       
       </div>
    </div>
  )
}

export default Cards
