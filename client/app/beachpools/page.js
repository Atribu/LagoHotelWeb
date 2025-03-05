import React from 'react'
import Beach1 from './Components/Beach1'
import Beach2 from './Components/Beach2'
import Beach3 from './Components/Beach3'
import Beach4 from './Components/Beach4'
import Beach5 from './Components/Beach5'
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'
import pool1 from "./Images/map/main.webp"
import pool2 from "./Images/map/relaxpool.webp"
import pool3 from "./Images/map/maldivas.webp"
import pool4 from "./Images/map/ınfınıty.webp"
import pool5 from "./Images/map/maldivaskids.webp"
import pool6 from "./Images/map/ındoor.webp"
import pool7 from "./Images/map/aquapool.webp"
import pool8 from "./Images/map/kıdsaqua.webp"
import pool9 from "./Images/map/megaaqua.webp"
import hover1 from "./Images/map/PoolHover1.png"
import hover2 from "./Images/map/PoolHover2.png"
import hover3 from "./Images/map/PoolHover3.png"
import hover4 from "./Images/map/PoolHover4.png"
import hover5 from "./Images/map/PoolHover5.png"
import hover6 from "./Images/map/PoolHover6.png"
import hover7 from "./Images/map/PoolHover7.png"
import hover8 from "./Images/map/PoolHover8.png"
import hover9 from "./Images/map/PoolHover9.png"
import Form from '../GeneralComponents/Form'

const poolItems = [
  {
    src: pool1,
    hoverSrc: hover1,
    subtitle: "family-friendly pool for general use",
    title: "Main Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam."
  },
  {
    src: pool2,
    hoverSrc: hover2,
    subtitle: "peaceful environment for relaxation",
    title: "Relax Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc "
  },
  {
    src: pool3,
    hoverSrc: hover3,
    subtitle: "Adults-only (+16), tranquil atmosphere",
    title: "Maldivas Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tempor pellentesque arcu fringilla eleifend donec quis. Nunc mauris amet ultrices proin elementum quis ut"
  },
  {
    src: pool4,
    hoverSrc: hover4,
    subtitle: "Scenic views for a serene floating experience",
    title: "Infinity Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam "
  },
  {
    src: pool5,
    hoverSrc: hover5,
    subtitle: "ideal for recreational swimming",
    title: "Maldvas Kids Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc "
  },
  {
    src: pool6,
    hoverSrc: hover6,
    subtitle: "Adults-only (+16), tranquil atmosphere",
    title: "Indoor Pools",
    description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tempor pellentesque arcu fringilla eleifend donec quis. Nunc mauris amet ultrices proin elementum quis ut "
  },
  {
    src: pool7,
    hoverSrc: hover7,
    subtitle: "ideal for recreational swimming",
    title: "Aqua Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc "
  },
  {
    src: pool8,
    hoverSrc: hover8,
    subtitle: "Scenic views for a serene floating experience",
    title: "Kids’ Aqua Park",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam "
  },
  {
    src: pool9,
    hoverSrc: hover9,
    subtitle: "Adults-only (+16), tranquil atmosphere",
    title: "Mega Aqua Park",
    description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tempor pellentesque arcu fringilla eleifend donec quis. Nunc mauris amet ultrices proin elementum quis ut "
  },
]


const page = () => {
  return (
    <div className='overflow-hidden overflow-y-hidden '>
      <Beach1 /> 
     <div className='flex w-screen flex-col items-center justify-center gap-[60px] md:gap-[80px] lg:gap-[100px] mt-[100px] bg-[#fbfbfb]'>
     <Beach2 />
      <Beach3 />
      <Beach4 />
      <Beach5 showLink={false} span="Dive Into Our Exclusive Pool Selection" header=" All Pools at a Glance" text=" Lorem ipsum dolor sit amet consectetur. Mauris et cras ut odio phasellus. Volutpat leo tempor quam lobortis purus nulla. Turpis felis sit sed tristique ut fermentum gravida aenean nam. Facilisi neque sit donec vitae velit diam eget ut. Imperdiet vivamus molestie volutpat at tellus scelerisque velit. Nibh integer odio." poolItems={poolItems}/>
      <ContactSection2 />
      <Form/>
     </div>
    </div>
  )
}

export default page