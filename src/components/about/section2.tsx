"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { banner, com, env, social } from "@/assets";

export default function Section2() {

  return (
    <section className=" md:pb-16 text-zinc-900 pt-6 max-md:pb-0 flex flex-wrap justify-between items-stretch ">
      <motion.div
        variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-[46%] w-full md:px-24 md:py-16 p-8 "
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="space-y-7 "
        >
        
          <h2 className="sm:text-4xl font-bold text-2xl">
          ENVIRONMENTAL RESPONSIBILITY
          </h2>

          <p className="text-zinc-500 text-base md:text-lg font-medium">
          We are committed to decarbonizesour environment
through the use of renewable energy sources specifically in the transport sector.

          </p>
          <ul className="space-y-3 text-lg lg:text-xl">
           
            <li
              className="flex gap-2 items-start group text-zinc-700 font-medium text-lg
            "
            >
              <div className="text-green3 mt-1 mr-2 group-hover:text-black md:text-2xl">
                <FaCircleCheck />
              </div>
              Reducing emissions with green technology.

            </li>
            <li
              className="flex gap-2 items-start group text-zinc-700 font-medium text-lg
            "
            >
              <div className="text-green3 mt-1 mr-2 group-hover:text-black md:text-2xl">
                <FaCircleCheck />
              </div>
              Preservation of plants and animals from a location at the time of setting it up.

            </li>
          </ul>
        </motion.div>
      </motion.div>
      <div className="lg:w-[50%] group w-full min-h-52 mt-5 md:rounded-tl-[100px]  relative">
        <div className="bg-green3 absolute group-hover:bg-zinc-800 group-hover:rounded-[40px] duration-500 min-w-36 shadow-lg bottom-20 max-lg:hidden z-10 -left-20 text-white rounded-tl-3xl p-6">
          <IoShieldCheckmarkSharp className=" md:text-5xl text-3xl" />
          <h3 className="text-2xl md:text-4xl font-semibold my-2">300k</h3>
          <p className="md:text-xl text-sm">
           Bio Diesel <br /> Owner
          </p>
        </div>
        <Image
          src={env}
          alt="img"
          className="absolute h-full top-0 left-0 w-full md:rounded-tl-[100px] z-0 object-cover"
        />
      </div>

      {/* 2nd part */}
      <div className="lg:w-[50%] group w-full min-h-52  relative  ">
      <div className="bg-green3 absolute group-hover:bg-white group-hover:text-zinc-800 min-w-36 group-hover:rounded-[40px] duration-500 z-10 bottom-20 max-lg:hidden -right-20 text-white rounded-tr-3xl p-6">
          <IoShieldCheckmarkSharp className=" md:text-5xl text-3xl" />
          <h3 className="text-2xl md:text-4xl font-semibold my-2">300k</h3>
          <p className="md:text-xl text-sm">
            Bio Petrol <br /> Owner
          </p>
        </div>
        <Image
          src={com}
          alt="img"
          className="absolute top-0 left-0 z-0 w-full md:rounded-tl-[100px] h-full  object-cover"
        />
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-[50%] w-full md:px-24 md:py-16 p-8 bg-zinc-800 text-white"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="space-y-7 "
        >
        
          <h2 className="sm:text-4xl font-bold text-2xl">
          COMMUNITY ENGAGEMENT
          </h2>

          <p className="text-zinc-200 text-base font-medium">
          We believe in giving back to the local community by supporting important causes and initiatives. We strive to work with local communities, focus on giving to charities, and collaborate with organizations to spread awareness about the importance of sustainability and environmental responsibility.



          </p>
          <ul className="space-y-3 text-lg lg:text-xl">
          
            <li
              className="flex gap-2 items-start group text-zinc-200 font-medium text-lg
            "
            >
              <div className="text-green3 mt-1 mr-2 group-hover:text-white md:text-2xl">
                <FaCircleCheck />
              </div>
              We leave no trash or waste behind after installation.

            </li>
            <li
              className="flex gap-2 items-start group text-zinc-200 font-medium text-lg
            "
            >
              <div className="text-green3 mt-1 mr-2 group-hover:text-white md:text-2xl">
                <FaCircleCheck />
              </div>
              We leave no trash or waste behind after installation.

            </li>
          </ul>
        </motion.div>
      </motion.div>


      {/* 3rd part */}
      <motion.div
        variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-[46%] w-full md:px-24 md:py-16 p-8 "
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="space-y-7 "
        >
        
          <h2 className="sm:text-3xl font-bold text-2xl">
          SOCIAL RESPONSIBILITY
          </h2>

          <p className="text-zinc-500 text-base font-medium">
          We are committed to promoting social responsibility and ethical business practices. We ensure compliance with applicable laws and regulations, work with responsible suppliers, and promote diversity and equal opportunity in the workplace. We extend support to the disadvantaged strata of the society to set up their own businesses.


          </p>
          <ul className="space-y-3 text-lg lg:text-xl">
           
            <li
              className="flex gap-2 items-start group text-zinc-700 font-medium text-lg
            "
            >
              <div className="text-green3 mt-1 mr-2 group-hover:text-black md:text-2xl">
                <FaCircleCheck />
              </div>
              Reducing waste through regular green3tenance.

            </li>
            <li
              className="flex gap-2 items-start group text-zinc-700 font-medium text-lg
            "
            >
              <div className="text-green3 mt-1 mr-2 group-hover:text-black md:text-2xl">
                <FaCircleCheck />
              </div>
              Promoting clean transportation to suppress fossil fuel consumption

            </li>
          </ul>
        </motion.div>
      </motion.div>
      <div className="lg:w-[50%] group w-full min-h-52 md:rounded-tl-[100px]  relative">
        <div className="bg-green3 absolute group-hover:bg-zinc-800 group-hover:rounded-[40px] duration-500 min-w-36 shadow-lg bottom-28 max-lg:hidden z-10 -left-20 text-white rounded-tl-3xl p-6">
          <IoShieldCheckmarkSharp className=" md:text-5xl text-3xl" />
          <h3 className="text-2xl md:text-4xl font-semibold my-2">300k</h3>
          <p className="md:text-xl text-sm">
           Bio CNG <br /> Owner
          </p>
        </div>
        <Image
          src={social}
          alt="img"
          className="w-full md:rounded-bl-[100px] h-full absolute top-0 left-0 object-cover"
        />
      </div>
    </section>
  );
}
