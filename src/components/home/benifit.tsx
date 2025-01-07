import React from "react";
import Image from "next/image";
import { car } from "@/assets";
import { TbSpiral } from "react-icons/tb";
import { MdPrivacyTip } from "react-icons/md";
import { GrThreeDEffects } from "react-icons/gr";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { benefit } from "@/data/homeData";

function Benifit() {
  return (
    <section className="lg:px-28 lg:py-20 sm:p-12 p-7 flex  flex-wrap justify-between items-center  max-lg:gap-4  bg-back">
      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
        {benefit?.title1 && <h4 className='text-green3 bg-[#E1F1D8] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max'>{benefit?.title1}</h4>}
          {benefit?.title2 && <h2 className='text-zinc-800 text-2xl md:text-4xl font-bold'>{benefit?.title2}</h2>}
              {benefit?.para && <p className='text-zinc-600 text-sm md:text-base max-w-4xl'>{benefit?.para}</p>}
              </div>
     
     
      <div className="lg:w-[28%] w-full  flex flex-wrap justify-between md:gap-10  gap-6">
        {benefit?.points?.slice(0,3).map((data) => (
        <div key={data.id} className=" w-full  p-6 bg-white border border-white hover:border-green3 group">
          <div className="flex gap-2 items-center border-b-2 border-green2 pb-2 !mb-4">  
          <div className="text-4xl text-green2 text-main group-hover:text-zinc-900 group-hover:scale-x-[-1] duration-300">
            {data.icon}
          </div>
          <h3 className="text-lg font-bold !my-0 group-hover:text-green2 text-zinc-800">{data.heading}</h3>
          </div>
         
          <p className="text-zinc-700 ">
          {data.text}  
                  </p>
        </div>
        ))}
      </div>
      <div className="lg:w-[30%] max-lg:my-5 w-full flex justify-center items-center overflow-hidden ">
     <Image src={benefit?.img} alt="car" className="w-full h-full"/>
      </div>
      <div className="lg:w-[28%] w-full  flex flex-wrap justify-between md:gap-10  gap-6">
        {benefit?.points?.slice(3,6).map((data) => (
        <div key={data.id} className=" w-full p-6 bg-white border border-white hover:border-green3 group">
          <div className="flex gap-2 items-center border-b-2 border-green2 pb-2 !mb-4">  
          <div className="text-4xl text-green2 text-main group-hover:text-zinc-900 group-hover:scale-x-[-1] duration-300">
            {data.icon}
          </div>
          <h3 className="text-lg font-bold !my-0 group-hover:text-green2 text-zinc-800">{data.heading}</h3>
          </div>
         
          <p className="text-zinc-700 ">
          {data.text}  
                  </p>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Benifit;
