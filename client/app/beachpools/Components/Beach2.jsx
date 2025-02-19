import React from "react";
import foto from "../Images/beachfull.webp";
import BirthDay from "../Images/Icons/BirthDay";
import Baloon from "../Images/Icons/Baloon";

const Beach2 = () => {
  // Arka plan resmi yoksa en azından "none" vererek olası hataların önüne geçebiliriz.
  const backgroundImage = foto?.src ? `url(${foto.src})` : "none";

  return (
    <div
      className="flex flex-col w-full bg-cover bg-center h-[45vh] min-h-[532px] mt-[100px]"
      style={{ backgroundImage }}
    >
      {/* Yarı saydam siyah blok (arka plan) */}
      <div className="flex flex-col items-start justify-center h-full w-5/12 gap-4 p-4 bg-black bg-opacity-50 text-white">
        <p className="font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase ml-12">
          Cabana and Pavilion Rentals
        </p>
        <h3 className="font-marcellus text-[40px] font-normal leading-[57.6px] ml-12">
          Relax in Seaside <br /> Luxury
        </h3>
        <p className="font-jost text-[16px] font-normal leading-[24px] ml-12">
          Unwind in our exclusive Cabanas and Pavilions, available for a fee,
          <br /> offering unmatched privacy and comfort by the beach. Guests
          staying <br /> in Swim-Up Rooms enjoy special discounts, making your
          seaside <br /> experience even more luxurious.
        </p>

        <span className="font-marcellus text-[20px] font-normal leading-[24px] tracking-[-0.4px] ml-12">
          Special Set-up Available
        </span>

        {/* İkonlar ve Yanlarındaki Yazılar */}
        <div className="flex w-5/6 gap-4 p-2 text-white justify-center items-center ml-12">
          <div className="flex items-center w-1/2 gap-2 rounded">
            <BirthDay width={35} height={35} />
            <span>Icon One Text</span>
          </div>
          <div className="flex items-center w-1/2 gap-2 p-1 rounded">
            <Baloon width={35} height={35} />
            <span>Icon Two Text</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beach2;
