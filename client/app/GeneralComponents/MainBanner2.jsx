import React from 'react'

const MainBanner2 = ({img, span, header}) => {
  return (
    <div className='flex w-screen items-center justify-center min-h-[calc(70vh)] bg-center bg-cover'  style={{ backgroundImage: `url(${img.src})` }} >
      <div className='flex flex-col items-center justify-center w-[65%] text-center gap-[50px] text-white font-jost'>
        <span className='text-[15px] font-medium uppercase tracking-[0.6px] leading-[14px]'>{span}</span>
        <header className='text-[80px] font-medium leading-[65px] capitalize'>{header}</header>
       
      </div>
    </div>
  )
}

export default MainBanner2
