import React from 'react'
import Image from "next/image"
import Swimm from "../Images/Swimming.png"

const Beach4 = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-[30px] lg:gap-[50px]'>
        <div className='flex flex-col justify-center items-center gap-[15px] md:gap-[25px] lg:gap-[35px] text-center w-[87.79%] md:w-[91.4%] lg:w-[76.8%]'>
            <p className='font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>Pools Designed for Every Moment</p>
            <h2 className='font-marcellus text-[28px] md:text-[36px] lg:text-[40px] leading-normal'>Float Into Relaxation</h2>
            <p className='font-jost text-[14px] lg:text-[16px] leading-normal w-[90%] md:w-[70%] xl:w-[60%]'>Lorem ipsum dolor sit amet consectetur. Diam pharetra ipsum elementum felis. Faucibus  mauris mattis egestas ultricies convallis egestas sodales. Ac neque duis libero vitae  pellentesque ornare ac sem massa. Sit lectus pretium pulvinar cras magna nisi in. Odio sed.</p>
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
                src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cb805ea008b01e5fb54de3eb7657cf110c9121fe?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JeH4KCzfZmxBc~LPQgzffG~Ke~XVsSRqNce66NeyX7Jld6w7dBnRHhCVHNPs7KYpTUNTX7XZD7LrLZxlbhWtRuEPsZ64eWI~Y6RzocI0-lVViSt4CqLJEg39cxYTRLH4BhQ2FpExHE8DBZ1sHtGRVetqzgGznZdqmw76MOfwcOh1uxg-e-8o6ngAsDkedBLnRcUdZkeg9dTfMtdB7IcVchiKV52-FeLolVkdvtNQ99A-IHeOg6YqM4BwvY9pSbMqbkvngNBMa9obVpgTuQUjRAwjVgS4rRsallZXlv2Bt6NRe4gJx9gN1NFfeXemVvTkxW7rSFEAbPaQLdON91wbQQ__"
                type="video/mp4"
                />
                Tarayıcınız bu videoyu desteklemiyor.
            </video>
        </div>   
    </div>
  )
}

export default Beach4