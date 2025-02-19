"use client"

import React, { useState } from "react"
import Image from "next/image"

// Yerel resimler & ikonlar
import FamilySwimUpRoom from "./Images/FamilySwimUpRoom.png"
import TinyVilla from "./Images/TinyVilla.png"
import SuperiorRoom from "./Images/SuperiorRoom.png"
import Area from "./Icons/Area"
import Tree from "./Icons/Tree"
import Sea from "./Icons/Sea"

export default function HomePage3() {
  const images = [
    {
      src: FamilySwimUpRoom,
      title: "Family Swim-up Room",
      desc: `Family Swim-up Rooms in the main building <br/>
             have 2 bedrooms (double bed + <br/> convertible sofa), 
             a bathroom, and a sitting <br/> area.
             Forest view rooms share a pool, 
             while <br/> sea view rooms have a private one.`
    },
    {
      // <--- Tiny House (index=1)
      src: TinyVilla,
      title: "Tiny Villa",
      desc: "Our garden villas feature 2 bedrooms, 2 <br/> bathrooms, and a seating area (50 m²), <br/> accommodating 4 guests (1 double, 2 <br/> single beds). Each has a terrace with <br/> seating and a private 24 m² pool with sun <br/> loungers, parasols, and a hammock."
    },
    {
      src: SuperiorRoom,
      title: "Superior Room",
      desc: "This room type with sea or forest view is 30 <br/> - 32 m2 and is located in the main <br/> building. The room has 1 double bed, 1 <br/> single bed and 1 sofa and has a balcony. <br/> Max capacity: 3 adults + 1 child."
    }
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="flex w-full my-[100px] ">
      {images.map((img, index) => {
        // Hover yoksa 3 resim eşit (w-1/3),
        // Hover varsa: hovered => w-1/2, diğer => w-1/4
        let widthClass
        if (hoveredIndex === null) {
          widthClass = "w-1/3"
        } else if (hoveredIndex === index) {
          widthClass = "w-1/2"
        } else {
          widthClass = "w-1/4"
        }

        return (
          <div
            key={index}
            className={`
              relative 
              overflow-hidden 
              group 
              transition-all 
              duration-500 
              ease-in-out
              ${widthClass}
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
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
                duration-500
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
                duration-500
                text-white
                z-10
                flex
                items-center
              "
            >
              {/* Soldaki dikey yarı saydam şerit */}
              <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center w-1/2">
                <h3 className="text-[30px] leading-[37.5px] tracking-[-0.66px] capitalize font-marcellus font-normal mb-2 text-left w-auto ml-16">
                  {img.title}
                </h3>
                <p
                  className="text-[16px] font-jost font-normal leading-normal text-left w-auto mb-4 ml-16"
                  dangerouslySetInnerHTML={{ __html: img.desc }}
                />

                {/* İkon satırı */}
                <div className="flex items-center mb-3 gap-4 ml-16">
                  <div className="flex items-center gap-1">
                    <Area width={24} height={24} />
                    <span>50-52 m2</span>
                  </div>
                   <div className="flex flex-row gap-1">
                        {index !== 1 && (
                            <div className="flex items-center gap-1">
                            <Tree width={24} height={24} />
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <Sea width={24} height={24} />
                            <span>Land/Sea View</span>
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
        )
      })}
    </div>
  )
}
