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
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cf3807b1338af1732e5dbbe728166b1d044497c2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F41rDrZ~yAQ-eEHgNFbPLBU259H4o5GpXLHFbJfzVrkOM1OHOP6TglD-J3lxrEE~GeQASBx5vh1cP0cs24DHkeH50eM6BRU3kpZb9zJ3fa-i4AUs1nLliNB3aBC74fNh3C~Y7YSbIA2lPc4h0C1Ez3oSpwudlSdjje33cqqczww4BJmghgMflDsVZPzs7hgcyy4YNyVcHD4QwtInum0w2qhI6Esc25g7esm8reXQyEzR3Z9kcociWXg7E~DYoWoR0JK8Xvof7irmHdyX2OyMadjXi8jZzrb2CTDywhjGJNdr~2aQeDfsS1VAzk72rR7leYykxVewdWhCASSAytzGKA__"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
      <Reservation/>
      
    </div>
  )
}
