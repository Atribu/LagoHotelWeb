import React from 'react'
import oda from "../images/oda.png"
import MinibarSvg from './svg/MinibarSvg'
import FoundationSvg from './svg/FoundationSvg'
import WatchSvg from './svg/WatchSvg'
import TvSvg from './svg/TvSvg'

const RoomsParallaxSection = () => {
  return (
    <div className='flex w-screen h-[610px] 2xl:h-[800px] items-center justify-center parallax relative ' style={{ backgroundImage: `url(${oda.src})` }}>
        <div className='absolute inset-0 bg-lagoBlack/35 z-[1] '></div>
      <div className='flex flex-col w-[76.8%] items-start justify-center gap-[38px] font-jost text-white z-50 max-w-[1920px]'>
      <span className=' text-[12px] font-medium leading-[14px] -tracking-[0.48px] uppercase'>The Essential In-Room AmenitieS</span>

     <div className='flex w-full items-center justify-start gap-[40px]'>
     <div className='flex flex-col w-[49.8%] items-start justify-center gap-[68px]'>
            <h3 className='font-marcellus font-normal text-[36px] leading-[49px] -tracking-[0.792px]'>Our rooms have all the essentials <br></br>you need for your stay.</h3>

            <div className='flex w-full items-center justify-start gap-[37px] mt-[30px] py-[8px]'>

            <div className='flex flex-col w-[49.8%] items-start justify-center gap-[15px]'>
               <MinibarSvg className="flex" width={58} height={58}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Mini Bar</h5>
                <p className='text-[14px] font-normal leading-[21px] w-[85%]'>Daily replenishments include water, soft <br></br> drinks, beer, milk with fruit, chocolate, <br></br> and a cracker.</p>
            </div>

            <div className='flex flex-col w-[49.8%] items-start justify-center gap-[15px]'>
                <FoundationSvg className="flex" width={40} height={40}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Cosmetics</h5>
                <p className='text-[14px] font-normal leading-[21px] w-[85%]'>Bathroom essentials include shampoo, <br></br> conditioner, shower gel, soap, loofah, <br></br>hairdryer, and body cream.</p>
            </div>
            </div>
        </div>

        <div className='flex flex-col w-[49.2%] items-start justify-center gap-[68px]'>
            <p className='text-[16px] font-normal leading-normal -tracking-[0.352px]'>Enjoy a seamless stay with all the essential amenities at your fingertips. From daily <br></br>minibar replenishments to premium bath essentials, secure room access, and  <br></br>uninterrupted entertainment with LED TV and 24-hour WiFi, we ensure your  <br></br>comfort at every moment.</p>

            <div className='flex w-full items-center justify-start gap-[37px] mt-[30px] py-[8px]'>

            <div className='flex flex-col w-[49%] items-start justify-center gap-[15px]'>
            <WatchSvg className="flex" width={40} height={40}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Room Access</h5>
                <p className='text-[14px] font-normal leading-[21px] w-[85%]'>All door locks are securely operated <br></br>using a convenient chip bracelet key <br></br>system for easy access.</p>
            </div>

            <div className='flex flex-col w-[49%] items-start justify-center gap-[15px]'>
            <TvSvg className="flex" width={40} height={40}/>
                <h5 className='text-[18px] font-normal leading-[30px]'>Wifi & LedTV</h5>
                <p className='text-[14px] font-normal leading-[21px] w-[85%]'>LED TV with international and national<br></br> satellite channels, radio, and 24-hour<br></br> WiFi access.</p>
            </div>
            </div>
        </div>
     </div>


      </div>
    </div>
  )
}

export default RoomsParallaxSection
