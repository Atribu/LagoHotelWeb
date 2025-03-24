import React from 'react'
import HomePage1 from "./Components/HomePage"
import HomePage2 from "./Components/HomePage1"
import HomePage3 from "./Components/HomePage2"
import HomePage4 from "./Components/HomePage3"
import HomePage5 from "./Components/HomePage4"
import HomePage6 from "./Components/HomePage5"
import ContactSection from '../GeneralComponents/Contact/ContactSection'
import EmblaCarousel from "./Components/Slider/Slider1"
import TwoAnimationImage from "./Components/TwoAnimationImage"
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations('HomePage.EmblaCarousel');

  const slider = [
    {
      src: require("./Components/Slider/Images/Accommodation.webp"),
      title: t("accommodation"),
      link: "/rooms",
    },
    {
      src: require("./Components/Slider/Images/BeachAndPool2.webp"),
      title: t("beachPools"),
      link: "/beachpools",
    },
    {
      src: require("./Components/Slider/Images/Entertainment.webp"),
      title: t("experiences"),
      link: "/entertainment",
    },
    {
      src: require("./Components/Slider/Images/Flavours2.webp"),
      title: t("restaurants"),
      link: "/restaurants",
    },
    {
      src: require("./Components/Slider/Images/Kids.webp"),
      title: t("kids"),
      link: "/kidsclub",
    },
  ];
  
  return (
    <div >
        <HomePage1 />
        <HomePage2 />
        <EmblaCarousel options={{ loop: true }} slides={slider}/>
     <div className='flex flex-col items-center justify-center w-screen gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
     {/* <HomePage3 /> */}
     <TwoAnimationImage/>
     <HomePage4 />
        <HomePage5 />
        <ContactSection />
        <HomePage6 />
     </div>
        
    </div>
  )
}

export default HomePage