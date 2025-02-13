
import MainBannerSection from '../GeneralComponents/MainBannerSection'
import mainImg from "./images/mainSpa.webp"
import SpaInfoSection from './components/SpaInfoSection'
import SpaHeaderSection from './components/SpaHeaderSection'
import KidsMomentCarousel from '../kidsclub/components/KidsMomentCarousel'
import gallery1 from "./images/gallery1.webp"
import gallery2 from "./images/gallery2.webp"
import gallery3 from "./images/gallery3.webp"
import MassageCarousel from './components/MassageCarousel'
import SpaTypesInfoSection from './components/SpaTypesInfoSection'
import indoorImg from "./images/indoor.webp"
import turkishImg from "./images/turkish.webp"
import img1 from "./images/Spa.webp";
import img2 from "./images/Sauna and hamam.webp";
import aromatic from "./images/aromatic.webp"
import oriental from "./images/oriental.webp"
import clasmassage from "./images/clasmassage.webp"
import facial from "./images/masagefaci.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const galleryImages=[gallery1,gallery2,gallery3]

const massageImages=[aromatic, oriental, clasmassage, facial,]
const massageHeaders=["Aromatherapy Massage","Oriental Massage","Classic Massage","FacialSpecai Massage"]

const page = () => {
  const spaTextsInfo1=[" Perfect Fine Dine Experiences","  Wellness at LAGO Hotel","  For those looking to stay in shape while on vacation, you canunwind your body and soul by receiving a massage from a competent masseuse in our SPA after engaging in your daily sporting activities in our Fitness room, which we have equipped with professional equipment, or you can step back in time in the traditional Turkish Bath and relax in the Finnish Sauna."]
  const  spaTextsInfo2=["Lorem ipsum","Sauna & Hamam","Opening Hours: 08:00 - 20:00"]
  const spaTextsInfo3=["  SPA & WELLNESS"," Spa Treatments","Opening Hours: 9:00 - 18:00","16 Massage Rooms","2 VIP Massage Rooms","Turkish Bath and Pouch Foam Rooms","Steam room","Sauna"]

  return (
    <div>
      <MainBannerSection img={mainImg} span="RELAX AT OUR LAGO WELLNESS CENTER" header="Spa & Wellness" text="Relax and restart. Enjoy high-quality professional massage at our wellness center, obtain a comprehensive stretching of physical and mental."/>
      <SpaInfoSection img1={img1} img2={img2} texts={spaTextsInfo1} texts2={spaTextsInfo2} texts3={spaTextsInfo3}/> 
      <SpaHeaderSection span="Perfect Fine Dine Experiences" header=" Lorem ipsum dolor sit amet" text=" Lorem ipsum dolor sit amet consectetur. Sed sit venenatis nisi enim id
          aenean natoque aliquet et. Et aliquam viverra enim sapien. Dignissim
          arcu volutpat enim nisl condimentum." images={galleryImages}/>
      <MassageCarousel span="RELAX AND FORGET" header="Massage Options" text="Lorem ipsum dolor sit amet consectetur. Consectetur lorem nibh ultrices quis sit. Ac amet mollis erat enim. Velit venenatis lectus orci viverra dis turpis. Tempor vehicula risus massa sed vestibulum dui nulla vulputate." headers={massageHeaders} images={massageImages}/>
      <SpaTypesInfoSection isImageLeft={true} showLink={false} span="Workıng Hours: 9:00 - 20:00" header="Indoor Pool" text=" Lorem ipsum dolor sit amet consectetur. Vitae maecenas facilisis leo ultrices neque massa. Accumsan urna risus in porttitor velit suspendisse purus orci volutpat. Nulla scelerisque id convallis lacus blandit et sed. Elementum vel dolor senectus in morbi. Risus est praesent ultrices vestibulum velit feugiat fusce. Nibh bibendum." img={indoorImg}/>
      <SpaTypesInfoSection isImageLeft={false} showLink={false} span="Experience traditional culture" header="Turkish Hammam" text="Lorem ipsum dolor sit amet consectetur. Et blandit et maecenas in diam tristique pellentesque duis. Proin a volutpat lacinia posuere eu interdum aliquam egestas. Eget dui arcu arcu quam. Sed nulla pellentesque suspendisse viverra sodales quisque commodo. Arcu cursus sit neque amet eget ipsum. Auctor ipsum volutpat " img={turkishImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
