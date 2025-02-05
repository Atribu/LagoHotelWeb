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
    <div className='flex w-screen h-[75vh] items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${mainImg.src})` }}>
      <div className='flex flex-col w-[80%] h-full items-center justify-center text-white font-jost gap-[39px]'>
        <span className='text-[15px] font-medium leading-[14px] tracking-[0.6px] uppercase'>exclusive stay with an INDEPENDENT pool</span>
        <h2 className='text-[80px] font-medium leading-[30px]'>Family Swim-Up</h2>

        <div className='flex w-full items-center justify-center gap-[16px]'>

            <div className='flex items-center justify-center gap-[20px] px-[26px]'>
                <div className='flex flex-col gap-[10px] items-end justify-center'>
                    <ForestSvg className="flex" width={35} height={36}/>
                    <p className='text-[16px] font-medium leading-normal'>Forest</p>
                </div>
                <div className='flex flex-col gap-[10px] items-start justify-center'>
                    <SeaSvg className="flex" width={35} height={35}/>
                    <p className='text-[16px] font-medium leading-normal'>Sea View</p>
                </div>
            </div>

            <div className='flex items-center justify-center gap-[20px] px-[26px]'>
                <div className='flex flex-col gap-[10px] items-end justify-center'>
                    <ParentsSvg className="flex" width={43} height={35}/>
                    <p className='text-[16px] font-medium leading-normal'>1-4 Adult </p>
                </div>
                <div className='flex flex-col gap-[10px] items-start justify-center'>
                    <BabySvg className="flex" width={35} height={36}/>
                    <p className='text-[16px] font-medium leading-normal'>1-3 Children</p>
                </div>
            </div>

            <div className='flex items-center justify-center gap-[20px] px-[26px]'>
                <div className='flex flex-col gap-[10px] items-end justify-center'>
                    <LivingroomSvg className="flex" width={35} height={36}/>
                    <p className='text-[16px] font-medium leading-normal'>2 Bedrooms </p>
                </div>
                <div className='flex flex-col gap-[10px] items-start justify-center'>
                    <BedSvg className="flex" width={35} height={36}/>
                    <p className='text-[16px] font-medium leading-normal'>4 Beds</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default SubRoomBanner
