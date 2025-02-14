import React from 'react'
import EnvironmentSvg from './EnvironmentSvg'
import ActiviteSvg from './ActiviteSvg'
import SocialSvg from './SocialSvg'
import StaffSvg from './StaffSvg'

const KidsIconsSection = () => {
  return (
    <div className='flex w-screen items-center justify-center my-[50px] max-w-[1444px]'>
      <div className='w-[76.8%] flex justify-between items-center '>
        <div className='flex flex-col gap-[18px] items-center justify-center'>
            <div className='flex bg-[#84C9EA] rounded-full p-[32px]'>
                <EnvironmentSvg className="flex" width={57} height={56}/>
            </div>
            <div className='flex flex-col items-center justify-center gap-[8px]'>
                <span className='text-[#121212] font-marcellus font-normal leading-[26px] text-[18px]'>Secure Environment</span>
                <div className='bg-[#84C9EA] h-[6px] w-[50px]'></div>
            </div>
        </div>

        <div className='flex flex-col gap-[18px] items-center justify-center'>
            <div className='flex bg-[#84C9EA] rounded-full p-[32px]'>
                <ActiviteSvg className="flex" width={57} height={56}/>
            </div>
            <div className='flex flex-col items-center justify-center gap-[8px]'>
                <span className='text-[#121212] font-marcellus font-normal leading-[26px] text-[18px]'>Secure Environment</span>
                <div className='bg-[#84C9EA] h-[6px] w-[50px]'></div>
            </div>
        </div>

        <div className='flex flex-col gap-[18px] items-center justify-center'>
            <div className='flex bg-[#84C9EA] rounded-full p-[32px]'>
                <SocialSvg className="flex" width={57} height={56}/>
            </div>
            <div className='flex flex-col items-center justify-center gap-[8px]'>
                <span className='text-[#121212] font-marcellus font-normal leading-[26px] text-[18px]'>Secure Environment</span>
                <div className='bg-[#84C9EA] h-[6px] w-[50px]'></div>
            </div>
        </div>

        <div className='flex flex-col gap-[18px] items-center justify-center'>
            <div className='flex bg-[#84C9EA] rounded-full p-[32px]'>
                <StaffSvg className="flex" width={57} height={56}/>
            </div>
            <div className='flex flex-col items-center justify-center gap-[8px]'>
                <span className='text-[#121212] font-marcellus font-normal leading-[26px] text-[18px]'>Secure Environment</span>
                <div className='bg-[#84C9EA] h-[6px] w-[50px]'></div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default KidsIconsSection
