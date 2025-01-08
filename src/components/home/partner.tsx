"use client";
import { fadeIn, staggerContainer } from '@/utils/motion'
import React from 'react';
import { motion } from "framer-motion";
import { partner } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

function Partner() {
  return (
    <section className=' lg:px-28 sm:py-12 sm:p-10 p-7 bg-green3'>
      <motion.div
             variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl w-full mx-auto relative py-6 space-y-3"
    >

      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)} className='sm:w-[57%] text-white w-full max-sm:text-center max-sm:items-center flex flex-col gap-3'>
            <h2 className='md:text-4xl text-3xl font-bold'>Get a Eco-friendly option for a sustainable future</h2>
            <p>Install Your Own Biofuel Pump Station In Compliance With Government Of India.</p>
            <Link href={"/"} className="w-min mt-3">
            <div className=" rounded-3xl  text-nowrap px-6 py-2 hover:bg-green3 border border-black bg-black hover:border-white text-white duration-300 shadow-lg">
              <p className="text-base font-semibold">Become a Partner</p>
            </div>
          </Link>

        </motion.div>

        <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="absolute max-sm:hidden w-[32%] bottom-0 right-0"
      ><Image src={partner} alt='About' className='h-full w-full'/>
      </motion.div>
                     </motion.div>
    </section>
  )
}

export default Partner
