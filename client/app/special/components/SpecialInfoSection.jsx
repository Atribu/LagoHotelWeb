import React from "react";
import img1 from "../images/ikili1.webp"
import img2 from "../images/ikili2.webp"
import katman1 from "../images/Katman1.png"
import katman2 from "../images/Katman2.png"
import Image from "next/image";

const SpecialInfoSection = () => {
  return (
    <div className="flex w-screen h-[555px] my-[100px] items-center justify-center relative">
      <div className="flex w-[76.8%] items-center justify-between ml-32 h-full">
        <div className="flex flex-col w-[47%] items-start justify-center text-start gap-[35px] text-black font-jost">
          <span className="text-[12.002px] font-medium leading-[14.026px] tracking-[0.481px] uppercase">
          Perfect Fine Dine Experiences
          </span>
          <h2 className="text-[48.089px] font-normal font-marcellus leading-[57.707px]">
          Historical 
          Treasures Nearby
          </h2>
          <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
          Lago, you will enjoy your vacation with international cuisine in our A’la Carte Restaurants, where flavorful dishes are served, with an endless open buffet where delicious dishes feature uniqueness from Turkish cuisine as well as fresh flavors reflecting the spirit of the Mediterranean
          </p>
            
        </div>

        <div className="flex w-[49%] items-start justify-start relative h-full">
            <Image src={img2} alt="art" width={300} height={450}/>
            <Image src={img1} alt="art" width={300} height={450} className="absolute top-[24%] left-[30%]"/>
        </div>

      </div>
      <Image src={katman1} width={katman1.width} height={katman1.height} className="absolute left-0 bottom-0" alt="sutun"/>
      <Image src={katman2} width={katman2.width} height={katman2.height} className="absolute left-28 -bottom-8" alt="sutun2"/>
    </div>
  );
};

export default SpecialInfoSection;
