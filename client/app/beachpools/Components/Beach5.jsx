import React from 'react'
import Image from "next/image"
// Resim importları: 9 farklı resim dosyanızın doğru yollarını eklediğinizden emin olun.
import pool1 from "../Images/map/main.webp"
import pool2 from "../Images/map/relaxpool.webp"
import pool3 from "../Images/map/maldivas.webp"
import pool4 from "../Images/map/ınfınıty.webp"
import pool5 from "../Images/map/maldivaskids.webp"
import pool6 from "../Images/map/ındoor.webp"
import pool7 from "../Images/map/aquapool.webp"
import pool8 from "../Images/map/kıdsaqua.webp"
import pool9 from "../Images/map/megaaqua.webp"

const poolItems = [
  {
    src: pool1,
    subtitle: "family-friendly pool for general use",
    title: "Main Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam."
  },
  {
    src: pool2,
    subtitle: "peaceful environment for relaxation",
    title: "Relax Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc "
  },
  {
    src: pool3,
    subtitle: "Adults-only (+16), tranquil atmosphere",
    title: "Maldivas Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tempor pellentesque arcu fringilla eleifend donec quis. Nunc mauris amet ultrices proin elementum quis ut"
  },
  {
    src: pool4,
    subtitle: "Scenic views for a serene floating experience",
    title: "Infinity Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam "
  },
  {
    src: pool5,
    subtitle: "ideal for recreational swimming",
    title: "Maldvas Kids Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc "
  },
  {
    src: pool6,
    subtitle: "Adults-only (+16), tranquil atmosphere",
    title: "Indoor Pools",
    description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tempor pellentesque arcu fringilla eleifend donec quis. Nunc mauris amet ultrices proin elementum quis ut "
  },
  {
    src: pool7,
    subtitle: "ideal for recreational swimming",
    title: "Aqua Pool",
    description: "Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin blandit est amet gravida integer. Mi feugiat fringilla morbi habitant nunc eu. Aliquam leo morbi nunc "
  },
  {
    src: pool8,
    subtitle: "Scenic views for a serene floating experience",
    title: "Kids’ Aqua Park",
    description: "Lorem ipsum dolor sit amet consectetur. Porta est ultricies in habitant. Pharetra arcu elit pellentesque ornare cursus leo pharetra sit sed. Ut ornare est mus eu nisl donec quam "
  },
  {
    src: pool9,
    subtitle: "Adults-only (+16), tranquil atmosphere",
    title: "Mega Aqua Park",
    description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tempor pellentesque arcu fringilla eleifend donec quis. Nunc mauris amet ultrices proin elementum quis ut "
  },
]

const Beach5 = () => {
  return (
    <div className='flex flex-col w-8/12 ml-[16%] mt-[5%]'>
        <div className='flex flex-col justify-start items-start gap-7'>
            <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>
              Dive Into Our Exclusive Pool Selection
            </p>
            <h4 className='font-marcellus text-[48px] leading-[57.6px]'>
              All Pools at a Glance
            </h4>
            <p className='font-jost text-[16px] leading-[24px]'>
              Lorem ipsum dolor sit amet consectetur. Mauris et cras ut odio phasellus. Volutpat leo tempor quam <br/> lobortis purus nulla. Turpis felis sit sed tristique ut fermentum gravida aenean nam. Facilisi neque sit donec <br/> vitae velit diam eget ut. Imperdiet vivamus molestie volutpat at tellus scelerisque velit. Nibh integer odio.
            </p>
        </div>
        {/* Havuz içeriklerini grid yapısında 3 sütun 3 satır şeklinde düzenliyoruz ve gap'ı azaltıyoruz */}
        <div className='grid grid-cols-3 mt-[5%]'>
            {poolItems.map((pool, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Image 
                  src={pool.src} 
                  alt={pool.title}
                  width={349} 
                  height={233}
                  className="object-cover"
                />
                <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase mt-[2%]'>
                  {pool.subtitle}
                </p>
                <h5 className='font-marcellus text-[30px] leading-[57.6px] uppercase'>
                  {pool.title}
                </h5>
                <p className='font-jost text-[14px] leading-[21px] mb-[4%]'>
                  {pool.description}
                </p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Beach5
