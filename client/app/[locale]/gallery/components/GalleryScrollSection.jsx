"use client"
import React, { useState } from "react"
import {useTranslations} from 'next-intl';

import Image from "next/image"
import img1 from "../images/genel/img-01.jpg"
import img2 from "../images/genel/img-02.jpg"
import img3 from "../images/genel/img-03.jpg"
import img4 from "../images/genel/img-04.jpg"
import img5 from "../images/genel/img-05.jpg"
import img6 from "../images/genel/img-06.jpg"
import img7 from "../images/genel/img-07.jpg"
import img8 from "../images/genel/img-08.jpg"
import img9 from "../images/genel/img-09.jpg"
import img10 from "../images/genel/img-10.jpg"
import img11 from "../images/genel/img-11.jpg"
import img12 from "../images/genel/img-12.jpg"
import img13 from "../images/genel/img-13.jpg"
import img14 from "../images/genel/img-14.jpg"
import img15 from "../images/genel/img-15.jpg"
import img16 from "../images/genel/img-16.jpg"
import img17 from "../images/genel/img-17.jpg"
import img18 from "../images/genel/img-18.jpg"
import img19 from "../images/genel/img-19.jpg"
import img20 from "../images/genel/img-20.jpg"
import img21 from "../images/genel/img-21.jpg"
import img22 from "../images/genel/img-22.jpg"
import img23 from "../images/genel/img-23.jpg"
import img24 from "../images/genel/img-24.jpg"
import img25 from "../images/genel/img-25.jpg"
import img26 from "../images/genel/img-26.jpg"
import img27 from "../images/genel/img-27.jpg"
import img28 from "../images/genel/img-28.jpg"
import img29 from "../images/genel/img-29.jpg"
import img30 from "../images/genel/img-30.jpg"
import img31 from "../images/genel/img-31.jpg"
import img32 from "../images/genel/img-32.jpg"
import img33 from "../images/genel/img-33.jpg"
import img34 from "../images/genel/img-34.jpg"
import img35 from "../images/genel/img-35.jpg"
import img36 from "../images/genel/img-36.jpg"
import img37 from "../images/genel/img-37.jpg"
import img38 from "../images/genel/img-38.jpg"
import img39 from "../images/genel/img-39.jpg"
import img40 from "../images/genel/img-40.jpg"
import img41 from "../images/genel/img-41.jpg"
import img42 from "../images/genel/img-42.jpg"
import img43 from "../images/genel/img-43.jpg"
import img44 from "../images/genel/img-44.jpg"
import img45 from "../images/genel/img-45.jpg"

import rooms1 from "../images/rooms/DJI_0020.webp"
import rooms2 from "../images/rooms/DJI_0138.webp"
import rooms3 from "../images/rooms/DJI_0139.webp"
import rooms4 from "../images/rooms/DJI_0147.webp"
import rooms5 from "../images/rooms/SRF_2044.webp"
import rooms6 from "../images/rooms/SRF_2049.webp"
import rooms7 from "../images/rooms/SRF_2069.webp"
import rooms8 from "../images/rooms/SRF_2086.webp"
import rooms9 from "../images/rooms/SRF_2119.webp"
import rooms10 from "../images/rooms/SRF_3176.webp"
import rooms11 from "../images/rooms/SRF_3204.webp"
import rooms12 from "../images/rooms/SRF_3211.webp"
import rooms13 from "../images/rooms/SRF_3239.webp"
import rooms14 from "../images/rooms/SRF_3249.webp"
import rooms15 from "../images/rooms/SRF_3254.webp"
import rooms16 from "../images/rooms/SRF_3259.webp"
import rooms17 from "../images/rooms/SRF_3265.webp"
import rooms18 from "../images/rooms/SRF_3789.webp"
import rooms19 from "../images/rooms/SRF_3792.webp"
import rooms20 from "../images/rooms/SRF_3799.webp"
import rooms21 from "../images/rooms/SRF_3801.webp"
import rooms22 from "../images/rooms/SRF_3912.webp"
import rooms23 from "../images/rooms/SRF_3979 1.webp"
import rooms24 from "../images/rooms/SRF_4397.webp"
import rooms25 from "../images/rooms/SRF_4405.webp"
import rooms26 from "../images/rooms/SRF_4424.webp"

