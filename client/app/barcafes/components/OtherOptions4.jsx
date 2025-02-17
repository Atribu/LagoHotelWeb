"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

// Başlık ve açıklama kısmını render eden bileşen
const OtherOptionsHeader = ({ span, header, text }) => (
  <div className="flex flex-col items-start justify-center w-full text-black gap-[35px]">
    <span className="text-[12px] font-medium uppercase tracking-[0.48px] leading-[14px] font-jost">
      {span}
    </span>
    <h2 className="text-[48px] font-marcellus font-normal leading-[57.6px]">
      {header}
    </h2>
    <p className="text-[16px] font-normal leading-[24px] w-[70%] font-jost">
      {text}
    </p>
  </div>
);

// Her bir slide'ı render eden bileşen
const OtherOptionSlide = ({ room }) => (
  <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] xl:flex-[0_0_23.5%] min-w-0 mr-[1.5%]">
    <div className="flex flex-col w-full items-start justify-center gap-[15px] font-jost text-black">
      <Image 
        src={room.img} 
        alt={room.title} 
        width={room.img.width} 
        height={room.img.height}
        className="object-cover"
      />
      <span className="text-[12px] font-medium leading-normal tracking-[0.48px] uppercase">
        {room.description}
      </span>
      <h3 className="text-[26px] leading-normal font-normal font-marcellus">
        {room.title}
      </h3>
      <p className="text-[14px] leading-normal font-normal w-[98%]">
        {room.text}
      </p>
      <Link 
        href={room.link} 
        className="flex text-lagoBrown font-marcellus leading-[30px] uppercase font-normal text-[14px] text-start underline"
      >
        DISCOVER MORE
      </Link>
    </div>
  </div>
);

const OtherOptions4 = ({ span, header, text, images }) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <div className="flex w-screen h-auto items-center justify-center mb-[100px] max-w-[1444px]">
      <div className="flex flex-col w-[76.8%] items-center justify-center gap-[50px]">
        <OtherOptionsHeader span={span} header={header} text={text} />
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {images.map((room) => (
              <OtherOptionSlide key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherOptions4;
