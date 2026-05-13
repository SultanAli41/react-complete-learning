import React from 'react'
import RightCenter from './RightCenter'
import LeftCenter from './LeftCenter'
function center() {
  return (
    <div className='w-full h-[90vh] gap-10 flex justify-between items-center py-8 px-12'>
      <LeftCenter />
      <RightCenter />
    </div>
  )
}

export default center
