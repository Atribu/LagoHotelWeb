import React from "react";
import RoomsBanner from "./components/RoomsBanner";
import RoomsInfoSection from "./components/RoomsInfoSection";
import RoomsSection from "./components/RoomsSection";
import RoomsSectionReverse from "./components/RoomsSectionReverse";
import RoomsParallaxSection from "./components/RoomsParallaxSection";

import imgFamily from "./images/odalar2-1.webp";
import imgFamily2 from "./images/oda2-2.webp";
import imgSuperior from "./images/superiorRooms.png";
import imgSuperior2 from "./images/oda1-2.webp";

import imgSwim from "./images/oda3-1.webp";
import imgSwim2 from "./images/oda3-2.webp";

import imgFamilySwim from "./images/oda4-1.webp";
import imgFamilySwim2 from "./images/oda4-2.webp";

import imgTinyvilla from "./images/oda5-1.webp";
import imgTinyvilla2 from "./images/oda5-2.webp";

import imgDuplex from "./images/oda6-1.webp";
import imgDuplex2 from "./images/odalar6-2.webp";
import ContactSection2 from "../GeneralComponents/Contact/ContactSection2";

const page = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center gap-[50px] lg:gap-[100px] bg-[#fbfbfb]">
      <RoomsBanner />
      <RoomsInfoSection />
      <RoomsSection
      id="superiorroom"
        img={imgSuperior}
        img2={imgSuperior2}
        header=" Superior Rooms"
        text=" This room type with sea or forest view is 30 - 32 m2 and is located
            in the main building. The room has 1 double bed, 1 single bed and 1
            sofa and has a balcony. Max capacity: 3 adults + 1 child."
        span="30-32 m2"
        span2="Land/Sea View"
        link="/rooms/subroom" 
      />
      <RoomsSectionReverse
      id="familyroom"
        img={imgFamily}
        img2={imgFamily2}
        header="Family Room"
        text=" This Family Room in the main building features two bedrooms (one double bed, two single beds), a connecting door, a bathroom, and a balcony. Max capacity: 4 adults + 1 child."
        span=" 40-43 m2"
        span2="Land/Sea View"
        link="/rooms/subroom" 
      />

      <RoomsSection
      id="swimuproom"
        img={imgSwim}
        img2={imgSwim2}
        header=" Swim-up Room"
        text=" Swim-up Rooms include a sofa or seating area, pool, and terrace. Forest view rooms have shared pool access, while sea view rooms feature a private pool. Max capacity: 2 adults + 2 children or 3 adults + 1 child."
        span="40-43 m2"
        span2="Land/Sea View"
        link="/rooms/subroom" 
      />
      <RoomsSectionReverse
        img={imgFamilySwim}
        img2={imgFamilySwim2}
        header="Family Swim-up Room"
        text="  Family Swim-up Rooms in the main building have 2 bedrooms (double bed + convertible  sofa), a bathroom, and a sitting area. Forest view rooms share a pool, while sea view rooms have a private one."
        span=" 50-52 m2"
        span2="Land/Sea View"
        link="/rooms/subroom" 
      />

      <RoomsSection
      id="tinyvilla"
        img={imgTinyvilla}
        img2={imgTinyvilla2}
        header=" Tiny Villa"
        text=" Our garden villas feature 2 bedrooms, 2 bathrooms, and a seating area (50 m²), accommodating 4 guests (1 double, 2 single beds). Each has a terrace with seating and a private 24 m² pool with sun loungers, parasols, and a hammock."
        span="100 m2"
        span2="Land View"
        link="/rooms/subroom" 
      />
      <RoomsSectionReverse
      id="duplexfamilyroom"
        img={imgDuplex}
        img2={imgDuplex2}
        header="Duplex Family Room"
        text="  Duplex Family Room in the main building has 2 bedrooms, connected by an internal staircase, with a double bed, single bed, and convertible luxury sofa. Includes 2 bathrooms and 2 balconies. Max: 4 adults + 1 child."
        span=" 45-49 m2"
        span2="Land/Sea View"
        link="/rooms/subroom" 
      />

      <RoomsParallaxSection />
      <ContactSection2/>
    </div>
  );
};

export default page;
