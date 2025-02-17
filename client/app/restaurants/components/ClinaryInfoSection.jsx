import React from "react";
import defaultImg1 from "../images/art1.webp";
import defaultImg2 from "../images/art2.webp";
import Image from "next/image";

const ClinaryInfoSection = ({
  // Dışarıdan farklı görseller gelmezse varsayılan olarak import edilenler kullanılacak
  img1 = defaultImg1,
  img2 = defaultImg2,
  span,
  header,
  texts = [],
}) => {
  return (
    <div className="flex w-screen h-[555px] 2xl:h-[832.5px] items-center justify-center max-w-[1444px]">
      <div className="flex w-[76.8%] items-center justify-center gap-[52px] h-full">
        
        {/* Metin Alanı */}
        <div className="flex flex-col w-[49%] items-start justify-center text-start gap-[35.07px] text-black font-jost">
          {span && (
            <span className="text-[12.002px] font-medium leading-[14.026px] tracking-[0.481px] uppercase">
              {span}
            </span>
          )}

          {header && (
            <h2 className="text-[48.089px] font-normal font-marcellus leading-[57.707px]">
              {header}
            </h2>
          )}

          {/* İlk metin (her zaman paragraf olarak gösterilir) */}
          {texts[0] && (
            <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
              {texts[0]}
            </p>
          )}

          {/* Eğer metin sayısı 2'den az (1 veya 2 ise) ikinci metni normal paragraf olarak göster */}
          {texts.length < 3 && texts[1] && (
            <p className="text-[16.03px] font-normal leading-[24.045px] leading-trim-both text-edge-cap">
              {texts[1]}
            </p>
          )}

          {/* Eğer metin sayısı 3 veya daha fazlaysa ilk metinden sonrasını liste olarak göster */}
          {texts.length >= 3 && (
            <ul className="text-[16.03px] font-normal leading-[24.045px] list-disc pl-5 marker:text-xs marker:text-black">
              {texts.slice(1).map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Görsel Alanı */}
        <div className="flex w-[48%] items-start justify-start relative h-[555px]">
          <Image
            src={img2}
            alt="art"
            width={img2.width}
            height={img2.height}
          />
          <Image
            src={img1}
            alt="art"
            width={img1.width}
            height={img1.height}
            className="absolute top-[105px] left-[215px]"
          />
        </div>

      </div>
    </div>
  );
};

export default ClinaryInfoSection;
