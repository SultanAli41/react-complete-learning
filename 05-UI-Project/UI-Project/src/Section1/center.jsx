import React from 'react'
import RightCenter from './RightCenter'
import LeftCenter from './LeftCenter'
function center(Props) {
  return (
    <div className='w-full h-[90vh] gap-10 flex justify-between items-center py-8 px-12'>
      <LeftCenter />
      <RightCenter users={Props.users} />
    </div>
  )
}

export default center
