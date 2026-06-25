import React from 'react'

function Card({item}) {
  return (
    <div>
         <img className='h-48 w-72 rounded-2xl  object-cover ' src={item.download_url} alt="" />
         <br />
         <h1 className='text-white mt-0 mb-4 '>{item.author}</h1>
        </div>
  )
}

export default Card
