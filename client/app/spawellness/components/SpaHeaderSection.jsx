"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import Image from "next/image";
import gallery1 from "../images/gallery1.webp";
import gallery2 from "../images/gallery2.webp";
import gallery3 from "../images/gallery3.webp";

const images = [gallery1, gallery2, gallery3];

const SpaHeaderSection = () => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "center",
    startIndex: 0,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-screen items-center justify-center mt-[100px] gap-[50px]">
      <div className="flex flex-col items-center justify-center text-center w-[76.8%] text-black font-jost gap-[35px]">
        <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
          Perfect Fine Dine Experiences
        </span>
        <h3 className="text-[40px] leading-normal font-normal font-marcellus">
          Lorem ipsum dolor sit amet
        </h3>
        <p className="text-[16px] font-normal leading-normal w-[59%]">
          Lorem ipsum dolor sit amet consectetur. Sed sit venenatis nisi enim id
          aenean natoque aliquet et. Et aliquam viverra enim sapien. Dignissim
          arcu volutpat enim nisl condimentum.
        </p>
      </div>

      <div className="flex flex-col w-full justify-center items-center h-full">
        {/* carousel */}
        <div
          className="flex overflow-hidden relative w-full flex-col justify-center items-center "
          ref={emblaRef}
        >
          <div className="flex grid-flow-col">
            {images.map((image, index) => (
              <div
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_80%] xl:flex-[0_0_35.5%] min-w-0 mr-[1%] h-[60vh]"
                key={index}
              >
                <Image
                  src={image.src}
                  layout="cover"
                  width={image.width}
                  height={image.height}
                  alt={`Slide ${index + 1}`}
                  objectPosition="center"
                  className="flex h-full w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaHeaderSection;
