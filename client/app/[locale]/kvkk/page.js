"use client"
import React, { useState } from 'react';
import mainImg from "../HomePage/Components/Images/GreenAndBlueFull2.webp";
import Banner from '../ourpolicies/components/Banner';
import KvkkSec2 from './components/KvkkSec2';
import AydinlatmaMetni from './components/AydinlatmaMetni';

const page = () => {
  const [activeTab, setActiveTab] = useState("aydinlatma");

  return (
    <div className='flex flex-col gap-[15px] md:gap-[22px] lg:gap-[30px] overflow-hidden bg-[#ffffff] items-center justify-center mb-16'>
      <Banner   img={mainImg}
        span="Harmony with Nature"
        header="KVKK"/>

{/* <div className="flex w-[87.79%] md:w-[91.4%] lg:w-[76.8%] items-center justify-center gap-[20px] md:gap-[30px] lg:gap-[50px] mb-8 font-jost">
        <button onClick={() => setActiveTab("politikalar")} className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer ${
            activeTab === "aydinlatma" ? "border-b border-[#676766]" : ""
          }`}>
         Aydınlatma Metni
        </button>
        <button onClick={() => setActiveTab("yonetmelik")} className={`flex items-center justify-center py-[10px] px-[20px] text-[20px] cursor-pointer ${
            activeTab === "sectwo" ? "border-b border-[#676766]" : ""
          }`}>
         2. button
        </button>
      </div>
      {activeTab === "sectwo" ? (
        <KvkkSec2 />
      ) : (
        <>

     <AydinlatmaMetni/>
      </>
      )} */}

<AydinlatmaMetni/>
    </div>
  )
}

export default page
