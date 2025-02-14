import React from 'react'
import img1 from "../images/Rectangle.webp"
import Image from 'next/image'
import img2 from "../images/SRF_3683 1.webp"
import L2Svg from './L2Svg'
import A2Svg from './A2Svg'
import G2Svg from './G2Svg'
import O2Svg from './O2Svg'


const ActivityBackgroundSection = () => {
  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[50px] mb-[100px]' >
      <div className='flex flex-col w-[65%] items-center justify-center text-center font-jost text-black gap-[35px]'>
        <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Entertainment & Actıvıtıes</span>
        <h3 className='text-[48px] font-normal leading-[57.6px] capitalize text-lagoBlack'>catch the rhythm</h3>
        <p className='text-[16px] font-normal leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Pulvinar orci morbi sapien neque eu molestie dictum. Nullam urna augue fermentum praesent phasellus purus. Vitae facilisis eleifend </p>
      </div>

      <div className='flex w-full h-[73vh] relative' >
        <Image src={img1} width={img1.width} height={img1.height} className='w-[40%] z-10' alt='activity '/>
        <Image src={img2} width={img2.width} height={img2.height} className='w-[60%] z-10' alt='activity'/>
        <div className='absolute inset-0 items-center justify-center gap-[95px] 2xl:justify-between flex w-full z-30'>
                <L2Svg className="flex z-50" width={227} height={645} />
                <A2Svg className="flex" width={341} height={645}/>
                <G2Svg className="flex" width={285} height={645}/>
                <O2Svg className="flex" width={299} height={645}/>
            </div>
      </div>
      <div className='flex w-[42%] items-center text-center justify-center'>
          <span className='text-[14px] font-jost text-lagoGray font-normal leading-normal'>* LAGO Hotel Ultra All Inclusive concept, activities and services may vary depending on the season and weather conditions, without prior notice. All rights of LAGO HOTEL in this regard are reserved.</span>
        </div>
    </div>
  )
}

export default ActivityBackgroundSection
