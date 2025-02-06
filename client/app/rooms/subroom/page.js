import React from 'react'
import SubRoomBanner from './components/SubRoomBanner'
import ContactSection from '@/app/GeneralComponents/Contact/ContactSection'
import SubroomCarousel from './components/SubroomCarousel'
import RoomFeatures from './components/RoomFeatures'
import BackgroundSection from './components/BackgroundSection'
import RoomTour from './components/RoomTour'
import OtherOptions from './components/OtherOptions'

const page = () => {
  return (
    <div className=' overflow-hidden'>
      <SubRoomBanner/>
      <SubroomCarousel/>
      <RoomFeatures/>
      <BackgroundSection/>
      <RoomTour/>
      <OtherOptions/>
      <div className='my-10'></div>
      <ContactSection/>
    </div>
  )
}

export default page
