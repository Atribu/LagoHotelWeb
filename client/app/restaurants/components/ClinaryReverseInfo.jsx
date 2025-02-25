import React from "react";
import Image from "next/image";

const ClinaryReverseInfo = ({img1,img2,span,header,text1,text2}) => {
  return (
    <div className="flex w-screen lg:h-[555px] items-center justify-center max-w-[1440px]">
      <div className="flex flex-col md:flex-row-reverse w-[87.79%] md:w-[91.4%] lg:w-[76.8%] items-center justify-center gap-[30px] md:gap-[36.83px] lg:gap-[52px] h-full">

        <div className="flex flex-col w-[90%] md:w-[48.5%] items-start justify-center text-start gap-[35.07px] text-black font-jost">
          <span className="text-[12.002px] font-medium leading-[14.026px] tracking-[0.481px] uppercase">
        {span}
          </span>
          <h2 className="text-[32px] lg:text-[48.089px] font-normal font-marcellus leading-[57.707px] lg:capsizedText2">
          {header}
          </h2>
          <p className="text-[14px] lg:text-[16.03px] font-normal leading-[18.126px] lg:leading-[24.045px] leading-trim-both text-edge-cap capsizedText4">
         {text1}
          </p>
          <p className="text-[14px] lg:text-[16.03px] font-normal leading-[18.126px] lg:leading-[24.045px] leading-trim-both text-edge-cap capsizedText4">
          {text2}
          </p>
          
        </div>

        <div className="flex w-[65%] sm:w-[50%] min-w-[310px] md:w-[48.8%] items-center justify-end md:items-end md:justify-end relative h-full mt-[67px]">
            <Image src={img2} alt="art" width={img2.width} height={img2.height} className="absolute bottom-[60px] right-[125px] md:bottom-[70px] md:right-[135px] lg:bottom-[105px] lg:right-[215px] z-10 w-[175px] h-[260px] md:w-[186.60px] md:h-[279.91px] lg:w-[300px] lg:h-[450px]"/>
            <Image src={img1} alt="art" width={img1.width} height={img1.height} className="z-50 w-[175px] h-[260px] md:w-[186.60px] md:h-[279.91px] lg:w-[300px] lg:h-[450px]"/>
        </div>

      </div>
    </div>
  );
};

export default ClinaryReverseInfo;
