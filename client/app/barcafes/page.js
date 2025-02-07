import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import imgBanner from "./images/mainbar.webp"
import ClinaryInfoSection from '../restaurants/components/ClinaryInfoSection'
import cafebar1 from "./images/cafebar1.webp"
import cafebar2 from "./images/cafebars2.webp"

const clinaryTexts=["Lago, you will enjoy your vacation with international cuisine in our A’la Carte Restaurants, where flavorful dishes are served, with an endless open buffet where delicious dishes feature uniqueness from Turkish cuisine as well as fresh flavors reflecting the spirit of the Mediterranean","","",""]

const page = () => {
  return (
    <div>
      <MainBannerSection img={imgBanner} span="ITALIAN CUISINE AT ITS FINEST" header="Bars and Cafés" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryInfoSection img1={cafebar1} img2={cafebar2} span="Perfect Fine Dine Experiences" header="Exceptional Bars and Cafes at LAGO" texts={clinaryTexts}/>
    </div>
  )
}

export default page
