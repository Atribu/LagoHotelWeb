import React from 'react'
import Reservation from './Reservation'

export default function HomePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cf3807b1338af1732e5dbbe728166b1d044497c2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UITSZ9itNSynsfn9rVfwKuklPUb~r7OQYH0eNwJPLzLSjl4kAZM582KMljizaZK7MAs4DdRx9hCgN10DIcWbBOFCQ5bqiRTVWGOUHvp~KRtzijfPtDwuIyQrICn22khZ4s8HZpY56na1IpoMkUFJEjB7WBNwth3Msb7M9Csvzct~iF9c2tAZjSapZVWcvje29ANy02Fl6BNWW80jlaGnLl6IVMILN4kzw7IjxcaFWCrlCPE~jFxTT~hge3XJZF~TPROhX-lLyaBWi-NzXsJnuLMrOnrDWWSKvlDxRHivRJr8Jv~Wzo-F~6G~RZrQQ2gfhvmuniTrGJxe1iEVwbca9A__"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
      <Reservation/>
    </div>
  )
}
