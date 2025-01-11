    



 "use client";

// Import required modules
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { banner } from "@/assets";
import { sliderText, } from "@/utils/motion";




export default function Banner({title, para, img, slug}:any) {

 // Trigger useEffect whenever currentSlide changes

  return (
    <>
      <div>
        <AnimatePresence>
              <div className="w-full h-max relative">
                <Image
                  className="w-full h-[50vh] md:h-[40vh]  lg:h-[30vw] object-cover object-center"
                  src={img || banner}
                  alt="sliding image"
                  loading="lazy"
                />
                <div className="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 flex items-center text-white">
                  <motion.div
                  
                variants={sliderText} // Using the sliderText motion variants
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ easings: ["easeIn", "easeOut"] }}
                                        className="md:w-1/2 md:ml-28 flex flex-col max-md:justify-center max-md:items-center max-md:p-[10%] max-md:text-center"
                  >
                  
                  
                      <motion.h2 className="lg:text-6xl font-bold mb-8 text-3xl">
                        {title}
                      </motion.h2>
                 
                   <motion.p className="md:text-lg text-base max-w-2xl"> {para}
                   </motion.p>

                   <motion.p className="py-3 w-max mt-7 bg-[#ffffff32] text-sm rounded-3xl px-6">Home &nbsp;/ &nbsp; <span className="text-green2 font-bold">{slug}</span>
                   </motion.p>
                   
                  </motion.div>
                </div>
              </div>
        </AnimatePresence>
      </div>
    
    </>
  );
}
