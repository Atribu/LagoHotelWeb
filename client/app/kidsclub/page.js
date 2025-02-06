import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import image from "./images/mainkids.webp"
import KidsBamboo from './components/KidsBamboo'

const page = () => {
  return (
    <div>
      <MainBannerSection img={image}/>
      <KidsBamboo/>
    </div>
  )
}

export default page
