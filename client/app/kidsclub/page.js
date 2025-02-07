import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import image from "./images/mainkids.webp"
import KidsBamboo from './components/KidsBamboo'
import KidsIconsSection from './components/KidsIconsSection'
import KidsclubCarousel from './components/KidsclubCarousel'
import ContactSection from '../GeneralComponents/Contact/ContactSection'
import kids1 from "./images/KIDSPOOL1.webp"
import kids2 from "./images/KIDS2.webp"
import kids3 from "./images/KIDS.webp"
import CuisinesCarousel from '../restaurants/components/CuisinesCarousel'
import KidsRestaurantCarousel from './components/KidsRestaurantCarousel'
import KidsMomentCarousel from './components/KidsMomentCarousel'

const kids = [
  {
    id: 1,
    img: kids1,
    title: "aqua Maldvas Kids Pool",
    description: "bamboo kıds club ",
    text:"Lorem ipsum dolor sit amet consectetur. Egestas enim magnis pretium pretium risus suscipit a duis porttitor. Varius diam urna netus fermentum aliquet.",
    link:"/"
  },
  {
    id: 2,
    img: kids2,
    title: "Kids Pools (Water games)",
    description: "bamboo kıds club",
     text:"Lorem ipsum dolor sit amet consectetur. Egestas enim magnis pretium pretium risus suscipit a duis porttitor. Varius diam urna netus fermentum aliquet.",
     link:"/"
  },
  {
    id: 3,
    img: kids3,
    title: "Indoor Kids Pool",
    description: "bamboo kıds club ",
     text:"Lorem ipsum dolor sit amet consectetur. Egestas enim magnis pretium pretium risus suscipit a duis porttitor. Varius diam urna netus fermentum aliquet.",
     link:"/"
  }
];

const page = () => {
  return (
    <div className='overflow-hidden'>
      <MainBannerSection img={image} span="RELAX AT OUR LAGO WELLNESS CENTER" header="Bamboo Kids Club" text="Relax and restart. Enjoy high-quality professional massage at our wellness center, obtain a comprehensive stretching of physical and mental."/>
      <KidsBamboo/>
      <KidsIconsSection/>
      <KidsclubCarousel/>
      <KidsRestaurantCarousel/>
      <CuisinesCarousel span="Bamboo kıds club" header="Kids Pool" text="Lorem ipsum dolor sit amet consectetur. Viverra molestie dui fusce dignissim lacus adipiscing ut feugiat ut. Laoreet pharetra dolor libero id ornare nulla." cuisines={kids}/>
      <KidsMomentCarousel/>
      <ContactSection/>
    </div>
  )
}

export default page
