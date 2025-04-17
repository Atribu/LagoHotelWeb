"use client"
import React, { useState, useEffect } from "react"
import {useTranslations} from 'next-intl';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Image from "next/image"
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
import img32 from "../images/genel/img-32.jpg"
import img33 from "../images/genel/img-33.jpg"
import img34 from "../images/genel/img-34.jpg"
import img35 from "../images/genel/img-35.jpg"
import img36 from "../images/genel/img-36.jpg"
import img38 from "../images/genel/img-38.jpg"
import img39 from "../images/genel/img-39.jpg"
import img42 from "../images/genel/img-42.jpg"
import img43 from "../images/genel/img-43.jpg"
import img44 from "../images/genel/img-44.jpg"
import img45 from "../images/genel/img-45.jpg"

import rooms1 from "../images/rooms/img-01.jpg"
import rooms2 from "../images/rooms/img-02.jpg"
import rooms3 from "../images/rooms/img-03.jpg"
import rooms4 from "../images/rooms/img-04.jpg"
import rooms5 from "../images/rooms/img-05.jpg"
import rooms6 from "../images/rooms/img-06.jpg"
import rooms7 from "../images/rooms/img-07.jpg"
import rooms8 from "../images/rooms/img-08.jpg"
import rooms9 from "../images/rooms/img-09.jpg"
import rooms10 from "../images/rooms/img-10.jpg"
import rooms11 from "../images/rooms/img-11.jpg"
import rooms12 from "../images/rooms/img-12.jpg"
import rooms13 from "../images/rooms/img-13.jpg"
import rooms14 from "../images/rooms/img-14.jpg"
import rooms15 from "../images/rooms/img-15.jpg"
import rooms16 from "../images/rooms/img-16.jpg"
import rooms17 from "../images/rooms/img-17.jpg"
import rooms18 from "../images/rooms/img-18.jpg"
import rooms19 from "../images/rooms/img-19.jpg"
import rooms20 from "../images/rooms/img-20.jpg"
import rooms21 from "../images/rooms/img-21.jpg"
import rooms22 from "../images/rooms/img-22.jpg"
import rooms23 from "../images/rooms/img-23.jpg"
import rooms24 from "../images/rooms/img-24.jpg"
import rooms25 from "../images/rooms/img-25.jpg"

import entertainment1 from "../images/entertainment/img-01.jpg"
import entertainment2 from "../images/entertainment/img-02.jpg"
import entertainment3 from "../images/entertainment/img-03.jpg"
import entertainment4 from "../images/entertainment/img-04.jpg"
import entertainment5 from "../images/entertainment/img-05.jpg"
import entertainment6 from "../images/entertainment/img-06.jpg"
import entertainment7 from "../images/entertainment/img-07.jpg"
import entertainment8 from "../images/entertainment/img-08.jpg"
import entertainment9 from "../images/entertainment/img-09.jpg"
import entertainment10 from "../images/entertainment/img-10.jpg"
import entertainment11 from "../images/entertainment/img-11.jpg"
import entertainment12 from "../images/entertainment/img-12.jpg"
import entertainment13 from "../images/entertainment/img-13.jpg"
import entertainment14 from "../images/entertainment/img-14.jpg"
import entertainment15 from "../images/entertainment/img-15.jpg"
import entertainment16 from "../images/entertainment/img-16.jpg"

import flavours1 from "../images/flavours/img-01.jpg"
import flavours2 from "../images/flavours/img-02.jpg"
import flavours3 from "../images/flavours/img-03.jpg"
import flavours4 from "../images/flavours/img-04.jpg"
import flavours5 from "../images/flavours/img-05.jpg"
import flavours6 from "../images/flavours/img-06.jpg"
import flavours7 from "../images/flavours/img-07.jpg"
import flavours8 from "../images/flavours/img-08.jpg"
import flavours9 from "../images/flavours/img-09.jpg"
import flavours10 from "../images/flavours/img-10.jpg"
import flavours11 from "../images/flavours/img-11.jpg"
import flavours12 from "../images/flavours/img-12.jpg"
import flavours13 from "../images/flavours/img-13.jpg"
import flavours14 from "../images/flavours/img-14.jpg"
import flavours15 from "../images/flavours/img-15.jpg"
import flavours16 from "../images/flavours/img-16.jpg"
import flavours17 from "../images/flavours/img-17.jpg"
import flavours18 from "../images/flavours/img-18.jpg"
import flavours19 from "../images/flavours/img-19.jpg"
import flavours20 from "../images/flavours/img-20.jpg"
import flavours21 from "../images/flavours/img-21.jpg"
import flavours22 from "../images/flavours/img-22.jpg"
import flavours23 from "../images/flavours/img-23.jpg"
import flavours24 from "../images/flavours/img-24.jpg"
import flavours25 from "../images/flavours/img-25.jpg"
import flavours26 from "../images/flavours/img-26.jpg"
import flavours27 from "../images/flavours/img-27.jpg"
import flavours28 from "../images/flavours/img-28.jpg"
import flavours29 from "../images/flavours/img-29.jpg"
import flavours30 from "../images/flavours/img-30.jpg"
import flavours31 from "../images/flavours/img-31.jpg"
import flavours32 from "../images/flavours/img-32.jpg"
import flavours33 from "../images/flavours/img-33.jpg"
import flavours34 from "../images/flavours/img-34.jpg"

