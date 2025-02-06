import React from "react";
import img1 from "../images/bistres1.webp"
import img2 from "../images/bist2.webp"
import Image from "next/image";

const ClinaryReverseInfo = () => {
  return (
    <div className="flex w-screen h-[555px] my-[100px] items-center justify-center">
      <div className="flex flex-row-reverse w-[76.8%] items-center justify-center gap-[2.5%]">

        <div className="flex flex-col w-[49%] items-start justify-center text-start gap-[35.07px] text-black font-jost">
          <span className="text-[12.002px] font-medium leading-[14.026px] tracking-[0.481px] uppercase">
          Perfect Fine Dine Experiences
          </span>
          <h2 className="text-[48.089px] font-normal font-marcellus leading-[57.707px]">
          Bistro Restaurant
          </h2>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
          Forget about the concern about whether I can eat when you visit Lago Hotel and start daydreaming about a vacation. We are open twenty-four hours a day at Bistro restaurant. Experience our concept while sipping your beer next to those who taste delicious hamburgers, pasta, sandwiches, chicken drumsticks and sweeten their palates.Let’s learn more about this concept.
          </p>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
          Bistros are restaurants where typical menu items are provided quickly. The French take little breaks from their everyday labor in these serene locations, occasionally sipping coffee and occasionally consuming alcohol. Sandwiches, both hot and cold, desserts, and other drinks can all be enjoyed.
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
