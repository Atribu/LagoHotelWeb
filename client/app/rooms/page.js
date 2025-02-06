import React from 'react'
import RoomsBanner from './components/RoomsBanner'
import RoomsInfoSection from './components/RoomsInfoSection'
import RoomsSection from './components/RoomsSection'
import RoomsSectionReverse from './components/RoomsSectionReverse'
import RoomsParallaxSection from './components/RoomsParallaxSection'
import ContactSection from '../GeneralComponents/Contact/ContactSection'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <RoomsBanner/>
      <RoomsInfoSection/>
      <RoomsSection/>
      <RoomsSectionReverse/>
      <RoomsParallaxSection/>
      <ContactSection/>
      <RoomsSection/>
      <RoomsSectionReverse/>
      
    </div>
  )
}

export default page
