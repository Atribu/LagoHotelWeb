import React from 'react'
import img from "../images/restaurantMain.webp"

const RestaurantMainBanner = ({img,header,span,text}) => {
  return (
    <div className='flex w-screen min-h-screen items-center justify-center bg-center bg-cover' style={{ backgroundImage: `url(${img.src})` }}>
      <div className='flex flex-col w-[90%] lg:w-[50%] items-center justify-center text-center gap-[50px] text-white font-jost'>
        <span className='text-[15px] font-medium leading-[14px] tracking-[0.6px] uppercase'>{span}</span>
        <h1 className='text-[40px] md:text-[56px] lg:text-[80px] leading-[28.8px] -tracking-[0.48px] md:tracking-0 font-medium md:leading-[61.6px] lg:leading-[106px] capsizedText'>{header}</h1>
        <p className='text-[18px] font-normal leading-[30px] w-[95%] md:w-[588px]'>{text}</p>
      </div>
    </div>
  )
}

export default RestaurantMainBanner
