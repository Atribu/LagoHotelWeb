import React from 'react'
import RestaurantMainBanner from './components/RestaurantMainBanner'
import ClinaryInfoSection from './components/ClinaryInfoSection'
import ContactSection from '../GeneralComponents/Contact/ContactSection'
import MainRestaurantSection from './components/MainRestaurantSection'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <RestaurantMainBanner/>
      <ClinaryInfoSection/>
      <MainRestaurantSection/>
      <ContactSection/>
    </div>
  )
}

export default page
