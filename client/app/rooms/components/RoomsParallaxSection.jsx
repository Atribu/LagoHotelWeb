import React from "react";
import oda from "../images/oda.png";
import MinibarSvg from "./svg/MinibarSvg";
import FoundationSvg from "./svg/FoundationSvg";
import WatchSvg from "./svg/WatchSvg";
import TvSvg from "./svg/TvSvg";

const RoomsParallaxSection = () => {
  return (
    <div
      className="relative flex flex-col xl:flex-row items-center justify-center min-h-[800px] xl:min-h-[610px] w-full bg-cover bg-center parallax"
      style={{ backgroundImage: `url(${oda.src})` }}
    >
      {/* Overlay yarı saydam siyah katman */}
      <div className="absolute inset-0 bg-lagoBlack/60 z-[1]"></div>

      {/* İçerik container */}
      <div className="z-50 flex flex-col items-center justify-center gap-[38px] font-jost text-white text-center xl:text-left">
        {/* Tagline */}
        <span className="uppercase text-[12px] font-medium leading-[14px] tracking-[0.48px] w-full">
          The Essential In-Room AmenitieS
        </span>

        {/* İçerik kolonlarının bulunduğu wrapper */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-[40px] px-4 md:px-8 xl:px-0">
          {/* Sol Kolon */}
          <div className="w-full xl:w-[537px] flex flex-col items-center xl:items-start justify-center gap-[38px] xl:gap-[68px]">
            {/* Başlık */}
            <h3 className="font-marcellus font-normal text-[36px] md:text-[30px] leading-[49px] md:leading-[42px] -tracking-[0.792px]">
              Our rooms have all the essentials you need for your stay.
            </h3>

            {/* Mini Bar ve Cosmetics grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full mt-[30px] py-[8px]">
              {/* Mini Bar */}
              <div className="w-full xl:w-[249px] flex flex-col items-center xl:items-start justify-center gap-[15px]">
                <MinibarSvg className="flex" width={38} height={38} />
                <h5 className="text-[18px] md:text-[16px] font-normal leading-[30px] md:leading-[24px]">
                  Mini Bar
                </h5>
                <p className="text-[14px] md:text-[14px] font-normal leading-[21px]">
                  Daily replenishments include water, soft drinks, beer, milk with fruit, chocolate, and a cracker.
                </p>
              </div>
              {/* Cosmetics */}
              <div className="w-full xl:w-[249px] flex flex-col items-center xl:items-start justify-center gap-[15px]">
                <FoundationSvg className="flex" width={40} height={40} />
                <h5 className="text-[18px] md:text-[16px] font-normal leading-[30px] md:leading-[24px]">
                  Cosmetics
                </h5>
                <p className="text-[14px] md:text-[14px] font-normal leading-[21px]">
                  Bathroom essentials include shampoo, conditioner, shower gel, soap, loofah, hairdryer, and body cream.
                </p>
              </div>
            </div>
          </div>

          {/* Sağ Kolon */}
          <div className="w-full xl:w-[533px] flex flex-col items-center xl:items-start justify-center gap-[38px] xl:gap-[68px]">
            {/* Açıklama Paragrafı */}
            <p className="text-[16px] md:text-[14px] font-normal leading-normal -tracking-[0.352px] mb-8 max-w-[600px]">
              Enjoy a seamless stay with all the essential amenities at your fingertips. From daily minibar replenishments to premium bath essentials, secure room access, and uninterrupted entertainment with LED TV and 24-hour WiFi, we ensure your comfort at every moment.
            </p>

            {/* Room Access ve Wifi & LedTV grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full mt-[30px] py-[8px]">
              {/* Room Access */}
              <div className="w-full xl:w-[249px] flex flex-col items-center xl:items-start justify-center gap-[15px]">
                <WatchSvg className="flex" width={40} height={40} />
                <h5 className="text-[18px] md:text-[16px] font-normal leading-[30px] md:leading-[24px]">
                  Room Access
                </h5>
                <p className="text-[14px] md:text-[14px] font-normal leading-[21px]">
                  All door locks are securely operated using a convenient chip bracelet key system for easy access.
                </p>
              </div>
              {/* Wifi & LedTV */}
              <div className="w-full xl:w-[249px] flex flex-col items-center xl:items-start justify-center gap-[15px]">
                <TvSvg className="flex" width={43} height={43} />
                <h5 className="text-[18px] md:text-[16px] font-normal leading-[30px] md:leading-[24px]">
                  Wifi & LedTV
                </h5>
                <p className="text-[14px] md:text-[14px] font-normal leading-[21px]">
                  LED TV with international and national satellite channels, radio, and 24-hour WiFi access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsParallaxSection;
