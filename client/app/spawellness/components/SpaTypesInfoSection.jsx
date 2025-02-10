import Image from 'next/image'
import React from 'react'

const SpaTypesInfoSection = ({ isImageLeft = true, span,header,text,img }) => {
  return (
    <div className='flex w-screen items-center justify-center mt-[100px]'>
      <div className={`flex w-[76.8%] items-center justify-center gap-[3.5%] ${isImageLeft ? "flex-row" : "flex-row-reverse"}`}>
        <Image src={img} alt='indoor' width={img.width} height={img.height} className='w-[49.5%]' />
        <div className='flex flex-col items-start justify-center text-start w-[47%] text-black font-jost'>
          <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>
            {span}
          </span>
          <h3 className="text-[48px] font-normal leading-[57.6px] font-marcellus">{header}</h3>
          <p className='text-[14px] font-normal leading-[21px]'>
           {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpaTypesInfoSection
