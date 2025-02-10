import React from 'react'
import Link from 'next/link'

const BackgroundSection = ({span, header,texts=[],img,link}) => {
  return (
    <div className='flex w-screen h-[63vh] items-end justify-end my-[100px] bg-cover bg-center'style={{ backgroundImage: `url(${img.src})` }} >
      <div className='flex h-full w-[45%] items-center justify-center bg-[#2D2D26]/50 '>
       <div className='flex flex-col items-start justify-center w-[80%] gap-[30px] text-white font-jost text-start'>
         <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>{span}</span>
         <h2 className='text-[48px] font-marcellus font-normal leading-[57.6px] '>{header}</h2>
         <p className='text-[16px] font-normal leading-[24px] '>{texts[0]}</p>
         {/* Eğer `texts.length` 2'den küçükse sadece `texts[0]` göster */}
         {texts.length < 3 ? (
            
            <p className="text-[14px] font-normal leading-[21px] leading-trim-both text-edge-cap">
            {texts[1]}
          </p>
         ) : (
           // Eğer 2'den büyükse liste olarak göster
           <ul className="text-[14px] font-normal leading-[21px] list-disc pl-5 marker:text-xs marker:text-white">
             {texts.slice(1).map((text, index) => (
               <li key={index}>{text}</li>
             ))}
           </ul>
         )}
         <Link href={link} className='text-[12px] font-normal leading-[30px] font-marcellus uppercase underline'>DISCOVER MORE</Link>
       </div>
      </div>
    </div>
  )
}

export default BackgroundSection
