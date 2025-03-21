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
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1188089547498931215/cf3807b1338af1732e5dbbe728166b1d044497c2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EKpIzMp~XSOX95rMOlBRxXZEm0uAHDRQ7~yNujq2~TNZo79SxL-xApowiSUMUuc7mJvjQQP3otv13-ZEodQfY7gTjnlrmD45ElxLVCkHQvRrYI1YGJShsWF4zT6dvYr2T5fBxkCS4jGtqDyH6FgktaSB7~oWiy2sbJK9VkNCdVeHJbRXYmchTlLHBPUI4CKpCkt88K5Qxghx-LsPtXLwKASsxjPCJ08BPWh01mdeCwcgBldJlyYIW4F0FZe0eC2x6ua5qPcpoKSSqs1J5zTqbbmT5vpxrJtprgR~DNdKXTbhu8kVAgOyNx3~YHDoVfAbkCGmgJ5PLS~woLtqR2HXkg__"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
      <Reservation/>
      
    </div>
  )
}
