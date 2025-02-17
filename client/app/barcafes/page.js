import MainBannerSection from '../GeneralComponents/MainBannerSection'
import imgBanner from "./images/mainbar.webp"
import ClinaryInfoSection from '../restaurants/components/ClinaryInfoSection'
import cafebar1 from "./images/cafebar1.webp"
import cafebar2 from "./images/cafebars2.webp"
import DiscoverBackground from '../restaurants/components/DiscoverBackground'
import backgroundImg from "./images/BackgroundCafes.webp"
import BackgroundSection from '../rooms/subroom/components/BackgroundSection'
import backgroundImg2 from "./images/fullphoto.webp"
import backgroundImg3 from "./images/fullphoto2.webp"
import BarCarouselSection from './components/BarCarouselSection'
import OtherOptions4 from './components/OtherOptions4'
import mignon from "./images/mignon.webp"
import joie from "./images/joie.webp"
import maldiva from "./images/maldiva.webp"
import vagobar from "./images/vagobar.webp"
import piano from "./images/piano.webp"
import abella from "./images/abella.webp"
import lago from "./images/lago.webp"
import house from "./images/house.webp"
import ContactSection2 from '../GeneralComponents/Contact/ContactSection2'

const clinaryTexts=["Lago, you will enjoy your vacation with international cuisine in our A’la Carte Restaurants, where flavorful dishes are served, with an endless open buffet where delicious dishes feature uniqueness from Turkish cuisine as well as fresh flavors reflecting the spirit of the Mediterranean"]
const backgroundTexts=["For breakfast, lunch, and dinner, we have prepared an endless open buffet where you may immerse in both authentic Turkish cuisine sensations and seasonal delicacies."]
const backgroundTexts2=["For breakfast, lunch, and dinner, we have prepared an endless open buffet where you may immerse in both authentic Turkish cuisine sensations and seasonal delicacies."]

const otherOptions = [
  {
      id: 1,
      img: mignon,
      title: "Mignon Bar",
      description: "HOURS: 10:00 - 19:00 ",
      text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
      link:"/"
    },
  {
      id: 2,
      img: joie,
      title: "Joie Bar",
      description: "HOURS: 08:00 - 23:00",
      text:"Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine. Lorem Ipsum the distinctive flavors of ",
      link:"/barcafes/joiebar"
    },
    {
      id: 3,
      img: maldiva,
      title: "Maldiva Bar",
      description: "HOURS: 09:00 - 18:00",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    },
    {
      id: 4,
      img: vagobar,
      title: "Vago Bar",
      description: "HOURS: 24 hours ",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    }
];

const otherOptions2 = [
  {
      id: 1,
      img: piano,
      title: "Piyano Bar",
      description: "HOURS: 10:00 - 00:00 ",
      text:"Let’s experience the pleasure of retaining the distinctive flavors and culinary traditions of Turkish food on the plate. LAGO has the honor of fusing your dreams with the unique taste of the Mediterranean.",
      link:"/"
    },
  {
      id: 2,
      img: abella,
      title: "Patisserie ABELLA",
      description: "HOURS: 14:00 - 23:00",
      text:"Italian cuisine has been created by our experts for you as a culinary feast. In our main restaurant, our Italian A’la Carte restaurant is ready to serve you the distinctive flavors of Italian cuisine. Lorem Ipsum the distinctive flavors of ",
      link:"/"
    },
    {
      id: 3,
      img: lago,
      title: "Cafe de Lago ",
      description: "HOURS: 08:00 - 23:00",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    },
    {
      id: 4,
      img: house,
      title: "Cafe de House",
      description: "HOURS: 08:00-23:00",
       text:"Fish menus prepared for you by our award-winning chefs appeal to both your appetite and your eyes. Special recipes are waiting for you in our Fish A’la Carte restaurant. Our fish a’la carte restaurant serves on the ",
       link:"/"
    }
];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[100px]'>
      <MainBannerSection img={imgBanner} span="ITALIAN CUISINE AT ITS FINEST" header="Bars and Cafés" text="Enjoy a various amount of dining options from around the world."/>
      <ClinaryInfoSection img1={cafebar1} img2={cafebar2} span="Perfect Fine Dine Experiences" header="Exceptional Bars and Cafes at LAGO" texts={clinaryTexts}/>
      <BackgroundSection span="A UNIQUE FEAST OF TASTE" header="Cool Down and Relax" texts={backgroundTexts} link="/" img={backgroundImg2}/>
      <OtherOptions4 span="Perfect Fine Dine Experiences" header="LAGO’s Exclusive Pool Bars" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" images={otherOptions}/>
      <BackgroundSection span="A UNIQUE FEAST OF TASTE" header="Lobby Bars and Cafes" texts={backgroundTexts2} link="/" img={backgroundImg3}/>
      <OtherOptions4 span="Perfect Fine Dine Experiences" header="LAGO’s Lobby Bars and Cafes" text="In our A’la Carte Restaurants, the exquisite flavors of international cuisine are waiting for you, crafted by the masterful hands of our award-winning chefs. During your holiday, we pleased to invite you to a wonderful adventure at our distinctive à la carte restaurants!" images={otherOptions2}/>
      <BarCarouselSection/>
      <DiscoverBackground span="A UNIQUE FEAST OF TASTE" header="Discover our Fınest Restaurants" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" link="/barcafes" img={backgroundImg}/>
      <ContactSection2/>
    </div>
  )
}

export default page
