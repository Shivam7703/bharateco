"use client";
import { banner } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Servicedetail({data} :any) {


  return (
    <div className="mb-6 md:p-24 relative p-3 flex flex-wrap justify-between items-start max-md:gap-7">
    
     <div className="md:w-[66%] shadow-lg w-full p-5 text-zinc-800 md:space-y-12 space-y-4 max-md:mt-5">
 
        <h3 className="text-2xl md:text-5xl font-bold ">{data.title1}</h3>
        <p className="text-lg font-semibold text-zinc-700">{data.para1}
        </p>
        <Image src={data.img1} alt="service" className="w-full h-full" />
        <p className="text-lg font-semibold text-zinc-700">{data.para2}
</p>
    

        <h3 className="md:text-4xl text-2xl font-bold">{data.title2}
        </h3>
        <p className="text-lg font-semibold text-zinc-700">{data.para3}</p>
        <p className="text-lg font-semibold text-zinc-700">{data.para4}
        </p>

        <p className="text-lg font-semibold text-zinc-700">{data.para5}
        </p>

        <div className=" w-full max-md:mt-5 h-full relative p-8 max-lg:mt-10">
      
     


        <Image src={data.img2} alt="map" className="w-full mt-4"/>
      </div>
      <p className="text-lg font-semibold text-zinc-700">{data.para6}
      </p>
      <p className="text-lg font-semibold text-zinc-700">{data.para7}
      </p>
</div>

<div className="md:sticky top-8 md:w-[30%] w-full">
     <div className=" p-6 w-full bg-white shadow-lg">
          <h3 className="mb-3 font-bold text-xl md:text-2xl text-green3">Send Us Message</h3>
         
          <form
            action="contact.php"
            method="POST"
            className=" w-full mt-6"
          >
           
            <div className="w-full flex justify-between flex-wrap gap-y-5">
              <div className="w-[48%]">
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Name"
              
                />
              </div>

              <div className="w-[48%]">
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Email"
              
                />
              </div>

              <div className="w-full">
                <input
                  type="number"
                  maxLength={15}
                  minLength={7}
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Contact No."
          
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Subject"
              
                />
              </div>

              <div className="w-full">
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Query"
                 
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-lg mb-3 -mt-1 text-white font-bold text-base py-4 px-6 w-max bg-green3 hover:bg-black duration-300"
              >
                Submit Now &nbsp;→
              </button>
            </div>
          </form>
        </div>

        <div className="p-8 flex items-center flex-col bg-zinc-800  rounded-xl md:mt-8 mt-5 shadow-xl">
            <h3 className="mb-6 text-white text-xl font-bold">Download Brochure</h3>
        <Link href="#"
              className="px-10 py-4 rounded-lg bg-white text-black overflow-hidden group  relative hover:bg-main hover:text-white transition-all ease-out duration-300 "
            >
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative font-bold">Download</span>
            </Link>
       
        </div>
     </div>

    </div>
  );
}
