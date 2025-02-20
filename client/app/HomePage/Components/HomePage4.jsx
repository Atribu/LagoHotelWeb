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
    <section className="max-w-[1440px] mx-auto px-4">
      {/* Üst küçük başlık */}
      <div className="flex flex-col w-[1106px]">
      <p className="text-[12px] leading-[14px] tracking-[0.48px] uppercase font-medium font-jost mb-2">
        Discover the services we offer
      </p>

      {/* Büyük başlık */}
      <h2 className="text-[48px] font-marcellus font-normal tracking-tight mb-8">
        All the Essentials for a <br className="hidden md:block" />
        Comfortable Stay
      </h2>

      {/* İkon + metin grid (2 satır x 3 sütun) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-6 items-center justify-center"
          >
            {/* İkon */}
            <div className="shrink-0 items-center justify-center">
              <service.Icon width={50} height={50} />
            </div>
            {/* Başlık + açıklama */}
            <div>
              <h3 className="font-jost text-[18px] font-normal leading-[30px] mb-1">
                {service.title}
              </h3>
              <p className="font-jost text-[14px] font-normal leading-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Alt kısım: Discover More link/button */}
      <div className="mt-12">
        <button className="border-b border-gray-900 uppercase text-sm font-normal leading-[30px] tracking-widest hover:text-gray-500 transition">
          Discover More
        </button>
      </div>
      </div>
    </section>
  )
}
