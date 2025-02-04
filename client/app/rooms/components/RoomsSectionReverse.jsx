import React from "react";
import AreaSvg from "./svg/AreaSvg";
import TreeSvg from "./svg/TreeSvg";
import ViewSvg from "./svg/ViewSvg";
import Image from "next/image";
import superiorRooms from "../images/superiorRooms.png";

const RoomsSectionReverse = () => {
  return (
    <div className="flex w-screen h-auto my-[87px] items-center justify-center">
      <div className="flex flex-row-reverse items-center justify-between w-[80%] gap-[42px]">
        <div className="flex items-center w-[74%] gap-[10px]">
          <Image
            src={superiorRooms}
            width={superiorRooms.width}
            height={superiorRooms.height}
            alt="Superior Rooms"
            className="w-[50%] flex"
          />

          <Image
            src={superiorRooms}
            width={superiorRooms.width}
            height={superiorRooms.height}
            alt="Superior Rooms"
            className="w-[50%] flex"
          />
        </div>

        {/* text section */}
        <div className="flex flex-col w-[25%] items-start justify-center h-full text-start font-jost gap-[25px]">
          <h3 className="text-lagoBlack font-marcellus text-[30px] font-normal leading-[125%] -tracking-[0.66px] capitalize">
            Superior Rooms
          </h3>
          <p className="text-lagoBrown font-normal leading-normal text-[16px]">
            This room type with sea or forest view is 30 - 32 m2 and is located
            in the main building. The room has 1 double bed, 1 single bed and 1
            sofa and has a balcony. Max capacity: 3 adults + 1 child.
          </p>
          <div className="flex w-full items-center justify-start gap-[27px]">
            <div className="flex items-start justify-start gap-[7px]">
              <AreaSvg className="flex" width={17} height={18} />
              <p className="text-lagoBrown text-[14px] font-normal leadin-[125%]">
                30-32 m2
              </p>
            </div>
            <div className="flex items-center justify-start gap-[7px]">
              <TreeSvg className="flex" width={15} height={16} />
              <ViewSvg className="flex" width={15} height={16} />
              <p className="text-lagoBrown text-[14px] font-normal leadin-[125%]">
                Land/Sea View
              </p>
            </div>
          </div>
          <button className="flex border border-lagoBrown items-center justify-center py-[10px] px-[40px] shadow-buttonCustom bg-transparent text-[16px] text-lagoBrown uppercase leading-[30px] font-medium hover:bg-black hover:text-white hover:underline">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomsSectionReverse;
