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
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cf3807b1338af1732e5dbbe728166b1d044497c2?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JrVYvDAMDIopjHG6eRlqGb54IqgGTlCptqVjkXa9drCZbJUNWAW7idKcqfwfHRrbswnmb2Hq2JVtETzU-E2LKufTJrjaTiK4maJndMmpqUm3sMlacZrsl-t~48aN0N91-8NSMXcbDliuXzCOUNrOt6rLk3l~B~3OLzGDWA5~FYsV1xYxNmJbbkqeVJFBXiNzrGhAT0Oj8vVpZjCWrPtMl98H4f6qFU16OHpvs0~u4EXi5mLwnyyXiIa-gAIjrqhW~4AIL9ujf1INrge5JLr1SpmaFy962cGZIBw5w0nKSXSO4h5UDmEur1sU16-zfawvmtv6LaaeVQRUXKzv9EoilQ__"
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