import kidsclub1 from "../images/kidsclub/img-02.jpg"
import kidsclub2 from "../images/kidsclub/img-03.jpg"
import kidsclub3 from "../images/kidsclub/img-04.jpg"
import kidsclub4 from "../images/kidsclub/img-05.jpg"
import kidsclub5 from "../images/kidsclub/img-06.jpg"
import kidsclub6 from "../images/kidsclub/img-07.jpg"
import kidsclub7 from "../images/kidsclub/img-08.jpg"
import kidsclub8 from "../images/kidsclub/img-09.jpg"
import kidsclub9 from "../images/kidsclub/img-10.jpg"
import kidsclub10 from "../images/kidsclub/img-11.jpg"
import kidsclub11 from "../images/kidsclub/img-12.jpg"
import kidsclub12 from "../images/kidsclub/img-13.jpg"
import kidsclub13 from "../images/kidsclub/img-14.jpg"
import kidsclub14 from "../images/kidsclub/img-15.jpg"
import kidsclub15 from "../images/kidsclub/img-16.jpg"
import kidsclub16 from "../images/kidsclub/img-17.jpg"
import kidsclub17 from "../images/kidsclub/img-18.jpg"
import kidsclub18 from "../images/kidsclub/img-19.jpg"
import kidsclub19 from "../images/kidsclub/img-20.jpg"
import kidsclub20 from "../images/kidsclub/img-21.jpg"

import pool1 from "../images/pool/img-01.jpg"
import pool2 from "../images/pool/img-02.jpg"
import pool3 from "../images/pool/img-03.jpg"
import pool4 from "../images/pool/img-04.jpg"
import pool5 from "../images/pool/img-05.jpg"
import pool6 from "../images/pool/img-06.jpg"
import pool7 from "../images/pool/img-07.jpg"
import pool8 from "../images/pool/img-08.jpg"
import pool9 from "../images/pool/img-09.jpg"
import pool10 from "../images/pool/img-10.jpg"
import pool11 from "../images/pool/img-11.jpg"
import pool12 from "../images/pool/img-12.jpg"
import pool13 from "../images/pool/img-13.jpg"
import pool14 from "../images/pool/img-14.jpg"
import pool15 from "../images/pool/img-15.jpg"
import pool16 from "../images/pool/img-16.jpg"
import pool17 from "../images/pool/img-17.jpg"
import pool18 from "../images/pool/img-18.jpg"
import pool19 from "../images/pool/img-19.jpg"
import pool20 from "../images/pool/img-20.jpg"
import pool21 from "../images/pool/img-21.jpg"
import pool22 from "../images/pool/img-22.jpg"
import pool23 from "../images/pool/img-23.jpg"
import pool24 from "../images/pool/img-24.jpg"
import pool25 from "../images/pool/img-25.jpg"
import pool26 from "../images/pool/img-26.jpg"
import pool27 from "../images/pool/img-27.jpg"
import pool28 from "../images/pool/img-28.jpg"
import pool29 from "../images/pool/img-29.jpg"

import spa1 from "../images/spa/img-01.jpg"
import spa2 from "../images/spa/img-02.jpg"
import spa3 from "../images/spa/img-03.jpg"
import spa4 from "../images/spa/img-04.jpg"
import spa5 from "../images/spa/img-05.jpg"
import spa6 from "../images/spa/img-06.jpg"
import spa7 from "../images/spa/img-07.jpg"
import spa8 from "../images/spa/img-08.jpg"
import spa9 from "../images/spa/img-09.jpg"
import spa10 from "../images/spa/img-10.jpg"
import spa11 from "../images/spa/img-11.jpg"
import spa12 from "../images/spa/img-12.jpg"
import spa13 from "../images/spa/img-13.jpg"
import spa14 from "../images/spa/img-14.jpg"
import spa15 from "../images/spa/img-15.jpg"

