"use client"

import React from "react"
import GreenAndBlueFull from "./Images/GreenAndBlueFull.png"

export default function HomePage5() {
  return (
    <div
      className="relative w-full h-[596px] mt-[330px] bg-cover bg-center items-start justify-start"
      style={{
        backgroundImage: `url(${GreenAndBlueFull.src})`
      }}
    >
      {/* 
        Gradyan sadece üst 150px'i kaplasın:
        absolute top-0 left-0 w-full h-[150px]
      */}
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white to-transparent" />
      <section className="w-full flex flex-col items-center justify-start z-[99] absolute gap-[35px] -top-[230px]">
      {/* Küçük üst başlık */}
      <p className=" font-jost text-[12px] leading-[14px] tracking-[0.48px] uppercase  font-medium text-black">
        A Unique Feast of Taste
      </p>

      {/* Büyük başlık */}
      <h2 className="text-black text-[48px] leading-[57.6px] md:text-5xl font-marcellus font-normal text-center ">
        Where Green and Blue Meets
      </h2>

      {/* İnce yatay çizgi */}

      {/* Paragraf */}
      <p className="w-full whitespace-nowrap leading-[24px] font-jost text-[16px] font-normal text-center max-w-2xl text-gray-700 px-4 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean  commodo ligula eget
        dolor. Aenean <br/> massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus<br/> mus.
      </p>

      {/* En altta sağda "Discover More" */}
      <div className="w-full max-w-3xl flex justify-center px-4">
        <button className="font-marcellus uppercase text-[16px] underline underline-offset-4 font-normal leading-[30px]">
          Discover More
        </button>
      </div>
    </section>
    </div>
  )
}
