import Link from 'next/link'
import React from 'react'
import img1 from "../../GeneralComponents/Contact/images/contactGaleri.png"
import img2 from "../../GeneralComponents/Contact/images/contactGaleri2.png"
import Image from 'next/image'

const GalleryScrollSection = () => {
    const images=[
        {
          id:1,
          imgSrc:img1
        },
        {
          id:2,
          imgSrc:img1
        },{
          id:3,
          imgSrc:img1
        },
        {
          id:4,
          imgSrc:img1
        },
        {
          id:5,
          imgSrc:img2
        },
        {
          id:6,
          imgSrc:img1
        },
        {
          id:7,
          imgSrc:img2
        },
        {
          id:8,
          imgSrc:img1
        },{
          id:9,
          imgSrc:img1
        }
      ];

  return (
    <div className='flex w-screen items-center justify-center mt-[50px] max-w-[1920px]'>
      <div className='flex flex-col items-center justify-between w-[75%] gap-[40px]'>
        <div className='flex items-center justify-between gap-[10px]'>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>GENERAL VIEW</Link>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>ROOMS</Link>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>VILLA</Link>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>POOL & BEACH</Link>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>FLAVOURS</Link>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>SPA & FITNESS</Link>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>KIDS CLUB</Link>
            <Link href="/" className='flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20] w-[140px] text-[14px] text-lagoGray font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost'>ENTERTAINMENT</Link>
        </div>

        <div className='flex w-full h-[1800px]'>
        <div className='flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto'>
          <div className="columns-3 gap-3 px-3 mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer ">
                {images.map((item,index)=>{
                    return(
                      <div className="mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer" key={index}>
                        <Image src={item.imgSrc} alt="contact" className='w-[100%] '/>
                    </div>
                    )
                })}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GalleryScrollSection