import entertainment1 from "../images/entertainment/SRF_2537.webp"
import entertainment2 from "../images/entertainment/SRF_2542.webp"
import entertainment3 from "../images/entertainment/SRF_2545.webp"
import entertainment4 from "../images/entertainment/SRF_2547.webp"
import entertainment5 from "../images/entertainment/SRF_2570.webp"
import entertainment6 from "../images/entertainment/SRF_2572.webp"
import entertainment7 from "../images/entertainment/SRF_2575.webp"
import entertainment8 from "../images/entertainment/SRF_2579.webp"
import entertainment9 from "../images/entertainment/SRF_2584.webp"
import entertainment10 from "../images/entertainment/SRF_2586.webp"
import entertainment11 from "../images/entertainment/SRF_2598.webp"
import entertainment12 from "../images/entertainment/SRF_2666.webp"
import entertainment13 from "../images/entertainment/SRF_2670.webp"
import entertainment14 from "../images/entertainment/SRF_2685.webp"
import entertainment15 from "../images/entertainment/SRF_2695.webp"
import entertainment16 from "../images/entertainment/SRF_2699.webp"
import entertainment17 from "../images/entertainment/SRF_3690.webp"
import entertainment18 from "../images/entertainment/SRF_3702.webp"
import entertainment19 from "../images/entertainment/SRF_3706.webp"
import entertainment20 from "../images/entertainment/SRF_4312.webp"

import flavours1 from "../images/flavours/anatolia.webp"
import flavours2 from "../images/flavours/art1.webp"
import flavours3 from "../images/flavours/art2-1.webp"
import flavours4 from "../images/flavours/art2.webp"
import flavours5 from "../images/flavours/bist2-1.webp"
import flavours6 from "../images/flavours/bist2.webp"
import flavours7 from "../images/flavours/bistrestaurant2-1.webp"
import flavours8 from "../images/flavours/bistrestaurant2.webp"
import flavours9 from "../images/flavours/despina.webp"
import flavours10 from "../images/flavours/gusto-1.webp"
import flavours11 from "../images/flavours/gusto.webp"
import flavours12 from "../images/flavours/SRF_2383.webp"
import flavours13 from "../images/flavours/SRF_2404_2.webp"
import flavours14 from "../images/flavours/SRF_3674.webp"
import flavours15 from "../images/flavours/SRF_5067.webp"
import flavours16 from "../images/flavours/SRF_7744-min.webp"
import flavours17 from "../images/flavours/SRF_7744.webp"
import flavours18 from "../images/flavours/SRF_7759.webp"
import flavours19 from "../images/flavours/SRF_8148-min.webp"
import flavours20 from "../images/flavours/SRF_8188-min (1).webp"
import flavours21 from "../images/flavours/SRF_8661.webp"
import flavours22 from "../images/flavours/SRF_8663.webp"
import flavours23 from "../images/flavours/SRF_8666.webp"
import flavours24 from "../images/flavours/SRF_8678.webp"
import flavours25 from "../images/flavours/SRF_8685.webp"
import flavours26 from "../images/flavours/SRF_8694.webp"
import flavours27 from "../images/flavours/SRF_8734.webp"
import flavours28 from "../images/flavours/SRF_8749.webp"
import flavours29 from "../images/flavours/SRF_8756.webp"

import kidsclub1 from "../images/kidsclub/SRF_3805.webp"
import kidsclub2 from "../images/kidsclub/SRF_3809.webp"
import kidsclub3 from "../images/kidsclub/SRF_3813.webp"
import kidsclub4 from "../images/kidsclub/SRF_4277.webp"
import kidsclub5 from "../images/kidsclub/SRF_4307.webp"
import kidsclub6 from "../images/kidsclub/SRF_4441.webp"
import kidsclub7 from "../images/kidsclub/SRF_4462.webp"
import kidsclub8 from "../images/kidsclub/SRF_4467.webp"
import kidsclub9 from "../images/kidsclub/SRF_4469.webp"
import kidsclub10 from "../images/kidsclub/SRF_4487.webp"
import kidsclub11 from "../images/kidsclub/SRF_4488.webp"
import kidsclub12 from "../images/kidsclub/SRF_4493.webp"
import kidsclub13 from "../images/kidsclub/SRF_4511.webp"
import kidsclub14 from "../images/kidsclub/SRF_4518.webp"
import kidsclub15 from "../images/kidsclub/SRF_4523.webp"

