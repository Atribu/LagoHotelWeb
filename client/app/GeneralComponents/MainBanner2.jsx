import React from 'react'

const MainBanner2 = ({img, span, header}) => {
  return (
    <div className='flex w-screen items-center justify-center min-h-[calc(70vh)] bg-center bg-cover '  style={{ backgroundImage: `url(${img.src})` }} >
      <div className='flex flex-col items-center justify-center w-[65%] text-center gap-[50px] text-white font-jost'>
        <span className='text-[12px] md:text-[15px] font-medium uppercase tracking-[0.6px] leading-[14px]'>{span}</span>
        <header className='text-[40px] font-bold md:text-[56px] lg:text-[80px] leading-[28.8px] -tracking-[0.48px] md:tracking-0 md:font-medium md:leading-[61.6px] lg:leading-[106px] capitalize'>{header}</header>
       
      </div>
    </div>
  )
}

export default MainBanner2
