"use client";
import { blogData } from "@/data/homeData";

import Image from "next/image";
import Link from "next/link";

export default function Blogsection({data}:any) {
 


  return (
    <section className="my-6 md:p-24 p-6 text-center relative slider1 flex flex-col items-center">
       <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
                   <h4 className='text-green3 bg-[#E1F1D8] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max'>Blogs and News </h4>
                     <h2 className='text-zinc-800 text-2xl md:text-4xl font-bold'>Stay Updated With our Latest News And Blogs</h2>
                       <p className='text-zinc-600 text-sm md:text-base max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur voluptatum, ratione hic iure numquam ipsa dolore, laboriosam eveniet suscipit nam tempora? In.</p>
                         </div>
      <div
        
        className=" w-full max-w-fit px-5 mt-6 flex flex-wrap justify-between  gap-y-6"
      >
        {" "}
        {data?.blogs?.map((cards: any) => (
          <div
            key={cards.id}
            className="md:mb-12 w-[49%] md:w-[31%] p-4  rounded-2xl  "
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
                  href={"blogs/details"}
                  className=" duration-500  group-hover:bg-zinc-800 text-white px-16 bg-green3  text-center -mb-3 py-2  text-base  font-bold"
                >
                  Read More
                </Link><br/><br/>
              </div>
            </div>
          </div>
        ))}
        {/* <div className={`${uniqueId}-next swiper-button-next !top-[34%]`}></div>

<div className={`${uniqueId}-prev swiper-button-prev !top-[34%]`}></div> */}
      </div>

      {/* Add navigation buttons */}

    
     
    </section>
  );
}
