import React from 'react'
import SubRoomBanner from './components/SubRoomBanner'
import SubroomCarousel from './components/SubroomCarousel'
import RoomFeatures from './components/RoomFeatures'
import BackgroundSection from './components/BackgroundSection'
import RoomTour from './components/RoomTour'
import OtherOptions from './components/OtherOptions'
import backgroundImg from "./images/odafull.webp"
import ContactSection2 from '@/app/GeneralComponents/Contact/ContactSection2'

const backgroundTexts=["Guests staying in Swim-Up rooms are welcomed with a VIP setup, including a carefully prepared fruit tray and delicate macarons upon check-in.","A’la Carte Dining: One complimentary visit for stays of 7+ nights.","Pavilion Discount: Enjoy 15% off exclusive pavilion services."]

const page = () => {
  return (
    <div className=' overflow-hidden flex flex-col items-center justify-center gap-[100px] bg-[#fbfbfb]'>
     <div className='flex flex-col'>
     <SubRoomBanner/>
     <SubroomCarousel/>
     </div>
      <RoomFeatures/>
      <BackgroundSection span="EXCLUSIVE PRIVILEGES" header="Swim-Up Room VIP Benefits" texts={backgroundTexts} link="/" img={backgroundImg}/>
      <RoomTour span="CHOOSE THE BEST ROOM FOR YOU" header="Have a look around" text="Lorem ipsum dolor sit amet consectetur. Ipsum nulla sem placerat enim tortor vitae sapien lorem sem. In sapien a pharetra mollis lectus scelerisque lacus eu. Proin pellentesque netus a amet nisl cursus massa." link="/"/>
      <OtherOptions/>
      <ContactSection2/>
    </div>
  )
}

export default page
