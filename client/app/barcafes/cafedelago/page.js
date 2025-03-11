import React from 'react'
import mainImg from "./images/img-1.jpg"
import img1 from "./images/img-1.jpg"
import img2 from "./images/img-1.jpg"
import RoomTour from '@/app/rooms/familyswimup/components/RoomTour'
import KidsMomentCarousel from '@/app/kidsclub/components/KidsMomentCarousel'
import gallery2 from "./images/img-1.jpg"
import gallery1 from "./images/img-1.jpg"
import gallery3 from "./images/img-1.jpg"
import gallery4 from "./images/img-1.jpg"
import ClinaryReverseInfo from '@/app/restaurants/components/ClinaryReverseInfo'
import backgroundImg from "../images/BackgroundCafes.webp"
import piano from "../images/piano.webp"
import abella from "../images/abella.webp"
import lago from "../images/lago.webp"
import house from "../images/house.webp"
import DiscoverBackground from '../../restaurants/components/DiscoverBackground'
import OtherOptions4 from '../components/OtherOptions4'
import ContactSection2 from '@/app/GeneralComponents/Contact/ContactSection2'
import BannerDark from '@/app/GeneralComponents/BannerDark'

const galleryImages=[gallery1,gallery2,gallery3,gallery4];

const otherOptions = [
    {
        id: 1,
        img: piano,
        title: "Piano Bar",
        description: "HOURS: 10:00 - 00:00 ",
        text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
        link:"/barcafes/pianobar"
      },
    {
        id: 2,
        img: abella,
        title: "Abella Patisserie",
        description: "HOURS: 14:00 - 23:00",
        text:"Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine. Lorem Ipsum the distinctive flavors of ",
        link:"/barcafes/abellapatisserie"
      },
      {
        id: 3,
        img: lago,
        title: "Cafe de Lago ",
        description: "HOURS: 08:00 - 23:00",
         text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
         link:"/barcafes/cafedelago"
      },
      {
        id: 4,
        img: house,
        title: "Cafe de House",
        description: "HOURS: 08:00-23:00",
         text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
         link:"/barcafes/cafedehouse"
      }
  ];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[50px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
      <BannerDark img={mainImg} span="Fresh drınks and musıc" header="Cafe de Lago" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryReverseInfo img1={img2} img2={img1} span="Perfect Fine Dine Experiences" header="Fresh Drinks at the Pool" text1="Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine.  Lectus proin ac elit sed porttitor habitasse adipiscing id neque." text2="Nulla vitae commodo tristique viverra id praesent. Fermentum ut fermentum at nulla. Sagittis urna maecenas augue aliquam vestibulum. Lectus proin ac elit sed porttitor habitasse adipiscing id neque. Lectus proin ac elit sed porttitor habitasse adipiscing id neque."/>
      <KidsMomentCarousel images={galleryImages} header="" showheader={false}/>
      <RoomTour span="Perfect Fine Dine Experiences" header="Have a look around" text="Lorem ipsum dolor sit amet consectetur. Ipsum nulla sem placerat enim tortor vitae sapien lorem sem. In sapien a pharetra mollis lectus scelerisque lacus eu. Proin pellentesque netus a amet nisl cursus massa."/>
      <OtherOptions4 span="Perfect Fine Dine Experiences" header="LAGO’s Lobby Bars and Cafes" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" images={otherOptions}/>
      <DiscoverBackground span="A UNIQUE FEAST OF TASTE" header="Discover our Fınest Restaurants" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/restaurants" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
