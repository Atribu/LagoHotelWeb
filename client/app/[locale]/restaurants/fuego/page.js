import MainBannerSection from '@/app/[locale]/GeneralComponents/MainBannerSection'
import React from 'react'
import imgBanner from "./images/SRF_2404_2.jpg"
import img1 from "./images/SRF_2403.jpg"
import img2 from "./images/SRF_2404.jpg"
import img3 from "./images/SRF_2414.jpg"
import img4 from "./images/SRF_2419.jpg"
import img5 from "./images/SRF_2429.jpg"
import img6 from "./images/SRF_2434.jpg"
import img7 from "./images/SRF_2439.jpg"
import img8 from "./images/SRF_2454.jpg"
import img9 from "./images/SRF_2459.jpg"
import img10 from "./images/SRF_2467.jpg"
import img11 from "./images/SRF_2472.jpg"
import img12 from "./images/SRF_2477.jpg"
import img13 from "./images/SRF_2482.jpg"
import img14 from "./images/SRF_2511.jpg"
import img15 from "./images/SRF_2521.jpg"
import img16 from "./images/SRF_2404_2.jpg"
import ClinaryReverseInfo from '../components/ClinaryReverseInfo'
import CuisinesCarousel from '../components/CuisinesCarousel'
import wasabi from "../gustorestaurant/images/wasabi2.webp"
import despina from "../images/despina.webp"
import anatolia from "../images/anatolia.webp"
import RoomTour from '@/app/[locale]/rooms/familyswimup/components/RoomTour'
import DiscoverBackground from '../components/DiscoverBackground'
import ContactSection2 from '@/app/[locale]/GeneralComponents/Contact/ContactSection2'
import backgroundImg from "../images/Background.webp"
import BannerDark from '@/app/[locale]/GeneralComponents/BannerDark'
import KidsMomentCarousel from '@/app/[locale]/kidsclub/components/KidsMomentCarousel'
import { useTranslations } from "next-intl";

const images=[img1,img2,img3,img4,img5,img6,
  img7,img8,img9,img10,img11,img12,img13,img14,img15,img16
]

const page = () => {
  const t = useTranslations('FuegoRestaurants');
  const t2 = useTranslations('FuegoRestaurants.ClinaryInfoSection');
  const t3 = useTranslations('FuegoRestaurants.RoomTour');
  const t4 = useTranslations('FuegoRestaurants.CuisinesCarousel');
  const t5 = useTranslations('FuegoRestaurants.DiscoverBackground');

  const otherOptions = [
    {
        id: 1,
        img: anatolia,
        title: t4("cuisines1subtitle"),
        description: t4("cuisines1title"),
        text: t4("cuisines1text"),
        link:"/restaurants/anatoliarestaurant",
        buttonText:t4("buttonText")
      },
    {
        id: 2,
        img: wasabi,
        title: t4("cuisines2subtitle"),
        description: t4("cuisines2title"),
        text: t4("cuisines2text"),
        link:"/restaurants/wasabi",
        buttonText:t4("buttonText")
      },
      {
        id: 3,
        img: despina,
        title: t4("cuisines3subtitle"),
        description: t4("cuisines3title"),
        text: t4("cuisines3text"),
         link:"/restaurants/despinarestaurant",
         buttonText:t4("buttonText")
      }
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb] overflow-hidden'>
     <BannerDark img={imgBanner} span={t("subtitle")} header={t("title")} text={t("text")}/>
      <ClinaryReverseInfo img1={img1} img2={img2} span={t2("subtitle")} header={t2("title")} text1={t2("text1")} text2={t2("text2")}/>
      <KidsMomentCarousel images={images} header="" showheader={false}/>
      <CuisinesCarousel span={t4("subtitle")} header={t4("title")} text={t4("text")} cuisines={otherOptions}/>
      <DiscoverBackground  span={t5("subtitle")} header={t5("title")} text={t5("text")} link="/barcafes" img={backgroundImg} buttonText={t5("buttonText")}/>
      <ContactSection2/>
    </div>
  )
}

export default page
