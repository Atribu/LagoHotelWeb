import React from 'react'
import SubRoomBanner from '../familyswimup/components/SubRoomBanner'
import SubroomCarousel from '../familyswimup/components/SubroomCarousel'
import RoomFeatures from '../familyswimup/components/RoomFeatures'
import BackgroundSection from '../familyswimup/components/BackgroundSection'
import RoomTour from '../familyswimup/components/RoomTour'
import OtherOptions from '../familyswimup/components/OtherOptions'
import backgroundImg from "../familyswimup/images/odafull.webp"
import ContactSection2 from '@/app/[locale]/GeneralComponents/Contact/ContactSection2'

import img1 from "./images/SRF_3936.jpg";
import img2 from "./images/SRF_3946.jpg";
import img3 from "./images/SRF_3953.jpg";
import img4 from "./images/SRF_3974.jpg";
import RoomsParallaxSection from '../components/RoomsParallaxSection'

const subroomBannerText=["Forest / Sea View","1-4 Adult + 1-3 Children","2 Bedrooms / 4 Beds"]
const backgroundTexts=["Guests staying in Swim-Up rooms are welcomed with a VIP setup, including a carefully prepared fruit tray and delicate macarons upon check-in.","A’la Carte Dining: One complimentary visit for stays of 7+ nights.","Pavilion Discount: Enjoy 15% off exclusive pavilion services."]

const iconTexts=["  Independent Pool"," 2 Single Beds"," Extra Baby Crib"];


const page = () => {
  const carouselImages = [img1,img2,img3,img4,img1,img2,img3,img4];

  return (
    <div className=' overflow-hidden flex flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] bg-[#fbfbfb]'>
     <div className='flex flex-col'>
     <SubRoomBanner img={img3} span="exclusive stay with an INDEPENDENT pool" header="Family Room" texts={subroomBannerText}/>
     <SubroomCarousel images={carouselImages}/>
     </div>
      <RoomFeatures span=" FUN FOR ALL ages" header="Family Room" text="   It is located in our main building with a volume of 50-55 m2 with
              sea and forest view. This room type consists of 2 separate
              bedrooms (with intermediate door) with double bedroom (for 2
              adults) and room with 2 separate beds (2 twin beds / for 2
              adults). 1 shared bathroom, pool & terrace with seating
              group. Maximum stay with 4 adults  Suitable for up to 1
              child.  Family Swim-up Forest has a large pool shared
              with other SwimUp rooms.
              Family Swim-up Deniz features an independent private pool." header2="  Family-friendly Amenities" header3="Room Features"  text2="Services offered to all rooms (Key System with Chip Armband, Daily
              Mini Bar Refill, Bathroom Cosmetics, Tea-Coffee Set-Up)
              6 of our rooms are specially designed for our disabled
              guests and the width of the main doors is 112cm.
              Extra folding bed is used in rooms without Sofa Bed.
              THE POOLS IN THE SWIMUP ROOMS ARE NOT HEATED." iconsTexts={iconTexts}  />
      <RoomsParallaxSection/>
      <RoomTour span="CHOOSE THE BEST ROOM FOR YOU" header="Have a look around" text="Lorem ipsum dolor sit amet consectetur. Ipsum nulla sem placerat enim tortor vitae sapien lorem sem. In sapien a pharetra mollis lectus scelerisque lacus eu. Proin pellentesque netus a amet nisl cursus massa." link="/"/>
      <OtherOptions/>
      <ContactSection2/>
    </div>
  )
}

export default page
