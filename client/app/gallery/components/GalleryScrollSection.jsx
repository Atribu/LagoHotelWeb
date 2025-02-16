"use client"
import React, { useState } from "react"
import Image from "next/image"
import img1 from "../images/genel/DJI_0017.webp"
import img2 from "../images/genel/DJI_0020.webp"
import img3 from "../images/genel/DJI_0029.webp"
import img4 from "../images/genel/SRF_2279.webp"
import img5 from "../images/genel/SRF_2283.webp"
import img6 from "../images/genel/SRF_2288.webp"
import img7 from "../images/genel/SRF_2289.webp"
import img8 from "../images/genel/SRF_2294.webp"
import img9 from "../images/genel/SRF_2300.webp"
import img10 from "../images/genel/SRF_2813.webp"
import img11 from "../images/genel/SRF_2852.webp"
import img12 from "../images/genel/SRF_2941.webp"
import img13 from "../images/genel/SRF_2946.webp"
import img14 from "../images/genel/SRF_2952.webp"
import img15 from "../images/genel/SRF_2957.webp"
import img16 from "../images/genel/SRF_2974.webp"
import img17 from "../images/genel/SRF_2989.webp"
import img18 from "../images/genel/SRF_3048.webp"
import img19 from "../images/genel/SRF_3563.webp"
import img20 from "../images/genel/SRF_3839.webp"
import img21 from "../images/genel/SRF_4270.webp"
import img22 from "../images/genel/SRF_4397.webp"
import img23 from "../images/genel/SRF_5773-1-1.webp"
import img24 from "../images/genel/SRF_57731.webp"
import img25 from "../images/genel/SRF_5774.webp"
import img26 from "../images/genel/SRF_6331.webp"
import img27 from "../images/genel/SRF_6687.webp"
import img28 from "../images/genel/SRF_6706.webp"
import img29 from "../images/genel/SRF_7557.webp"
import img30 from "../images/genel/SRF_7571.webp"
import img31 from "../images/genel/SRF_7633.webp"
import img32 from "../images/genel/SRF_7677-min.webp"
import img33 from "../images/genel/SRF_7759-min.webp"
import img34 from "../images/genel/SRF_7853-min.webp"
import img35 from "../images/genel/SRF_7941-min.webp"
import img36 from "../images/genel/SRF_7955.webp"
import img37 from "../images/genel/SRF_7996-min.webp"
import img38 from "../images/genel/SRF_8095-min.webp"
import img39 from "../images/genel/SRF_8148-min.webp"
import img40 from "../images/genel/SRF_8188-min.webp"
import img41 from "../images/genel/SRF_8358-min.webp"
import img42 from "../images/genel/SRF_8394-min.webp"
import img43 from "../images/genel/SRF_8488-min.webp"
import img44 from "../images/genel/SRF_9592.webp"
import img45 from "../images/genel/SRF_9631.webp"

import rooms1 from "../images/rooms/DJI_0020.webp"
import rooms2 from "../images/rooms/DJI_0138.webp"
import rooms3 from "../images/rooms/DJI_0139.webp"
import rooms4 from "../images/rooms/DJI_0147.webp"
import rooms5 from "../images/rooms/SRF_2044.webp"

import entertainment1 from "../images/entertainment/SRF_2537.webp"
import entertainment2 from "../images/entertainment/SRF_2542.webp"
import entertainment3 from "../images/entertainment/SRF_2545.webp"
import entertainment4 from "../images/entertainment/SRF_2547.webp"
import entertainment5 from "../images/entertainment/SRF_2570.webp"

import flavours1 from "../images/flavours/anatolia.webp"
import flavours2 from "../images/flavours/art1.webp"
import flavours3 from "../images/flavours/art2-1.webp"
import flavours4 from "../images/flavours/art2.webp"
import flavours5 from "../images/flavours/bist2-1.webp"

import kidsclub1 from "../images/kidsclub/SRF_3805.webp"
import kidsclub2 from "../images/kidsclub/SRF_3809.webp"
import kidsclub3 from "../images/kidsclub/SRF_3813.webp"
import kidsclub4 from "../images/kidsclub/SRF_4277.webp"
import kidsclub5 from "../images/kidsclub/SRF_4307.webp"

import pool1 from "../images/pool/DJI_0017.webp"
import pool2 from "../images/pool/DJI_0020.webp"
import pool3 from "../images/pool/DJI_0029.webp"
import pool4 from "../images/pool/SRF_2300.webp"
import pool5 from "../images/pool/SRF_2813.webp"

import spa1 from "../images/spa/SRF_3103.webp"
import spa2 from "../images/spa/SRF_3123.webp"
import spa3 from "../images/spa/SRF_3128.webp"
import spa4 from "../images/spa/SRF_3148.webp"
import spa5 from "../images/spa/SRF_3163.webp"

import villa1 from "../images/villa/SRF_2169.webp"
import villa2 from "../images/villa/SRF_2192.webp"
import villa3 from "../images/villa/SRF_2205.webp"
import villa4 from "../images/villa/SRF_2216.webp"
import villa5 from "../images/villa/SRF_2220.webp"

// Kategorilere göre resimler
const imageCategories = {
  "GENERAL VIEW": [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45],
  ROOMS: [rooms1, rooms2, rooms3, rooms4, rooms5],
  VILLA: [villa1, villa2, villa3, villa4, villa5],
  "POOL & BEACH": [pool1, pool2, pool3, pool4, pool5],
  FLAVOURS: [flavours1, flavours2, flavours3, flavours4, flavours5],
  "SPA & FITNESS": [spa1, spa2, spa3, spa4, spa5],
  "KIDS CLUB": [kidsclub1, kidsclub2, kidsclub3, kidsclub4, kidsclub5],
  ENTERTAINMENT: [entertainment1, entertainment2, entertainment3, entertainment4, entertainment5],
}

const categories = Object.keys(imageCategories)

const GalleryScrollSection = () => {
  // Seçili kategori (başlangıçta "GENERAL VIEW")
  const [selectedCategory, setSelectedCategory] = useState("GENERAL VIEW")

  return (
    <div className="flex w-screen items-center justify-center mt-[50px] max-w-[1920px]">
      <div className="flex flex-col items-center justify-between w-[75%] gap-[40px]">
        
        {/* Butonlar */}
        <div className="flex items-center justify-between gap-[10px] flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex border border-lagoGray items-center justify-center whitespace-nowrap py-[16px] px-[20px] w-[140px] text-[14px] font-medium uppercase leading-[125%] -tracking-[0.308px] font-jost ${
                selectedCategory === category ? "bg-lagoGray text-white" : "text-lagoGray"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resimler */}
        <div className="flex w-full h-[1700px]">
          <div className="flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto">
            <div className="columns-3 gap-3 px-3 mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer">
              {imageCategories[selectedCategory].map((imgSrc, index) => (
                <div className="mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer" key={index}>
                  <Image src={imgSrc} alt="gallery" className="w-[100%]" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GalleryScrollSection
