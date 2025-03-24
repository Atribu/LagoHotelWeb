"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import DownArrow from "./app/[locale]/GeneralComponents/Header/Icons/DownArrow";

export default function LocaleSwitcherSelect({ children, defaultValue, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname(); // Mevcut URL yolunu alıyoruz

  function handleLangChange(lang) {
    setIsOpen(false);
    startTransition(() => {
      // URL'deki mevcut dil kodunu çıkart
      const currentLocale = pathname.split('/')[1]; // Mevcut dil kodunu al
      const newPathname = pathname.replace(`/${currentLocale}`, `/${lang}`); // Yeni dil koduyla URL'yi güncelle
      router.replace(newPathname); // Yeni URL'ye yönlendir
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center gap-2 rounded-md px-[10px] py-[10px] lg:py-4 font-medium  mix-blend-difference bg-darkB uppercase w-full text-[16px]">
        {defaultValue}
      
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-0 rounded bg-darkB shadow-lg left-2 w-full ">
          <ul className="py-0">
            {React.Children.map(children, (child) => {
              if (child.props.value === defaultValue) {
                return null; // Eğer mevcut dil seçiliyse listeleme
              }
              return (
                <li
                  key={child.props.value} // key'yi child.key yerine child.props.value olarak ayarladım
                  className="cursor-pointer px-[6px] py-[8px] mt-0 hover:bg-white hover:text-lagoBlack text-center items-center justify-center"
                  onClick={() => handleLangChange(child.props.value)}
                >
                  {child.props.value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
