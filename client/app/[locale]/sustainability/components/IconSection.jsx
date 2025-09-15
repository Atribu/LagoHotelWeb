'use client';

import Image from 'next/image';
import { useTranslations, useMessages } from 'next-intl';
import img1 from "../images/icons/tasarim1.png";
import img2 from "../images/icons/tasarim2.png";
import img3 from "../images/icons/tasarim5.png";
import img4 from "../images/icons/tasarim4.png";
import img5 from "../images/icons/tasarim3.png";

const resimler = [img1, img2, img3, img4, img5];

function hasMessagePath(obj, path) {
  const parts = path.split('.');
  let cur = obj;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      return false;
    }
  }
  // Son düğüm string ya da truthy bir değer olmalı
  return typeof cur === 'string' ? cur.trim().length > 0 : Boolean(cur);
}

export default function IconSection() {
   const t = useTranslations('IconSection');     // namespace: IconSection
  const allMessages = useMessages();            // tüm mesajlar (aktif locale)
  const ns = allMessages?.IconSection ?? {};    // sadece IconSection altı

  const geziVerileri = Array.from({ length: 5 }, (_, i) => {
    const key = `Icon${i + 1}`;

    // Başlık (yoksa boş string döndürürsün veya fallback yaz)
    const baslik = hasMessagePath(ns, `${key}.header1`)
      ? t(`${key}.header1`)
      : '';

    // list1..list5'i var olup olmadığına göre topla
    const listeler = [];
    for (let j = 1; j <= 5; j++) {
      const localPath = `${key}.list${j}`; // ns içindeki yol
      if (hasMessagePath(ns, localPath)) {
        listeler.push(t(`${key}.list${j}`)); // t() sadece varsa çağrılıyor
      }
    }

    return {
      baslik,
      listeler,
      resim: resimler[i]
    };
  });

  return (
    <main className="w-[87.79%] md:w-[90%] lg:w-[76.8%] max-w-[1440px] mx-auto py-8 space-y-6 lg:py-12 lg:space-y-8 overflow-x-hidden">
      <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-marcellus text-lagoBlack text-center">
        {t("Dikkat")}
      </h2>

      {geziVerileri.map((yer, i) => (
        <section
          key={i}
          className={`flex h-full flex-col-reverse lg:flex-row ${
            i % 2 !== 0 ? "lg:flex-row-reverse" : ""
          } items-center gap-6 md:gap-10 lg:gap-[4%] justify-center`}
        >
          <div className="w-full lg:w-[25%]">
            <Image
              src={yer.resim}
              alt={yer.baslik}
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-[46%] text-lagoGray h-full">
            <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-marcellus text-lagoBlack2 mb-4 capitalize">
              {yer.baslik}
            </h3>

           {yer.listeler.length > 0 && (
              <ul className="list-disc pl-5 space-y-2">
                {yer.listeler.map((madde, idx) => (
                  <li key={idx} className="text-[16px] md:text-[18px]">
                    {madde}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
