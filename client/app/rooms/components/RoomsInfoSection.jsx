import React from "react";
import ClockSvg from "./svg/ClockSvg";

const RoomsInfoSection = () => {
  return (
    <div className="flex w-screen  h-auto justify-center items-center bg-[#fbfbfb] max-w-[1444px]">
      <div className="flex flex-col w-[76.8%] gap-[14px] items-center justify-center text-center font-jost leading-normal font-normal ">
        <span className="text-lagoGray text-[12px] uppercase tracking-[0.48px] font-medium leading-[14px] items-stretch">
          Comfort stay for you and your famıly
        </span>
        <h2 className="text-black text-[36px] font-marcellus w-[75%]">
          Explore our refined accommodation options and find the perfect space
          for your stay.
        </h2>
        <p className="text-black text-[16px] w-[65%]">
          Lorem ipsum dolor sit amet consectetur. Bibendum pharetra in nulla
          tortor ac. Fringilla velit ultrices enim integer faucibus. Dui velit
          facilisis amet nam id ipsum ultrices. At diam velit pretium
          sollicitudin odio amet. Eu donec in nullam amet consectetur orci
          nullam sed. Felis in.
        </p>
        <div className="flex w-[42%] justify-between gap-[70px] items-center mt-[24px]">
          <div className="flex gap-[22px] items-center justify-center">
            <ClockSvg className="flex" width={14} height={14} />
            <p className="text-lagoGray text-[14px] ">CHECK-IN: 14:00</p>
          </div>
          <div className="flex h-[16px] w-[1px] bg-lagoGray"></div>
          <div className="flex gap-[22px] items-center justify-center">
            <ClockSvg className="flex" width={14} height={14} />
            <p className="text-lagoGray text-[14px] ">CHECK-IN: 14:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsInfoSection;
