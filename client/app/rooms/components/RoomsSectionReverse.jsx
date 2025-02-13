import React from "react";
import AreaSvg from "./svg/AreaSvg";
import TreeSvg from "./svg/TreeSvg";
import ViewSvg from "./svg/ViewSvg";
import Image from "next/image";

const RoomsSectionReverse = ({img,img2, header,text,span,span2,link}) => {
  return (
    <div className="flex w-screen h-auto my-[87px] items-center justify-center">
      <div className="flex flex-row-reverse items-center justify-between w-[76.8%] gap-[42px] max-w-[1208px] ">
        <div className="flex items-center w-[72.5%] h-[630px] gap-[10px] ">
          <Image
            src={img}
            width={img.width}
            height={img.height}
            alt="Superior Rooms"
            className="w-[50%] flex"
          />

          <Image
            src={img2}
            width={img2.width}
            height={img2.height}
            alt="Superior Rooms"
            className="w-[50%] flex"
          />
        </div>

        {/* text section */}
        <div className="flex flex-col w-[26.5%] items-start justify-center h-full text-start font-jost gap-[25px]">
          <h3 className="text-lagoBlack font-marcellus text-[30px] font-normal leading-[125%] -tracking-[0.66px] capitalize">
         {header}
          </h3>
          <p className="text-lagoBrown font-normal leading-normal text-[16px]">
          {text}
          </p>
          <div className="flex w-full items-center justify-start gap-[27px]">
            <div className="flex items-start justify-start gap-[7px]">
              <AreaSvg className="flex" width={17} height={18} />
              <p className="text-lagoBrown text-[14px] font-normal leadin-[125%]">
                40-43 m2
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
