import React from 'react'
import mainImg from "./images/main.webp"
import img1 from "./images/fresh1.webp"
import img2 from "./images/fresh2.webp"
import RoomTour from '@/app/[locale]/rooms/familyswimup/components/RoomTour'
import KidsMomentCarousel from '@/app/[locale]/kidsclub/components/KidsMomentCarousel'
import gallery2 from "./images/gallery1.jpg"
import gallery1 from "./images/gallery2.webp"
import gallery3 from "./images/gallery3.jpg"
import gallery4 from "./images/img-16.jpg"
import gallery5 from "./images/img-17.jpg"
import gallery6 from "./images/img-18.jpg"
import gallery7 from "./images/img-19.jpg"
import gallery8 from "./images/img-20.jpg"
import gallery9 from "./images/img-21.jpg"
import gallery10 from "./images/SRF_4118.jpg"
import gallery11 from "./images/SRF_4713.jpg"
import gallery12 from "./images/SRF_4715.jpg"
import gallery13 from "./images/SRF_4728.jpg"
import ClinaryReverseInfo from '@/app/[locale]/restaurants/components/ClinaryReverseInfo'
import backgroundImg from "../images/BackgroundCafes.webp"
import mignon from "../images/mignon.webp"
import joie from "../images/joie.webp"
import maldiva from "../images/maldiva.webp"
import vagobar from "../images/vagobar.webp"
import DiscoverBackground from '../../restaurants/components/DiscoverBackground'
import OtherOptions4 from '../components/OtherOptions4'
import ContactSection2 from '@/app/[locale]/GeneralComponents/Contact/ContactSection2'
import RestaurantMainBanner from '@/app/[locale]/restaurants/components/RestaurantMainBanner'
import { useTranslations } from "next-intl";

const galleryImages=[gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12,gallery13];

const page = () => {
  const t = useTranslations('JoieBar');
  const t2 = useTranslations('JoieBar.ClinaryInfoSection');
  const t3 = useTranslations('JoieBar.RoomTour');
  const t4 = useTranslations('JoieBar.CuisinesCarousel');
  const t5 = useTranslations('JoieBar.DiscoverBackground');


const otherOptions = [
  {
      id: 1,
      img: mignon,
      title: t4("cuisines1title"),
      description: t4("cuisines1subtitle"),
      text:t4("cuisines1text"),
      link:"/",
      buttonText:t4("buttonText")
    },
  {
      id: 2,
      img: joie,
      title: t4("cuisines2title"),
      description: t4("cuisines2subtitle"),
      text:t4("cuisines2text"),
      link:"/barcafes/joiebar",
      buttonText:t4("buttonText")
    },
    {
      id: 3,
      img: maldiva,
      title: t4("cuisines3title"),
      description: t4("cuisines3subtitle"),
      text:t4("cuisines3text"),
       link:"/",
       buttonText:t4("buttonText")
    },
    {
      id: 4,
      img: vagobar,
      title: t4("cuisines4title"),
      description: t4("cuisines4subtitle"),
      text:t4("cuisines4text"),
       link:"/",
       buttonText:t4("buttonText")
    }
];

  return (
    <div className='flex flex-col items-center justify-center gap-[100px] bg-[#fbfbfb]'>
      <RestaurantMainBanner img={mainImg} span={t("subtitle")} header={t("title")} text={t("text")}/>
      <ClinaryReverseInfo img1={img1} img2={img2} span={t2("subtitle")} header={t2("title")} text1={t2("text1")} text2={t2("text2")}/>
      <KidsMomentCarousel images={galleryImages} header="" showheader={false}/>
      <RoomTour span={t3("subtitle")} header={t3("subtitle")} text={t("text")}/>
      <OtherOptions4 span="Perfect Fine Dine Experiences" header="LAGO’s Exclusive Pool Bars" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" images={otherOptions}/>
      <DiscoverBackground span="A UNIQUE FEAST OF TASTE" header="Discover our Fınest Restaurants" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/barcafes" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
