import { about, banner, logo2 } from "@/assets";
import { img } from "motion/react-client";

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