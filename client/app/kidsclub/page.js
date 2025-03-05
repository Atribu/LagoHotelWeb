import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import image from "./images/mainkids.webp"
import KidsBamboo from './components/KidsBamboo'
import KidsIconsSection from './components/KidsIconsSection'
import KidsclubCarousel from './components/KidsclubCarousel'
import ContactSection from '../GeneralComponents/Contact/ContactSection'
import kids1 from "./images/AquaMaldiva.webp"
import kids2 from "./images/KIDS2.webp"
import kids3 from "./images/KIDS.webp"
import CuisinesCarousel from '../restaurants/components/CuisinesCarousel'
import KidsRestaurantCarousel from './components/KidsRestaurantCarousel'
import KidsMomentCarousel from './components/KidsMomentCarousel'
import img1 from "./images/SRF_4307 (2).webp"
import img2 from "./images/SRF_3813.webp"
import img3 from "./images/SRF_4487.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import RestaurantMainBanner from '../restaurants/components/RestaurantMainBanner'

const momentImages=[img1,img2,img3]

const kids = [
  {
    id: 1,
    img: kids1,
    title: "Maldvas ",
    description: "bamboo kıds club ",
    text:"Lorem ipsum dolor sit amet consectetur. Egestas enim magnis pretium pretium risus suscipit a duis porttitor. Varius diam urna netus fermentum aliquet.",
    link:"/"
  },
  {
    id: 2,
    img: kids2,
    title: "Kid Aqua Park ",
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
    <div className='overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <RestaurantMainBanner img={image} span="RELAX AT OUR LAGO WELLNESS CENTER" header="Bamboo Kids Club" text="Relax and restart. Enjoy high-quality professional massage at our wellness center, obtain a comprehensive stretching of physical and mental."/>
      <KidsBamboo/>
      <KidsIconsSection/>
      <KidsclubCarousel/>
      <KidsRestaurantCarousel/>
      <CuisinesCarousel span="Bamboo kıds club" header="Kid Pools" text="Lorem ipsum dolor sit amet consectetur. Viverra molestie dui fusce dignissim lacus adipiscing ut feugiat ut. Laoreet pharetra dolor libero id ornare nulla." cuisines={kids}/>
      <KidsMomentCarousel showheader={true} images={momentImages} header="Every Moment is Worth Sharing"/>
      <ContactSection2/>
    </div>
  )
}

export default page
