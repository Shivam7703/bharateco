"use client";
import Image from "next/image";
import { OutletDetails } from "@/data/homeData";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCircleChevronRight } from "react-icons/fa6";
import { ImMenu } from "react-icons/im";
import { RiCloseLine } from "react-icons/ri";

export default function Outlet() {
  const data = [
    { id: 1, label: "Andhra Pradesh" },
    { id: 2, label: "Arunachal Pradesh" },
    { id: 3, label: "Assam" },
    { id: 4, label: "Bihar" },
    { id: 5, label: "Chhattisgarh" },
    { id: 6, label: "Goa" },
    { id: 7, label: "Gujarat" },
    { id: 8, label: "Haryana" },
    { id: 9, label: "Himachal Pradesh" },
    { id: 10, label: "Jharkhand" },
    { id: 11, label: "Karnataka" },
    { id: 12, label: "Kerala" },
    { id: 13, label: "Madhya Pradesh" },
    { id: 14, label: "Maharashtra" },
    { id: 15, label: "Manipur" },
    { id: 16, label: "Meghalaya" },
    { id: 17, label: "Mizoram" },
    { id: 18, label: "Nagaland" },
    { id: 19, label: "Odisha" },
    { id: 20, label: "Punjab" },
    { id: 21, label: "Rajasthan" },
    { id: 22, label: "Sikkim" },
    { id: 23, label: "Tamil Nadu" },
    { id: 24, label: "Telangana" },
    { id: 25, label: "Tripura" },
    { id: 26, label: "Uttar Pradesh" },
    { id: 27, label: "Uttarakhand" },
    { id: 28, label: "West Bengal" },
  ];

  const [selectedService, setService] = useState<number>(1);
  const [show, setShow] = useState(false);
  const [expandedCity, setExpandedCity] = useState<number | null>(null);

  function toggleMenu() {
    setShow((prev) => !prev); // Toggles sidebar visibility
  }

  function toggleCity(cityId: number) {
    setExpandedCity((prev) => (prev === cityId ? null : cityId)); // Toggles FAQ visibility for cities
  }

  return (
    <section className="mb-6 md:p-24 relative p-6 flex justify-between items-start max-md:gap-4">
      {/* Sidebar for Service List */}
      <div
        className={`md:sticky md:top-8 p-3 left-0 absolute md:w-[30%] duration-300 ${
          show ? "max-md:w-[70%]" : "max-md:w-0 overflow-hidden"
        }`}
      >
        <ul className="bg-white text-zinc-900 overflow-auto max-md:h-[90vh] px-3 my-3 w-full border shadow-lg md:text-lg text-sm rounded-xl">
          {data.map((service) => (
            <li
              key={service.id}
              onClick={() => {
                setService(service.id);
                toggleMenu(); // Close menu after selecting a service
              }}
              className={`p-2 border-b my-2 font-normal max-md:text-center justify-between md:flex items-center transition-all rounded-xl hover:bg-main text-white ${
                selectedService === service.id
                  ? "bg-green3 text-white"
                  : "bg-zinc-800"
              }`}
            >
              {service.label}
              <FaCircleChevronRight className="max-md:hidden ml-3" />
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="md:w-[65%] min-h-[92vh] w-full md:space-y-11 space-y-5">
        {/* Mobile Menu Toggle Button */}
        <div
          onClick={toggleMenu}
          className="float-right text-black text-4xl md:hidden font-bold duration-300"
        >
          {!show ? (
            <ImMenu className="text-green3" />
          ) : (
            <RiCloseLine className="text-red-800" />
          )}
        </div>

        {/* Content for Selected Service */}
        {OutletDetails.map((service) =>
          selectedService === service.id ? (
            <div key={service.id}>
              {/* Service Name */}
              <h3 className="text-4xl md:text-5xl mt-4 text-black font-bold hover:text-green1">
                {service.name}
              </h3>
              {/* Cities as FAQ */}
              {service.cities.map((city) => (
                <div key={city.id} className="mt-8 border-b pb-4">
                  {/* FAQ Question */}
                  <div
                    onClick={() => toggleCity(city.id)}
                    className="flex justify-between items-center cursor-pointer text-xl md:text-2xl text-zinc-800 font-bold"
                  >
                    {city.title1}

                    <FaChevronDown className={` duration-300 ${expandedCity === city.id ? "rotate-180 text-green3" :"text-zinc-700"}`} />
                   
                  </div>

                  {/* FAQ Answer with Transition */}
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${
                      expandedCity === city.id
                        ? "max-h-screen mt-3 space-y-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className="md:text-lg text-sm font-medium text-zinc-700">
                      {city.text1}
                    </p>
                    <Image
                      src={city.img}
                      alt={city.title1}
                      className="w-full h-full max-h-80 object-cover"
                      width={800}
                      height={450}
                    />
                    <p className="md:text-lg text-sm font-semibold text-zinc-700">
                      {city.text2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
