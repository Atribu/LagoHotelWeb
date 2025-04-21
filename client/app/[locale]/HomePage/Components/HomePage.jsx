import React from 'react'
import Reservation from './Reservation'

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover hidden lg:flex">
        <source 
          src="/audio/lagoDesktop.mp4"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover flex lg:hidden"
      >
        <source 
          src="/audio/mobilevideo.mov"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
      <Reservation/>
      
    </div>
  )
}
