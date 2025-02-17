import React from "react";
import Image from "next/image";
import honeymoon from "../images/honeymoon1.webp";
import pavilion from "../images/pavilion1.webp"
import marriage from "../images/marriage1.webp"
import wedding from "../images/wedding1.webp"
import flower from "../images/flower1.webp"
import birthday from "../images/birthday1.webp"

// Kartları tutan dinamik veri dizisi
const gridData = [
  {
    title: "Honeymoon Concept",
    span: "Special Occasions",
    description:
      "Bamboo Kids Club, age-appropriate activities, professional caregivers, and a secure environment, we provide the perfect setting for your child to learn, play, and grow.",
    image: honeymoon,
  },
  {
    title: "Pavilion Experience",
    span: "Special Occasions",
    description:
      "A special place for teens to have fun, meet new friends, and enjoy various entertainment activities in a safe environment.",
    image: pavilion,
  },
  {
    title: "Marriage Proposal",
    span: "Special Occasions",
    description:
      "Teenagers can enjoy a space designed just for them with interactive activities, gaming zones, and chill-out areas.",
    image: marriage,
  },
  {
    title: "Wedding Services",
    span: "Special Occasions",
    description:
      "Teenagers can enjoy a space designed just for them with interactive activities, gaming zones, and chill-out areas.",
    image: wedding,
  },
  {
    title: "Flower Orders",
    span: "Special Occasions",
    description:
      "Teenagers can enjoy a space designed just for them with interactive activities, gaming zones, and chill-out areas.",
    image: flower,
  },
  {
    title: "Birthday Packages",
    span: "Special Occasions",
    description:
      "Teenagers can enjoy a space designed just for them with interactive activities, gaming zones, and chill-out areas.",
    image: birthday,
  },
];

const SpecialGridSection = () => {
  return (
    <div className="flex w-screen items-center justify-center ">
      <div className="flex flex-col w-[76.8%] items-center justify-center gap-[50px]">
        {/* Başlık Alanı */}
        <div className="flex flex-col w-[70%] items-center justify-center text-center text-black font-jost gap-[34px]">
          <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
            Crafting Timeless Memories at LAGO Hotel
          </span>
          <h3 className="text-[36px] font-normal font-marcellus capitalize leading-[57.6px]">
            Celebrate Life’s Precious Moments
          </h3>
          <p className="text-[16px] font-normal leading-[24px]">
            At LAGO Hotel, we specialize in turning life’s milestones into extraordinary experiences. From personalized
            services to tailored celebrations, every detail is crafted to perfection for a memory that lasts forever.
          </p>
        </div>

        {/* Dinamik Grid Bölümü */}
        <div className="grid grid-cols-3 gap-[27px] w-[1106px]">
          {gridData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[100%] items-start justify-end pb-[35px] h-[502px] bg-center bg-cover relative group"
              style={{ backgroundImage: `url(${item.image.src})` }}
            >
              {/* Hafif karartma (her zaman görünür) */}
              <div className="absolute bg-black/10 inset-0 z-1"></div>

              {/* Normal başlık ve alt yazı (hover'da kaybolacak) */}
              <div className="flex flex-col ml-[32px] items-start justify-end z-10 gap-[20px] text-white">
                <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                  {item.span}
                </span>
                <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                  {item.title}
                </h4>
              </div>

              {/* Tam karartma (hover ile açılacak) */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover ile aşağıdan kayan içerik */}
              <div
                className="absolute inset-0 text-white flex flex-col justify-start items-center text-start font-montserrat gap-[20px] top-1/2 
                opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
              >
                <div className="flex flex-col w-5/6 gap-[10px] items-start justify-center">
                  <span className="text-[12px] font-normal uppercase tracking-[0.48px] leading-[14px]">
                    {item.span}
                  </span>
                  <h4 className="text-[30px] leading-[57.6px] font-marcellus font-normal capitalize">
                    {item.title}
                  </h4>
                  <div className="flex w-full h-[1px] bg-grayLight"></div>
                  <p className="text-[11px]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SpecialGridSection;
