import React from "react";

function Form({ contactdata }: any) {
  return (
    <section className="lg:p-28 sm:p-12 p-7 bg-back relative">
      <div className="flex items-stretch flex-wrap max-w-5xl mx-auto shadow-xl sticky z-20">
        {contactdata && (
          <div className="md:w-[35%] px-7 py-10 w-full bg-green3 text-white">
            <h4 className="mb-3 font-bold text-xl md:text-2xl">{contactdata?.title}</h4>
            <p>{contactdata?.para}</p>
            <div className="mt-6 space-y-6">
              {contactdata?.detail?.map((data: any) => (
                <div
                  key={data.id}
                  className="flex group duration-300 group-hover:border-green2 gap-5 md:gap-8 py-2 md:py-4 border-b border-[#ffffffb5] items-center"
                >
                  <div className="text-3xl md:text-4xl group-hover:text-green2 duration-300">{data?.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-green2 group-hover:text-white duration-300 mb-1">
                      {data?.title}
                    </h3>
                    <a className="hover:text-zinc-200" href={data?.slug || "#"} target="_blank" rel="noopener noreferrer">
                      {data?.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="md:w-[65%] px-7 py-10 w-full bg-white">
          <h3 className="mb-3 font-bold text-xl md:text-2xl text-green3">Send Us Message</h3>
          <p className="text-zinc-600 font-semibold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem.
          </p>
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
      </div>

      <div className=' w-full md:h-[250px] h-64'>
</div>


      <div className='absolute z-10 left-0 bottom-0 w-full md:h-[550px] h-80'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.70783721605!2d77.09038143184443!3d28.60854037240093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf3b54fb5f5%3A0x3c779acafc7267bb!2sRZ-105%20BLOCK-%20C%2C%20DABRI%20EXTENSION%20EAST!5e0!3m2!1sen!2sin!4v1727546752016!5m2!1sen!2sin"
        width="100%"
        height="100%"
      ></iframe>
    </div>
    </section>
  );
}

export default Form;
