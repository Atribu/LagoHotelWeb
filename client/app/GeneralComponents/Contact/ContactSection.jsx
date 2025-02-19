import Image from 'next/image'
import React from 'react'
import img1 from "./images/contactGaleri.png"
import img2 from "./images/contactGaleri2.png"
import imgBackground from "./images/socialgalleryback1.png"
import LeafSvg from '../Header/Icons/LeafSvg'
import InstagramSvg from './icons/InstagramSvg'
import FacebookSvg from './icons/FacebookSvg'
import YoutubeSvg from './icons/YoutubeSvg'
import minigallery from "./images/minigallery.png"

const ContactSection = () => {
  const images=[
    {
      id:1,
      imgSrc:img1
    },
    {
      id:2,
      imgSrc:img1
    },{
      id:3,
      imgSrc:img1
    },
    {
      id:4,
      imgSrc:img1
    },
    {
      id:5,
      imgSrc:img2
    },
    {
      id:6,
      imgSrc:img1
    },
    {
      id:7,
      imgSrc:img2
    },
    {
      id:8,
      imgSrc:img1
    },{
      id:9,
      imgSrc:img1
    }
  ];

  return (
    <div className='flex w-screen h-[750px] laptopMac:h-[950px]  items-center justify-start bg-cover bg-bottom relative my-[100px] ' style={{ backgroundImage: `url(${imgBackground.src})` }}>
      <LeafSvg className="absolute top-6 -left-24" width={498} height={652}/>
      <div className='flex w-[80%] items-center justify-center bg-white h-[88%]'>

        <div className='flex w-[39%] font-jost text-black items-start justify-center '>
           <div className='flex flex-col w-[79%] items-start justify-center gap-[35px]'>
           <span className=' text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px]'>CONTACT US FOR MORE</span>
            <h2 className='font-marcellus font-normal text-[48px] leading-[57.6px]'>@LagoHotels</h2>
            <p className='text-[16px] font-normal leading-[24px] '>
            Titreyengol, Sorgun / Manavgat/ Antalya / TR <br></br>
            Phone: <span className='underline '>+90 242 756 99 00 </span> <br></br>
            Call Center: <span className='underline '>+90 242 524 57 87</span> <br></br>
            Email: <span className='underline '>sales@lagohotel.com</span> <br></br>
            </p>
            <div className='flex w-full items-center justify-start gap-[20px] '>
                <div className='flex items-center justify-center gap-[18px]'>
                  <InstagramSvg className="flex" width={31} height={31}/>
                  <FacebookSvg className="flex" width={30} height={30}/>
                  <YoutubeSvg className="flex" width={31} height={31}/>
                </div>
                <div className='flex bg-black h-[20px] w-[1px]'></div>
                <span className='text-lagoBrown underline text-[16px] font-normal leading-[30px] uppercase'>Stay updated</span>
            </div>
           </div>
        </div>

        <div className='flex w-[60%] h-[95%] '>
        <div className='w-full h-full overflow-y-auto scroll-smooth '>
            {/* Resmin yüksekliğini container yüksekliğinden büyük veriyoruz */}
            <Image src={minigallery} height={700} width={1200} alt="Minigallery" />
          </div>
          {/* <div className='flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto'>
          <div className="columns-3 gap-3 px-3 mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer ">
                {images.map((item,index)=>{
                    return(
                      <div className="mb-3 transition-all duration-[350ms] ease-in-out cursor-pointer" key={index}>
                        <Image src={item.imgSrc} alt="contact" className='w-[100%] '/>
                    </div>
                    )
                })}
            </div>
          </div> */}
        
          </div>       

      </div>
    </div>
  )
}

export default ContactSection
