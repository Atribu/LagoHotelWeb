import React from 'react'
import Image from 'next/image'
import Sag from "./Images/sag1.webp"
import Sol from "./Images/sol2.webp"

// Örnek resim importları (kendi resimlerinizi import edin)
// import beachImage from '/public/beach.jpg'
// import poolImage from '/public/pool.jpg'

export default function HomePage2() {
  return (
    <div className='flex w-full items-center justify-center gap-16'>
        <div className="relative flex w-1/2 mt-40 bg-white justify-center">
            {/* Sol kısım: Üst üste binen iki resim */}
            <div className="relative w-full left-[33%] bottom-60 overflow-visible">
                {/* Üstteki küçük resim */}
                <div className="absolute  h-auto">
                <Image
                    src={Sol} // Kendi görsel yolun
                    alt="Beach"
                    width={300}
                    height={450}
                    className="object-cover"
                />
                </div>

                {/* Alttaki büyük resim (biraz aşağı ve sağda) */}
                <div className="absolute w-full left-[25%] top-36  h-auto">
                <Image
                    src={Sag} 
                    alt="Pool"
                    width={300}
                    height={450}
                    className="object-cover"
                />
                </div>
            </div>
        </div>
        <div className="w-1/2 flex h-[640px] flex-col items-start justify-center pt-[21%] z-50">
                <p className="font-jost text-[12px] font-medium uppercase  text-sm mb-12 leading-[14px] tracking-[0.48px] text-black">
                PERFECT FINE DINE EXPERIENCES
                </p>
                <h2 className="text-[48px] font-marcellus leading-[57.6px] mb-4">
                Where green and blue <br /> meets
                </h2>
                <p className="text-black leading-[24px] font-jost text-[16px] font-normal mb-4">
                With its 350 m long golden yellow beach located on the sands of the most <br /> breathtaking
                blue hues, LAGO will provide you with an unforgettable holiday.
                </p>
                <p className="text-black leading-[24px] font-jost text-[16px] font-normal mb-6">
                Enjoy cooling off in pools of different sizes in the deep blue world of LAGO. <br />
                The facility has a heated indoor pool, and there is also a heated relax pool
                in <br /> the area where the outdoor swimming pool is located.
                </p>
                <button className="inline-block  border border-black px-6 py-3 uppercase text-[16px] font-medium tracking-wider hover:bg-black hover:text-white hover:underline hover:underline-offset-2 transition">
                go to gallery
                </button>
            </div>
    </div>
  )
}
