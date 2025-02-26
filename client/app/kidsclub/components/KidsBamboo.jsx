import Image from "next/image";
import React from "react";
import bamboo from "../images/bamboo2.png";
import miniclub from "../images/1kids.webp";
import juniorclub from "../images/childactivite-1.webp";
import teenageclub from "../images/kids3.webp";

const clubData = [
  {
    id: 1,
    ageGroup: "4-7 yaş grubu",
    title: "Mini Club",
    description:
      "Bamboo Kids Club, age-appropriate activities, professional caregivers, and a secure environment, we provide the perfect setting for your child to learn, play, and grow.",
    image: miniclub,
  },
  {
    id: 2,
    ageGroup: "8-12 yaş grubu",
    title: "Junior Club",
    description:
      "Bamboo Kids Club, age-appropriate activities, professional caregivers, and a secure environment, we provide the perfect setting for your child to learn, play, and grow.",
    image: juniorclub,
  },
  {
    id: 3,
    ageGroup: "13-16 yaş grubu",
    title: "Teenage Club",
    description:
      "Bamboo Kids Club, age-appropriate activities, professional caregivers, and a secure environment, we provide the perfect setting for your child to learn, play, and grow.",
    image: teenageclub,
  },
];

const KidsBamboo = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-auto gap-[30px] lg:gap-[50px] lg:max-w-[1440px]">
      {/* Başlık Alanı */}
      <div className="flex flex-col w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[14px] justify-start items-start font-jost text-black">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[66px] w-full">
          <Image
            src={bamboo}
            alt="bamboo"
            width={bamboo.width}
            height={bamboo.height}
            className="lg:w-[59%] flex"
          />
          <div className="flex flex-col gap-[17px] items-start justify-center text-start lg:w-[39%]">
            <span className="text-[12px] font-medium leading-[26px] uppercase">
              A Safe and Fun Space for All Ages
            </span>
            <h3 className="text-[25px] lg:text-[30px] leading-[26px] font-normal font-marcellus capsizedText3">
              Unforgettable Memories
            </h3>
            <p className="text-[14px] lg:text-[16px] leading-[18px] lg:leading-[24px] font-normal">
              Bamboo Kids Club, age-appropriate activities, professional
              caregivers, and a secure environment, we provide the perfect
              setting for your child to learn, play, and grow.
            </p>
          </div>
        </div>
        <span className="text-[12px] lg:text-[14px] font-medium uppercase leading-[21px]">
          Opening Hours: 08:00 - 20:00
        </span>
      </div>

      {/* Club Kartları */}
      <div className="flex flex-col md:flex-row gap-[28px] w-[87.79%] md:w-[91.4%] lg:w-[76.8%] justify-between items-center text-white font-jost">
        {clubData.map((club) => (
          <div
            key={club.id}
            className="flex flex-col w-[70%] md:w-[33%] items-center justify-end pb-6 h-[300px] md:h-[360px] lg:h-[510px] bg-center bg-cover relative group overflow-y-hidden"
            style={{ backgroundImage: `url(${club.image.src})` }}
          >
            {/* Hafif karartma (her zaman görünür) */}
            <div className="absolute bg-black/10 inset-0 z-1"></div>

            {/* Normal Başlık ve Alt Yazı (Hover'da kaybolacak) */}
            <div className="flex flex-col w-5/6 items-start justify-end z-10 lg:gap-[25px] pointer-events-none">
              <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                {club.ageGroup}
              </span>
              <h4 className="text-[25px] lg:text-[30px] leading-[57.6px] font-marcellus font-normal capitalize transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                {club.title}
              </h4>
            </div>

            {/* Tam Karartma (Hover ile açılacak) */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Hover ile Aşağıdan Kayan İçerik */}
            <div
              className="absolute inset-0 text-white flex flex-col justify-start items-center text-start font-montserrat gap-[20px] top-1/2 
              translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out h-[540px]"
            >
              <div className="flex flex-col w-5/6 lg:gap-[10px] items-start justify-center">
                <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px]">
                  {club.ageGroup}
                </span>
                <h4 className="text-[25px] lg:text-[30px] leading-[57.6px] font-marcellus font-normal capitalize">
                  {club.title}
                </h4>
                <div className="flex w-full h-[1px] bg-grayLight"></div>
                <p className="text-[11px]">{club.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <span className="text-[14px] text-lagoGray font-jost leading-[26px] font-normal text-center">
        *0-3,99 age groups can join the mini club under the supervision of their
        parents
      </span>
    </div>
  );
};

export default KidsBamboo;
