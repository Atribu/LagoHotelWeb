import React from 'react'
import img from "../images/magnafull.webp"
import Link from 'next/link'

const MainRestaurantSection = () => {
  return (
    <div className='flex w-screen h-[450px] max-w-[1444px] items-center justify-start bg-center bg-cover mb-[100px] relative' style={{ backgroundImage: `url(${img.src})` }}>
        <div className='absolute inset-0 z-[1] bg-lagoBlack/30'></div>
      <div className='flex flex-col ml-[20%] w-[38%] items-start justify-center gap-[30px] font-jost text-white z-10'>
        <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>A UNIQUE FEAST OF TASTE</span>
        <h3 className='text-[48px] font-marcellus font-normal leading-[57.6px]'>Magna Main Restaurant</h3>
        <p className='text-[16px] font-normal leading-[24px] list-disc'>For breakfast, lunch, and dinner, we have prepared an endless open buffet where you may immerse in both authentic Turkish cuisine sensations and seasonal delicacies.</p>
        <ul className='text-[16px] font-normal leading-[24px] marker:text-[8px] pl-4 list-disc'>
            <li>Breakfast: 07:00 - 10:30</li>
            <li>Lunch: 12:30 - 14:00</li>
            <li>Dinner: 18:30 - 21:00</li>
        </ul>
        <Link href="/restaurants" className='text-[16px] leading-[30px] font-normal font-marcellus uppercase underline'>DISCOVER MORE</Link>
      </div>
    </div>
  )
}

export default MainRestaurantSection
