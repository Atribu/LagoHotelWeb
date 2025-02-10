
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
import ContactSection from '../GeneralComponents/Contact/ContactSection'

const galleryImages=[gallery1,gallery2,gallery3]

const page = () => {
    

  return (
    <div>
      <MainBannerSection img={mainImg} span="RELAX AT OUR LAGO WELLNESS CENTER" header="Spa & Wellness" text="Relax and restart. Enjoy high-quality professional massage at our wellness center, obtain a comprehensive stretching of physical and mental."/>
      <SpaInfoSection/> 
      <SpaHeaderSection/>
      <MassageCarousel/>
      <SpaTypesInfoSection isImageLeft={true} span="Workıng Hours: 9:00 - 20:00" header="Indoor Pool" text=" Lorem ipsum dolor sit amet consectetur. Vitae maecenas facilisis leo ultrices neque massa. Accumsan urna risus in porttitor velit suspendisse purus orci volutpat. Nulla scelerisque id convallis lacus blandit et sed. Elementum vel dolor senectus in morbi. Risus est praesent ultrices vestibulum velit feugiat fusce. Nibh bibendum." img={indoorImg}/>
      <SpaTypesInfoSection isImageLeft={false} span="Experience traditional culture" header="Turkish Hammam" text="Lorem ipsum dolor sit amet consectetur. Et blandit et maecenas in diam tristique pellentesque duis. Proin a volutpat lacinia posuere eu interdum aliquam egestas. Eget dui arcu arcu quam. Sed nulla pellentesque suspendisse viverra sodales quisque commodo. Arcu cursus sit neque amet eget ipsum. Auctor ipsum volutpat " img={turkishImg}/>
      <ContactSection/>
    </div>
  )
}

export default page
