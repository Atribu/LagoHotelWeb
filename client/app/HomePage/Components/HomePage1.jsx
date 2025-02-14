import React from 'react'
import EmblaCarousel from "./Slider/Slider1"


export default function HomePage1() {
  

  return (
    <div className='flex flex-col w-full items-center justify-center mt-16 gap-5'>
      <div className='flex font-jost text-[#000] text-[12px] font-[500px] leading-[14px] tracking-[0.48px] uppercase'>
        WELCOME TO LAGO HOTEL
      </div>
      <div className='flex text-[#000] text-[40px] font-marcellus font-normal leading-[57.6px]'>
        Exclusive Holiday Experience
      </div>
      <div className='flex text-center font-jost text-[16px] font-normal leading-[24px]'>
      We offer you a pleasant holiday experience that will feel like home in our rooms designed <br></br> 
      in accordance with varied tastes and needs, merging beauty and comfort with their eye- <br></br>
      catching designs and efficient structures. Enjoy cooling off in pools of different sizes in the <br></br>
       deep blue world of LAGO. Come to LAGO where everything is possible.
      </div>
      <button className='flex underline underline-offset-4 text-[#24292c] text-[18px] font-normal uppercase leading-[30px]'>
        DISCOVER MORE
      </button>

      
    </div>
  )
}
