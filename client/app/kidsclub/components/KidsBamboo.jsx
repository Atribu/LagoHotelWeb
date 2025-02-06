import Image from 'next/image'
import React from 'react'
import bamboo from "../images/bamboo.png"

const KidsBamboo = () => {
  return (
    <div className='flex flex-col w-screen items-center justify-center h-auto my-[100px]'>
      <div className='flex flex-col w-[76.8%] gap-[14px] justify-start items-start font-jost text-black'>
        <div className='flex justify-between items-center gap-[66px] w-full'>
            <Image src={bamboo} alt='bamboo' width={bamboo.width} height={bamboo.height} className='w-[59%] flex'/>
            <div className='flex flex-col gap-[17px] items-start justify-center text-start w-[39%]'>
                <span className='text-[12px] font-medium leading-[26px] uppercase'>A Safe and Fun Space for All Ages</span>
                <h3 className='text-[30px] leading-[26px] font-normal font-marcellus'>Unforgettable Memories</h3>
                <p className='text-[16px] leading-[24px] font-normal'>Bamboo Kids Club, age-appropriate activities, professional caregivers, and a secure environment, we provide the perfect setting for your child to learn, play, and grow.</p>
            </div>
        </div>
        <span className='text-[14px] font-medium uppercase leading-[21px]'>Opening Hours:  08:00 - 20:00</span>
      </div>

      <div className='flex gap-[28px] w-[76.8%] justify-between items-center'>
        <div className='flex flex-col w-[33%] items-center justify-center h-[350px]'>
          
        </div>
      </div>
    </div>
  )
}

export default KidsBamboo
