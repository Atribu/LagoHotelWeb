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
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cf3807b1338af1732e5dbbe728166b1d044497c2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c71205PcgS6yVXBvDMZFxGtznstKlTShTFOVQkXCzzPShJuD29jp-pnQsW5K~DCgZf7FDwJZ6MZcDNH5srzfUSWmXvfjJutC-TgL3sDqXZbkb8xuS9zjNpQOFhkrWn5ko1Oxb8LJjkz9Zb6LvCr7eF0peT4LyYHAzazvBggIdb7NnOg7154sjKqz3QptL9nEjhbKTs8cIH7Sdwelpy3NyoWdM39CkcSm5a--BMZwHW-89EE8N0NQM-DUq0~vDtPN1jvzVYv0Lagm7qBu5JVIgYJ6Y08P6D5WUk5lGUQHuM8NNAaQq~4P5Cjer91PWrpLHl169y5NYxSd5iQDuc1Fug__"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
      <Reservation/>
      
    </div>
  )
}
