"use client";
import Link from "next/link";
import React, { useState } from "react";

const CookiePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [selectedContent, setSelectedContent] = useState(0);

  const contents = [
    <div className="flex flex-col min-h-[400px] w-full text-start items-start justify-between text-[#FBFBFB] font-montserrat overflow-y-auto overflow-x-hidden z-[9999]">
      <h3 className="text-[25px] leading-normal font-bold">Çerez Aydınlatma</h3>

      <h4 className="font-bold text-[12px]">1. Zorunlu Çerezler</h4>
      <p className="text-[12px] font-medium leading-[150%]">
        Web sitesinin kullanımı ve işlevselliği için elzem olan çerezlerdir. Bu
        çerezler devre dışı bırakıldığında, web sitesinin tamamına veya bir
        kısmına erişim mümkün olmayabilir. Zorunlu çerezler aracılığıyla işlenen
        kişisel veriler, ürün ve hizmetlerin sunulabilmesi ve mevzuata uygun
        şekilde faaliyetlerin yürütülmesi için gereklidir. Bu nedenle, KVKK
        Madde 5/2e hükümleri gereğince bir hakkın tesis edilmesi, kullanılması
        veya korunması amacıyla zorunlu veri işleme gerekliliği olduğunda bu
        çerezler kullanılmaktadır.
        <span className="font-bold">
          Web sitemizde kullanılan zorunlu çerezlerin sağlayıcıları ve kullanım
          amaçları aşağıda belirtilmiştir:
        </span>
      </p>

      <h4 className="font-bold text-[12px]">2. Pazarlama Çerezleri</h4>
      <p className="text-[12px] font-medium leading-[150%]">
        Pazarlama amaçlı çerezler ile internet ortamında kullanıcıların çevrim
        içi hareketleri takip edilerek kişisel ilgi alanlarının saptanıp bu ilgi
        alanlarına yönelik internet ortamında kullanıcılara reklam gösterilmesi
        hedeflenen çerezlerdir. Kullanıcıların ilgi alanlarına göre reklam ve
        kampanyaların sunulması, pazarlama çalışmalarının etkinliğinin ölçülmesi
        amacıyla kullanılan çerezlerdir. Pazarlama çerezleri aracılığıyla
        işlenen kişisel veriler, ürün ve hizmetlerin pazarlama süreçlerinin
        yönetilmesi, pazarlama analiz çalışmalarının yürütülmesi, reklam,
        kampanya ve promosyon süreçlerinin yönetilmesi amacıyla KVKK Madde 5/1
        ve Madde 9/1 hükümleri gereğince açık rızanız alınarak işlenmektedir. Bu
        veriler, uluslararası çerez sağlayıcılarıyla paylaşılmaktadır, ancak
        açık bir şekilde belirtmek gerekirse, bu bilgilerin korunması ve
        gizliliği önemlidir.
        <span className="font-bold">
          Web sitemizde kullanılan pazarlama çerezlerinin sağlayıcıları ve
          kullanım amaçları aşağıda belirtilmiştir:
        </span>
      </p>

      <h4 className="font-bold text-[12px]">3. Analitik Çerezler</h4>
      <p className="text-[12px] font-medium leading-[150%]">
        İnternet sitelerinde, kullanıcı davranışlarını analiz etmek amacıyla
        kullanılan çerezlerdir. Bu çerezler, genellikle web sitesinin
        iyileştirilmesine yardımcı olmak için kullanılır ve bu kapsamda
        reklamların kullanıcılar üzerindeki etkisinin ölçülmesi de dahil
        edilebilir. Analitik çerezler, kullanıcıların web sitesini nasıl
        kullandıkları hakkında bilgi toplamak amacıyla kullanılır. Bu tür
        çerezler, kullanıcı deneyimini geliştirmeyi amaçlar ve kullanıcıların
        hangi sayfaları ziyaret ettikleri, hangi sayfalara tıkladıkları,
        sayfaları nasıl kaydırdıkları ve hangi saatlerde siteyi ziyaret
        ettikleri gibi bilgileri toplar. Analitik çerezler aracılığıyla işlenen
        kişisel veriler, pazarlama analiz çalışmalarının yürütülmesi, ziyaretçi
        kayıtlarının oluşturulması ve takip edilmesi gibi amaçlarla KVKK Madde
        5/1 ve Madde 9/1 hükümleri gereğince açık rızanız alınarak işlenir ve bu
        veriler yurt dışındaki çerez sağlayıcılarıyla paylaşılabilir.
        <span className="font-bold">
          Web sitemizde kullanılan analitik çerezler, sağlayıcıları ve kullanım
          amaçları aşağıda belirtilmiştir:
        </span>
      </p>

      <h4>Fonksiyonel Çerezler</h4>
      <p>
        İnternet sitemizdeki sistemlerin düzgün işleyişine yardımcı olmak adına
        kullanılan çerezlerdir.
      </p>

      <span className="font-bold text-[12px]">
        Web sitemizden yapılan üçüncü taraf yönlendirmeler aşağıda
        belirtilmiştir:
      </span>

      <span className="font-bold text-[12px]">
        Diğer internet sitelerine bağlantılar
      </span>
      <p className="text-[12px] font-medium leading-[150%]">
        İnternet sitemizdeki içerikler üçüncü taraflara ait internet sitelerine
        bağlantılar içerebilir ve bu internet siteleri için, ilgili internet
        sitelerinin ve tüzel kişiliklerin veri koruma düzenlemeleri geçerli
        olup, şirketimizin düzenlemeleri geçerli değildir. Bu internet
        sitelerine ilişkin hiçbir sorumluluk kabul etmiyoruz. Üçüncü kişilere
        ait internet siteleriyle verilerinizi paylaşmadan önce onların veri
        koruma düzenlemelerine ilişkin yasal dökümanları okumalısınız.
      </p>
      <span className="font-bold text-[12px]">İşlem Güvenliği </span>

      <span className="font-bold">
        Süreçlere Göre İşlenen Kişisel Verileriniz, İşlenme Amaçları ve Hukuki
        Sebepleri
      </span>
      <p className="text-[12px] font-medium leading-[150%]">
        Web sitesi ziyaretinde birtakım logların alınması sürecinde;
      </p>
    </div>,

    // second text
    <div className="flex flex-col h-full w-full text-start items-start justify-between font-montserrat">
      <h3 className="text-[25px] leading-normal font-bold ">Çerez Ayarları</h3>
      <p className="text-[12px] font-medium leading-[150%]">
        Web sitemizi ziyaret ettiğinizde, çoğunlukla çerezler şeklinde
        tarayıcınızda bilgi depolanabilir veya alınabilir. Bu bilgiler sizin,
        tercihleriniz veya cihazınız hakkında olabilir ve genellikle siteyi
        beklediğiniz gibi çalıştırmak için kullanılır. Bilgiler genellikle sizi
        doğrudan tanımlamaz, ancak size daha kişiselleştirilmiş bir web deneyimi
        sunabilir. Gizlilik hakkınıza saygı duyduğumuz için, bazı çerez
        türlerini kabul etmemeyi tercih edebilirsiniz. Tercihlerinizi yönetmek
        ve daha fazla bilgi edinmek için farklı kategori başlıklarına tıklayın.
        Lütfen unutmayın, bazı çerez türlerini engellemek sitenin ve
        sunabileceğimiz hizmetlerin deneyiminizi etkileyebilir.
      </p>
      <p className=" text-[12px] leading-normal font-medium">
        Çerezler hakkında daha fazla bilgi için{" "}
        <span className="text-blue-400 cursor-pointer">buraya Tıklayın.</span>
      </p>

    </div>,

    // third button
    <div className="flex flex-col h-full w-full text-start items-start justify-between font-montserrat">
      <h3 className="text-[25px] leading-normal font-bold ">
        Zorunlu Çerezler
      </h3>
      <p className="text-[12px] font-medium leading-[150%]">
        Bu çerezler, web sitesinin işlev görebilmesi için gereklidir ve
        sistemlerimizde kapatılamazlar. Genellikle yalnızca gizlilik
        tercihlerinizi belirleme, oturum açma veya formları doldurma gibi sizin
        tarafınızdan yapılan hizmet talebi niteliğindeki eylemlere yanıt olarak
        ayarlanırlar. Bu çerezler kişisel olarak tanımlanabilir bilgileri
        saklamaz.
      </p>
      <div className="flex w-full justify-end items-center">
        <span className="text-[#198C68] text-[24px]">Aktif</span>
      </div>

    </div>
  ];

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed flex z-[9999] bottom-0 bg-[rgba(29,29,27,0.85)] backdrop-blur-[10px] right-0 left-0 w-screen items-center justify-center h-auto ">
        <div className="flex flex-col w-[94%] py-[25px] gap-[30px] font-montserrat text-center items-center justify-center text-[#FBFBFB] font-jost">
          <div
            className="flex absolute right-[12px] top-[6px] text-[#FBFBFB] text-[22px] cursor-pointer"
            onClick={handleClose}
          >
            X
          </div>
          <p className="text-[14px] leading-[130%] text-[#FBFBFB] font-normal font-jost text-center">
            <span className="font-medium underline">We Use Cookies:</span> We
            use our own and third-party cookies to <br /> personalize content
            and to analyze web traffic. <br />
            <Link href="/" className="font-medium underline">
               Read more
            </Link>
             about cookies
          </p>
          <div className="grid grid-cols-2 lg:flex w-full items-center justify-center lg:justify-around gap-[13px]">
            <button
              className="text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] px-[20px] cursor-pointer "
              onClick={handleClose}
            >
              Deny All Cookies
            </button>
            <button
              className="text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] px-[20px] cursor-pointer "
            >
              Accept All Cookies
            </button>
          

            <button
              onClick={handleModalToggle}
              className="text-[14px] leading-normal font-medium uppercase items-center justify-center text-center border-[#FBFBFB] border-[0.867px] whitespace-nowrap py-[10px] px-[20px] cursor-pointer  col-span-2 "
            >
              Manage Cookie Preferences
            </button>
            {isModalOpen && (
              <div
                className="flex fixed inset-0 items-center justify-center bg-black/40 z-[9999] "
                onClick={handleModalToggle}
              >
                <div
                  className="flex flex-col w-full h-screen bg-[rgba(29,29,27,0.85)] backdrop-blur-[10px] items-center justify-center relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-0 right-4 text-[40px] text-stoneLight text-white"
                    onClick={handleModalToggle}
                  >
                    &times;
                  </button>

                  <div className="flex flex-col gap-4 items-center justify-center  h-full text-[#FBFBFB]">
                    <div className="flex flex-col w-[90%] justify-between items-center h-full gap-[50px]">
                      <div className="grid grid-cols-2 w-[90%] text-[16px] font-bold">
                        {[
                          "Cookie Clarification Text",
                          "Cookies",
                          "Cookie Policy",
                        ].map((buttonLabel, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedContent(index)}
                            className={
                              selectedContent === index
                                ? "text-white text-[16px] font-jost leading-normal font-medium w-[250px] cursor-pointer p-[15px] rounded-lg mt-[10px] border-none whitespace-nowrap underline items-start justify-start text-start"
                                : " text-[16px] font-jost leading-normal font-medium text-[#A6A6A6] w-[250px] cursor-pointer p-[15px] rounded-lg mt-[10px] border-none items-start justify-start text-start"
                            }
                          >
                            {buttonLabel}
                          </button>
                        ))}
                      </div>

                      <div className="flex flex-col w-[90%] h-full overflow-scroll">
                        {contents[selectedContent]}
                      </div>
                      <div className="flex items-center justify-between w-[95%] gap-[13px]">
                        <button className="text-[14px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap max-w-[170px]">
                          Deny All Cookies
                        </button>
                        <button className="text-[14px] uppercase font-medium leading-normal text-[#FBFBFB] px-[20px] py-[10px] border border-[#FBFBFB] whitespace-nowrap max-w-[184px]">
                          Accept All Cookies
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    )
  );
};

export default CookiePopup;
