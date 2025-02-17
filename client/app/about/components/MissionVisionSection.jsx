import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Tekrarlanan sütun yapısını modüler hale getiren bileşen
const MissionColumn = ({ img, spanText, heading, paragraph, showLink, link }) => (
  <div className="flex flex-col w-[49%] items-start justify-center text-start gap-[25px] font-jost text-black">
    <Image src={img} width={img.width} height={img.height} alt="hotel" className="flex w-full" />
    <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
      {spanText}
    </span>
    <h4 className="text-[30px] font-normal leading-[57.6px] capitalize font-marcellus">
      {heading}
    </h4>
    <p className="text-[14px] font-normal leading-[21px] w-[99%]">
      {paragraph}
    </p>
    {showLink && (
      <Link 
        href={link} 
        className="flex w-[170.585px] whitespace-nowrap py-[16px] px-[32px] font-jost text-[16px] text-lagoBrown font-medium leading-[30px] max-h-[41px] items-center justify-center border border-lagoBrown shadow-buttonCustom uppercase"
      >
        MORE ABOUT
      </Link>
    )}
  </div>
)

const MissionVisionSection = ({ texts = [], texts2 = [], texts3 = [], leftImg, rightImg, showLink, link1, link2 }) => {
  return (
    <div className="flex w-screen items-center justify-center my-[100px] max-w-[1444px]">
      <div className="flex flex-col w-[76.8%] items-center justify-center gap-[50px]">
        <div className="flex flex-col items-center justify-normal w-[65%] text-center font-jost text-black gap-[35px]">
          <span className="text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px]">
            {texts[0]}
          </span>
          <h3 className="text-[48px] font-normal leading-[57.6px] font-marcellus">
            {texts[1]}
          </h3>
          <p className="text-[16px] font-normal leading-[24px]">
            {texts[2]}
          </p>
        </div>

        <div className="flex w-full items-start justify-center gap-[2%]">
          <MissionColumn
            img={leftImg}
            spanText={texts2[0]}
            heading={texts2[1]}
            paragraph={texts[2]}
            showLink={showLink}
            link={link1}
          />
          <MissionColumn
            img={rightImg}
            spanText={texts2[0]}
            heading={texts2[1]}
            paragraph={texts3[2]}
            showLink={showLink}
            link={link2}
          />
        </div>
      </div>
    </div>
  )
}

export default MissionVisionSection
