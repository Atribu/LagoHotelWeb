import React from 'react'
import Slider from "../../HomePage/Components/Slider/Slider1"

const Beach3 = () => {
    const slides = [
        { src: Slide1, title: "Accommodation", link: "/accommodation" },
        { src: Slide2, title: "Beach & Pools", link: "/beachpool" },
        { src: Slide3, title: "Experiences", link: "/entertainment" },
        { src: Slide4, title: "Flavours", link: "/flavours" },
        { src: Slide5, title: "Kids", link: "/kidsclub" },
      ]
  return (
    <div className='flex mt-12'>
        <Slider slides={slides} />
    </div>
  )
}

export default Beach3