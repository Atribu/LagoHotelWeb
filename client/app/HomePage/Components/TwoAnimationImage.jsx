"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "./Images/sag1.webp";
import img2 from "./Images/sol2.webp";
import Link from "next/link";

const TwoAnimationImage = ({ span, header, text1, text2 }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev); // Her 3 saniyede bir animate state'ini değiştir
    }, 1000); // 3 saniye aralıklarla değişsin

    return () => clearInterval(interval); // Component unmount olursa temizle
  }, []);

  return (
    <div className="flex w-screen h-[555px] items-center justify-center max-w-[1444px] mt-[100px]">
      <div className="flex flex-row-reverse w-[76.8%] items-center justify-center gap-[52px] h-full">
        <div className="flex flex-col w-[48.5%] items-start justify-center text-start gap-[35px] text-black font-jost">
          <span className="text-[12.002px] font-medium leading-[14.026px] tracking-[0.481px] uppercase">
            Perfect Fine Dine Experiences
          </span>
          <h2 className="text-[48.089px] font-normal font-marcellus leading-[57.707px] capsizedText2">
            Where green and blue meets
          </h2>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap capsizedText4">
            With its 350 m long golden yellow beach located on the sands of the
            most breathtaking blue hues, LAGO will provide you with an
            unforgettable holiday.
          </p>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap capsizedText4">
            Enjoy cooling off in pools of different sizes in the deep blue world
            of LAGO. The facility has a heated indoor pool, and there is also a
            heated relax pool in the area where the outdoor swimming pool is
            located.
          </p>
          <Link
            href="/gallery"
            className="flex py-[16px] px-[32px] items-center justify-center text-center text-[16px] h-[41px] text-lagoBrown uppercase leading-[0px] font-medium border border-lagoBrown shadow-buttonCustom"
          >
            Go to gallery
          </Link>
        </div>

        <div className="flex w-[48.8%] items-end justify-end relative h-full">
          <Image
            src={img2}
            alt="art"
            width={img2.width}
            height={img2.height}
            className={`absolute bottom-[105px] right-[215px] z-10 transition-all duration-1000 ease-in-out ${
              animate ? "translate-y-4" : "-translate-y-4"
            }`}
          />
          <Image
            src={img1}
            alt="art"
            width={img1.width}
            height={img1.height}
            className={`z-50 transition-all duration-1000 ease-in-out ${
              animate ? "-translate-y-4" : "translate-y-4"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoAnimationImage;
