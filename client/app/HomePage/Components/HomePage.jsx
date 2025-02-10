import React from 'react'
import Reservation from './Reservation'

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-[calc(100vh+73px)] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cf3807b1338af1732e5dbbe728166b1d044497c2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NACpXnTmxUtJvYN152aD3poEgqKJ2hpKE-PRB~ZzbBjGubVQ3eNemtsSxOry1Bs6-scqkaMZV5XCEvQadkIdyUcvqkN9utkxoCVCbrZ3k3U0trQso0~0nJ73a5SOCGarb1-szu9W3bgv0PhpOASGfel2hbjIA8OaifMPA4vpcs5HkWOMBpR0TkOp3GPCOuthpKt6WKYWdIOvbVZsfBqBeTZMkzYDjxNvg-fB6UEj-ZAJgglpmiI0PAd~Gxo07Ms2MfTfRlxzRA7BkX3oIbgjYznRyMu3A36cdn-db~LALweDrSK9Y8oAaC2yU0JzvwSQaHbZ9HpiIYkjZENC13d4Rg__"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
      <Reservation/>
    </div>
  )
}
