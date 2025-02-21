import React from "react";
import foto from "../Images/beachfull.webp";
import BirthDay from "../Images/Icons/BirthDay";
import Baloon from "../Images/Icons/Baloon";

const Beach2 = () => {
  // Arka plan resmi yoksa en azından "none" vererek olası hataların önüne geçebiliriz.
  const backgroundImage = foto?.src ? `url(${foto.src})` : "none";

  return (
    <div
      className="flex flex-col w-full bg-cover bg-center h-[48vh] min-h-[532px] items-start justify-start z-[99] "
      style={{ backgroundImage }}
    >
      {/* Yarı saydam siyah blok (arka plan) */}
      <div className="flex flex-col h-full w-[46%] gap-[35px] min-w-[480px] max-w-[840px] items-start justify-center bg-[#2D2D26]/50 text-white">
        <p className="font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase ml-[10%]">
          Cabana and Pavilion Rentals
        </p>
        <h3 className="font-marcellus text-[48px] font-normal leading-[57.6px] capsizedText2 ml-[10%]">
          Relax in Seaside <br /> Luxury
        </h3>
        <p className="font-jost text-[16px] font-normal leading-[24px] ml-[10%] capsizedText4">
          Unwind in our exclusive Cabanas and Pavilions, available for a fee,
          <br /> offering unmatched privacy and comfort by the beach. Guests
          staying <br /> in Swim-Up Rooms enjoy special discounts, making your
          seaside <br /> experience even more luxurious.
        </p>

        <span className="font-marcellus text-[20px] font-normal leading-[24px] -tracking-[0.4px] ml-[10%]">
          Special Set-up Available
        </span>

        {/* İkonlar ve Yanlarındaki Yazılar */}
        <div className="flex w-[88%] gap-[2%] p-2 text-white justify-start items-center ml-[10%]">
          <div className="flex items-center w-[49%] max-w-[233px] gap-[30px] bg-[#EBEBEB]/15 h-[60px]">
            <BirthDay width={35} height={35} className="flex p-[13px] bg-[#EBEBEB]/15"/>
            <span className="text-[16px] font-marcellus leading-[30px] font-normal">Icon Two Text</span>
          </div>
          <div className="flex items-center w-[49%] max-w-[233px] gap-[30px] bg-[#EBEBEB]/15 h-[60px]">
            <Baloon width={35} height={35} className="flex p-[13px] bg-[#EBEBEB]/15"/>
            <span className="text-[16px] font-marcellus leading-[30px] font-normal">Icon Two Text</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beach2;
