"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
 

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
    <section className=" lg:p-28 sm:p-12 p-7 bg-back text-center relative slider1 flex flex-col items-center">
     <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
                  {blogData?.title1 && <h4 className='text-green3 bg-[#E1F1D8] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max'>{blogData?.title1}</h4>}
                    {blogData?.title2 && <h2 className='text-zinc-800 text-2xl md:text-4xl font-bold'>{blogData?.title2}</h2>}
                        {blogData?.para && <p className='text-zinc-600 text-sm md:text-base max-w-4xl'>{blogData?.para}</p>}
                        </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 !mt-0 ${uniqueId}`}
      >
        {" "}
        {blogData?.blogs?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full p-4  rounded-2xl  "
          >
            <div className=" w-full  h-full overflow-hidden  group  shadow-xl bg-white rounded-xl">
              <div className="relative overflow-hidden w-full h-60">
                <Image
                  src={cards.img}
                  alt=""
                  className=" transition-all duration-500 w-full h-60 object-cover group-hover:scale-110  z-10"
                />
              </div>
              <div className="px-4">
              <div className="text-white -mt-7 z-10 sticky bg-green1 py-2 shadow-md px-4 max-w-max text-base ml-4 font-semibold transition-all duration-500 group-hover:bg-zinc-900 ">
                {cards.date}
              </div>

              <h3 className="text-xl font-bold my-4 text-zinc-800 group-hover:text-green2">
                {cards.title}
              </h3>
              <p className="text-zinc-600 text-sm">{cards.text}</p><br />
              <Link 
                  href={"#"}
                  className=" duration-500  group-hover:bg-zinc-800 text-white px-16 bg-green3  text-center -mb-3 py-2  text-base  font-bold"
                >
                  Read More
                </Link><br/><br/>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className={`${uniqueId}-next swiper-button-next !top-[34%]`}></div>

<div className={`${uniqueId}-prev swiper-button-prev !top-[34%]`}></div> */}
      </Swiper>

      {/* Add navigation buttons */}
{/* 
    
      <Link href={"/"} className="w-min mt-7">
            <div className=" rounded-3xl  text-nowrap px-6 py-2 hover:bg-green3 border border-black bg-black hover:border-white text-white duration-300 shadow-lg">
              <p className="text-base font-semibold">Load More</p>
            </div>
          </Link> */}
    </section>
  );
}
