import React from "react";
import PoolSvg from "./PoolSvg";
import BabycribSvg from "./BabycribSvg";
import SinglebedSvg from "./SinglebedSvg";
import PoolSvg2 from "./PoolSvg2";
import AreaSvg from "../../components/svg/AreaSvg";

const items = [
  { text: "Private Pool", icon: PoolSvg2 },
  { text: "48 m2", icon: AreaSvg },
  { text: "Makeup Table", icon: PoolSvg2 },
  { text: "No Smoke", icon: PoolSvg2 },
  { text: "Mini Bar", icon: PoolSvg2 },
  { text: "Safe Box", icon: PoolSvg2 },
  { text: "Hair Dryer", icon: PoolSvg2 },
  { text: "Bath Essentials", icon: PoolSvg2 },
  { text: "Tea & Coffee Setup", icon: PoolSvg2 },
  { text: "LedTv & Wifi", icon: PoolSvg2 },
  { text: "Balcony", icon: PoolSvg2 },
  { text: "Shower", icon: PoolSvg2 },
];

const RoomFeatures = () => {
  return (
    <div className="flex w-screen h-auto my-[93px] items-center justify-center bg-[#fbfbfb]">
      <div className="flex w-[77%] items-center justify-center gap-[61px]">
        <div className="flex flex-col gap-[35px] w-[63.4%] items-start justify-start font-jost">
          <div className="flex flex-col w-full items-start justify-center text-start font-jost gap-[17px]">
            <span className="text-lagoGray text-[12px] leading-[14px] font-medium tracking-[0.48px] uppercase">
              FUN FOR ALL ages
            </span>
            <h2 className="text-[32px] text-lagoBrown font-marcellus fontnormal leaidng-[120px]">
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
              <div className="flex items-center justify-start text-center w-[32%] gap-[10px]">
                <PoolSvg className="flex" width={65} height={60} />
                <p className="text-[16px] text-lagoBlack font-marcellus font-normal leading-[16px]">
                  Independent Pool
                </p>
              </div>

              <div className="flex items-center justify-start text-center w-[32%] gap-[10px]">
                <div className="flex">
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

              <div className="flex items-center justify-start text-center w-[32%] gap-[10px]">
                <BabycribSvg className="flex" width={38} height={38} />
                <p className="text-[16px] text-lagoBlack font-marcellus font-normal leading-[16px]">
                  Extra Baby Crib
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-start justify-center gap-[17px]">
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
                <div className="p-[10px] flex border bg-transparent border-lagoBrown items-center justify-center text-center">
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
        <div className="flex flex-col max-[347px] w-[32%] py-[40px] px-[36px] items-center justify-center text-center gap-[20px] bg-white shadow-divCustom">
            <h3 className="text-[32px] text-lagoBrown font-marcellus font-normal leading-[120%] -tracking-[0.64px]">Reservation Dates</h3>
            <p className="text-[18px] text-lagoBrown leading-[140%] font-normal mb-[5px]">Pick up the dates for your stay</p>
            <div className="flex items-center justify-start p-[18px] w-[250px] border border-lagoBlack text-[16px] text-lagoGray font-normal leading-[140%]">Check in</div>
            <div className="flex items-center justify-start p-[18px] w-[250px] border border-lagoBlack text-[16px] text-lagoGray font-normal leading-[140%]">Check out</div>
            <div className="flex items-center justify-start p-[18px] w-[250px] border border-lagoBlack text-[16px] text-lagoGray font-normal leading-[140%]">Adults / Kids</div>
            <button className="flex p-5 items-center justify-center text-center bg-lagoBlack border border-lagoBlack w-[175px] shadow-buttonCustom text-[18px] uppercase font-semibold font-jost leading-[120%] -tracking-[0.36px] hover:bg-white hover:underline hover:text-lagoBlack">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default RoomFeatures;
