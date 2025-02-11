import React from 'react'
import Beach1 from './Components/Beach1'
import Beach2 from './Components/Beach2'
import Beach3 from './Components/Beach3'

const page = () => {
  return (
    <div className='overflow-hidden overflow-y-hidden'>
      <Beach1 />
      <Beach2 />
      <Beach3 />
    </div>
  )
}

export default page