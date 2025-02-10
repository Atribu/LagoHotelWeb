import React from 'react'
import SubRoomBanner from './components/SubRoomBanner'
import ContactSection from '@/app/GeneralComponents/Contact/ContactSection'
import SubroomCarousel from './components/SubroomCarousel'
import RoomFeatures from './components/RoomFeatures'
import BackgroundSection from './components/BackgroundSection'
import RoomTour from './components/RoomTour'
import OtherOptions from './components/OtherOptions'
import backgroundImg from "./images/odafull.webp"

const backgroundTexts=["Guests staying in Swim-Up rooms are welcomed with a VIP setup, including a carefully prepared fruit tray and delicate macarons upon check-in.","A’la Carte Dining: One complimentary visit for stays of 7+ nights.","Pavilion Discount: Enjoy 15% off exclusive pavilion services."]

const page = () => {
  return (
    <div className=' overflow-hidden'>
      <SubRoomBanner/>
      <SubroomCarousel/>
      <RoomFeatures/>
      <BackgroundSection span="EXCLUSIVE PRIVILEGES" header="Swim-Up Room VIP Benefits" texts={backgroundTexts} link="/" img={backgroundImg}/>
      <RoomTour span="CHOOSE THE BEST ROOM FOR YOU" header="Have a look around" text="Lorem ipsum dolor sit amet consectetur. Ipsum nulla sem placerat enim tortor vitae sapien lorem sem. In sapien a pharetra mollis lectus scelerisque lacus eu. Proin pellentesque netus a amet nisl cursus massa." link="/"/>
      <OtherOptions/>
      <div className='my-10'></div>
      <ContactSection/>
    </div>
  )
}

export default page
