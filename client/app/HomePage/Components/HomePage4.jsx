"use client"

import React from "react"
import Beach from "./Icons/Beach"
import Dining from "./Icons/Dining"
import Fireworks from "./Icons/Fireworks"
import Panda from "./Icons/Panda"
import Pool from "./Icons/Pool"
import Spa from "./Icons/Spa"

export default function HomePage4() {
  const services = [
    {
      title: "Private Beach & Pavilions",
      Icon: Beach,
      description:
        "Enjoy our 350m private beach with free sun loungers or book a cabana or pavilion for extra comfort."
    },
    {
      title: "Pools for Every Mood",
      Icon: Pool,
      description:
        "With 14 pools, including an infinity pool, relax pool, and two Aqua Parks, there’s a perfect spot for everyone."
    },
    // 3. sırada World-Class Dining
    {
      title: "World-Class Dining",
      Icon: Dining,
      description:
        "Enjoy a rich buffet selection and multiple à la carte options, featuring Turkish, Mediterranean, and international flavors."
    },
    // 4. sırada Fun for Kids
    {
      title: "Fun for Kids",
      Icon: Panda,
      description:
        "Bamboo Kids Club offers playgrounds, gaming rooms, and mini discos, plus a Kids’ Aqua Park with slides and water games."
    },
    {
      title: "Entertainment & Activities",
      Icon: Fireworks,
      description:
        "From live shows and beach festivals to sports like volleyball and water polo, there’s something for everyone."
    },
    {
      title: "Spa & Wellness",
      Icon: Spa,
      description:
        "Relax with luxury spa treatments, a Turkish hammam, sauna, steam rooms, and professional fitness classes."
    }
  ]

  return (
    <section className="max-w-[1440px] mx-auto px-4 w-screen items-center justify-center my-[25px]">
      {/* Üst küçük başlık */}
      <div className="flex flex-col 2xl:w-[1106px] w-[87.79%] md:w-[91.4%] xl:w-[76.8%] items-start ml-[6.1%] md:ml-[4.3%] xl:ml-[11.6%] justify-center gap-[15px] md:gap-[25px] lg:gap-[35px] text-lagoBlack">
      <p className="text-[12px] leading-[14px] tracking-[0.48px] uppercase font-medium font-jost">
        Discover the services we offer
      </p>

      {/* Büyük başlık */}
      <h2 className="text-[28px] md:text-[32px] lg:text-[48px] font-marcellus font-normal lg:leading-[57.6px] lg:capsizedText2">
        All the Essentials for a
        Comfortable Stay
      </h2>

      {/* İkon + metin grid (2 satır x 3 sütun) */}
      <div className="flex flex-col items-start md:grid gap-[15px] md:gap-[20px] lg:gap-[29px] md:grid-cols-2 lg:grid-cols-3 w-full md:mt-[15px] lg:mt-[10px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-[15px] md:gap-[10px] lg:gap-[17px] items-center justify-center md:w-[92%] lg:w-[100%] xl:w-[98%]"
          >
            {/* İkon */}
            <div className="shrink-0 items-center justify-center">
              <service.Icon width={50} height={50} />
            </div>
            {/* Başlık + açıklama */}
            <div className="flex flex-col gap-[4px] md:gap-[10px] lg:gap-[17px]">
              <h3 className="font-jost text-[16px] leading-normal lg:text-[18px] font-normal md:leading-[30px]">
                {service.title}
              </h3>
              <p className="font-jost text-[12px] lg:text-[14px] font-normal leading-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Alt kısım: Discover More link/button */}
      <div className="hidden lg:flex ">
        <button className="flex border-b font-marcellus border-lagoBlack text-lagoBlack uppercase text-[18px] font-normal leading-[30px] transition cursor-pointer">
          Discover More
        </button>
      </div>
      </div>
    </section>
  )
}
