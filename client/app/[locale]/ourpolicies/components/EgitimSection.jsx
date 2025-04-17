import Link from 'next/link'
import React from 'react'

const EgitimSection = () => {
  return (
    <div className='flex flex-col h-[40vh] gap-10 items-center justify-start'>
      <h4 className='text-[28px] lg:text-[40px]'>Eğitimlerimiz</h4>
      <div className='grid grid-cols-3 lg:grid-cols-5'>
      <Link href="/documents/YanginEgitimi.pptx"  className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer border-b`}>
          Yangın Eğitimi
        </Link>
        <Link href="/documents/TEHLiKELiMADDEEGiTiMi.pptx"  className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer border-b`}>
        Tehlikeli Madde Eğitimi
        </Link>
        <Link href="/documents/KimyasalEgitimi.pptx" className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer border-b`}>
         Kimyasal Eğitimi
        </Link>
        <Link  href="/documents/GdaGuvenligiEgitimi.pptx" className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer border-b`}>
         Gıda Güvenliği Eğitimi
        </Link>
        <Link  href="/documents/EngelliBireylerileiletisimEgitimi.pptx" className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer border-b`}>
         Engelli Bireyler İle İletişim Eğitimi
        </Link>
        <Link  href="/documents/CocukistismariEgitimi.pptx" className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer border-b`}>
        Çocuk İstismarı Eğitimi
        </Link>
        <Link href="/documents/Alkol-MaddeEgitimi.pptx" className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer border-b`}>
         Alkol Madde Eğitimi
        </Link>
      </div>
    </div>
  )
}

export default EgitimSection
