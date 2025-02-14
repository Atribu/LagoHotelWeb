import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import mainImg from "./images/maingallery.webp"
import GalleryScrollSection from './components/GalleryScrollSection'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const page = () => {
  return (
    <div>
      <MainBanner2 img={mainImg} span="Expolre the hotel" header="Lago Gallery"/>
      <GalleryScrollSection/>
      <ContactSection2/>
    </div>
  )
}

export default page