import pool1 from "../images/pool/DJI_0017.webp"
import pool2 from "../images/pool/DJI_0020.webp"
import pool3 from "../images/pool/DJI_0029.webp"
import pool4 from "../images/pool/SRF_2300.webp"
import pool5 from "../images/pool/SRF_2813.webp"
import pool6 from "../images/pool/SRF_2852.webp"
import pool7 from "../images/pool/SRF_2941.webp"
import pool8 from "../images/pool/SRF_2946.webp"
import pool9 from "../images/pool/SRF_2952.webp"
import pool10 from "../images/pool/SRF_2957.webp"
import pool11 from "../images/pool/SRF_2974.webp"
import pool12 from "../images/pool/SRF_2989.webp"
import pool13 from "../images/pool/SRF_4584.webp"
import pool14 from "../images/pool/SRF_4708.webp"
import pool15 from "../images/pool/SRF_7557.webp"
import pool16 from "../images/pool/SRF_7571.webp"
import pool17 from "../images/pool/SRF_7955.webp"
import pool18 from "../images/pool/SRF_7996-min.webp"
import pool19 from "../images/pool/SRF_8358-min.webp"
import pool20 from "../images/pool/SRF_8394-min.webp"

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
import villa6 from "../images/villa/SRF_2231.webp"
import villa7 from "../images/villa/SRF_2246.webp"
import villa8 from "../images/villa/SRF_2251.webp"
import villa9 from "../images/villa/SRF_2253.webp"
import villa10 from "../images/villa/SRF_2266.webp"
import villa11 from "../images/villa/SRF_2276.webp"

const GalleryScrollSection = () => {
  const t = useTranslations('Gallery');

  // Kategorilere göre resimler
const imageCategories = {
  [t("general")]: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45],
  [t("rooms")]: [rooms1, rooms2, rooms3, rooms4, rooms5,rooms6,rooms7,rooms8,rooms9,rooms10,rooms11,rooms12,rooms13,rooms14,rooms15,rooms16,rooms17,rooms18,rooms19,rooms20,rooms21,rooms22,rooms23,rooms24,rooms25,rooms26],
  [t("villa")]: [villa1, villa2, villa3, villa4, villa5,villa6,villa7,villa8,villa9,villa10,villa11],
  [t("pool")]: [pool1, pool2, pool3, pool4, pool5,pool6,pool7,pool8,pool9,pool10,pool11,pool12,pool13,pool14,pool15,pool16,pool17,pool18,pool19,pool20],
  [t("flavours")]: [flavours1, flavours2, flavours3, flavours4, flavours5,flavours6,flavours7,flavours8,flavours9,flavours10,flavours11,flavours12,flavours13,flavours14,flavours15,flavours16,flavours17,flavours18,flavours19,flavours20,flavours21,flavours22,flavours23,flavours24,flavours25,flavours26,flavours27,flavours28,flavours29],
  [t("spa")]: [spa1, spa2, spa3, spa4, spa5],
  [t("kidsclub")]: [kidsclub1, kidsclub2, kidsclub3, kidsclub4, kidsclub5,kidsclub6,kidsclub7,kidsclub8,kidsclub9,kidsclub10,kidsclub11,kidsclub12,kidsclub13,kidsclub14,kidsclub15],
  [t("entertainment")]: [entertainment1, entertainment2, entertainment3, entertainment4, entertainment5,entertainment6,entertainment7,entertainment8,entertainment9,entertainment10,entertainment11,entertainment12,entertainment13,entertainment14,entertainment15,entertainment16,entertainment17,entertainment18,entertainment19,entertainment20],
}

const categories = Object.keys(imageCategories)
  // Seçili kategori (başlangıçta "GENERAL VIEW")
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [modalImage, setModalImage] = useState(null) // Seçilen resmi tutacak state

  return (
    <div className="flex w-screen items-center justify-center mt-[50px] max-w-[1440px]">
      <div className="flex flex-col items-center justify-between w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[40px]">
        
        {/* Butonlar */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:flex items-center justify-center xl:justify-between gap-[10px] w-full max-w-[1008px]">
          {Object.keys(imageCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex border border-lagoGray items-center justify-center whitespace-nowrap py-[12px] px-[16px] lg:py-[16px] lg:px-[20px] lg:w-[140px] text-[12px] lg:text-[14px] font-medium uppercase leading-[125%] -tracking-[0.33px] font-jost ${
                selectedCategory === category ? "bg-lagoGray text-white" : "text-lagoGray"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resimler */}
        <div className="flex lg:w-[1006px] h-[500px] md:h-[1000px] lg:h-[1700px]">
          <div className="flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto">
            <div className="columns-2 lg:columns-3 gap-[16px] lg:gap-[0px] transition-all duration-[350ms] ease-in-out cursor-pointer">
              {imageCategories[selectedCategory].map((imgSrc, index) => (
                <div
                  className="mb-[19.16px] transition-all duration-[350ms] ease-in-out cursor-pointer"
                  key={index}
                  onClick={() => setModalImage(imgSrc)} // Resme tıklandığında modal açılır
                >
                  <Image src={imgSrc} alt="gallery" className="lg:w-[322px] h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal (Lightbox) */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalImage(null)} // Modal dışına tıklandığında kapanır
          >
            <div className="relative w-[80%] max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Image src={modalImage} alt="Enlarged gallery" className="w-full h-auto object-contain" />
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default GalleryScrollSection
