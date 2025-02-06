import React from "react";
import img1 from "../images/art1.webp"
import img2 from "../images/art2.webp"
import Image from "next/image";

const ClinaryInfoSection = () => {
  return (
    <div className="flex w-screen h-[555px] my-[100px] items-center justify-center">
      <div className="flex w-[76.8%] items-center justify-center gap-[1.5%]">

        <div className="flex flex-col w-[49.5%] items-start justify-center text-start gap-[35.07px] text-black font-jost">
          <span className="text-[12.002px] font-medium leading-[14.026px] tracking-[0.481px] uppercase">
            Perfect Fine Dine Experiences
          </span>
          <h2 className="text-[48.089px] font-normal font-marcellus leading-[57.707px]">
            Culinary Art at LAGO
          </h2>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
            LAGO, you will enjoy your vacation with international cuisine in our
            A’la Carte Restaurants, where flavorful dishes are served, with an
            endless open buffet where delicious dishes feature uniqueness from
            Turkish cuisine as well as fresh flavors reflecting the spirit of
            the Mediterranean
          </p>
          <ul className="text-[16.03px] font-normal leading-[24.045px] list-disc pl-5 marker:text-xs marker:text-black">
           <li> Ana Restoran: Kahvaltı, Öğlen ve Akşam Yemeği </li>
          <li>  Bistro Restoran: 24 Saat</li>
           <li> Snack Bars: 24 Saat</li>
          </ul>
        </div>

        <div className="flex w-[49%] items-start justify-start relative">
            <Image src={img2} alt="art" width={img2.width} height={img2.height}/>
            <Image src={img1} alt="art" width={img1.width} height={img1.height} className="absolute top-[25%] left-[45%]"/>
        </div>

      </div>
    </div>
  );
};

export default ClinaryInfoSection;
