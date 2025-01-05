"use client";
import React from 'react';
import { sliderContent } from "@/data/homeData";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {fadeIn, sliderText, staggerContainer} from "@/utils/motion";
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ImPower } from 'react-icons/im';
import { GiFuelTank } from 'react-icons/gi';
import { RiUserFollowFill } from 'react-icons/ri';


export default function BannerSlider() {
   
    const data = [{
        id:1,
        icon:<ImPower />,
        title:"Empowering Rural Communities",
        text:"Generating jobs and boosting local economies.",
      },{
        id:2,
        icon:<GiFuelTank />        ,
        title:"Sustainable Energy Solutions",
        text:"Leading the way in eco-friendly biofuel production",
      },{
        id:3,
        icon:<RiUserFollowFill />,
        title:"Trusted Partnerships",
        text:"Valuing our distributors, clients, customers, associates, employees, and well-wishers.",
      }]
  
    return (
      <>
          <AnimatePresence>
                <div className="w-full h-max relative">
                  <Image
                    className="w-full h-[70vh] md:h-[90vh] lg:h-[48vw] object-cover object-center"
                    src={sliderContent?.img}
                    alt="sliding image"
                    loading="lazy"
                  />
                  <div className="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 flex items-center text-white">
                    <motion.div
                    
                  variants={sliderText} // Using the sliderText motion variants
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ easings: ["easeIn", "easeOut"] }}
                                          className="md:w-1/2 md:ml-28 flex flex-col max-md:justify-center max-md:items-center max-md:p-[10%] max-md:text-center"
                    >
                      {sliderContent?.welcome && (
                        <p className="max-md:mb-3 md:text-2xl mb-8 text-xl text-orange-400">{sliderContent?.welcome}</p>
                      )}
                      {sliderContent?.title && (
                        <motion.h2 className="lg:text-5xl font-semibold mb-3 text-3xl !leading-[1.2]">
                          {sliderContent?.title}
                        </motion.h2>
                      )}
                                          {sliderContent?.para && <p className="md:text-lg max-md:mb-6 mb-10">{sliderContent?.para}</p>}

<Link href={sliderContent?.slug || "#"} passHref>
        <button className="bg-orange-600  px-6 py-3 rounded-lg text-white font-bold flex items-center group hover:bg-green-600 duration-300">
        {sliderContent?.btn || "Know More"}
        </button>  
      </Link>                      
                    </motion.div>
                  </div>
                </div>
          </AnimatePresence>
         
      {/* Slider Bottom */}
      <section className="flex flex-wrap items-stretch  justify-between max-lg:gap-y-6 md:px-32 px-6 md:sticky md:-mt-28 mt-10 z-40">
          
          <motion.div
            variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className=" p-8 lg:w-[21%] rounded-tl-[30px] overflow-hidden border bg-white md:w-[65%] w-full"
          >
            <motion.div variants={fadeIn("right", "tween", 0.1, 1)}>
              <div>
                <h3 className="text-2xl font-bold mb-5 text-orange-500">
                Our Vision and Commitment</h3>
               {/* <button className='text-2xl max-sm:hidden text-green-800 float-right'> <FaArrowRightLong /></button>
             
                  <Link
                    className=""
                    href="/contact-us"
                  >
                    <p className="text-black text-md group-hover:text-main">Join us at Bharat Ecofuels and be part of the change!
                    </p>
                  </Link> */}
              </div>
            </motion.div>
          </motion.div>

          {data?.map((points:any, index:any) => (
            <div key={index}
            className="p-6 lg:w-[25%] md:w-[31%] sm:w-[47%] w-full text-white bg-green-700 group hover:scale-105 hover:bg-main transition-all  duration-[500ms]"
          >
            <div className='flex flex-nowrap gap-3 mb-5'><div className="text-4xl font-bold   border border-white p-3 max-w-max rounded-lg">
                {points.icon}
                </div>
                <h4 className="leading-normal text-xl font-semibold   duration-200">
                  {points.title}
                </h4>
                </div>
               
                <p className="">
                  {points.text}
                </p>
                {/* <button className="hvr-sweep-to-right flex items-center font-bold text-white transition-all bg-primaryColor">
                  <Link
                    className="flex justify-center items-center  "
                    href="/services"
                  >
                    <FaArrowRightLong />
                  </Link><p className="text-sm text-zinc-800 group-hover:text-green-4000 ml-2 font-normal transition-all ">Read More</p>
                </button> */}
              </div>
          
          ))}
      </section>
      </>
    );
  }
