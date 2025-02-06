import React from 'react'
import img from "../images/restaurantMain.webp"

const RestaurantMainBanner = () => {
  return (
    <div className='flex w-screen min-h-[calc(100vh+10vh)] items-center justify-center bg-center bg-cover' style={{ backgroundImage: `url(${img.src})` }}>
      <div className='flex flex-col w-[50%] items-center justify-center text-center gap-[50px] text-white font-jost'>
        <span className='text-[15px] font-medium leading-[14px] tracking-[0.6px] uppercase'>Curated Culinary Experiences</span>
        <h1 className='text-[80px] font-medium leading-[30px]'>Restaurants</h1>
        <p className='text-[18px] font-normal leading-[30px]'>Enjoy a various amount of dining options from around the world.</p>
      </div>
    </div>
  )
}

export default RestaurantMainBanner
