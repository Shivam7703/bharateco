import { about, banner, car, logo2 } from "@/assets";
import { FaRoadCircleCheck } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { LiaChargingStationSolid } from "react-icons/lia";
import { MdWorkHistory } from "react-icons/md";
import { PiPlugChargingFill } from "react-icons/pi";
import { SiTestcafe } from "react-icons/si";
import { TbSpiral } from "react-icons/tb";

export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "Welcome to Bharat Eco Fuel",
    title1: "Transforming India's Future with",
    title2:"Bharat Ecofuels",
  
    btntext: "Explore More",
    href: "/",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: banner,
    welcome: "Welcome to Bharat Eco Fuel2",
    title1: "Transforming India's Future with",
    title2:"Bharat Ecofuels2",

      btntext: "Contact Us",
    href: "/",
  },

];

export const aboutdata ={
  img: about,
  title1:"About Us",
  title2:"Transforming India's Future with Bharat Ecofuels",
  para: "At Bharat Ecofuels, we are revolutionizing the biofuel industry and transforming the lives of millions of farmers and people across India. By promoting biofuel production, we are creating opportunities and employment for individuals in even the most rural areas.",
  title3:"Our Vision and Commitment",
  vision:[{
    id:1,
    heading:"Empowering Rural Communities",
    text:"Generating jobs and boosting local economies.",
  },
  {
    id:2,
    heading:"Sustainable Energy Solutions",
    text:"Leading the way in eco-friendly biofuel production.",
  },
  {
    id:3,
    heading:"Trusted Partnerships",
    text:"Valuing our distributors, clients, customers, associates, employees, and well-wishers.",
  }],
  title4:"Join us at Bharat Ecofuels and be part of the change!"
} 


export const benefit = {
title1: "Certified By Government Of India",
title2: "Benefits of Biofuels",
para: "Biofuels reduce carbon emissions, promote energy security, create jobs, support rural economies, and decrease reliance on fossil fuels. Embrace renewable energy for a sustainable and eco-friendly future.",
img:car,
points :[
  {id:1,
    icon:<TbSpiral />,
    heading:"INDIA based productions",
    text:"There is growing demand for Biofuel as it is safe alternative to traditional fuel."
  },

  {id:2,
    icon:<TbSpiral />,
    heading:"Employment opportunities",
    text:"Join, Work and Succeed."
  },

  {id:3,
    icon:<TbSpiral />,
    heading:"85% pollution reduction",
    text:"Go green, Breathe clean."
  },

  {id:4,
    icon:<TbSpiral />,
    heading:"Additional mileage best in quality fuel and GST benefit",
    text:"Fuel for your engine."
  },

  {id:5,
    icon:<TbSpiral />,
    heading:"85% pollution reduction",
    text:"Go green, Breathe clean."
  },
  {id:6,
    icon:<TbSpiral />,
    heading:"85% pollution reduction",
    text:"Go green, Breathe clean."
  }
]
}

export const servicedata = {
  title1:"Our Services",
  title2:"We are best service Provider for Petrolium",
para: "We are best service Provider for We are best service Provider for We are best service Provider for service Provider for Petrolium",
services:[
  {
    id: 1,
    title: "Service1",
    text:
      "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
    icon: <LiaChargingStationSolid />,
    img: banner,
    slug:"#"

  },
  {
    id: 2,
    title: "Service2",
    text:
    "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
    icon: <PiPlugChargingFill />
    ,
    img: banner,
    slug:"#"

  },
  {
    id: 3,
    title: "Service3",
    text:
    "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
    icon: <MdWorkHistory /> ,
    img: banner,
    slug:"#"
  },
  {
    id: 4,
    title: "Service4",
    text:
    "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
    icon: <IoHome />      ,
    img: banner,
    slug:"#"

  },
  {
    id: 5,
    title: "Service5",
    text:
    "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
    icon: <FaRoadCircleCheck />,
    img: banner,
    slug:"#"

  },
  {
    id: 6,
    title: "Service6",
    text:
    "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
    icon: <SiTestcafe />      ,
    img: banner,
    slug:"#"

  },
]};

export const footer = {
    logo: logo2,
    text: "lorem At Bharat Ecofuels, we are revolutionizing the biofuel industry and transforming the lives of millions of",
  
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com//",
      linkedin: "https://www.linkedin.com/school//",
      youtube: "https://www.youtube.com/c/",
    },
    copyrightText: "Copyrights © 2024 . Designed and Manage by ",
   
    list2: {
      title: "Explore",
      links: [ { id: 1, label: "About", href: "about" },
      { id: 2, label: "Services & Techs", href: "services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "blogs" },
      { id: 5, label: "Contact Us", href: "contact-us" },],
    },
    
    newLetter: {
      title: "Contact Us",
      description: "Subscribe to our newsletter to get latest news and updates.",
    },
  };