import React from 'react'
import img1 from "../images/Rectangle.webp"
import Image from 'next/image'
import img2 from "../images/SRF_3683 1.webp"
import LSvg from './LSvg'
import ASvg from './ASvg'
import GSvg from './GSvg'
import OSvg from './OSvg'


const ActivityBackgroundSection = () => {
  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[50px] mb-[100px]' >
      <div className='flex flex-col w-[65%] items-center justify-center text-center font-jost text-black gap-[35px]'>
        <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Entertainment & Actıvıtıes</span>
        <h3 className='text-[48px] font-normal leading-[57.6px] capitalize text-lagoBlack'>catch the rhythm</h3>
        <p className='text-[16px] font-normal leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Pulvinar orci morbi sapien neque eu molestie dictum. Nullam urna augue fermentum praesent phasellus purus. Vitae facilisis eleifend </p>
      </div>

      <div className='flex w-full h-[645px] relative' >
        <Image src={img1} width={img1.width} height={img1.height} className='w-[40%] z-10' alt='activity '/>
        <Image src={img2} width={img2.width} height={img2.height} className='w-[60%] z-10' alt='activity'/>
        <div className='absolute inset-0 items-center justify-center gap-[5.5%] flex w-full z-30'>
                <LSvg className="flex" width={223} height={641}/>
                <ASvg className="flex" width={335} height={641}/>
                <GSvg className="flex" width={302} height={660}/>
                <OSvg className="flex" width={301} height={660}/>
            </div>
      </div>
    </div>
  )
}

export default ActivityBackgroundSection
