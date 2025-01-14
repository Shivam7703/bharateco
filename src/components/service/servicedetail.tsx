"use client";
import { banner } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Servicedetail() {


  return (
    <section className="mb-6 md:p-24 relative p-3 flex flex-wrap justify-between items-start max-md:gap-4">
    
     <div className="md:w-[66%] shadow-lg w-full p-5 text-zinc-800 md:space-y-12 space-y-4 max-md:mt-5">
 
        <h3 className="text-2xl md:text-5xl font-bold ">BIO-COAL</h3>
        <p className="text-lg font-semibold text-zinc-700">Biocoal, also known as torrefied biomass or black Biomass Briquette/pellets, is a renewable energy product obtained by thermally treating biomass, such as wood chips, straw, or other plant material, in the absence of air. The process, known as torrefaction, involves heating the biomass at temperatures between 200-300°C in an oxygen-free environment, which causes the material to release water, volatile organic compounds, and other impurities, leaving behind a dry, high-energy-density product that is more resistant to water, rot, and combustion than raw biomass.
        </p>
        <Image src={banner} alt="service" className="w-full h-full" />
        <p className="text-lg font-semibold text-zinc-700">Biocoal has several advantages over traditional biomass fuels, including higher energy content, lower moisture content, and improved handling and storage properties. It can be used as a direct replacement for coal in power plants, industrial boilers, and other combustion processes, without the need for significant modifications to existing infrastructure. Biocoal also has a lower carbon footprint than fossil fuels, as it is made from renewable biomass, and can help to reduce greenhouse gas emissions and mitigate climate change.

</p>
    

        <h3 className="text-4xl font-bold">IS THERE A FUTURE BEYOND COAL?
        </h3>
        <p className="text-lg font-semibold text-zinc-700">In the fast-developing world, coal is the largest contributor to the human-made increase of CO2 in the atmosphere. Its environmental impact spreads far across many areas, from air pollution, water, and waste management, up to the increased land uses.
        In the face of greenhouse gas emissions, industries are seeking a new way to manage their environmental impact and reduce the carbon footprint of production. In this article, we are focusing on the biocoal as an emerging trend to replace the fossil coals in the industry, and specifically in the metallurgic industry.</p>
        <p className="text-lg font-semibold text-zinc-700">The demand for biocoal in India is expected to grow in the coming years, driven by several factors including increasing energy demand, rising concerns about air pollution, and government policies promoting the use of renewable energy sources. According to a report by the International Energy Agency, India’s demand for biomass-based electricity is expected to increase from 80 TWh in 2019 to 224 TWh in 2040.
        </p>

        <p className="text-lg font-semibold text-zinc-700">However, the growth of the biocoal industry in India will depend on several factors, including the availability of biomass feedstock’s, the development of efficient and cost-effective production technologies, and the establishment of a supportive policy and regulatory environment. Nevertheless, biocoal has the potential to play an important role in India’s energy mix, and its demand is likely to increase in the years to come.
        </p>

        <div className=" w-full max-md:mt-5 h-full relative p-8 max-lg:mt-10">
      
        <div className="sm:w-7 sm:h-7 h-4 w-4 absolute top-[35%] left-[17%] puls2 rounded-full animate-pulse-shadow shadow-lg">
</div>

<div className="sm:w-7 sm:h-7 h-4 w-4 absolute bottom-[22%] left-[28%] puls2 rounded-full animate-pulse-shadow shadow-lg">
</div>

<div className="sm:w-7 sm:h-7 h-4 w-4 absolute top-[30%] right-[27%] puls2 rounded-full animate-pulse-shadow shadow-lg"></div>


        <Image src={banner} alt="map" className="w-full mt-4"/>
      </div>
      <p className="text-lg font-semibold text-zinc-700">We always perform scheduled checks on your charging stations to ensure that we pick any signs of problems before they assume huge proportions. Every piece of wiring and mechanical structure is checked by our trained technical personnel to verify optimal performance. That is why, in case any repair work is necessary, we take care of it in order to avoid any interruption of services. 
      </p>
      <p className="text-lg font-semibold text-zinc-700">For inspection and repair, we issue periodic updates or recommendations regarding the condition of your charging stations. We aim to be your operations support so that you can focus on what concerns your enterprise. When you work with us, we’ll ensure that the maintenance of your EV charging stations is efficient and timely, ensuring that our clients’ customers get the convenient and quality service they need for the growth of green mobility.
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

        <div className="p-8 flex items-center flex-col bg-zinc-800  rounded-xl mt-8 shadow-xl">
            <h3 className="mb-6 text-white text-xl font-bold">Download Brochure</h3>
        <Link href="#"
              className="px-10 py-4 rounded-lg bg-white text-black overflow-hidden group  relative hover:bg-main hover:text-white transition-all ease-out duration-300 "
            >
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative font-bold">Download</span>
            </Link>
       
        </div>
     </div>

    </section>
  );
}
