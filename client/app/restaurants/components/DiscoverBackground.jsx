import React from 'react'
import img from "../images/Background.webp"
import Link from 'next/link'

const DiscoverBackground = () => {
  return (
    <div className='flex w-screen h-[400px] items-center justify-center bg-center bg-cover mb-[100px] relative' style={{ backgroundImage: `url(${img.src})` }}>
        <div className='absolute inset-0 z-[1] bg-lagoBlack/40'></div>
    <div className='flex flex-col w-[32%] items-center justify-center gap-[30px] font-jost text-white text-center z-10'>
      <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>A UNIQUE FEAST OF TASTE</span>
      <h3 className='text-[48px] font-marcellus font-normal leading-[57.6px]'>Discover our Bars and Cafes</h3>
      <p className='text-[16px] font-normal leading-[24px] list-disc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
      <Link href="/restaurants" className='text-[16px] leading-[30px] font-normal font-marcellus uppercase underline'>DISCOVER MORE</Link>
    </div>
  </div>
  )
}

export default DiscoverBackground