import villa1 from "../images/villa/img-01.jpg"
import villa2 from "../images/villa/img-02.jpg"
import villa3 from "../images/villa/img-03.jpg"
import villa4 from "../images/villa/img-04.jpg"
import villa5 from "../images/villa/img-05.jpg"
import villa6 from "../images/villa/img-06.jpg"
import villa7 from "../images/villa/img-07.jpg"
import villa8 from "../images/villa/img-08.jpg"
import villa9 from "../images/villa/img-09.jpg"
import villa10 from "../images/villa/img-10.jpg"
import villa11 from "../images/villa/img-11.jpg"
import villa12 from "../images/villa/img-12.jpg"
import villa13 from "../images/villa/img-13.jpg"

const GalleryScrollSection = () => {
  const [modalIndex, setModalIndex] = useState(null);
  const t = useTranslations('Gallery');
  

  // Kategorilere göre resimler
const imageCategories = {
  [t("general")]: [ img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img32, img33, img34, img35, img36, img38, img39, img42, img43, img44, img45],
  [t("rooms")]: [rooms1, rooms2, rooms3, rooms4, rooms5,rooms6,rooms7,rooms8,rooms9,rooms10,rooms11,rooms12,rooms13,rooms14,rooms15,rooms16,rooms17,rooms18,rooms19,rooms20,rooms21,rooms22,rooms23,rooms24,rooms25],
  [t("villa")]: [villa1, villa2, villa3, villa4, villa5,villa6,villa7,villa8,villa9,villa10,villa11,villa12,villa13],
  [t("pool")]: [pool1, pool2, pool3, pool4, pool5,pool6,pool7,pool8,pool9,pool10,pool11,pool12,pool13,pool14,pool15,pool16,pool17,pool18,pool19,pool20,pool21,pool22,pool23,pool24,pool25,pool26,pool27,pool28,pool29],
  [t("flavours")]: [flavours1, flavours2, flavours3, flavours4, flavours5,flavours6,flavours7,flavours8,flavours9,flavours10,flavours11,flavours12,flavours13,flavours14,flavours15,flavours16,flavours17,flavours18,flavours19,flavours20,flavours21,flavours22,flavours23,flavours24,flavours25,flavours26,flavours27,flavours28,flavours29,flavours30,flavours31,flavours32,flavours33,flavours34],
  [t("spa")]: [spa1, spa2, spa3, spa4, spa5,spa6,spa7,spa8,spa9,spa10,spa11,spa12,spa13,spa14,spa15],
  [t("kidsclub")]: [kidsclub1, kidsclub2, kidsclub3, kidsclub4, kidsclub5,kidsclub6,kidsclub7,kidsclub8,kidsclub9,kidsclub10,kidsclub11,kidsclub12,kidsclub13,kidsclub14,kidsclub15,kidsclub16,kidsclub17,kidsclub18,kidsclub19,kidsclub20],
  [t("entertainment")]: [entertainment1, entertainment2, entertainment3, entertainment4, entertainment5,entertainment6,entertainment7,entertainment8,entertainment9,entertainment10,entertainment11,entertainment12,entertainment13,entertainment14,entertainment15,entertainment16],
}

const categories = Object.keys(imageCategories)
  // Seçili kategori (başlangıçta "GENERAL VIEW")
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [modalImage, setModalImage] = useState(null) 

  const openModal = (img, index) => {
    setModalImage(img);
    setModalIndex(index);
  };

  const scrollPrev = () => {
    const images = imageCategories[selectedCategory];
    const newIndex = modalIndex === 0 ? images.length - 1 : modalIndex - 1;
    setModalIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  // Sağ ok: index'i artır, wrap-around uygulayarak ilk elemana geçsin
  const scrollNext = () => {
    const images = imageCategories[selectedCategory];
    const newIndex = modalIndex === images.length - 1 ? 0 : modalIndex + 1;
    setModalIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  useEffect(() => {
    if (!modalImage) return; // Modal kapalıysa listener ekleme
    
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      } else if (e.key === "Escape") {
        setModalImage(null);
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalImage, scrollPrev, scrollNext]);

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
                  onClick={() => openModal(imgSrc,index)} // Resme tıklandığında modal açılır
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
            <div className="relative w-[40%] " onClick={(e) => e.stopPropagation()}>
              <Image src={modalImage} alt="Enlarged gallery" className="w-full h-auto object-contain max-h-[750px]" />
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollPrev}
                aria-label="Previous"
              >
                <MdArrowBackIosNew size={32} />
              </button>
              {/* Sağ Ok */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollNext}
                aria-label="Next"
              >
                <MdArrowForwardIos size={32} />
              </button>
            </div>
            <button
                className="absolute top-6 right-4 text-white text-4xl"
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default GalleryScrollSection
