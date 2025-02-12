import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const MissionVisionSection = ({texts=[],texts2=[],texts3=[], leftImg, rightImg, showLink, link1, link2}) => {
  return (
    <div className='flex w-screen items-center justify-center my-[100px]'>
      <div className='flex flex-col w-[76.8%] items-center justify-center gap-[50px]'>
        <div className='flex flex-col items-center justify-normal w-[65%] text-center font-jost text-black gap-[35px]'>
            <span className='text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px]'>{texts[0]}</span>
            <h3 className='text-[48px] font-normal leading-[57.6px] font-marcellus'>{texts[1]}</h3>
            <p className='text-[16px] font-normal leading-[24px]'>{texts[2]}</p>
        </div>

        <div className='flex w-full items-start justify-center gap-[2%]'>
            <div className='flex flex-col w-[49%] items-start justify-center text-start gap-[25px] font-jost text-black'>
                <Image src={leftImg} width={leftImg.width} height={leftImg.height} alt='hotel' className='flex w-full'/>
                <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase '>{texts2[0]} </span>
                <h4 className='text-[30px] font-normal leading-[57.6px] capitalize font-marcellus'>{texts2[1]}</h4>
                <p className='text-[14px] font-normal leading-[21px] w-[99%]'>{texts[2]} </p>
                {showLink && (
            <Link href={link1} className='flex w-[170.585px] py-[16px] px-[32px] font-jost text-[16px] text-lagoBrown font-medium leading-[30px] max-h-[41px] items-center justify-center border border-lagoBrown shadow-buttonCustom uppercase'>MORE ABOUT</Link>
        )
        }
            </div>

            <div className='flex flex-col w-[49%] items-start justify-center text-start gap-[25px] font-jost text-black'>
                <Image src={rightImg} width={rightImg.width} height={rightImg.height} alt='hotel' className='flex w-full'/>
                <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase '>{texts2[0]} </span>
                <h4 className='text-[30px] font-normal leading-[57.6px] capitalize font-marcellus'>{texts2[1]}</h4>
                <p className='text-[14px] font-normal leading-[21px] w-[99%]'>{texts3[2]}<br></br></p>
                {showLink && (
            <Link href={link2} className='flex w-[170.585px] py-[16px] px-[32px] font-jost text-[16px] text-lagoBrown font-medium leading-[30px] max-h-[41px] items-center justify-center border border-lagoBrown shadow-buttonCustom uppercase'>MORE ABOUT</Link>
        )
        }
            </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVisionSection
