import React from 'react'
import Slider from "../../HomePage/Components/Slider/Slider1"
import Slide1 from '../Images/Slide/slider1.webp'
import Slide2 from '../Images/Slide/beachbar.webp'
import Slide3 from '../Images/Slide/watersport.webp'
import Slide4 from '../Images/Slide/celebration.webp'

const Beach3 = () => {
    const slides = [
        { src: Slide1, title: "Accommodation", link: "/accommodation" },
        { src: Slide2, title: "Beach & Pools", link: "/beachpool" },
        { src: Slide3, title: "Experiences", link: "/entertainment" },
        { src: Slide4, title: "Flavours", link: "/flavours" },
      ]
  return (
    <div className='flex flex-col w-full gap-[50px] items-center justify-center'>
        <div className='flex flex-col gap-[35px] w-[76.8%] items-start justify-center text-start'>
          <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>RELAX AND FORGET</p>
          <h3 className='font-marcellus text-[48px] font-normal leading-[57.6px]'>Activities at the Beach</h3>
          <p className='font-jost text-[16px] font-normal leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Consectetur lorem nibh ultrices quis sit. Ac amet mollis erat enim.<br/> Velit venenatis lectus orci viverra dis turpis. Tempor vehicula risus massa sed vestibulum dui nulla vulputate.</p>
        </div>
        <Slider slides={slides} />
    </div>
  )
}

export default Beach3