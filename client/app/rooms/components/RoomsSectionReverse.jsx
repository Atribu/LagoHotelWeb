import React from "react";
import AreaSvg from "./svg/AreaSvg";
import TreeSvg from "./svg/TreeSvg";
import ViewSvg from "./svg/ViewSvg";
import Image from "next/image";
import Link from "next/link";

const RoomsSectionReverse = ({img,img2, header,text,span,span2,link, id}) => {
  return (
    <div id={id} className="flex w-screen h-auto items-center justify-center">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full lg:w-[76.8%] gap-[42px] max-w-[1208px] px-4 lg:px-0">
        <div className="flex flex-row items-center w-full lg:w-[72.5%] h-[630px] gap-[10px]">
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
        <div className="flex flex-col w-full lg:w-[26.5%] items-start justify-center h-full text-start font-jost gap-[25px] mt-8 lg:mt-0">
          <h3 className="text-lagoBlack font-marcellus text-[30px] font-normal leading-[125%] -tracking-[0.66px] capitalize">
         {header}
          </h3>
          <p className="text-lagoBrown font-normal leading-normal text-[16px] w-[93%]">
          {text}
          </p>
          <div className="flex w-full items-center justify-start gap-[27px]">
            <div className="flex items-start justify-start gap-[7px]">
              <AreaSvg className="flex" width={17} height={18} />
              <p className="text-lagoBrown text-[14px] font-normal leading-[125%]">
               {span}
              </p>
            </div>
            <div className="flex items-center justify-start gap-[7px]">
              <TreeSvg className="flex" width={15} height={16} />
              <ViewSvg className="flex" width={15} height={16} />
              <p className="text-lagoBrown text-[14px] font-normal leading-[125%]">
              {span2}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
          <Link href={link} className="flex border border-lagoBrown items-center justify-center py-[20px] px-[40px] h-[41px] shadow-buttonCustom bg-transparent text-[16px] text-lagoBrown uppercase leading-[30px] font-medium hover:bg-black hover:text-white hover:underline">
            EXPLORE
          </Link>
      

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsSectionReverse;
