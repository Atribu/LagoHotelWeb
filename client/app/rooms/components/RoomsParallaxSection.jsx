import React from 'react'
import oda from "../images/oda.png"
import MinibarSvg from './svg/MinibarSvg'
import FoundationSvg from './svg/FoundationSvg'
import WatchSvg from './svg/WatchSvg'
import TvSvg from './svg/TvSvg'

const RoomsParallaxSection = () => {
  return (
    <div className='flex w-screen h-[610px]  items-center justify-center parallax relative ' style={{ backgroundImage: `url(${oda.src})` }}>
        <div className='absolute inset-0 bg-lagoBlack/60 z-[1] '></div>
      <div className='flex flex-col  items-start text-start  justify-center gap-[38px] font-jost text-white z-50'>
      <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>The Essential In-Room AmenitieS</span>

     <div className='flex w-full items-center justify-center gap-[40px]'>
     <div className='flex flex-col w-[537px] items-start justify-center gap-[68px]'>
            <h3 className='font-marcellus font-normal text-[36px] leading-[49px] -tracking-[0.792px]'>Our rooms have all the essentials you need for your stay.</h3>

            <div className='flex w-full items-center justify-start gap-[37px] mt-[30px] py-[8px]'>

            <div className='flex flex-col w-[249px] items-start justify-center gap-[15px]'>
               <MinibarSvg className="flex" width={38} height={38}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Mini Bar</h5>
                <p className='text-[14px] font-normal leading-[21px] '>Daily replenishments include water, soft  drinks, beer, milk with fruit, chocolate,  and a cracker.</p>
            </div>

            <div className='flex flex-col w-[249px] items-start justify-center gap-[15px]'>
                <FoundationSvg className="flex" width={40} height={40}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Cosmetics</h5>
                <p className='text-[14px] font-normal leading-[21px] '>Bathroom essentials include shampoo, conditioner, shower gel, soap, loofah, hairdryer, and body cream.</p>
            </div>
            </div>
        </div>

        <div className='flex flex-col w-[533px] items-start justify-center gap-[68px]'>
            <p className='text-[16px] font-normal leading-normal -tracking-[0.352px]'>Enjoy a seamless stay with all the essential amenities at your fingertips. From daily minibar replenishments to premium bath essentials, secure room access, and  uninterrupted entertainment with LED TV and 24-hour WiFi, we ensure your comfort at every moment.</p>

            <div className='flex w-full items-center justify-start gap-[37px] mt-[30px] py-[8px]'>

            <div className='flex flex-col w-[249px] items-start justify-center gap-[15px]'>
            <WatchSvg className="flex" width={40} height={40}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Room Access</h5>
                <p className='text-[14px] font-normal leading-[21px] '>All door locks are securely operated using a convenient chip bracelet key system for easy access.</p>
            </div>

            <div className='flex flex-col w-[249px] items-start justify-center gap-[15px]'>
            <TvSvg className="flex" width={43} height={43}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Wifi & LedTV</h5>
                <p className='text-[14px] font-normal leading-[21px] '>LED TV with international and national satellite channels, radio, and 24-hour WiFi access.</p>
            </div>
            </div>
        </div>
     </div>


      </div>
    </div>
  )
}

export default RoomsParallaxSection
