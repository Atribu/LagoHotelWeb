import React from 'react'
import Image from "next/image"
import Link from 'next/link'
// Resim importları: 9 farklı resim dosyanızın doğru yollarını eklediğinizden emin olun.

const Beach5 = ({span,header,text,poolItems, showLink,links=[]}) => {
  return (
    <div className='flex flex-col w-full max-w-[1440px] items-center justify-center gap-[30px] lg:gap-[50px]'>
        <div className='flex flex-col justify-start items-start  w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[15px] md:gap-[25px] lg:gap-[35px]'>
            <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>
            {span}
            </p>
            <h4 className='font-marcellus text-[28px] md:text-[32px] lg:text-[48px] leading-[57.6px]'>
             {header}
            </h4>
            <p className='font-jost text-[14px] lg:text-[16px] leading-[24px] lg:w-[65.6%]'>
             {text}
            </p>
        </div>
        {/* Havuz içeriklerini grid yapısında 3 sütun 3 satır şeklinde düzenliyoruz ve gap'ı azaltıyoruz */}
        <div className='grid grid-cols-2 lg:grid-cols-3  gap-[30px] w-[87.79%] md:w-[91.4%] lg:w-[76.8%]' >
            {poolItems.map((pool, index) => (
              <div key={index} className="flex flex-col gap-[15px] lg:gap-[25px] w-[100%] mb-[20px]">
                <Image 
                  src={pool.src} 
                  alt={pool.title}
                  width={349} 
                  height={233}
                  className="object-cover w-full"
                />
                <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase '>
                  {pool.subtitle}
                </p>
                <h5 className='font-marcellus sm:text-xs md:text-xs lg:text-[25px] leading-normal whitespace-nowrap lg:leading-[57.6px] uppercase capsizedText3'>
                  {pool.title}
                </h5>
                <p className='font-jost text-[12px] lg:text-[14px] leading-[21px] capsizedText4'>
                  {pool.description}
                </p>
                {showLink && (
            <Link href={links[index]} className='flex w-[147px] py-[14px] whitespace-nowrap px-[28px] font-jost text-[14px] text-lagoBrown font-medium leading-[30px] max-h-[41px] items-center justify-center border border-lagoBrown shadow-buttonCustom uppercase'>MORE ABOUT</Link>
        )
        }
              </div>
            ))}
        </div>
    </div>
  )
}

export default Beach5
