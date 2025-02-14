import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import mainImg from "./images/specialMain.webp"
import SpecialTypesSection from './components/SpecialTypesSection'
import SpecialGridSection from './components/SpecialGridSection'
import SpecialInfoSection from './components/SpecialInfoSection'
import SpecialCarousel from './components/SpecialCarousel'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const page = () => {
  return (
    <div>
      <MainBannerSection span="HAPPY MOMENTS UNFORGETTABLE" header="Special Occasions" text="Lago team works for you to accumulate unforgettable memories with your loved ones on your special days. " img={mainImg}/>
      <SpecialTypesSection/>
      <SpecialGridSection/>
      <SpecialInfoSection/>
      <SpecialCarousel/>
      <ContactSection2/>
    </div>
  )
}

export default page
