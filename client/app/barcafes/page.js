import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import imgBanner from "./images/mainbar.webp"

const page = () => {
  return (
    <div>
      <MainBannerSection img={imgBanner} span="ITALIAN CUISINE AT ITS FINEST" header="Bars and Cafés" text="Enjoy a various amount of dining options from around the world."/>
    </div>
  )
}

export default page
