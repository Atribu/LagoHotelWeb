"use client"

import React from "react"
import GreenAndBlueFull from "./Images/GreenAndBlueFull2.webp"
import Link from "next/link"

export default function HomePage5() {
  return (
    <div className="flex flex-col items-center justify-center gap-0 w-screen">
      <div className="flex w-full items-center justify-center h-[191px] bg-[#fbfbfb] relative">
      <section className="w-full max-w-[680px] flex flex-col items-center justify-center z-[99] absolute -bottom-12 gap-[30px]">
      {/* Küçük üst başlık */}
      <p className=" font-jost text-[12px] leading-[14px] tracking-[0.48px] uppercase  font-medium text-black">
        A Unique Feast of Taste
      </p>

      {/* Büyük başlık */}
      <h2 className="text-black text-[48px] leading-[57.6px] font-marcellus font-normal text-center capsizedText2">
        Where Green and Blue Meets
      </h2>

      {/* İnce yatay çizgi */}

      {/* Paragraf */}
      <p className="w-full leading-[24px] font-jost text-[16px] font-normal text-center text-lagoBlack capsizedText4 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean  commodo ligula eget
        dolor. Aenean  massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus.
      </p>

      
        <Link href="/" className="text-[16px] font-normal leading-[30px] font-marcellus uppercase border-b border-lagoBlack text-center w-auto items-center justify-center">
          Discover More
        </Link>
    
    </section>
      </div>

      <div
      className="relative w-full h-[530px] 2xl:h-[50vh] bg-cover bg-start items-center justify-center"
      style={{
        backgroundImage: `url(${GreenAndBlueFull.src})`
      }}
    >
      {/* 
        Gradyan sadece üst 150px'i kaplasın:
        absolute top-0 left-0 w-full h-[150px]
      */}
     
      
    </div>
    </div>
  )
}
