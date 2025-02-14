import React from 'react'
import Image from "next/image"
import image from "../Image/SRF_7996-min.webp"

const Connect2 = () => {
  return (
    <div className='flex flex-row'>
        <div className='flex'>
            <Image src={image} alt='Görsel'/>
        </div>
        <div className='flex'></div>
    </div>
  )
}

export default Connect2