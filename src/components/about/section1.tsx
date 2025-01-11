"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaCheckCircle } from 'react-icons/fa';
import { fadeIn,  staggerContainer} from '@/utils/motion';

function Section1({aboutdata}:any) {
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 p-7 max-w-[1580px] mx-auto flex flex-wrap items-center justify-between gap-y-7 bg-white' >
      
      <motion.div
       variants={fadeIn("right", "tween", 0.3, 1)} className='sm:w-[49%] w-full space-y-5'>
      {aboutdata?.title1 && <h4 className='text-green3 bg-zinc-100 px-7 font-bold text-sm rounded-lg py-3 w-max'>{aboutdata?.title1}</h4>}


     <h2 className='text-zinc-800 font-bold text-3xl md:text-4xl'>{aboutdata?.title2} <span className='text-green3'>{aboutdata?.title3}</span></h2>

      {aboutdata?.para && <p className='text-zinc-600 text-sm md:text-base'>{aboutdata?.para}</p>}
      
      <ul className='space-y-3'>
      {aboutdata?.vision?.map((data :any) => (
        <li key={data.id} className='p-4 flex gap-3 md:gap-6 group hover:shadow-xl duration-300  rounded-xl items-center text-black'>
            <div className='group-hover:text-orange-600 group-hover:-mt-6 duration-300 text-4xl md:text-5xl text-green3'>{data?.icon}
</div>
<div><h3 className='text-xl mb-1 font-bold group-hover:ml-3 group-hover:text-green3 duration-300 text-zinc-800'>{data.heading}</h3>
<p className='font-medium text-zinc-600'>{data.text}</p></div>
</li>
      ))}
      </ul>
      </motion.div>


      <motion.div     variants={fadeIn("left", "tween", 0.3, 1)}
 className="sm:w-[45%] w-full "
    ><div
    className="space-y-7 overflow-hidden hover14"
  >{aboutdata?.img && <Image src={aboutdata?.img} alt='About' className=' h-full w-full object-contain'/>}
                 </div></motion.div>
    </motion.div>
  )
}

export default Section1;
