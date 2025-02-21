"use client";

import React, { useState } from "react";
import Image from "next/image";
import FamilySwimUpRoom from "./Images/FamilySwim.jpg";
import Swimup from "./Images/Swimup.jpg";
import SuperiorRoom from "./Images/Superior.webp";
import Area from "./Icons/Area";
import Tree from "./Icons/Tree";
import Sea from "./Icons/Sea";

export default function HomePage3() {
  const images = [
    {
      src: FamilySwimUpRoom,
      title: "Family Swim-up Room",
      desc: `This room type with sea or forest view is 50 - 55 m2 and is located in the main building. 
      It consists of 2 separate bedrooms (with interconnecting door): a double bed (for two adults) and a luxury sofa that can be opened for two adults,
       including a bathroom and a sitting area. `,
             area:"50-55 m2",
             span:"Land / Sea View",
             link:"/"
    },
    {
      src: Swimup,
      title: "Swim Up Room",
      desc: "This room type with sea or forest view is 40 - 43 m2 and is located in the main building. This room type has 1 double bed and 1 single bed. Sea view and Wald  view rooms have an additional sofa or seating area and feature a pool and terrace. Swimup room with sea view, offers a private pool.",
      area:"40-43 m2",
             span:"Land / Sea View",
             link:"/"
    },
    {
      src: SuperiorRoom,
      title: "Superior Room",
      desc: "This room type is 30 - 32 m2 and is located in the main building. The room has 1 double bed, 1 single bed and 1 sofa and has a balcony. Services for all rooms (wristband with chip key system, daily replenishment of the minibar, cosmetics in the bathroom, tea and coffee making set)",
      area:" 30-32 m2",
      span:"Land / Sea View",
             link:"/"
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex w-full">
      {images.map((img, index) => {
        let widthClass;
        if (hoveredIndex === null) {
          widthClass = "w-1/3";
        } else if (hoveredIndex === index) {
          widthClass = "w-1/2";
        } else {
          widthClass = "w-1/4";
        }

        return (
          <div
            key={index}
            className={`
              relative 
              overflow-hidden 
              group 
              transition-all 
              duration-[1000ms] 
              ease-in-out
              ${widthClass}
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Resim */}
            <Image
              src={img.src}
              alt={img.title}
              width={0}
              height={0}
              sizes="100vw"
              className="
                w-full 
                h-[498px] 
                object-cover
                transition-transform 
                duration-[1600ms] 
                ease-out
                group-hover:scale-105
              "
            />

            {/* Hover overlay */}
            <div
              className="
                absolute 
                top-0 
                left-0 
                w-full 
                h-full 
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-[1200ms]
                text-white
                z-10
                flex
                items-center
              "
            >
              {/* Soldaki dikey yarı saydam şerit */}
              <div
                className="
                  h-full bg-black bg-opacity-50 flex flex-col justify-end pb-12 w-1/3 min-w-[437px] gap-[20px]
                  opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-[800ms] ease-in-out font-jost
                "
              >
                <h3 className="text-[30px] leading-[37.5px] tracking-[-0.66px] capitalize font-marcellus font-normal text-left w-auto ml-16 ">
                  {img.title}
                </h3>
                <p
                  className="text-[16px] w-[80%] font-jost font-normal leading-normal text-left ml-16 line-clamp-6"
                  dangerouslySetInnerHTML={{ __html: img.desc }}
                />

                {/* İkon satırı */}
                <div className="flex items-center gap-4 ml-16">
                  <div className="flex items-center gap-1">
                    <Area width={24} height={24} />
                    <span className="font-jost">{img.area}</span>
                  </div>
                  <div className="flex flex-row gap-1">
                    {index !== 1 && (
                      <div className="flex items-center gap-1">
                        <Tree width={24} height={24} />
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <Sea width={24} height={24} />
                      <span>{img.span}</span>
                    </div>
                  </div>
                </div>

                {/* Buton */}
                <button
                  className="
                    w-1/3
                    ml-16
                    border
                    border-white
                    px-6
                    py-2
                    uppercase
                    text-sm
                    font-medium
                    tracking-wider
                    hover:bg-black hover:text-white hover:underline hover:underline-offset-2
                    transition
                  "
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
