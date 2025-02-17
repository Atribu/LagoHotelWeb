"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import img1 from "../images/ImagePlaceholder1.webp";
import img2 from "../images/ImagePlaceholder2.webp";
import img3 from "../images/ImagePlaceholder3.webp";
import img4 from "../images/ImagePlaceholder4.webp";

const SubroomCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ align: "center" });
  const images = [img1, img2, img3, img4, img1, img2, img3, img4];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedIndex(null);
    setSelectedImage(null);
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      const newIndex = (selectedIndex - 1 + images.length) % images.length;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      const newIndex = (selectedIndex + 1) % images.length;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  return (
    <>
      {/* Carousel */}
      <div className="overflow-hidden w-screen mt-[9px]" ref={emblaRef}>
        <div className="flex gap-[5px]">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-[0_0_calc(100vw/3.9)] min-w-[372px] h-[38vh] bg-gray-300 overflow-hidden cursor-pointer"
              onClick={() => openImage(index)}
            >
              <Image
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-auto object-contain"
                width={img.width}
                height={img.height}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal (Resmi Büyütme, Geri-İleri & Kapat Butonu) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-[9999]">
          {/* Kapatma Butonu (Sağ Üstte) */}
          <button
            onClick={closeImage}
            className="absolute top-5 right-5 text-white text-4xl font-bold bg-gray-900 bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-75 transition"
          >
            X
          </button>

          {/* Seçili Resim */}
          <div className="relative flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Selected Image"
              className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-100 hover:scale-105"
              width={800}
              height={600}
            />
          </div>

          {/* Geri & İleri Butonları (Resmin Altında) */}
          <div className="flex gap-10 mt-4">
            <button
              onClick={prevImage}
              className="text-white text-2xl font-bold bg-gray-900 bg-opacity-50 px-6 py-3 rounded-lg hover:bg-opacity-75 transition"
            >
              ↩ 
            </button>

            <button
              onClick={nextImage}
              className="text-white text-2xl font-bold bg-gray-900 bg-opacity-50 px-6 py-3 rounded-lg hover:bg-opacity-75 transition"
            >
             ❯
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SubroomCarousel;
