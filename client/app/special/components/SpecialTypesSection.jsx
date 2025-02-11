"use client"; // Next.js App Router'da useState için gerekli
import Link from "next/link";
import React, { useState } from "react";
import honeymoon from "../images/honeymoon.webp";
import proposal from "../images/proposal.webp";
import wedding from "../images/wedding.webp";
import birthday from "../images/birthdayuzun.webp";
import pavilion from "../images/pavilion.webp";
import flowers from "../images/flowers.webp";

const concepts = {
  Honeymoon: {
    title: "Honeymoon",
    description:
      "Lorem ipsum dolor sit amet consectetur. Egestas nunc lectus diam tincidunt enim molestie sit purus ullamcorper. Gravida urna ullamcorper velit vulputate habitasse urna gravida lacus. Turpis nullam enim morbi lorem pharetra adipiscing pharetra viverra.",
    image: honeymoon,
  },
  Proposal: {
    title: "Proposal",
    description:
      "Make your special proposal unforgettable with our romantic arrangements and breathtaking scenery.",
    image: proposal,
  },
  Wedding: {
    title: "Wedding",
    description:
      "Celebrate your dream wedding with our luxurious venues, top-class service, and exquisite details.",
    image: wedding,
  },
  Birthday: {
    title: "Birthday",
    description:
      "Make your birthday extra special with our tailored services and unforgettable celebrations.",
    image: birthday,
  },
  Pavilion: {
    title: "Pavilion",
    description:
      "Enjoy a private, luxurious pavilion experience with breathtaking views and personalized service.",
    image: pavilion,
  },
  Flowers: {
    title: "Flowers",
    description:
      "Enhance your special moments with our exquisite flower arrangements, tailored to your desires.",
    image: flowers,
  },
};

const SpecialTypesSection = () => {
  const [selectedConcept, setSelectedConcept] = useState(concepts.Honeymoon);

  return (
    <div className="flex flex-col w-screen items-center justify-center my-[100px] gap-[50px]">
      {/* Başlık Alanı */}
      <div className="flex flex-col items-center justify-center text-center w-[76.8%]">
        <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
          Special Occasions
        </span>
        <h3 className="text-[48px] font-normal leading-[57.6px] capitalize text-lagoBlack">
          Our Exclusive Services
        </h3>
        <p className="text-[16px] font-normal leading-[24px] w-[55%]">
          At LAGO Hotel, we offer a wide range of options to make your special days truly unique. With our carefully
          designed services, we help you create unforgettable memories.
        </p>
      </div>

      <div className="flex flex-col w-full">
        {/* Linkler */}
        <div className="flex w-full justify-center items-center bg-[#EDEDED] max-h-[105px]">
          <div className="flex w-[80%] justify-between items-center py-[42px] gap-[43px] text-black font-marcellus text-[28px] font-normal leading-[57.6px]">
            {Object.keys(concepts).map((concept) => (
              <button
                key={concept}
                className={`hover:underline ${
                  selectedConcept.title === concept ? "text-gray-700 font-bold" : "text-black"
                }`}
                onClick={() => setSelectedConcept(concepts[concept])}
              >
                {concept}
              </button>
            ))}
          </div>
        </div>

        {/* Dinamik İçerik */}
        <div
          className="flex w-screen h-[51vh] items-end justify-end bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${selectedConcept.image.src})` }}
        >
          <div className="flex h-full w-[45%] items-center justify-center bg-[#2D2D26]/50">
            <div className="flex flex-col items-start justify-center w-[80%] gap-[35px] text-white font-jost text-start">
              <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">Special Occasions</span>
              <h2 className="text-[44px] font-marcellus font-normal leading-[57.6px]">{selectedConcept.title}</h2>
              <p className="text-[16px] font-normal leading-[24px] w-[85%]">{selectedConcept.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialTypesSection;
