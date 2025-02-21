"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Reservation from "./Reservation";
import PosterImage from "../Images/videophoto.webp"; // Yüklenme resmi

export default function HomePage() {
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const handleVideoLoad = () => setVideoLoaded(true);
      videoRef.current.addEventListener("loadeddata", handleVideoLoad);
      return () => videoRef.current?.removeEventListener("loadeddata", handleVideoLoad);
    }
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* 📌 Video yüklenene kadar gösterilecek görsel */}
      {!isVideoLoaded && (
        <Image
          src={PosterImage}
          alt="Video Placeholder"
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* 📌 Video */}
      <video
        ref={(el) => (videoRef.current = el)} // ✅ TypeScript kısmını çıkardık
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cf3807b1338af1732e5dbbe728166b1d044497c2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NACpXnTmxUtJvYN152aD3poEgqKJ2hpKE-PRB~ZzbBjGubVQ3eNemtsSxOry1Bs6-scqkaMZV5XCEvQadkIdyUcvqkN9utkxoCVCbrZ3k3U0trQso0~0nJ73a5SOCGarb1-szu9W3bgv0PhpOASGfel2hbjIA8OaifMPA4vpcs5HkWOMBpR0TkOp3GPCOuthpKt6WKYWdIOvbVZsfBqBeTZMkzYDjxNvg-fB6UEj-ZAJgglpmiI0PAd~Gxo07Ms2MfTfRlxzRA7BkX3oIbgjYznRyMu3A36cdn-db~LALweDrSK9Y8oAaC2yU0JzvwSQaHbZ9HpiIYkjZENC13d4Rg__"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>

      <Reservation />
    </div>
  );
}
