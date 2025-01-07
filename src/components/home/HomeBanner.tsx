"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {  sliderText } from "@/utils/motion";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { MdArrowRightAlt } from "react-icons/md";
import { sliderContent } from "@/data/homeData";

export default function HomeBanner() {
  const uniqueId = "banner123";
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section  className="swiperstyle1">
      <Swiper {...swiperOptions} className="mySwiper ">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden ">
            <HomeBannerCard
              img={item?.img}
              welcome={item.welcome}
              title1={item?.title1}
              title2={item?.title2}
              btntext={item?.btntext}
              key={currentSlide} // Re-trigger animation when slide changes
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next swiper-button-next !right-2 !p-2.5 !text-lg !text-green1 md:!right-3 md:!top-[55%] md:!h-16 md:!w-16 max-md:!hidden`}
      >
        <GrNext />
      </div>
      <div
        className={`${uniqueId}-prev swiper-button-prev !left-2  !p-2.5  !text-green1 md:!left-3 md:!top-[55%] md:!h-16 md:!w-16 max-md:!hidden`}
      >
        <GrPrevious />
      </div>
    </section>
  );
}

function HomeBannerCard({
  img, 
  welcome,
  title1,
  title2,
  btntext,
}: any) {
  return (
    <div className="relative w-full overflow-hidden bg-[#0f1014] text-white md:h-[95vh] min-h-[50vh]">
      {/* Full-size image */}
      <Image
        src={img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full  object-cover object-center"
        alt="banner image"
        layout="fill"
      />
 

      <div className="relative items-center justify-center z-10 grid grid-cols-2 max-md:pb-10 md:grid-cols-3 h-full  gap-y-10   lg:p-28 sm:p-12 px-7 pt-28 pb-11">
        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-2 flex h-full w-full flex-col max-w-3xl  justify-center gap-7 md:px-11 max-md:items-center"
        >
          <h4 className="text-green1 font-bold md:text-xl text-lg">{welcome}</h4>
          <h1 className="inline-block !leading-[1.3] text-4xl font-bold md:text-5xl max-md:text-center">
            {title1} <span className="text-green2">{title2}</span>
          </h1>
          <Link href={"/"} className="w-min">
            <div className="flex items-center rounded-3xl gap-4 text-nowrap px-6 py-2 bg-zinc-700 text-white duration-300 hover:bg-black">
              <p className="text-sm font-bold">{btntext}</p><MdArrowRightAlt  className="animate-x text-3xl"/>
            </div>
          </Link>
        </motion.div>
      
      </div>
    </div>
  );
}

