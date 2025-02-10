import React from "react";
import img1 from "../images/Spa.webp";
import img2 from "../images/Sauna and hamam.webp";
import Image from "next/image";

const SpaInfoSection = (texts=[],texts2=[],texts3=[]) => {
  return (
    <div className="flex w-screen h-auto my-[50px] items-end justify-center">
      <div className="flex w-[76.8%] items-end justify-center gap-[2%]">
        <div className="flex flex-col w-[53%] justify-center items-start gap-[50px]">
          <div className="flex flex-col w-full items-start justify-center text-start gap-[35px] text-black font-jost">
            <span className="text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px]">
              Perfect Fine Dine Experiences
            </span>
            <h2 className="text-[48px] font-marcellus font-normal leaidng-[57.6px]">
              Wellness at LAGO Hotel
            </h2>
            <p className="text-[16px] font-normal leading-[24px]">
              For those looking to stay in shape while on vacation, you can
              unwind your body and soul by receiving a massage from a competent
              masseuse in our SPA after engaging in your daily sporting
              activities in our Fitness room, which we have equipped with
              professional equipment, or you can step back in time in the
              traditional Turkish Bath and relax in the Finnish Sauna.
            </p>
          </div>
          <div className="w-full flex relative">
            <Image
              src={img2}
              layout="cover"
              width={img2.width}
              height={img2.height}
              alt="spa"
              className="w-full"
            />
            <div className="absolute bottom-[35px] left-[35px] text-white font-jost gap-[24px]">
              <span className="text-[12px] font-normal leading-[14px] uppercase tracking-[0.48px]">
                Lorem ipsum
              </span>
              <h3 className="text-[30px] font-marcellus font-normal capitalize leading-[57.6px] ">
                Sauna & Hamam
              </h3>
              <p className="text-[14px] font-normal leading-[21px]">
                Opening Hours: 08:00 - 20:00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[45%] relative">
        <Image
          src={img1}
          layout="cover"
          width={img1.width}
          height={img1.height}
          alt="spa"
          className="flex w-full "
        />
         <div className="absolute top-[35px] left-[35px] text-white font-jost gap-[24px]">
              <span className="text-[12px] font-normal leading-[14px] uppercase tracking-[0.48px]">
              SPA & WELLNESS
              </span>
              <h3 className="text-[30px] font-marcellus font-normal capitalize leading-[57.6px] ">
              Spa Treatments
              </h3>
              <p className="text-[14px] font-normal leading-[21px]">
              Opening Hours: 9:00 - 18:00
              </p>
              <ul className="text-[14px] font-normal leading-[21px] list-disc pl-5 marker:text-xs marker:text-white">
                <li>16 Massage Rooms</li>
                <li>2 VIP Massage Rooms</li>
                <li>Turkish Bath and Pouch Foam Rooms</li>
                <li>Steam room</li>
                <li>Sauna</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpaInfoSection;
