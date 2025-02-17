import React from 'react'

const RoomTour = ({span,header,text}) => {
  return (
    <div className='flex w-screen h-auto items-center justify-center'>
      <div className='flex flex-col w-[76.8%] items-center justify-center gap-[50px]'>

       <div className='flex flex-col items-start justify-center gap-[35px] text-black text-start'>
       <span className='text-[12px]  font-medium leading-[14px] uppercase tracking-[0.48px]'>{span}</span>
       <h2 className='text-[48px] font-marcellus font-normal leading-[57.6px]'>{header}</h2>
       <p className='text-[16px] leading-[24px] font-normal w-[70%]'>{text}</p>
       </div>

       <div className='flex w-full items-center justify-center py-[20px] px-[40px] h-[615px] bg-lagoBrown'>
       </div>

      </div>
    </div>
  )
}

export default RoomTour
