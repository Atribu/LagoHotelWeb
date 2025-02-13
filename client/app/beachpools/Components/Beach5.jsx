import React from 'react'
import Image from "next/image"
import Link from 'next/link'
// Resim importları: 9 farklı resim dosyanızın doğru yollarını eklediğinizden emin olun.

const Beach5 = ({span,header,text,poolItems, showLink,links=[]}) => {
  return (
    <div className='flex flex-col w-full max-w-[1444px] items-center justify-center'>
        <div className='flex flex-col justify-start items-start gap-7 w-[76.8%]'>
            <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>
            {span}
            </p>
            <h4 className='font-marcellus text-[48px] leading-[57.6px]'>
             {header}
            </h4>
            <p className='font-jost text-[16px] leading-[24px]'>
             {text}
            </p>
        </div>
        {/* Havuz içeriklerini grid yapısında 3 sütun 3 satır şeklinde düzenliyoruz ve gap'ı azaltıyoruz */}
        <div className='grid grid-cols-3 mt-[5%] gap-[30px] w-[76.8%]' >
            {poolItems.map((pool, index) => (
              <div key={index} className="flex flex-col gap-[15px] mb-[50px] w-[100%]">
                <Image 
                  src={pool.src} 
                  alt={pool.title}
                  width={349} 
                  height={233}
                  className="object-cover w-full"
                />
                <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase mt-[2%] '>
                  {pool.subtitle}
                </p>
                <h5 className='font-marcellus text-[30px] leading-[57.6px] uppercase'>
                  {pool.title}
                </h5>
                <p className='font-jost text-[14px] leading-[21px] '>
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
