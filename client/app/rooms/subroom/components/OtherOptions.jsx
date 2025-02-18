"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import options1 from "../images/option1.webp";
import options2 from "../images/option2.webp";
import options3 from "../images/option3.webp";
import user from "../images/user1.png";
import Image from "next/image";
import Link from "next/link";
import AreaSvg2 from "../../components/svg/AreaSvg2";
import UserSvg from "../../components/svg/UserSvg";
import { BiArea, BiGroup } from "react-icons/bi";


const rooms = [
  {
    id: 1,
    img: options1,
    title: "Family Room",
    description: "Room for all the family members",
    size: "38-41 m2",
    capacity: "2 adults + 1 child",
    text: "Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.",
    link: "/",
  },
  {
    id: 2,
    img: options2,
    title: "Swim-up Room",
    description: "FRESHEN UP WITHOUT LEAVING YOUR ROOM",
    size: "40-43 m2",
    capacity: "2 adults + 1 child",
    text: "Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.",
    link: "/",
  },
  {
    id: 3,
    img: options3,
    title: "Superior Room",
    description: "COMFORT FOR A GOOD PRICE",
    size: "30-32 m2",
    capacity: "2 adults + 1 child",
    text: "Lorem ipsum dolor sit amet consectetur. Vel vitae adipiscing pellentesque sed mauris nisl velit in. Imperdiet orci purus nunc nisi. Pretium malesuada sed nibh varius. Scelerisque iaculis fringilla commodo hac. Aenean nulla.",
    link: "/",
  },
];

const OtherOptions = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  return (
    <div className="flex w-screen h-auto items-center justify-center max-w-[1440px]">
      <div className="flex flex-col w-[76.8%] items-start justify-center gap-[50px]">
        <div className="flex flex-col items-start justify-center w-full text-black gap-[35px]">
          <span className="text-[12px] font-medium uppercase tracking-[0.48px] leading-[14px] font-jost">
            CHOOSE THE BEST ROOM FOR YOU
          </span>
          <h2 className="text-[48px] font-marcellus font-normal leading-[57.6px] capsizedText2">
            Other options
          </h2>
        </div>

        {/* embla carousel */}
        <div className="overflow-hidden  w-full  " ref={emblaRef}>
          <div className="flex items-start justify-start w-full">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_31%] xl:flex-[0_0_31.5%] min-w-0 mr-[2.5%]"
              >
                <div className="flex flex-col w-full items-start text-start justify-center gap-[20px] font-jost text-black ">
                  <Image
                    src={room.img}
                    alt={room.title}
                    width={room.img.width}
                    height={room.img.height}
                  />
                  <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
                    {room.description}
                  </span>
                  <h3 className="text-[30px] leading-[46.0059px] font-normal font-marcellus capsizedText3">
                    {room.title}
                  </h3>
                  <div className="flex items-center justify-start text-center gap-[20px]">
                    <div className="flex items-center justify-center gap-[10px]">
                      <BiArea size={18}/>
                      <p className="text-lagoBrown text-[16px] font-normal leading-normal">
                      30-32 m2
                    </p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-[10px]">
                     <BiGroup size={19} />
                     <p className="text-lagoBrown text-[16px] font-normal leading-normal">
                      2 adults + 1 child
                    </p>
                    </div>
                    
                  </div>
                  <p className="text-[14px] leading-[21px] font-normal capsizedText4">
                    {room.text}
                  </p>
                  <Link
                    href={room.link}
                    className="flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[40px] py-[20px] border border-lagoBrown text-center justify-center items-center h-[41px]"
                  >
                    Learn more
                  </Link>
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
  );
};

export default OtherOptions;
