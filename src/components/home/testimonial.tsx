"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
 

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
    speed:1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
  };

  return (
    <section className=" lg:p-28 sm:p-12 p-7 bg-back text-center relative slider1 flex flex-col items-center">
     <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
                  {testimonialData?.title1 && <h4 className='text-green3 bg-[#E1F1D8] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max'>{testimonialData?.title1}</h4>}
                    {testimonialData?.title2 && <h2 className='text-zinc-800 text-2xl md:text-4xl font-bold'>{testimonialData?.title2}</h2>}
                        {testimonialData?.para && <p className='text-zinc-600 text-sm md:text-base max-w-4xl'>{testimonialData?.para}</p>}
                        </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-4xl mx-auto px-5 bg-white shadow-xl  rounded-xl !mt-0 ${uniqueId}`}
      >
        {" "}
        {testimonialData?.testimonials?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full p-4 sm:p-10 rounded-2xl "
          >
            <div className=" w-full  h-full overflow-hidden  group  ">
              <div className="relative overflow-hidden h-20 w-20 mx-auto border-2 border-green1 rounded-full">
                <Image
                  src={cards.img}
                  alt=""
                  className=" transition-all duration-500 w-full h-full rounded-full object-cover group-hover:scale-110  "
                />
              </div>
              <div className="px-4">
            
              <h3 className="text-xl font-bold my-4 text-zinc-800 group-hover:text-green2">
                {cards.title}
              </h3>
              <p className="text-zinc-600 text-sm">{cards.text}</p><br />
            
              </div>
            </div>
          </SwiperSlide>
        ))}
     
      </Swiper>
      <div className={`${uniqueId}-next swiper-button-next !top-[63%] after:text-green2 lg:!right-40 after:font-bold`}></div>

<div className={`${uniqueId}-prev swiper-button-prev !top-[63%] after:text-green2 lg:!left-40 after:font-bold`}></div>

    </section>
  );
}
