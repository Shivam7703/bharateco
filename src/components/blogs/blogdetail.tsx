"use client";
import { banner } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Blogedetail() {
  const latestBlogs = [
    {
      title: "We work more to help you make your brand unique",
      date: "February 8, 2024",
      image: banner,
    },
    {
      title: "We work more to help you make your brand unique",
      date: "February 8, 2024",
      image: banner,
    },
    {
      title: "We work more to help you make your brand unique",
      date: "February 8, 2024",
      image: banner,
    },
  ];

  const tags = ["Agency", "Business", "Renewable", "Sustainability"];

  return (
    <div className="mb-6 md:p-24  relative p-3 flex flex-wrap justify-between items-start max-md:gap-7">
      <article className="md:w-[66%] shadow-lg w-full p-5 text-zinc-800 md:space-y-12 space-y-4 max-md:mt-5">
      <Image src={banner} alt="service" className="w-full h-full" />

        <h3 className="text-2xl md:text-4xl font-bold">Blog Name Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut maxime aliquid quas harum quod.</h3>
        <p className="text-lg font-semibold text-zinc-700">
          Biocoal, also known as torrefied biomass or black Biomass
          Briquette/pellets, is a renewable energy product obtained by thermally
          treating biomass, such as wood chips, straw, or other plant material,
          in the absence of air... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum atque veniam optio eius temporibus laudantium quas necessitatibus eligendi quisquam natus beatae enim, ipsum blanditiis, maxime esse nemo mollitia, fuga unde!
        </p>

        <h3 className="text-2xl font-bold">IS THERE A FUTURE BEYOND COAL?</h3>
        <p className="text-lg font-semibold text-zinc-700">
          In the fast-developing world, coal is the largest contributor to the
          human-made increase of CO2 in the atmosphere... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique animi harum quibusdam temporibus pariatur dolores facere natus blanditiis molestias minus ipsam dignissimos ullam quisquam incidunt quas ipsum, est reprehenderit corporis.
        </p>

        <p className="text-lg font-semibold text-zinc-700">
          In the fast-developing world, coal is the largest contributor to the
          human-made increase of CO2 in the atmosphere... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique animi harum quibusdam temporibus pariatur dolores facere natus blanditiis molestias minus ipsam dignissimos ullam quisquam incidunt quas ipsum, est reprehenderit corporis.
        </p>

        <p className="text-lg font-semibold text-zinc-700">
          In the fast-developing world, coal is the largest contributor to the
          human-made increase of CO2 in the atmosphere... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique animi harum quibusdam temporibus pariatur dolores facere natus blanditiis molestias minus ipsam dignissimos ullam quisquam incidunt quas ipsum, est reprehenderit corporis.
        </p>

        
      </article>

      <aside className="md:sticky top-8 md:w-[30%] text-zinc-800 w-full">
        <div className="w-full bg-gray-100 rounded-md p-5 md:p-10">
          <h6 className="text-xl font-bold mb-3">Latest Blogs</h6>
          <div className="w-full h-[3px] bg-zinc-200 mb-5 rounded-xl">
            <div className="w-16 h-full bg-green3 rounded-xl"></div>
          </div>
          <div className="space-y-3 flex flex-col">
            {latestBlogs.map((blog, index) => (
              <a
                key={index}
                href="#"
                className="text-zinc-600 hover:text-green3 space-x-3 flex cursor-pointer"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h6 className="font-bold">{blog.title}</h6>
                  <p className="text-zinc-500 text-sm">{blog.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-md p-5 md:p-10 md:mt-8 mt-5">
          <h6 className="text-xl font-bold mb-3">Tags</h6>
          <div className="w-full h-[3px] bg-zinc-200 mb-5 rounded-xl">
            <div className="w-16 h-full bg-green3 rounded-xl"></div>
          </div>
          <div className="gap-3 flex flex-wrap">
            {tags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="text-black bg-white p-2 px-5 rounded-lg hover:bg-green3 hover:text-white duration-300"
              >
                <span>{tag}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="p-8 flex items-center flex-col bg-zinc-800 rounded-xl md:mt-8 mt-5 shadow-xl">
          <h3 className="mb-6 text-white text-xl font-bold">Download Brochure</h3>
          <Link
            href="#"
            className="px-10 py-4 rounded-lg bg-white text-black overflow-hidden group relative hover:bg-green3 hover:text-white transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
            <span className="relative font-bold">Download</span>
          </Link>
        </div>
      </aside>
    </div>
  );
}
