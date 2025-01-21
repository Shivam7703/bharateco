"use client";

import Image from "next/image";
import Link from "next/link";

export default function Servicesection({data}:any) {
 


  return (
    <section className="my-6 md:p-24 sm:p-14 p-4 text-center relative slider1 flex flex-col items-center">
       <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
                   <h4 className='text-green3 bg-[#E1F1D8] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max'>Our Services </h4>
                     <h2 className='text-zinc-800 text-2xl md:text-4xl font-bold'>We Provide Best Petrolium Services</h2>
                       <p className='text-zinc-600 text-sm md:text-base max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur voluptatum, ratione hic iure numquam ipsa dolore, laboriosam eveniet suscipit nam tempora? In.</p>
                         </div>
      <div
        className=" w-full max-w-fit  mt-3 flex flex-wrap justify-between md:gap-y-6 gap-y-2" >
        {" "}
        {data?.map((cards: any) => (
          <div
            key={cards.id}
            className="md:mb-12 w-full sm:w-[48%] md:w-[31%] p-4  rounded-2xl  "
          >
            <div className=" w-full text-left h-full overflow-hidden  group  shadow-xl bg-white rounded-xl">
              <div className="relative overflow-hidden w-full h-60">
                <Image
                  src={cards.img}
                  alt=""
                  className=" transition-all duration-500 w-full h-60 object-cover group-hover:scale-110  z-10"
                />
              </div>
              <div className="px-4">
             

              <h3 className="text-xl font-bold  my-4 text-zinc-800">
                {cards.title}
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base text-justify">{cards.text}</p><br />
             <div className="w-full text-center"> <Link 
                  href={cards.slug }
                  className=" duration-500 !min-w-full !mx-auto group-hover:bg-zinc-800 text-white px-16 bg-green3  text-center -mb-3 py-2  text-base  font-bold" >
                  Know More
                </Link></div><br/>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add navigation buttons */}
    </section>
  );
}
