import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import image from "./images/mainkids.webp"
import KidsBamboo from './components/KidsBamboo'
import KidsIconsSection from './components/KidsIconsSection'
import KidsclubCarousel from './components/KidsclubCarousel'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <MainBannerSection img={image}/>
      <KidsBamboo/>
      <KidsIconsSection/>
      <KidsclubCarousel/>
    </div>
  )
}

export default page
