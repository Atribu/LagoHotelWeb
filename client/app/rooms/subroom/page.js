import React from 'react'
import SubRoomBanner from './components/SubRoomBanner'
import ContactSection from '@/app/GeneralComponents/Contact/ContactSection'
import SubroomCarousel from './components/SubroomCarousel'

const page = () => {
  return (
    <div className='flex flex-col bg-white'>
      <SubRoomBanner/>
      <SubroomCarousel/>
      <div className='my-10'></div>
      <ContactSection/>
    </div>
  )
}

export default page
