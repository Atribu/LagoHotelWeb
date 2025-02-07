import React from "react";
import Image from "next/image";

const ClinaryReverseInfo = ({img1,img2,span,header,text1,text2}) => {
  return (
    <div className="flex w-screen h-[555px] my-[100px] items-center justify-center">
      <div className="flex flex-row-reverse w-[76.8%] items-center justify-center gap-[2.5%]">

        <div className="flex flex-col w-[49%] items-start justify-center text-start gap-[35.07px] text-black font-jost">
          <span className="text-[12.002px] font-medium leading-[14.026px] tracking-[0.481px] uppercase">
        {span}
          </span>
          <h2 className="text-[48.089px] font-normal font-marcellus leading-[57.707px]">
          {header}
          </h2>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
         {text1}
          </p>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
          {text2}
          </p>
          
        </div>

        <div className="flex w-[48%] items-start justify-start relative">
            <Image src={img2} alt="art" width={img2.width} height={img2.height}/>
            <Image src={img1} alt="art" width={img1.width} height={img1.height} className="absolute top-[25%] left-[45%]"/>
        </div>

      </div>
    </div>
  );
};

export default ClinaryReverseInfo;
