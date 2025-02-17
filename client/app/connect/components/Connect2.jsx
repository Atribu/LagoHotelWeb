import React from 'react'
import Image from 'next/image'
import image from '../Image/SRF_7996-min.webp'

const Connect2 = () => {
  return (
    <div className="relative w-full ] flex flex-col items-center">
      {/* Arka plan resmi container'ı: genişlik 978px, yükseklik 744px, solda kaydırılmış */}
      <div className="relative w-[978px] h-[744px] -ml-[15%]">
        <Image
          src={image}
          alt="Resim"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Form overlay */}
      <div className="absolute w-[480px] h-[684px] top-[4%] right-[20%] bg-white shadow-lg p-6 pt-8 max-w-md z-10">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-4 font-marcellus text-[48px] text-lagoBlack leading-[56px] mt-2">
          Feel Free to <br /> Drop Us a Message
        </h2>
        <p className="text-lagoGray text-[16px] font-normal font-jost leading-[26px] w-full mb-8">
          Do you have anything in your brain to let us know? Kindly <br /> don't fail
          to connect with us through our contact form.
        </p>
        {/* Yatay çizgi */}
        <hr className="mb-8 border-black w-1/2 mx-auto" />

        <form className="flex flex-col w-full">
          {/* Full Name */}
          <div className="mb-2">
            <input
              id="fullName"
              type="text"
              placeholder="Your Full Name"
              className="block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          {/* Email Address */}
          <div className="mb-2">
            <input
              id="email"
              type="email"
              placeholder="Your Email Address"
              className="block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          {/* Your Message */}
          <div className="mb-2">
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="block w-full border border-gray-300 rounded-md px-3 py-2"
            ></textarea>
          </div>
          {/* Checkbox */}
          <div className="mb-4 flex items-start">
            <input
              id="saveInfo"
              type="checkbox"
              className="h-4 w-4 border border-gray-300 rounded mr-2 mt-4"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-600 mt-3">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          {/* Send Message Button (Outline Style) */}
          <button
            type="submit"
            className="
              w-1/2
              mx-auto
              border
              border-black
              text-black
              bg-transparent
              px-6
              py-3
              mt-12
              hover:bg-black
              hover:text-white
              transition-colors
            "
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Connect2
