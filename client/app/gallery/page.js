import React from 'react'
import MainBanner2 from '../GeneralComponents/MainBanner2'
import mainImg from "./images/maingallery.webp"
import GalleryScrollSection from './components/GalleryScrollSection'

const page = () => {
  return (
    <div>
      <MainBanner2 img={mainImg} span="Expolre the hotel" header="Lago Gallery"/>
      <GalleryScrollSection/>
    </div>
  )
}

export default page
