import React from 'react'
import Cards from './Cards'
const RightCenter = (Props) => {
  return (
    <div className='h-full w-3/4  flex justify-between p-2'>
     {Props.users.map(function (elem,idx) {
  return <Cards key={idx} id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag}/>;
    })}
     
    </div>
  )
}

export default RightCenter
