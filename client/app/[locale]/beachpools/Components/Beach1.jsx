"use client";

import React, { useState, useEffect, useRef } from "react";
import Girl from "../Images/beach8.webp";
import Yazı from "../Images/BeachPoolsyazısı.webp";
import Dalga from "../Images/waves2sonson.webp";
import ClinaryInfoSection from "@/app/[locale]/restaurants/components/ClinaryInfoSection";
import img1 from "../Images/beach1.webp";
import img2 from "../Images/beach2.webp";

export default function Beach1() {
  const [scrollAttempt, setScrollAttempt] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const texts = [
    "Lorem ipsum dolor sit amet consectetur. Libero ut pellentesque netus odio felis morbi est. Netus turpis pretium diam at ut orci. Sed pretium cras viverra viverra pulvinar aliquet dictum magna luctus.",
    "Special Feautures",
    "Complimentary sun loungers, umbrellas, and towels.",
    "Beach bars serving refreshing drinks and light snacks.",
    "Calm waters ideal for swimming and water sports."
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (scrollAttempt === 0) {
        e.preventDefault();
        if (!animate) {
          setAnimate(true);
          setTimeout(() => {
            setScrollAttempt(1);
            setTextVisible(true);
          }, 700);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [scrollAttempt, animate]);

  // Yazı animasyonu: Kaydırma sırasında yukarı kayarak kayboluyor.
  const yaziTransition = animate
    ? "translate-y-[200px] opacity-0"
    : "translate-y-0 opacity-100";

  /* Dalga animasyonu:
     - Başlangıçta: dalga top-[55%] (yani biraz yukarıda)
     - Kaydırma sonrası: dalga top-[25%] (daha da yukarı)
  */
  const dalgaStyle = animate
    ? "top-[25%] transition-all duration-700"
    : "top-[55%] transition-all duration-700";

  return (
    <>
      {/* HERO BÖLÜMÜ – overflow-visible sayesinde dalga resmi dışarı taşabilir */}
      <div
        ref={containerRef}
        className="relative hidden lg:flex flex-col w-full h-screen overflow-visible z-[10]"
      >
        {/* Arka Plan Resmi */}
        <img
          src={Girl.src}
          alt="Girl"
          className="absolute w-full h-full object-cover -top-[10%] left-0 -z-10 transform scale-[1.7] lg:scale-100 transition-transform duration-700"
        />

        {/* Beach & Pools Yazısı */}
        <div
          className={`
            absolute inset-0 lg:top-[18%] top-[18%] flex items-center justify-center
            transition-all duration-700 ${yaziTransition}
          `}
        >
          <img
            src={Yazı.src}
            alt="Beach & Pools Yazı"
            className="object-contain max-w-[50%] lg:max-w-[40%]"
          />
        </div>

        {/* Dalga Animasyonu – z-[50] ile diğer içeriklerin üstünde */}
        <div className={`absolute left-0 w-full max-h-[200vh] z-[50] ${dalgaStyle}`}>
          <img src={Dalga.src} alt="Sea wave" className="w-full object-cover" />
        </div>
      </div>

      {/* METİN BLOĞU VE EK İÇERİKLER */}
      <div
        className={`
          hidden lg:flex relative z-[20] transition-all duration-700
          ${textVisible ? "opacity-100" : "opacity-0"}
          w-full px-4 text-[#1d3535] text-center
          flex flex-col items-center justify-center gap-5
          -mt-24 mb-10
        `}
        // Arka planı genel kapsayıcıya uyguluyoruz, böylece dalga resmi (z-[50]) kalmaya devam ediyor
      >
        <p className="uppercase text-[12px] leading-[14px] tracking-[0.48px] font-medium font-jost">
          WELCOME TO LAGO HOTEL
        </p>
        <h1 className="font-marcellus text-[28px] md:text-[32px] lg:text-[48px] leading-[120%] lg:leading-[57.6px] font-normal">
          Immerse Yourself in the <br /> Deep Blue Waters
        </h1>
        <p className="w-full text-center font-jost text-[14px] lg:text-[16px] leading-[24px]">
          We offer you a pleasant holiday experience that will feel like home in
          our rooms designed <br /> in accordance with varied tastes and needs,
          merging beauty and comfort with their eye- <br /> catching designs and
          efficient structures. Enjoy cooling off in pools of different sizes <br />
          in the deep blue world of LAGO. Come to LAGO where everything is
          possible.
        </p>
        <button className="uppercase text-sm font-medium font-marcellus text-[16px] lg:text-[18px] leading-[30px] underline underline-offset-4 mt-4">
          Discover More
        </button>

        {/* ClinaryInfoSection – negatif margin-top ile dalga resminin üst kısmının görünmesine izin veriyoruz */}
        <div className="flex relative mt-10 lg:-mt-20 2xl:-mt-32 lg:pt-[220px] 2xl:pt-[320px] justify-center z-[20]">
          <ClinaryInfoSection
            img1={img1}
            img2={img2}
            span="Perfect Fine Dine Experiences"
            header="Discover Our Exclusive Beach"
            texts={texts}
          />
        </div>
      </div>
    </>
  );
}
