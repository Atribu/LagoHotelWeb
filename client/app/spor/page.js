import React from 'react'
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import mainImg from "./images/fitness.webp"
import SpaInfoSection from '../spawellness/components/SpaInfoSection'
import infoImg from "./images/Spa TReatments.webp"
import infoImg2 from "./images/Sauna and hamam (1).webp"
import SpaHeaderSection from '../spawellness/components/SpaHeaderSection'
import gallery1 from "./images/gallery1.webp"
import gallery2 from "./images/gallery2.webp"
import gallery3 from "./images/gallery3.webp"
import yoga from "./images/yogapilates.webp"
import zumba from "./images/zumba.webp"
import hitcardio from "./images/hitcardio.webp"
import step from "./images/step.webp"
import MassageCarousel from '../spawellness/components/MassageCarousel'
import Spa from '../HomePage/Components/Icons/Spa'
import SpaTypesInfoSection from '../spawellness/components/SpaTypesInfoSection'
import beachvolley from "./images/beachvoleyball.webp"
import personal from "./images/personal.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const galleryImages =[gallery1,gallery2,gallery3]

const texts=["Perfect Fine Dine Experiences","Stay fit at LAGO Hotel","For those looking to stay in shape while on vacation, you can unwind your body and soul by receiving a massage from a competent masseuse in our SPA after engaging in your daily sporting activities in our Fitness room, which we have equipped with professional equipment, or you can step back in time in the traditional Turkish Bath and relax in the Finnish Sauna."]
const texts2=["","",""]
const texts3=["SPA & WELLNESS","Group Activities","Lorem ipsum dolor sit amet consectetur. Vulputate ultrices sit.","Tabata, HIT cardio, ","Zumba, Step aerobics","Yoga, pilates"]
const activitiesImage=[yoga,zumba,hitcardio,step];
const activitiesHeaders=["Yoga & Pilatess Classes","Zumba Classes","Hiit Cardio & Tabata","Step Aerobics"]

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[100px]'>
      <MainBannerSection img={mainImg} span="RELAX AT OUR LAGO WELLNESS CENTER" header="Spor & Fitness" text="Relax and restart. Enjoy high-quality professional massage at our wellness center, obtain a comprehensive stretching of physical and mental."/>
      <SpaInfoSection img1={infoImg} img2={infoImg2} texts={texts} texts2={texts2} texts3={texts3}/>
      <SpaHeaderSection span="Perfect Fine Dine Experiences" header="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet consectetur. Sed sit venenatis nisi enim id aenean natoque aliquet et. Et aliquam viverra enim sapien. Dignissim arcu volutpat enim nisl condimentum." images={galleryImages}/>
      <MassageCarousel span="RELAX AND FORGET" header="Activities and Lessons" text="Lorem ipsum dolor sit amet consectetur. Consectetur lorem nibh ultrices quis sit. Ac amet mollis erat enim. Velit venenatis lectus orci viverra dis turpis. Tempor vehicula risus massa sed vestibulum dui nulla vulputate." images={activitiesImage} headers={activitiesHeaders}/>
      <SpaTypesInfoSection isImageLeft={true} showLink={false} span="Water Polo, beach volleyball" header="Beach Voleyball" text="Lorem ipsum dolor sit amet consectetur. Vitae maecenas facilisis leo ultrices neque massa. Accumsan urna risus in porttitor velit suspendisse purus orci volutpat. Nulla scelerisque id convallis lacus blandit et sed. Elementum vel dolor senectus in morbi. Risus est praesent ultrices vestibulum velit feugiat fusce. Nibh bibendum." img={beachvolley}/>
      <SpaTypesInfoSection isImageLeft={false} showLink={false} span="Experience traditional culture" header="Personal Trainer" text="Lorem ipsum dolor sit amet consectetur. Vitae maecenas facilisis leo ultrices neque massa. Accumsan urna risus in porttitor velit suspendisse purus orci volutpat. Nulla scelerisque id convallis lacus blandit et sed. Elementum vel dolor senectus in morbi. Risus est praesent ultrices vestibulum velit feugiat fusce. Nibh bibendum." img={personal}/>
      <ContactSection2/>
    </div>
  )
}

export default page
