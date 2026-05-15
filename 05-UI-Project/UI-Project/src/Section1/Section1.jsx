import React from 'react'
import Nav from './Nav'
import Center from './center'
function Section1(Props) {
  return (
    <div className='h-screen w-full'>
      <Nav />
      <Center users={Props.users}/>
    </div>
  )
}

export default Section1
