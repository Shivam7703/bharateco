"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

export default function Footer({ footer }: any) {
  return (
    <footer className="pt-5 p-6 md:px-24  w-full z-20  text-white bg-zinc-800  relative">
      
      {/* NewsLetter Section  */}
     
      {/* Footer links section  */}
      <div className="grid grid-cols-2 pb-5 sm:grid-cols-3 md:grid-cols-12">
        <div className="col-span-3 flex flex-col gap-y-2">
        <Image
          src={footer?.logo}
          alt="logo"
          className="max-w-44 w-[80vw] object-contain"
        />
        <p className=" w-full text-base mt-3  max-sm:mt-3">
          {footer?.text}
        </p>
        {/* Socials  */}
        {footer?.socials && (
          <div className="flex  gap-2 md:gap-x-3 mt-3  text-4xl text-white">
            {footer?.socials?.facebook && (
              <FaFacebook
                className=" hover:text-green1 p-2 bg-zinc-700 rounded-full duration-300 "
                onClick={() => window.open(footer?.socials?.facebook, "_blank")}
              />
            )}
            {footer?.socials?.instagram && (
              <AiFillInstagram
                className="hover:text-green1 p-2 bg-zinc-700 rounded-full duration-300"
                onClick={() =>
                  window.open(footer?.socials?.instagram, "_blank")
                }
              />
            )}
            {footer?.socials?.linkedin && (
              <FaLinkedinIn
                className="hover:text-green1 p-2 bg-zinc-700 rounded-full duration-300"
                onClick={() => window.open(footer?.socials?.linkedin, "_blank")}
              />
            )}
            {footer?.socials?.youtube && (
              <TbBrandYoutubeFilled
                className="hover:text-green1 p-2 bg-zinc-700 rounded-full duration-300"
                onClick={() => window.open(footer?.socials?.youtube, "_blank")}
              />
            )}
            {footer?.socials?.twitter && (
              <FaXTwitter
                className="hover:text-green1 p-2 bg-zinc-700 rounded-full duration-300"
                onClick={() => window.open(footer?.socials?.twitter, "_blank")}
              />
            )}
          </div>
        )}
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>
        <div className="col-span-2 flex flex-col gap-y-2 mt-5">
          <h4 className="my-2 text-xl font-semibold">{footer?.list2?.title}</h4>
          <ul className="space-y-2">
            {footer?.list2?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className=" transition:all text-base text-zinc-200 duration-300 hover:text-green2 "
                >
                {"-"}  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 flex flex-col gap-y-2 md:pl-14 mt-5">
          <h4 className="my-2 text-xl font-semibold">{footer?.list2?.title}</h4>
          <ul className="space-y-2">
            {footer?.list2?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className=" transition:all text-base text-zinc-200 duration-300 hover:text-green2 "
                >
                {"-"}  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>


        <div className=" flex flex-col mt-5 space-y-2  col-span-3">
          <h4 className="my-2  text-xl font-semibold">
            {footer?.newLetter?.title}
          </h4>
          <p className=' transition:all text-base text-zinc-200 duration-300 hover: hover:text-main '><strong>Phone: </strong>&nbsp;+91 1234567890</p>
          <p className=' transition:all text-base text-zinc-200 duration-300 hover: hover:text-main '><strong>E-mail: </strong>&nbsp;info@bharatecofuel.in</p>
          <p className=' transition:all text-base text-zinc-200 duration-300 hover: hover:text-main '><strong>Address: </strong>&nbsp;A-60, SECTOR-58 NOIDA, UP-201301, UTTAR PRADESH</p>
        
        </div>
      </div>
      {/* copyright  */}
      <div className="flex items-center justify-center border-t border-white py-5 max-md:flex-col">
        <p className="text-center text-sm">{footer?.copyrightText} <span className="hover:text-main transition-all font-semibold cursor-pointer"  >Lorem.</span></p>
        
      </div>
    </footer>
  );
}
