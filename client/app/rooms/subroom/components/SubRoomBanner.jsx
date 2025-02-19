import React from 'react'
import mainImg from "../images/header.webp"
import ForestSvg from './ForestSvg'
import BabySvg from './BabySvg'
import LivingroomSvg from './LivingroomSvg'
import BedSvg from './BedSvg'
import SeaSvg from './SeaSvg'
import ParentsSvg from './ParentsSvg'

const SubRoomBanner = () => {


  return (
    <div className='flex w-screen h-[80vh] items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${mainImg.src})` }}>
      <div className='flex flex-col w-[80%] h-full items-center justify-center text-white font-jost gap-[39px]'>
        <span className='text-[15px] font-medium leading-[14px] tracking-[0.6px] uppercase'>exclusive stay with an INDEPENDENT pool</span>
        <h2 className="capsizedText text-[80px] leading-[106px] font-medium ">Family Swim-Up</h2>

        <div className='flex w-full items-center justify-center gap-[16px] h-[103px]'>

            <div className='flex items-center justify-center gap-[20px] px-[26px]'>
                <div className='flex flex-col gap-[18px] items-center justify-center'>
                <div className='flex  gap-[20px] items-center justify-center'>
                    <ForestSvg className="flex" width={35} height={36}/>
                    <SeaSvg className="flex" width={35} height={35}/>
                    </div>
                    <p className='text-[16px] font-medium leading-normal'>Forest / Sea View</p>
                </div>
            </div>

            <div className='flex items-center justify-center gap-[20px] px-[26px]'>
                <div className='flex flex-col gap-[18px] items-center justify-center'>
                <div className='flex  gap-[20px] items-center justify-center'>
                <ParentsSvg className="flex" width={43} height={35}/>
                <BabySvg className="flex" width={35} height={36}/>
                    </div>
                    <p className='text-[16px] font-medium leading-normal'>1-4 Adult + 1-3 Children</p>
                </div>
            </div>

            <div className='flex items-center justify-center gap-[20px] px-[26px]'>
                <div className='flex flex-col gap-[18px] items-center justify-center'>
                <div className='flex  gap-[20px] items-center justify-center'>
                <LivingroomSvg className="flex" width={40} height={45}/>
                <BedSvg className="flex" width={35} height={36}/>
                    </div>
                    <p className='text-[16px] font-medium leading-normal'>2 Bedrooms / 4 Beds</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SubRoomBanner
