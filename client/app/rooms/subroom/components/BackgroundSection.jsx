import React from 'react'
import img from "../images/odafull.webp"
import Link from 'next/link'

const BackgroundSection = () => {
  return (
    <div className='flex w-screen h-[63vh] items-end justify-end mt-[7px] bg-cover bg-center'style={{ backgroundImage: `url(${img.src})` }} >
      <div className='flex h-full w-[45%] items-center justify-center bg-[#2D2D26]/50 '>
       <div className='flex flex-col items-start justify-center w-[80%] gap-[30px] text-white font-jost text-start'>
         <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>EXCLUSIVE PRIVILEGES</span>
         <h2 className='text-[48px] font-marcellus font-normal leading-[57.6px] '>Swim-Up Room VIP Benefits</h2>
         <p className='text-[16px] font-normal leading-[24px] '>Guests staying in Swim-Up rooms are welcomed with a VIP setup, including a carefully prepared fruit tray and delicate macarons upon check-in.</p>
         <span className='text-[14px] font-normal leading-[21px]'>A’la Carte Dining: One complimentary visit for stays of 7+ nights. <br></br>
         Pavilion Discount: Enjoy 15% off exclusive pavilion services.</span>
         <Link href="/" className='text-[12px] font-normal leading-[30px] font-marcellus uppercase underline'>DISCOVER MORE</Link>
       </div>
      </div>
    </div>
  )
}

export default BackgroundSection
