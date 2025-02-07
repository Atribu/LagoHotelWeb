import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import image from "./images/mainkids.webp"
import KidsBamboo from './components/KidsBamboo'
import KidsIconsSection from './components/KidsIconsSection'

const page = () => {
  return (
    <div>
      <MainBannerSection img={image}/>
      <KidsBamboo/>
      <KidsIconsSection/>
    </div>
  )
}

export default page
