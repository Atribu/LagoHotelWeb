import React from 'react'
import Image from 'next/image'
import image from '../Image/SRF_7996-min.webp'

const Connect2 = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Arka plan resmi container'ı: genişlik 978px, yükseklik 744px, solda kaydırılmış */}
      <div className="relative w-full lg:w-[978px] lg:h-[744px] lg:-ml-[15%]">
        <Image
          src={image}
          alt="Resim"
        
          width={image.width}
          height={image.height}
          className="object-cover w-full min-h-[650px]"
          priority
        />
      </div>
      
      {/* Form overlay */}
      <div className="absolute min-w-[350px] w-[78vw] max-w-[480px] min-h-[30vh] md:min-h-[40vh] lg:w-[480px] lg:h-[684px] top-1/2  -translate-y-1/2 lg:-translate-y-0 lg:translate-x-0  lg:top-[4%] xl:left-[55%] bg-white shadow-lg p-[18px] lg:p-[30px] z-10 text-center ">
        <h2 className="lg:text-[48px] md:text-[32px] text-[26px] font-normal text-center font-marcellus text-lagoBlack leading-normal lg:leading-[56px] lg:mt-2 w-full capsizedText2 whitespace-nowrap mb-[15px] lg:mb-[25px]">
          Feel Free to <br /> Drop Us a Message
        </h2>
        <p className="text-lagoGray text-[14px] lg:text-[16px] font-normal font-jost leading-[18px] lg:leading-[26px] w-[100%] lg:w-[95%] capsizedText4 mb-[15px] md:mb-[25px]">
          Do you have anything in your brain to let us know? Kindly don't fail
          to connect with us through our contact form.
        </p>
        {/* Yatay çizgi */}
        <hr className=" border-black w-1/2 mx-auto mb-[20px] md:mb-[25px]" />

        <form className="flex flex-col w-full h-auto">
          {/* Full Name */}
          <div className="mb-[10px] lg:mb-[17px]">
            <input
              id="fullName"
              type="text"
              placeholder="Your Full Name"
              className="block w-full border border-gray-300 px-3 py-2 lg:px-[24px] lg:py-[18px] placeholder:text-[14px] placeholder:lg:text-[16px]"
            />
          </div>
          {/* Email Address */}
          <div className="mb-[10px] lg:mb-[17px]">
            <input
              id="email"
              type="email"
              placeholder="Your Email Address"
              className="block w-full border border-gray-300 px-3 py-2 lg:px-[24px] lg:py-[18px] placeholder:text-[14px] placeholder:lg:text-[16px]"
            />
          </div>
          {/* Your Message */}
          <div className="">
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="block w-full border border-gray-300  px-3 py-2 lg:px-[24px] lg:py-[18px] placeholder:text-[14px] placeholder:lg:text-[16px] max-h-[137px]"
            ></textarea>
          </div>
          {/* Checkbox */}
          <div className="flex w-[90%] items-center justify-center">
            <input
              id="saveInfo"
              type="checkbox"
              className="h-4 w-4 border border-gray-300 rounded mr-2 mt-4"
            />
            <label htmlFor="saveInfo" className="text-[12px] lg:text-[14px] text-gray-600 mt-[18px] lg:mt-[24px]">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          {/* Send Message Button (Outline Style) */}
          <button
            type="submit"
            className="
              md:w-1/2
              mx-auto
              border
              border-[#472C10]
              bg-transparent
              px-6
              py-3
              lg:mt-[25px]
              hover:bg-black
              hover:text-white
              transition-colors
              text-[14px] lg:text-[16px]
              uppercase
              leading-[18px] lg:leading-[26px]
              font-jost text-lagoBlack whitespace-nowrap
              w-auto items-center justify-center mt-2
              
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
