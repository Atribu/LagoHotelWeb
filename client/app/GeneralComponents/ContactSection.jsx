import Image from 'next/image'
import React from 'react'

const ContactSection = () => {
  return (
    <div className='flex w-screen h-auto py-[51px] items-center justify-center'>
      <div className='flex w-[80%] items-center justify-start '>

        <div className='flex flex-col w-[33%] font-jost text-black items-start justify-center gap-[35px]'>
            <span className=' text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px]'>CONTACT US FOR MORE</span>
            <h2 className='font-marcellus font-normal text-[48px] leading-[57.6px]'>@LagoHotels</h2>
            <p className='text-[16px] font-normal leading-[24px] '>
            Titreyengol, Sorgun / Manavgat/ Antalya / TR <br></br>
            Phone: <span className='underline '>+90 242 756 99 00 </span> <br></br>
            Call Center: <span className='underline '>+90 242 524 57 87</span> <br></br>
            Email: <span className='underline '>sales@lagohotel.com</span> <br></br>
            </p>
            <div className='flex w-full items-center justify-center gap-[20px] '>
                <div className='flex items-center justify-center gap-[18px]'></div>
                <div className='flex bg-black h-[20px] w-[1px]'></div>
                <span className='text-lagoBrown underline text-[16px] font-normal leading-[30px] uppercase'>Stay updated</span>
            </div>
        </div>


        <div className='flex w-[66%] gap-[13px] items-center justify-center h-[340px] overflow-y-scroll custom-scroll overflow-auto'>
        {/* <Image
            src={superiorRooms}
            width={superiorRooms.width}
            height={superiorRooms.height}
            alt="Superior Rooms"
            className="w-[50%] flex"
          /> */}
        </div>

      </div>
    </div>
  )
}

export default ContactSection
