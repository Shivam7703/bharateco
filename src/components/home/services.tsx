"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { servicedata } from "@/data/homeData";


export default function ServiceSlider() {
 

  const uniqueId = "servic123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1260: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className=" lg:p-28 sm:p-12 p-7  text-center relative slider1 ">
            {/* <Image src={bg1} alt="img"  className="w-full h-full absolute top-0 left-0 object-cover z-auto"/> */}

      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
             {servicedata?.title1 && <h4 className='text-green3 bg-[#E1F1D8] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max'>{servicedata?.title1}</h4>}
               {servicedata?.title2 && <h2 className='text-zinc-800 text-2xl md:text-4xl font-bold'>{servicedata?.title2}</h2>}
                   {servicedata?.para && <p className='text-zinc-600 text-sm md:text-base max-w-4xl'>{servicedata?.para}</p>}
                   </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 mt-12 ${uniqueId}`}
      >
        {" "}
        {servicedata?.services?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full p-4  rounded-2xl  bg-white "
          >
            <div className="relative w-full min-h-96 h-[460px]  overflow-hidden  group z-10 shadow-xl">
              <div className="w-full h-auto sticky left-0 bg-white p-8 flex flex-col items-center z-20">
                <div className="text-green2 text-6xl transition-all duration-500 group-hover:-mt-24 z-50">
                  {cards.icon}
                </div>
                <h3 className="text-xl font-bold my-4 text-zinc-800">
                  {cards.title}
                </h3>
                <p className="text-zinc-600 text-base">{cards.text}</p>
                <Link
                  href={cards?.slug || "/services"}
                  className="border border-zinc-700 transition:all  duration-500 group-hover:border-green3 group-hover:text-white  group-hover:bg-green3 text-zinc-700 px-5 py-2 rounded-3xl my-4 text-sm font-bold"
                >
                  Explore More
                </Link>
              </div>
<div className=" overflow-hidden absolute left-[0.5%] bottom-0 w-[99%] h-auto">
              <Image
                src={cards.img}
                alt=""
                className=" transition-all duration-500 w-full h-auto object-cover group-hover:scale-110  z-10"
              /></div>
            </div>
          </SwiperSlide>
        ))}
         {/* <div className={`${uniqueId}-next swiper-button-next !top-[34%]`}></div>

<div className={`${uniqueId}-prev swiper-button-prev !top-[34%]`}></div> */}
      </Swiper>

    </section>
  );
}
