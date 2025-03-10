import React from 'react'
import EmblaCarousel from "./Slider/Slider1"


export default function HomePage1() {
  

  return (
    <div className='flex flex-col w-full items-center justify-center my-[50px]'>
      <div className="flex flex-col w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[15px] md:gap-[25px] lg:gap-[35px] items-center justify-center text-center text-[#000] font-jost">
      <span className=' text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>
        WELCOME TO LAGO HOTEL
      </span>
      <h2 className='text-[28px] md:text-[38px] lg:text-[48px] font-marcellus font-normal leading-normal lg:leading-[57.6px] lg:capsizedText2'>
        Exclusive Holiday Experience
      </h2>
      <p className=' text-center text-[14px] md:text-[16px] font-normal leading-[20.8px] lg:leading-[24px] md:max-w-[490px] lg:max-w-[736px]'>
      We offer you a pleasant holiday experience that will feel like home in our rooms designed 
      in accordance with varied tastes and needs, merging beauty and comfort with their eye- 
      catching designs and efficient structures. Enjoy cooling off in pools of different sizes in the
       deep blue world of LAGO. Come to LAGO where everything is possible.
      </p>
      <button className='hidden lg:flex underline underline-offset-[6px] text-lagoBrown text-[16px] font-normal uppercase leading-[30px] font-marcellus'>
        DISCOVER MORE
      </button>

      </div>
      
    </div>
  )
}
