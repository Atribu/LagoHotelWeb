"use client"
import React,{ useEffect, useRef } from "react";
import Image from 'next/image'
import img1 from "./images/contactGaleri.png"
import img2 from "./images/contactGaleri2.png"
import imgBackground from "./images/socialgalleryback1.png"
import LeafSvg from '../Header/Icons/LeafSvg'
import minigallery from "./images/minigallery2.png"
import Link from 'next/link'
import { PiInstagramLogoLight,PiMetaLogoLight,PiFacebookLogoLight, PiYoutubeLogoLight} from "react-icons/pi";

const ContactSection = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1; // Daha yavaş kayma için 1px
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += scrollSpeed;

        // Eğer en sona geldiyse, biraz bekleyip başa dön
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          setTimeout(() => {
            scrollContainer.scrollTop = 0; // Baştan başlat (ani sıçrama yapmadan)
          }, 500); // 0.5 saniye bekleyip baştan başlat
        }
      }, 40); // Daha smooth kayma için 30ms
    };

    startScrolling();

    return () => clearInterval(scrollInterval); // Component unmount olursa temizle
  }, []);

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
    <div className='flex w-screen h-[750px]  items-center justify-start bg-cover bg-bottom relative  ' style={{ backgroundImage: `url(${imgBackground.src})` }}>
      <LeafSvg className="absolute top-6 -left-24" width={498} height={652}/>
      <div className='flex w-[80%] items-center justify-center bg-white h-[88%]'>

        <div className='flex w-[39%] font-jost text-black items-start justify-center '>
           <div className='flex flex-col w-[79%] items-start justify-center gap-[30px]'>
           <span className=' text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px] '>CONTACT US FOR MORE</span>
            <h2 className='font-marcellus font-normal text-[48px] leading-[57.6px] capsizedText2'>@LagoHotels</h2>
            <p className='text-[16px] font-normal leading-[24px] '>
            Titreyengol, Sorgun / Manavgat/ Antalya / TR <br></br>
            Phone: <Link href="/" className='underline '>+90 242 756 99 00 </Link> <br></br>
            Call Center: <Link href="/" className='underline '>+90 242 524 57 87</Link> <br></br>
            Email: <Link href="/" className='underline '>sales@lagohotel.com</Link> <br></br>
            </p>
            <div className='flex w-full items-center justify-start gap-[20px] '>
                <div className='flex items-center justify-center gap-[18px]'>
                <PiInstagramLogoLight size={28} />
                {/* <PiMetaLogoLight size={30} /> */}
                 <PiFacebookLogoLight size={28} />
                 <PiYoutubeLogoLight size={28} />
                </div>
                <div className='flex bg-black h-[20px] w-[1px]'></div>
                <span className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[16px] font-normal leading-[30px] uppercase">Stay updated</span>
            </div>
           </div>
        </div>

        <div className='flex w-[60%] h-[95%] '>
        <div style={{ scrollBehavior: "smooth" }} ref={scrollRef} className="w-full h-full min-h-[322px] max-w-[789px]  overflow-auto hover:overflow-scroll custom-scroll scroll-smooth mr-[4%]">
      <div className="flex flex-col">
          {[...Array(2)].flatMap((_, loopIndex) =>
            [minigallery].map((img, index) => (
              <Image
                key={`${loopIndex}-${index}`}
                src={img}
                height={img.height}
                width={img.width}
                alt="Minigallery"
                loading="lazy"
                className="xl:w-[100%] h-auto overflow-hidden"
              />
            ))
          )}
        </div>
       
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
