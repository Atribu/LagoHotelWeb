import React from "react";
import Link from "next/link";

const DiscoverBackground = ({
  span,
  header,
  text,
  link = "#",
  img
}) => {
  // Arka plan resmi kontrolü: eğer img.src yoksa, arka planı "none" veya boş ayarlayabilirsin.
  const backgroundImage = img?.src ? `url(${img.src})` : "none";

  return (
    <div
      className="flex w-screen h-[36vh] min-h-[400px]  items-center justify-center bg-center bg-cover relative"
      style={{ backgroundImage }}
    >
      {/* Yarı saydam siyah katman */}
      <div className="absolute inset-0 z-[1] bg-lagoBlack/40"></div>

      {/* İçerik */}
      <div className="flex flex-col max-w-[1440px]  items-center justify-center gap-[15px] md:gap-[25px] lg:gap-[30px] font-jost text-white text-center z-10">
        {/* span varsa göster */}
        {span && (
          <span className="text-[12px] w-[30.7%] font-medium leading-[14px] tracking-[0.48px] uppercase">
            {span}
          </span>
        )}

        {/* header varsa göster */}
        {header && (
          <h3 className="text-[28px] md:text-[32px] lg:text-[48px] lg:w-[30.7%] font-marcellus font-normal leading-normal lg:leading-[57.6px] capsizedText2">
            {header}
          </h3>
        )}

        {/* text varsa göster */}
        {text && (
          <p className="text-[14px] lg:text-[16px] w-[87.79%] lg:w-[36.7%] font-normal leading-[18px] lg:leading-[24px] list-disc capsizedText4">
            {text}
          </p>
        )}

        {/* Link; gönderilmezse "#" kullanılır */}
        <Link
            href={link}
            className="text-[14px] lg:text-[16px] font-normal leading-normal ml-[4px] font-marcellus uppercase border-b border-white pb-[8px] h-[24px] text-center w-auto items-center justify-center"
          >
            DISCOVER MORE
          </Link>
      </div>
    </div>
  );
};

export default DiscoverBackground;
