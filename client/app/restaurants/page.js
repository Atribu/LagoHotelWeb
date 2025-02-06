import React from 'react'
import RestaurantMainBanner from './components/RestaurantMainBanner'
import ClinaryInfoSection from './components/ClinaryInfoSection'
import ContactSection from '../GeneralComponents/Contact/ContactSection'
import MainRestaurantSection from './components/MainRestaurantSection'
import CuisinesCarousel from './components/CuisinesCarousel'
import ClinaryReverseInfo from './components/ClinaryReverseInfo'

import anatolia from "./images//anatolia.webp"
import gusto from "./images/gusto.webp"
import despina from "./images/despina.webp"

import wasabi from "./images/wasabi.webp"
import tapaz from "./images/tapaz.webp"
import fuego from "./images/fuego.webp"
import DiscoverBackground from './components/DiscoverBackground'

const cuisines = [
    {
      id: 1,
      img: anatolia,
      title: "Anatolia",
      description: "CUISINE: International ",
      text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
      link:"/"
    },
    {
      id: 2,
      img: gusto,
      title: "Gusto",
      description: "CUISINE: Italian ",
       text:"Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine. Lorem Ipsum the distinctive flavors of ",
       link:"/"
    },
    {
      id: 3,
      img: despina,
      title: "Despina",
      description: "CUISINE: Seafood and Fish ",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    }
  ];

  const cuisines2 = [
    {
      id: 1,
      img: wasabi,
      title: "Wasabi",
      description: "CUISINE: Teppanyaki (Japanese)",
      text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
      link:"/"
    },
    {
      id: 2,
      img: fuego,
      title: "Fuego",
      description: "CUISINE: ASIAN",
       text:"Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine. Lorem Ipsum the distinctive flavors of ",
       link:"/"
    },
    {
      id: 3,
      img: tapaz,
      title: "Tapaz",
      description: "CUISINE: Spanish ",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    }
  ];

const page = () => {
  return (
    <div className='overflow-hidden'>
      <RestaurantMainBanner/>
      <ClinaryInfoSection/>
      <MainRestaurantSection/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="LAGO’s World Cuisines" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" cuisines={cuisines}/>
      <ClinaryReverseInfo/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="Always Fresh and Delicious" text="As the Lago family, we are making your dreams come true on the shore where the sand and the sea meet, looking at the horizon, accompanied by the deep blue waters of the Mediterranean. We choose the freshest and best quality fish of our country, surrounded by seas on 3 sides, and add our love to it." cuisines={cuisines2}/>
      <DiscoverBackground/>
      <ContactSection/>
    </div>
  )
}

export default page
