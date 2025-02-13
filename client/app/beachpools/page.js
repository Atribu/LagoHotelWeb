import React from 'react'
import Beach1 from './Components/Beach1'
import Beach2 from './Components/Beach2'
import Beach3 from './Components/Beach3'
import Beach4 from './Components/Beach4'
import Beach5 from './Components/Beach5'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const page = () => {
  return (
    <div className='overflow-hidden overflow-y-hidden'>
      <Beach1 />
      <Beach2 />
      <Beach3 />
      <Beach4 />
      <Beach5 />
      <ContactSection2 />
    </div>
  )
}

export default page