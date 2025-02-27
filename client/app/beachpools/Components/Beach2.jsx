import React from "react";
import foto from "../Images/beachfull.webp";
import BirthDay from "../Images/Icons/BirthDay";
import Baloon from "../Images/Icons/Baloon";

const Beach2 = () => {
  // Arka plan resmi yoksa en azından "none" vererek olası hataların önüne geçebiliriz.
  const backgroundImage = foto?.src ? `url(${foto.src})` : "none";

  return (
    <div
      className="flex flex-col w-full bg-cover bg-center h-[50vh] sm:h-[48vh] min-h-[532px] items-center md:items-start justify-center md:justify-start z-[99] "
      style={{ backgroundImage }}
    >
      {/* Yarı saydam siyah blok (arka plan) */}
      <div className="flex flex-col h-full w-full md:w-[46%] gap-[35px] min-w-[480px] max-w-[840px] text-center lg:text-start items-center lg:items-start justify-center bg-[#2D2D26]/50 text-white">
        <p className="font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase ml-[10%]">
          Cabana and Pavilion Rentals
        </p>
        <h3 className="font-marcellus text-[28px] md:text-[32px] lg:text-[48px] font-normal md:leading-normal lg:leading-[57.6px] capsizedText2 lg:ml-[10%] w-[90%] lg:w-[70%]">
          Relax in Seaside Luxury
        </h3>
        <p className="font-jost text-[14px] lg:text-[16px] font-normal leading-[24px] lg:ml-[10%] capsizedText4 w-[80%] sm:w-[90%] lg:w-[74%]">
          Unwind in our exclusive Cabanas and Pavilions, available for a fee,
           offering unmatched privacy and comfort by the beach. Guests
          staying in Swim-Up Rooms enjoy special discounts, making your
          seaside  experience even more luxurious.
          
        </p>

        <span className="font-marcellus text-[18px] lg:text-[20px] font-normal leading-normal lg:leading-[24px] -tracking-[0.4px] lg:ml-[10%] ">
          Special Set-up Available
        </span>

        {/* İkonlar ve Yanlarındaki Yazılar */}
        <div className="flex flex-col sm:flex-row w-[88%] gap-[15px] sm:gap-[2%] p-2 text-white justify-center lg:justify-start items-center lg:ml-[10%]">
          <div className="flex items-center w-[49%] max-w-[233px] gap-[30px] bg-[#EBEBEB]/15 h-[60px]">
            <BirthDay width={35} height={35} className="flex p-[13px] bg-[#EBEBEB]/15"/>
            <span className="text-[14px] lg:text-[16px] font-marcellus leading-normal lg:leading-[30px] font-normal">Icon Two Text</span>
          </div>
          <div className="flex items-center w-[49%] max-w-[233px] gap-[30px] bg-[#EBEBEB]/15 h-[60px]">
            <Baloon width={35} height={35} className="flex p-[13px] bg-[#EBEBEB]/15"/>
            <span className="text-[14px] lg:text-[16px] font-marcellus leading-normal lg:leading-[30px] font-normal">Icon Two Text</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beach2;
