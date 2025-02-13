import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import mainImg from "./images/mainfoto.webp"
import MissionVisionSection from '../about/components/MissionVisionSection'
import rightImg from "../about/images/sag.webp"
import leftImg from "./images/sol1.webp"

const texts=["Perfect Fine Dine Experiences","Lago Hotel News","A world of unparalleled experiences where luxury meets comfort and every detail is crafted for your delight. From serene spa retreats and exquisite dining options to fun-filled activities and unforgettable celebrations, our hotel offers something special for everyone."]
const texts2=["Eco-Friendly Practices","Sustainable luxury","Step into the epitome of comfort and elegance with our luxurious rooms and suites. Each room is meticulously designed to cater to your every need, featuring modern amenities, stylish furnishings, and breathtaking views. Whether you choose a cozy standard room, a spacious family suite, or an opulent executive suite, you’ll find a sanctuary that feels like ."]
const texts3=["Pools & Beach","A Splash of Fun","Immerse yourself in the beauty of crystal-clear waters at our pools or enjoy the serenity of our private beach. With sun loungers, umbrellas, and attentive service, every moment becomes a slice of paradise. Families can enjoy safe and fun water activities, while those seeking solitude can relax to the soothing sound of waves."]


const page = () => {
  return (
    <div>
     <MainBanner2 img={mainImg} span="Discover Your Perfect Getaway" header="Latest News"/> 
     <MissionVisionSection leftImg={leftImg} rightImg={rightImg} texts={texts} texts2={texts2} texts3={texts3} showLink={true} link1="/" link2="/"/>
    </div>
  )
}

export default page
