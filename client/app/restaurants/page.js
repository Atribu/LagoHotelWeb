import React from 'react'
import RestaurantMainBanner from './components/RestaurantMainBanner'
import ClinaryInfoSection from './components/ClinaryInfoSection'
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
import backgroundImg from "./images/Background.webp"

import img1 from "./images/bistres1.webp"
import img2 from "./images/bist2.webp"

import img3 from "./images/art1.webp"
import img4 from "./images/art2.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

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
       link:"/restaurants/gustorestaurant"
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

const textsClinary=["LAGO, you will enjoy your vacation with international cuisine in our A’la Carte Restaurants, where flavorful dishes are served, with anendless open buffet where delicious dishes feature uniqueness from Turkish cuisine as well as fresh flavors reflecting the spirit of the Mediterranean",
  "Ana Restoran: Kahvaltı, Öğlen ve Akşam Yemeği","Bistro Restoran: 24 Saat","Snack Bars: 24 Saat"]

const page = () => {
  return (
    <div className='overflow-hidden items-center justify-center flex flex-col'>
      <RestaurantMainBanner/>
      <ClinaryInfoSection img1={img3} img2={img4} span="Perfect Fine Dine Experiences" header=" Culinary Art at LAGO" texts={textsClinary} />
      <MainRestaurantSection/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="LAGO’s World Cuisines" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" cuisines={cuisines}/>
      <ClinaryReverseInfo img1={img1} img2={img2} span="Perfect Fine Dine Experiences" header="Bistro Restaurant" text1=" Forget about the concern about whether I can eat when you visit Lago Hotel and start daydreaming about a vacation. We are open twenty-four hours a day at Bistro restaurant. Experience our concept while sipping your beer next to those who taste delicious hamburgers, pasta, sandwiches, chicken drumsticks and sweeten their palates.Let’s learn more about this concept." text2=" Bistros are restaurants where typical menu items are provided quickly. The French take little breaks from their everyday labor in these serene locations, occasionally sipping coffee and occasionally consuming alcohol. Sandwiches, both hot and cold, desserts, and other drinks can all be enjoyed."/>
      <CuisinesCarousel span="Perfect Fine Dine Experiences" header="Always Fresh and Delicious" text="As the Lago family, we are making your dreams come true on the shore where the sand and the sea meet, looking at the horizon, accompanied by the deep blue waters of the Mediterranean. We choose the freshest and best quality fish of our country, surrounded by seas on 3 sides, and add our love to it." cuisines={cuisines2}/>
      <DiscoverBackground span="A UNIQUE FEAST OF TASTE" header="Discover our Bars and Cafes" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/restaurant" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
