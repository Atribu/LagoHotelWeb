import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SpaTypesInfoSection = ({ 
  isImageLeft = true, 
  span, 
  header, 
  text, 
  img, 
  link, 
  showLink 
}) => {
  const containerDirection = isImageLeft ? "flex-row" : "flex-row-reverse"

  return (
    <div className="flex w-screen items-center justify-center my-[100px] max-w-[1444px]">
      <div className={`flex w-[76.8%] items-center justify-center gap-[3.5%] ${containerDirection}`}>
        <Image 
          src={img} 
          alt="indoor" 
          width={img.width} 
          height={img.height} 
          className="w-[49.5%]" 
        />
        <div className="flex flex-col items-start justify-center w-[47%] text-black font-jost gap-[35px] text-start">
          <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
            {span}
          </span>
          <h3 className="text-[48px] font-normal leading-[57.6px] font-marcellus">
            {header}
          </h3>
          <p className="text-[14px] font-normal leading-[21px]">
            {text}
          </p>
          {showLink && (
            <Link 
              href={link} 
              className="flex w-[170.585px] whitespace-nowrap py-[16px] px-[32px] font-jost text-[16px] text-lagoBrown font-medium leading-[30px] max-h-[41px] items-center justify-center border border-lagoBrown shadow-buttonCustom uppercase"
            >
              MORE ABOUT
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default SpaTypesInfoSection
