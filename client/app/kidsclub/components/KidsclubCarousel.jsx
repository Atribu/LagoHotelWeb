import React from 'react'
import PandaSvg from './PandaSvg'

const KidsclubCarousel = () => {
  return (
    <div className='flex w-screen items-center justify-center my-[75px]'>
      <div className='flex flex-col w-[76.8%] items-center justify-center'>
        <div className='flex flex-col gap-[] items-center justify-center text-center font-jost text-black'>
            <PandaSvg className="flex" width={99} height={54}/>
            <span className='text-[18px] font-medium uppercase leading-[26px] tracking-[0.72px]'>Welcome to LAGO Kids Club</span>
            <h2  className='text-[48px] font-normal leading-[26px] font-marcellus'>Where Fun and Education Meet</h2>
            <p>LAGO Kids Club, her yaş grubundan çocuğa hitap eden eğitici ve eğlenceli aktiviteler sunar. Çocuğunuzun yaratıcılığını geliştirecek ve hayallerini gerçekleştirecek bir ortam hazırladık.</p>
        </div>

        {/* carousel */}
      </div>
    </div>
  )
}

export default KidsclubCarousel
