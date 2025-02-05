"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "../images/ImagePlaceholder1.webp"
import img2 from "../images/ImagePlaceholder2.webp"
import img3 from "../images/ImagePlaceholder3.webp"
import img4 from "../images/ImagePlaceholder4.webp"
import Image from "next/image";

const SubroomCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center" });
    const images = [
       img1,
        img2,
        img3,
        img4,
        img1,
        img2,
        img3,
        img4,
      ];

  return (
     <div className="overflow-hidden w-screen mt-[9px] " ref={emblaRef}>
      <div className="flex gap-[5px]">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-[0_0_calc(100vw/3.9)] min-w-[372px] h-[38vh] bg-gray-300 overflow-hidden"
          >
            <Image
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto object-contain"
              width={img.width}
              height={img.height}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubroomCarousel
