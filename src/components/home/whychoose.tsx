"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { whychoose } from "@/assets";
import { whychooseData } from "@/data/homeData";


  



export default function WhyChoose() {

   

  return (
    <section className="lg:p-28 sm:p-12 p-7 flex flex-wrap   justify-between  items-center max-md:gap-4">   


      <motion.div
        variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-[45%] w-full"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="space-y-7 "
        >
     {whychooseData?.title2 && <h2 className='text-green3 text-2xl md:text-3xl font-bold'>{whychooseData?.title2}</h2>}
          

          <ul className="">
    {whychooseData?.data?.map((points:any) => (
        <li key={points.id} className="flex transition-all items-center gap-7 group py-7 border-b hover:border-main border-zinc-700 ">
            <div className="text-5xl transition-all text-black group-hover:text-green2 group-hover:-translate-y-4 duration-500">{points.icon}</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-black group-hover:text-green2 duration-300">{points.title}</h3>
             <p className="text-sm text-zinc-500 font-medium group-hover:text-zinc-900 duration-300">{points.text}</p></div>
        </li>
    ))}    </ul>
        </motion.div>
      </motion.div>
      
      <div className="lg:w-[40%] w-full max-md:mt-5 h-full relative lg:py-6 py-10 max-lg:mt-10">
   

        <Image src={whychoose} alt="map" className="w-full mt-4"/>
      </div>
    </section>

  );
}
