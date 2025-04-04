import React from 'react'
import MainSection from './components/MainSection'
import mainImg from "../HomePage/Components/Images/GreenAndBlueFull2.webp"
import Banner from './components/Banner'
import cevreImg from "./images/cevre.png"
import InfoSection from './components/InfoSection'

const page = () => {
  return (
    <div className='flex flex-col gap-[50px] md:gap-[75px] lg:gap-[100px] overflow-hidden bg-[#f5f5f5] items-center justify-center'>
      <Banner img={mainImg} span="" header="Sustainability"/>
      <MainSection/>
      <InfoSection isImageLeft={false} showLink={false} span="" header=" ÇEVRE POLİTİKAMIZ" text="Tesisimiz, kurulduğu günden bu yana çevreye duyarlı bir tesis olmuştur. Bu duyarlılığı devam ettirebilmek için yürürlükte bulunan çevre yasal yükümlülükler mevzuat ve idari düzenlemelere uymayı taahhüt ederiz.
Çevreyi korumak ve sürdürülebilir turizmin gerekliliğini sağlamak amacıyla çevreye olan etkilerimizi tespit eder, olumsuz etkileri, olası tehlikeleri ve atıklarımızı kontrol altında tutarak, geri kazanımı olmayan atıklarımızı çevreye zarar vermeyecek şekilde bertaraf eder ve/veya ettiririz. 
Ayrıca, çevre kirliliğini önlemeye yardımcı olmak ve bu konuda daima iyileştirmeler yapmaya çalışmak ve doğal kaynakların kullanımını, enerji tüketimini, hava, su ve toprak kirlenmesini en aza indirmek için gayret ederiz.
" text2="Bulunduğumuz yerlerde yerel istihdamı artırmak, doğal yaşamı korumak ve zenginleştirmek için gerekli her türlü önlemi alır, çevremize sahip çıkmak adına yaptığımız tüm faaliyetleri kamuoyuyla paylaşırız.
Çevre bilinci ve sürdürülebilirlik çalışmalarımızın; sadece personelimize değil, konuklarımız, tedarikçiler, alt taşeronlar ve yetkili mercilerce de benimsenmesini sağlamak amacı ile yerel yönetimlerle işbirliği yaparak çevre koruma projeleri üretilmesine katkıda bulunuruz.
Yakın çevremizi bilinçlendirmek ve korumak, birlikte çalıştığımız firmaların da aynı duyarlılıkla yaklaşmasını sağlamak bizler için büyük önem taşımaktadır.
Yerel yönetimlerle, tedarikçi firmalar ve sivil toplum kuruluşlarıyla işbirliği içinde olarak, çevre halkının turizmle ilgili bilinçlenmesini sağlamak. Misafirlere yerel kültürlerin sunularak ve yöredeki tarihi ve kültürel faaliyetlere yönlendirerek bölgede turizmin sürdürülebilirliğini sağlamak faaliyetlerimiz arasındadır." img={cevreImg}/>
    </div>
  )
}

export default page
