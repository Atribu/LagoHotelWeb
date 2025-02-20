import React from 'react'
import EmblaCarousel from "./Slider/Slider1"


export default function HomePage1() {
  

  return (
    <div className='flex flex-col w-full items-center justify-center my-[50px]'>
      <div className="flex flex-col w-[76.8%] gap-[35px] items-center justify-center text-center text-[#000] font-jost">
      <span className=' text-[12px] font-[500px] leading-[14px] tracking-[0.48px] uppercase'>
        WELCOME TO LAGO HOTEL
      </span>
      <h2 className=' text-[48px] font-marcellus font-normal leading-[57.6px] capsizedText2'>
        Exclusive Holiday Experience
      </h2>
      <p className=' text-center text-[16px] font-normal leading-[24px] max-w-[736px]'>
      We offer you a pleasant holiday experience that will feel like home in our rooms designed 
      in accordance with varied tastes and needs, merging beauty and comfort with their eye- 
      catching designs and efficient structures. Enjoy cooling off in pools of different sizes in the
       deep blue world of LAGO. Come to LAGO where everything is possible.
      </p>
      <button className='flex underline underline-offset-[6px] text-lagoBrown text-[16px] font-normal uppercase leading-[30px] font-marcellus'>
        DISCOVER MORE
      </button>

      </div>
      
    </div>
  )
}
