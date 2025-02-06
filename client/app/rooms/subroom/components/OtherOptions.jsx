import React from 'react'
import options1 from "../images/option1.webp"
import user from "../images/user1.png"
import Image from 'next/image'

const OtherOptions = () => {
  return (
    <div className='flex w-screen h-auto items-center justify-center'>
      <div className='flex flex-col w-[76.8%] items-start justify-center gap-[69px]'>
        <div className='flex flex-col items-start justify-center w-full text-black'>
            <span className='text-[12px] font-medium uppercase tracking-[0.48px] leading-[14px] font-jost'>CHOOSE THE BEST ROOM FOR YOU</span>
            <h2 className='text-[48px] font-marcellus font-normal leading-[57.6px]'>Other options</h2>
        </div>

{/* embla carousel */}
        <div className='flex w-full items-center gap-[1%]'>
         <div className='flex flex-col w-[33%] h-auto items-start text-start justify-center gap-[25px] font-jost text-black'>
            <Image src={options1} alt='options1' width={options1.width} height={options1.height}/>
            <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Room for all the family memebers</span>
            <h3 className='text-[30px] leading-[57.6px] font-normal font-marcellus'>Family Room</h3>
            <div className='flex items-center justify-start gap-[20px]'>
                <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>38-41 m2</p>
                 <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>2 adults + 1  child</p>
            </div>
            <p className='text-[14px] leading-[21px] font-normal'>Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.</p>
            <button className='flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[40px] py-[20px] max-h-[41px] border border-lagoBrown shadow-buttonCustom text-center justify-center items-center'>LEarn more</button>
          </div>

          <div className='flex flex-col w-[33%] h-auto items-start text-start justify-center gap-[25px] font-jost text-black'>
            <Image src={options1} alt='options1' width={options1.width} height={options1.height}/>
            <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Room for all the family memebers</span>
            <h3 className='text-[30px] leading-[57.6px] font-normal font-marcellus'>Family Room</h3>
            <div className='flex items-center justify-start gap-[20px]'>
                <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>38-41 m2</p>
                 <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>2 adults + 1  child</p>
            </div>
            <p className='text-[14px] leading-[21px] font-normal'>Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.</p>
            <button className='flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[40px] py-[20px] max-h-[41px] border border-lagoBrown shadow-buttonCustom text-center justify-center items-center'>LEarn more</button>
          </div>

          <div className='flex flex-col w-[33%] h-auto items-start text-start justify-center gap-[25px] font-jost text-black'>
            <Image src={options1} alt='options1' width={options1.width} height={options1.height}/>
            <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Room for all the family memebers</span>
            <h3 className='text-[30px] leading-[57.6px] font-normal font-marcellus'>Family Room</h3>
            <div className='flex items-center justify-start gap-[20px]'>
                <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>38-41 m2</p>
                 <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>2 adults + 1  child</p>
            </div>
            <p className='text-[14px] leading-[21px] font-normal'>Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.</p>
            <button className='flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[40px] py-[20px] max-h-[41px] border border-lagoBrown shadow-buttonCustom text-center justify-center items-center'>LEarn more</button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default OtherOptions
