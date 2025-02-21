import Image from "next/image";
import React from "react";
import bamboo from "../images/bamboo.png";
import miniclub from "../images/1kids.webp";
import juniorclub from "../images/childactivite-1.webp";
import teenageclub from "../images/kids3.webp";

const KidsBamboo = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-auto  gap-[50px] lg:max-w-[1440px]">
      <div className="flex flex-col w-[76.8%] gap-[14px] justify-start items-start font-jost text-black">
        <div className="flex justify-between items-center gap-[66px] w-full">
          <Image
            src={bamboo}
            alt="bamboo"
            width={bamboo.width}
            height={bamboo.height}
            className="w-[59%] flex"
          />
          <div className="flex flex-col gap-[17px] items-start justify-center text-start w-[39%]">
            <span className="text-[12px] font-medium leading-[26px] uppercase">
              A Safe and Fun Space for All Ages
            </span>
            <h3 className="text-[30px] leading-[26px] font-normal font-marcellus">
              Unforgettable Memories
            </h3>
            <p className="text-[16px] leading-[24px] font-normal">
              Bamboo Kids Club, age-appropriate activities, professional
              caregivers, and a secure environment, we provide the perfect
              setting for your child to learn, play, and grow.
            </p>
          </div>
        </div>
        <span className="text-[14px] font-medium uppercase leading-[21px]">
          Opening Hours: 08:00 - 20:00
        </span>
      </div>

      <div className="flex gap-[28px] w-[98%] lg:w-[76.8%] justify-between items-center text-white font-jost ">
        <div
          className="flex flex-col w-[33%] items-center justify-end pb-6 h-[510px]  bg-center bg-cover relative group"
          style={{ backgroundImage: `url(${miniclub.src})` }}
        >
          {/* Hafif karartma (her zaman görünür) */}
          <div className="absolute bg-black/10 inset-0 z-1"></div>

          {/* Normal başlık ve alt yazı (hover'da kaybolacak) */}
          <div className="flex flex-col w-5/6 items-start justify-end z-10 gap-[25px]">
            <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              4-7 yaş grubu
            </span>
            <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              Mini Club
            </h4>
          </div>

          {/* Tam karartma (hover ile açılacak) */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Hover ile aşağıdan kayan içerik */}
          <div
            className="absolute inset-0 text-white flex flex-col justify-start items-center text-start font-montserrat gap-[20px] top-1/2 
    translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            <div className="flex flex-col w-5/6 gap-[10px] items-start justify-center">
              <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px]">
                4-7 yaş grubu
              </span>
              <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize">
                Mini Club
              </h4>
              <div className="flex w-full h-[1px] bg-grayLight"></div>
              <p className="text-[11px]">
                Bamboo Kids Club, age-appropriate activities, professional
                caregivers, and a secure environment, we provide the perfect
                setting for your child to learn, play, and grow.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col w-[33%] items-center justify-end pb-6 h-[510px]  bg-center bg-cover relative group "
          style={{ backgroundImage: `url(${juniorclub.src})` }}
        >
          <div className="absolute bg-black/25 inset-0 z-1"></div>
          <div className="flex flex-col w-5/6 items-start justify-end z-10">
            <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px]  transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              8-12 yaş grubu
            </span>
            <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize  transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              Junior Club
            </h4>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100"></div>
          <div
            className="absolute inset-0 text-white flex flex-col justify-start items-center text-start font-montserrat gap-[20px] top-1/2 
    translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
          >
            <div className="flex flex-col w-5/6 gap-[10px] itesm-start justify-center">
            
              <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px]">
                8-12 yaş grubu
              </span>
              <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize  ">
                Junior Club
              </h4>
              <div className="flex w-full h-[1px] bg-grayLight"></div>
              <p className="text-[11px]">
                Bamboo Kids Club, age-appropriate activities, professional
                caregivers, and a secure environment, we provide the perfect
                setting for your child to learn, play, and grow.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col w-[33%] items-center justify-end pb-6 h-[510px]  bg-center bg-cover relative group "
          style={{ backgroundImage: `url(${teenageclub.src})` }}
        >
          <div className="absolute bg-black/10 inset-0 z-1"></div>
          <div className="flex flex-col w-5/6 items-start justify-end z-10">
            <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px]  transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              13-16 yaş grubu
            </span>
            <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize  transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              Teenage Club
            </h4>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100"></div>
          <div
            className="absolute inset-0 text-white flex flex-col justify-start items-center text-start font-montserrat gap-[20px] top-1/2 
    translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
          >
            <div className="flex flex-col w-5/6 gap-[10px] itesm-start justify-center">
              <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px]">
                13-16 yaş grubu
              </span>
              <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize  ">
                Teenage Club
              </h4>
              <div className="flex w-full h-[1px] bg-grayLight"></div>
              <p className="text-[11px]">
                Bamboo Kids Club, age-appropriate activities, professional
                caregivers, and a secure environment, we provide the perfect
                setting for your child to learn, play, and grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <span className="text-[14px] text-lagoGray font-jost leading-[26px] font-normal text-center">
        {" "}
        *0-3,99 age groups can join the mini club under the supervision of their
        parents
      </span>
    </div>
  );
};

export default KidsBamboo;
