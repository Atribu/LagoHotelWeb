import React from 'react'
import {useTranslations} from 'next-intl';

const Beach4 = () => {
    const t = useTranslations('BeachPools.PoolSection');

  return (
    <div className='flex flex-col justify-center items-center w-full gap-[30px] lg:gap-[50px]'>
        <div className='flex flex-col justify-center items-center gap-[15px] md:gap-[25px] lg:gap-[35px] text-center w-[87.79%] md:w-[91.4%] lg:w-[76.8%]'>
            <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>{t("subtitle")}</p>
            <h2 className='font-marcellus text-[28px] md:text-[32px] lg:text-[48px] leading-[120%] lg:leading-[57.6px] lg:capsizedText2'>{t("title")}</h2>
            <p className='font-jost text-[14px] lg:text-[16px] leading-normal w-[90%] md:w-[70%] xl:w-[60%]'>{t("text")}</p>
        </div>
        <div className="relative w-screen min-h-[calc(50vh+73px)] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
            >
                <source 
                src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cb805ea008b01e5fb54de3eb7657cf110c9121fe?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YbX8WgApaBZrI3h~yux0IDBpuBg9NVlrYbvNUuqoHNikmp12qOWWKPfEiEjKy-DEYaGVPAW0XOJ09xbCzQvrM~f~c8VBQQi3qT~bMtwVbnSMCrgylrrFl0T1rxZZcq0TjWPVe8~-t3gPVT9XQQ2bqj-uW7I5dscPYl1lOoUgljKlBU3q3XSiwu~GCrlKsF0IK19Aq1Qqm7238rP0EKjasw~HehJQOQ15K5HKn4UtVaJZEq1xTvKHP89bjDtSxjEl2yu2psHjbs2T5DGfcjjTqxwbuCe3GsKjleXoN-i20Kcs-IlWpplcTwnV23i4l9P86WNuIFOp21Uzk-YRlw~Ubw__"
                type="video/mp4"
                />
                Tarayıcınız bu videoyu desteklemiyor.
            </video>
        </div>   
    </div>
  )
}

export default Beach4