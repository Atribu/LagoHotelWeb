"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import options1 from "../images/option1.webp"
import options2 from "../images/option2.webp"
import options3 from "../images/option3.webp"
import user from "../images/user1.png"
import Image from 'next/image'

const rooms = [
  {
    id: 1,
    img: options1,
    title: "Family Room",
    description: "Room for all the family members",
    size: "38-41 m2",
    capacity: "2 adults + 1 child",
  },
  {
    id: 2,
    img: options2,
    title: "Luxury Suite",
    description: "A premium experience",
    size: "40-43 m2",
    capacity: "2 adults + 1 child",
  },
  {
    id: 3,
    img: options1,
    title: "Deluxe Room",
    description: "Elegant and spacious",
    size: "30-32 m2",
    capacity: "2 adults + 1 child",
  }
];

const OtherOptions = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  return (
    <div className='flex w-screen h-auto items-center justify-center'>
      <div className='flex flex-col w-[76.8%] items-start justify-center gap-[69px]'>
        <div className='flex flex-col items-start justify-center w-full text-black'>
            <span className='text-[12px] font-medium uppercase tracking-[0.48px] leading-[14px] font-jost'>CHOOSE THE BEST ROOM FOR YOU</span>
            <h2 className='text-[48px] font-marcellus font-normal leading-[57.6px]'>Other options</h2>
        </div>

{/* embla carousel */}
<div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex ">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_33.33%] min-w-0 "
          >
            <div className="flex flex-col h-auto items-start text-start justify-center gap-[25px] font-jost text-black ">
              <Image src={room.img} alt={room.title} width={372} height={250}  />
              <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
                {room.description}
              </span>
              <h3 className="text-[30px] leading-[40px] font-normal font-marcellus">{room.title}</h3>
              <div className='flex items-center justify-start gap-[20px]'>
                <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>30-32 m2</p>
                 <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>2 adults + 1  child</p>
            </div>
              <p className="text-[14px] leading-[21px] font-normal">
                Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in.
              </p>
              <button className="flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[40px] py-[10px] border border-lagoBrown text-center justify-center items-center">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* <div className='flex w-full items-center gap-[1%]'>

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
            <Image src={options2} alt='options2' width={options2.width} height={options2.height}/>
            <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Room for all the family memebers</span>
            <h3 className='text-[30px] leading-[57.6px] font-normal font-marcellus'>Family Room</h3>
            <div className='flex items-center justify-start gap-[20px]'>
                <Image src={user} alt='user' width={12.15} height={12.15} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>40-43 m2</p>
                 <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>2 adults + 1  child</p>
            </div>
            <p className='text-[14px] leading-[21px] font-normal'>Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.</p>
            <button className='flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[40px] py-[20px] max-h-[41px] border border-lagoBrown shadow-buttonCustom text-center justify-center items-center'>LEarn more</button>
          </div>

          <div className='flex flex-col w-[33%] h-auto items-start text-start justify-center gap-[25px] font-jost text-black'>
            <Image src={options3} alt='options3' width={options3.width} height={options3.height}/>
            <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Room for all the family memebers</span>
            <h3 className='text-[30px] leading-[57.6px] font-normal font-marcellus'>Family Room</h3>
            <div className='flex items-center justify-start gap-[20px]'>
                <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>30-32 m2</p>
                 <Image src={user} alt='user' width={user.width} height={user.height} className='border border-lagoBrown m-[3px]'/>
                    <p className='text-lagoBrown text-[16px] font-normal leading-normal'>2 adults + 1  child</p>
            </div>
            <p className='text-[14px] leading-[21px] font-normal'>Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.</p>
            <button className='flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[40px] py-[20px] max-h-[41px] border border-lagoBrown shadow-buttonCustom text-center justify-center items-center'>LEarn more</button>
          </div>


        </div> */}

      </div>
    </div>
  )
}

export default OtherOptions
