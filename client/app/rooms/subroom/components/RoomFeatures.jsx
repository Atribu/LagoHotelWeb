import React from "react";
import PoolSvg from "./PoolSvg";
import BabycribSvg from "./BabycribSvg";
import SinglebedSvg from "./SinglebedSvg";
import PoolSvg2 from "./PoolSvg2";
import AreaSvg from "../../components/svg/AreaSvg";
import DarkPhoneSvg from "./DarkPhoneSvg";
import DresserSvg from "./DresserSvg";
import SmokingSvg from "./SmokingSvg";
import FridgeSvg from "./FridgeSvg";
import SafeboxSvg from "./SafeboxSvg";
import HairdryerSvg from "./HairdryerSvg";
import ShowerSvg from "./ShowerSvg";
import HandsoapSvg from "./HandsoapSvg";
import TeaCoffeeSvg from "./TeaCoffeeSvg";
import LedTvSvg from "./LedTvSvg";
import BalconySvg from "./BalconySvg";

const items = [
  { text: "Private Pool", icon: PoolSvg2 },
  { text: "48 m2", icon: AreaSvg },
  { text: "Makeup Table", icon: DresserSvg },
  { text: "No Smoke", icon: SmokingSvg },
  { text: "Mini Bar", icon: FridgeSvg },
  { text: "Safe Box", icon: SafeboxSvg },
  { text: "Hair Dryer", icon: HairdryerSvg },
  { text: "Bath Essentials", icon: HandsoapSvg },
  { text: "Tea & Coffee Setup", icon: TeaCoffeeSvg },
  { text: "LedTv & Wifi", icon: LedTvSvg },
  { text: "Balcony", icon: BalconySvg },
  { text: "Shower", icon: ShowerSvg },
];

const RoomFeatures = () => {
  return (
    <div className="flex w-screen h-auto  items-center justify-center bg-[#fbfbfb] max-w-[1440px]">
      <div className="flex w-[76.8%] items-start justify-center gap-[4.5%] ">
        
        <div className="flex flex-col gap-[30px] w-[63%] items-start justify-start font-jost">

          <div className="flex flex-col w-full items-start justify-center text-start font-jost gap-[10px]">
            <span className="text-lagoGray text-[12px] leading-[14px] font-medium tracking-[0.48px] uppercase">
              FUN FOR ALL ages
            </span>
            <h2 className="text-[32px] text-lagoBrown font-marcellus font-normal leading-normal">
              Swim Up Family Room
            </h2>
            <p className="text-lagoBlack text-[16px] leading-normal font-normal">
              It is located in our main building with a volume of 50-55 m2 with
              sea and forest view. This room type consists of 2 separate
              bedrooms (with intermediate door) with double bedroom (for 2
              adults) and room with 2 separate beds (2 twin beds / for 2
              adults). <br></br>1 shared bathroom, pool & terrace with seating
              group. Maximum stay with 4 adults <br></br> Suitable for up to 1
              child. <br></br> Family Swim-up Forest has a large pool shared
              with other SwimUp rooms. <br></br>
              Family Swim-up Deniz features an independent private pool.
            </p>
          </div>

          <div className="flex flex-col w-full items-start justify-center gap-[17px]">
            <h3 className="text-[28px] text-lagoBlack leading-[120%] font-normal font-marcellus">
              Family-friendly Amenities
            </h3>
            <div className="flex gap-[15px] w-full items-center justify-start">

              <div className="flex items-center justify-start text-center w-[32%] gap-[10px] bg-[#4B4E4F14] h-[60px]">
                <PoolSvg className="flex" width={65} height={60} />
                <p className="text-[16px] text-lagoBlack font-marcellus font-normal leading-[16px]">
                  Independent Pool
                </p>
              </div>

              <div className="flex items-center justify-start text-center w-[32%] gap-[10px] bg-[#4B4E4F14] h-[60px]">
                <div className="flex py-[10px] px-[6px]">
                  <SinglebedSvg className="flex" width={32} height={35} />
                  <SinglebedSvg
                    className="flex -ml-[12px]"
                    width={32}
                    height={35}
                  />
                </div>
                <p className="text-[16px] text-lagoBlack font-marcellus font-normal leading-[16px]">
                  2 Single Beds
                </p>
              </div>

              <div className="flex items-center justify-start text-center w-[32%] gap-[10px] bg-[#4B4E4F14] h-[60px]">
                <BabycribSvg className="flex px-[11px] py-[9px]" width={38} height={38} />
                <p className="text-[16px] text-lagoBlack font-marcellus font-normal leading-[16px]">
                  Extra Baby Crib
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-start justify-center gap-[10px]">
            <h3 className="text-[28px] text-lagoBlack leading-[120%] font-normal font-marcellus">
              Room Features
            </h3>
            <p className="text-[16px] font-normal leading-normal text-lagoBlack">
              Services offered to all rooms (Key System with Chip Armband, Daily
              Mini Bar Refill, Bathroom Cosmetics, Tea-Coffee Set-Up)
              <br></br>6 of our rooms are specially designed for our disabled
              guests and the width of the main doors is 112cm.<br></br>
              Extra folding bed is used in rooms without Sofa Bed.<br></br>
              THE POOLS IN THE SWIMUP ROOMS ARE NOT HEATED.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-[35px] items-start justify-start w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex gap-[14px] items-center justify-start"
              >
                <div className="p-[8px] flex border bg-transparent border-lagoBrown items-center justify-center text-center">
                  <item.icon className="flex" width={20} height={20} />
                </div>
                <p className="text-lagoBrown text-[15px] font-medium leading-[120%] -tracking-[0.3px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* resevation */}
        <div className="flex flex-col w-[32.5%] gap-[35px] pb-[16px] font-jost">
        <div className="flex flex-col  w-full py-[50px]  pl-[50px] items-start justify-center text-center gap-[20px] bg-white shadow-divCustom">
            <div className="flex flex-col gap-[10px] w-full mb-[5px] items-start text-start">
            <h3 className="text-[32px] text-lagoBrown font-marcellus font-normal leading-[120%] -tracking-[0.64px]">Reservation Dates</h3>
            <p className="text-[16px] text-lagoBrown leading-[140%] font-normal font-jost">Pick up the dates for your stay</p>
            </div>
            <div className="flex items-center justify-start p-[18px] h-[47px] w-[250px] border border-lagoBlack text-[16px] text-lagoGray font-normal leading-[140%]">Check in</div>
            <div className="flex items-center justify-start p-[18px] h-[47px] w-[250px] border border-lagoBlack text-[16px] text-lagoGray font-normal leading-[140%]">Check out</div>
            <div className="flex items-center justify-start p-[18px] h-[47px] w-[250px] border border-lagoBlack text-[16px] text-lagoGray font-normal leading-[140%]">Adults / Kids</div>
            <button className="flex p-5 text-white items-center justify-center text-center bg-lagoBlack border h-[47px] border-lagoBlack w-[175px] shadow-buttonCustom text-[16px] uppercase font-semibold font-jost leading-[120%] hover:bg-white hover:underline hover:text-lagoBlack">BOOK NOW</button>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-[17px] bg-white py-[15px] shadow-divCustom">
          <h4 className="text-[28px] font-marcellus font-normal text-lagoBlack leading-[120%] -tracking-[0.56px] leading-trim-both">Contact us now</h4>
          <div className="flex gap-[11px] items-center justify-center w-full">
            <DarkPhoneSvg className="flex" width={20} height={20} />
          <p className="text-[16px] text-lagoBlack font-medium font-jost leading-[120%] -tracking-[0.32px]">+90 123 456 78 90</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RoomFeatures;
