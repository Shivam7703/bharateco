"use client";
import React from 'react';
import Image from 'next/image';
import { aboutdata } from '@/data/homeData';
import { motion } from "framer-motion";
import { FaCheckCircle } from 'react-icons/fa';
import { fadeIn, sliderText, staggerContainer} from '@/utils/motion';

function AboutSection() {
  return (
    
    <section className='lg:p-28 sm:p-12 p-7 max-w-[1580px] mx-auto flex flex-wrap justify-between gap-y-7 bg-white' >
        <motion.div
             variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.2 }}
      className="sm:w-[45%] w-full"
    ><motion.div
    variants={fadeIn("right", "tween", 0.3, 1)}
    className="space-y-7 "
  >{aboutdata?.img && <Image src={aboutdata.img} alt='About' className='h-full w-full'/>}
                 </motion.div></motion.div>
      <div className='sm:w-[49%] w-full space-y-5'>
      {aboutdata?.title1 && <h4 className='text-green3 bg-zinc-100 px-7 font-bold text-sm rounded-lg py-3 w-max'>{aboutdata?.title1}</h4>}
      {aboutdata?.title2 && <h2 className='text-zinc-800 text-3xl md:text-4xl'>{aboutdata?.title2}</h2>}
      {aboutdata?.para && <p className='text-zinc-600 text-sm md:text-base'>{aboutdata?.para}</p>}
      {aboutdata?.title3 && <h4 className='md:text-2xl text-xl text-zinc-800 font-medium'>{aboutdata?.title3}</h4>}
      <ul className='space-y-2'>
      {aboutdata?.vision?.map((data) => (
        <li key={data.id} className='flex gap-x-2'><div className='text-xl text-green3 mt-1'><FaCheckCircle />
</div><p className='text-zinc-600'><span className='font-bold'>{data.heading}:{" "}</span>{" "}{data.text}</p></li>
      ))}
      </ul>
      </div>
    </section>
  )
}

export default AboutSection;
