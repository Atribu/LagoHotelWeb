import React from 'react'
import MainBannerSection from './components/MainBannerSection'
import mainImg from "./images/eglence.webp"
import ActivitiesSection from './components/ActivitiesSection'
import EntertainmentTypesSection from './components/EntertainmentTypesSection'
import ActivityBackgroundSection from './components/ActivityBackgroundSection'
import ContactSection from '../GeneralComponents/Contact/ContactSection'

const page = () => {
  return (
    <div>
      <MainBannerSection img={mainImg}/>
      <ActivitiesSection/>
      <EntertainmentTypesSection/>
      <ActivityBackgroundSection/>
      <ContactSection/>
    </div>
  )
}

export default page
