import Image from 'next/image'
import React from 'react'
import daytime from "../images/Daytime_fin.jpg"
import nighttime from "../images/Nighttme_fin.jpg"
import LSvg from './LSvg'
import ASvg from './ASvg'
import GSvg from './GSvg'
import OSvg from './OSvg'

const ActivitiesSection = () => {
  return (
    <div className='flex w-screen h-auto  items-center justify-center'>
      <div className='flex flex-col w-full items-center justify-center gap-[50px]'>
        <div className='flex flex-col w-[76.8%] gap-[35px] items-center justify-center text-black font-jost text-center max-w-[1106px]'>
            <span className='text-[12px] leading-[14px] font-medium uppercase tracking-[0.48px]'>Entertainment & Actıvıtıes</span>
            <h2 className='text-[48px] leading-[57.6px] font-normal font-marcellus capsizedText2'>Unlimited Fun and Activities</h2>
            <p className='text-[16px] font-normal leading-[24px] w-[55%]'>Lorem ipsum dolor sit amet consectetur. Pulvinar orci morbi sapien neque eu molestie dictum. Nullam urna augue fermentum praesent phasellus purus. Vitae facilisis eleifend </p>
        </div>

        <div className='flex w-full items-center justify-center relative max-w-[1440px]'>
           <div className='flex w-[76.8%] gap-[30px] items-center justify-center '>

           <div className='flex flex-col w-[538px] h-full relative'>
           <Image src={daytime} alt="daytime" width={daytime.width} height={daytime.height} className='w-full'/>
           <div className='flex flex-col absolute bottom-[38px] left-[35px] items-start justify-center text-start gap-[25px] pb-[10px] text-white '>
            <span className='text-[12px] font-normal uppercase  font-jost leading-normal tracking-[0.48px]'>experiences</span>
            <h4 className='font-marcellus text-[30px] font-normal capsizedText3 leading-[40px]' >Daytime Activities</h4>
           </div>
           </div>
           
            <div className='flex flex-col w-[538px] h-full relative'>
            <Image src={nighttime} alt="nighttime" width={nighttime.width} height={nighttime.height} className='w-full'/>
           <div className='flex flex-col absolute bottom-[38px] left-[35px] items-start justify-center text-start gap-[25px] pb-[10px] text-white '>
            <span className='text-[12px] font-normal uppercase  font-jost leading-normal tracking-[0.48px]'>experiences</span>
            <h4 className='font-marcellus text-[30px] font-normal capsizedText3 leading-[40px]'>Daytime Activities</h4>
           </div>
           </div>
           </div>

            <div className='absolute inset-0 items-center justify-between flex w-full'>
                <LSvg className="flex w-[15.5%] h-auto" />
                <ASvg className="flex w-[23.3%]  h-auto" />
                <GSvg className="flex w-[21.6%]  h-auto" />
                <OSvg className="flex w-[21.5%]  h-auto" />
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default ActivitiesSection
