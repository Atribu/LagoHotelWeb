import Image from 'next/image'
import React from 'react'
import fitness from "../images/sportfitness.webp"
import kids from "../images/kids.webp"
import water from "../images/yellow-ball.webp"
import beachvoley from "../images/beachvoley.webp"
import tennis from "../images/tennis.webp"
import cinema from "../images/cinema.webp"
import sunset from "../images/summer-music.webp"
import stage from "../images/stageshow.webp"
import themed from "../images/themed.webp"
import Link from 'next/link'

const activities = [
  {
    title: "Sport & Fitness",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Eget in non viverra est lorem sed. Non a elit adipiscing et eleifend nunc. Ornare sagittis sit non at morbi fermentum et.",
    image: fitness,
    link:"/spor"
  },
  {
    title: "Kids & Teen Club",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Suspendisse interdum velit euismod. Pharetra volutpat dolor in euismod sed euismod. Vel quam purus consectetur ut malesuada.",
    image: kids,
    link:"/kidsclub"
  },
  {
    title: "Water sports",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Varius tortor nec sed sed sed et dolor. Sapien in turpis et in. Elementum amet sagittis et id scelerisque convallis.",
    image: water,
    link:"/spor"
  },
  {
    title: "Beach Activıties",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Varius tortor nec sed sed sed et dolor. Sapien in turpis et in. Elementum amet sagittis et id scelerisque convallis.",
    image: beachvoley,
    link:"/spor"
  },
  {
    title: "Tennis",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Varius tortor nec sed sed sed et dolor. Sapien in turpis et in. Elementum amet sagittis et id scelerisque convallis.",
    image: tennis,
    link:"/spor"
  },
  {
    title: "Cinema",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Varius tortor nec sed sed sed et dolor. Sapien in turpis et in. Elementum amet sagittis et id scelerisque convallis.",
    image: cinema,
    link:"/spor"
  },
  {
    title: "Sunset parties",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Varius tortor nec sed sed sed et dolor. Sapien in turpis et in. Elementum amet sagittis et id scelerisque convallis.",
    image: sunset,
    link:"/spor"
  },
  {
    title: "Stage shows",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Varius tortor nec sed sed sed et dolor. Sapien in turpis et in. Elementum amet sagittis et id scelerisque convallis.",
    image: stage,
    link:"/spor"
  },
  {
    title: "Themed Parties ",
    category: "DAYTIME ACTIVITIES",
    description: "Lorem ipsum dolor sit amet consectetur. Varius tortor nec sed sed sed et dolor. Sapien in turpis et in. Elementum amet sagittis et id scelerisque convallis.",
    image: themed,
    link:"/spor"
  }
];

const EntertainmentTypesSection = () => {
  return (
    <div className="flex w-screen items-center justify-center max-w-[1920px]">
      <div className="flex flex-col w-[76.8%] items-start justify-center gap-[50px]">
        
        {/* Başlık Bölümü */}
        <div className="flex flex-col items-start justify-center text-start gap-[35px] text-black font-jost">
          <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
            Entertainment & Actıvıtıes
          </span>
          <h3 className="text-[46px] font-normal font-marcellus leading-[57.6px]">
            Events are held daily, Except Sundays
          </h3>
          <p className="text-[16px] font-normal leading-[24px]">
            LAGO, which offers a variety of activities like disco, bocce, beach volleyball, table tennis, cinema, beach activities, water sports, and night entertainment, is ready to welcome you with sporting
          </p>
        </div>

        {/* Dinamik Kartlar */}
        <div className="grid grid-cols-3 w-full items-center justify-center gap-[31px]">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center justify-center relative mb-[180px]">
              <div className="w-full flex flex-col items-center justify-end cursor-pointer">
                <Image src={activity.image} width={activity.image.width} height={activity.image.height} className="flex w-full" alt='activity'/>
                <div className="absolute flex flex-col items-start justify-center bg-white gap-[25px] font-jost text-black w-[90%] p-[20px] -bottom-44">
                  <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
                    {activity.category}
                  </span>
                  <h4 className="text-[30px] font-normal leading-[32px] capitalize font-marcellus">
                    {activity.title}
                  </h4>
                  <p className="text-[14px] font-normal leading-[21px]">
                    {activity.description}
                  </p>
                </div>
              </div>
              <Link className='absolute inset-0' href={activity.link}></Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EntertainmentTypesSection;
