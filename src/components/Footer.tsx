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
    <footer className="pt-5 p-6 md:px-24  w-full z-20  text-white bg-zinc-900  relative">
      
      {/* NewsLetter Section  */}
     
      {/* Footer links section  */}
      <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 md:grid-cols-4 ">
        <div className="col-span-1 flex flex-col gap-y-2">
        <Image
          src={footer?.logo}
          alt="logo"
          className="max-w-64 w-[80vw] object-contain"
        />
        <p className=" w-full  max-sm:mt-3">
          {footer?.text}
        </p>
        {/* Socials  */}
        {footer?.socials && (
          <div className="flex justify-center gap-3 md:gap-x-6 mt-3  text-2xl text-white">
            {footer?.socials?.facebook && (
              <FaFacebook
                className="social-icon hover:text-main duration-300"
                onClick={() => window.open(footer?.socials?.facebook, "_blank")}
              />
            )}
            {footer?.socials?.instagram && (
              <AiFillInstagram
                className="social-icon hover:text-main duration-300"
                onClick={() =>
                  window.open(footer?.socials?.instagram, "_blank")
                }
              />
            )}
            {footer?.socials?.linkedin && (
              <FaLinkedinIn
                className="social-icon hover:text-main duration-300"
                onClick={() => window.open(footer?.socials?.linkedin, "_blank")}
              />
            )}
            {footer?.socials?.youtube && (
              <TbBrandYoutubeFilled
                className="social-icon hover:text-main duration-300"
                onClick={() => window.open(footer?.socials?.youtube, "_blank")}
              />
            )}
            {footer?.socials?.twitter && (
              <FaXTwitter
                className="social-icon hover:text-main duration-300"
                onClick={() => window.open(footer?.socials?.twitter, "_blank")}
              />
            )}
          </div>
        )}
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:hidden"></div>
        <div className="col-span-1 flex flex-col gap-y-2 mt-10">
          <h4 className="my-2 text-xl font-semibold">{footer?.list2?.title}</h4>
          <ul>
            {footer?.list2?.links?.map((d: any, i: number) => (
              <li key={i}>
                <Link
                  href={d?.href}
                  className=" transition:all text-lg mb-1 text-zinc-200 duration-300 hover: hover:text-main "
                >
                  {d?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
       

        <div className=" flex flex-col mt-10 space-y-2  col-span-1">
          <h4 className="my-2 mb-3 text-xl font-semibold">
            {footer?.newLetter?.title}
          </h4>
          <p className=' transition:all text-lg text-zinc-200 duration-300 hover: hover:text-main '><strong>Phone: </strong>&nbsp;+91 1234567890</p>
          <p className=' transition:all text-lg text-zinc-200 duration-300 hover: hover:text-main '><strong>E-mail: </strong>&nbsp;info@bharatecofuel.in</p>
          <p className=' transition:all text-lg text-zinc-200 duration-300 hover: hover:text-main '><strong>Address: </strong>&nbsp;A-60, SECTOR-58 NOIDA, UP-201301, UTTAR PRADESH</p>
        
        </div>
      </div>
      {/* copyright  */}
      <div className="flex items-center justify-center border-t border-white py-5 max-md:flex-col">
        <p className="text-center text-sm">{footer?.copyrightText} <span className="hover:text-main transition-all font-semibold cursor-pointer"  >Shivam .</span></p>
        
      </div>
    </footer>
  );
}
