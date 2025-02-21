import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import mainImg from "./images/mainfoto.webp"
import MissionVisionSection from '../about/components/MissionVisionSection'
import rightImg from "../about/images/sag.webp"
import leftImg from "./images/sol1.webp"
import new1 from "./images/news1.webp"
import new2 from "./images/news2.webp"
import new3 from "./images/news3.webp"
import new4 from "./images/news4.webp"
import new5 from "./images/news5.webp"
import new6 from "./images/news6.webp"
import new7 from "./images/news7.webp"
import new8 from "./images/news8.webp"
import new9 from "./images/news9.webp"
import Beach5 from '../beachpools/Components/Beach5'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const newsItems = [
  {
    src: new1,
    subtitle: "Lago’s Lobby Bars",
    title: "Lobby Bars & Cafes",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam."
  },
  {
    src: new2,
    subtitle: "Spa & Wellness",
    title: "Relaxation Retreat",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc "
  },
  {
    src: new3,
    subtitle: "Kids Club",
    title: "Little Ones",
    description: "Our Kids Club is designed to be a safe haven of fun and creativity for your little ones. From interactive games to engaging workshops, children of all ages can explore, ..."
  },
  {
    src: new4,
    subtitle: "Honeymoon Packages",
    title: "Romance Redifined",
    description: "Celebrate love with our exclusive honeymoon packages. Romantic surprises and luxurious services make your stay truly unforgettable... "
  },
  {
    src: new5,
    subtitle: "Fitness & Activities",
    title: "Active & Healthy",
    description: "Stay fit and energized during your stay with our modern gym facilities and a variety of outdoor activities designed to keep you active."
  },
  {
    src: new6,
    subtitle: "Local Tours",
    title: "Beauty Around",
    description: "Discover the beauty of the surrounding area with our guided local tours. From historical landmarks to natural wonders, explore it all...."
  },
  {
    src: new7,
    subtitle: "Perfect Fine Dine Experiences",
    title: "Piyano Bar",
    description: "Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the ..."
  },
  {
    src: new8,
    subtitle: "Perfect Fine Dine Experiences",
    title: "Patisserie Abella",
    description: "Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of ..."
  },
  {
    src: new9,
    subtitle: "Perfect Fine Dine Experiences",
    title: "Cafe de Lago",
    description: "Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte .... "
  },
]

const newsLinks=["/barcafes", "/spawellness","/kidsclub", "/special","/spor", "/special","/restaurants", "/restaurants","/restaurants"]

const texts=["Perfect Fine Dine Experiences","Lago Hotel News","A world of unparalleled experiences where luxury meets comfort and every detail is crafted for your delight. From serene spa retreats and exquisite dining options to fun-filled activities and unforgettable celebrations, our hotel offers something special for everyone."]
const texts2=["Eco-Friendly Practices","Sustainable luxury","Step into the epitome of comfort and elegance with our luxurious rooms and suites. Each room is meticulously designed to cater to your every need, featuring modern amenities, stylish furnishings, and breathtaking views. Whether you choose a cozy standard room, a spacious family suite, or an opulent executive suite, you’ll find a sanctuary that feels like ."]
const texts3=["Pools & Beach","A Splash of Fun","Immerse yourself in the beauty of crystal-clear waters at our pools or enjoy the serenity of our private beach. With sun loungers, umbrellas, and attentive service, every moment becomes a slice of paradise. Families can enjoy safe and fun water activities, while those seeking solitude can relax to the soothing sound of waves."]


const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[100px] bg-[#fbfbfb]'>
     <MainBanner2 img={mainImg} span="Discover Your Perfect Getaway" header="Latest News"/> 
     <MissionVisionSection leftImg={leftImg} rightImg={rightImg} texts={texts} texts2={texts2} texts3={texts3} showLink={true} link1="/" link2="/"/>
     <Beach5 span="" header="" text="" poolItems={newsItems} showLink={true} links={newsLinks}/>
     <ContactSection2/>
    </div>
  )
}

export default page
