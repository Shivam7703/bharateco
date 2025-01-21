import { about, banner, car, cl1, logo2, sec1 } from "@/assets";
import {
  FaBullseye,
  FaEye,
  FaMapLocationDot,
  FaRoadCircleCheck,
} from "react-icons/fa6";
import { GiDeadEye } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { LiaBullseyeSolid, LiaChargingStationSolid } from "react-icons/lia";
import { MdAttachEmail, MdWifiCalling3, MdWorkHistory } from "react-icons/md";
import { PiPlugChargingFill } from "react-icons/pi";
import { SiTerraform, SiTestcafe } from "react-icons/si";
import { TbRecharging, TbSpiral } from "react-icons/tb";
import { VscActivateBreakpoints } from "react-icons/vsc";

// homepage
export const navItemsArray = [
  { id: 1, label: "About", href: "/about" },
  {
    id: 2,
    label: "Services",
    href: "/services",
    subNav: [
      {
        id: 1,
        label: "Bio Diesel",
        href: "/services/service1",
      },
      {
        id: 2,
        label: "Bio Petrol",
        href: "/services/service2",
      },
      {
        id: 3,
        label: "Bio CNG",
        href: "/services/service3",
      },
    ],
  },
  { id: 3, label: "Our Outlets", href: "/our-outlets" },
  { id: 4, label: "Price Comparison", href: "/pricing" },
  { id: 5, label: "Blogs", href: "/blogs" },
  { id: 6, label: "Contact Us", href: "/contact-us" },
];

export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "Welcome to AI Eco Fuel",
    title1: "Transforming India's Future with",
    title2: "AI Ecofuels",

    btntext: "Explore More",
    href: "/",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: banner,
    welcome: "Welcome to AI Eco Fuel2",
    title1: "Transforming India's Future with",
    title2: "AI Ecofuels2",

    btntext: "Contact Us",
    href: "/",
  },
];

export const aboutdata = {
  img: about,
  title1: "About Us",
  title2: "Transforming India's Future with AI Ecofuels",
  para:
    "At AI Ecofuels, we are revolutionizing the biofuel industry and transforming the lives of millions of farmers and people across India. By promoting biofuel production, we are creating opportunities and employment for individuals in even the most rural areas.",
  title3: "Our Vision and Commitment",
  vision: [
    {
      id: 1,
      heading: "Empowering Rural Communities",
      text: "Generating jobs and boosting local economies.",
    },
    {
      id: 2,
      heading: "Sustainable Energy Solutions",
      text: "Leading the way in eco-friendly biofuel production.",
    },
    {
      id: 3,
      heading: "Trusted Partnerships",
      text:
        "Valuing our distributors, clients, customers, associates, employees, and well-wishers.",
    },
  ],
  title4: "Join us at AI Ecofuels and be part of the change!",
};

export const benefit = {
  title1: "Certified By Government Of India",
  title2: "Benefits of Biofuels",
  para:
    "Biofuels reduce carbon emissions, promote energy security, create jobs, support rural economies, and decrease reliance on fossil fuels. Embrace renewable energy for a sustainable and eco-friendly future.",
  img: car,
  points: [
    {
      id: 1,
      icon: <TbSpiral />,
      heading: "INDIA based productions",
      text:
        "There is growing demand for Biofuel as it is safe alternative to traditional fuel.",
    },

    {
      id: 2,
      icon: <TbSpiral />,
      heading: "Employment opportunities",
      text: "Join, Work and Succeed.",
    },

    {
      id: 3,
      icon: <TbSpiral />,
      heading: "85% pollution reduction",
      text: "Go green, Breathe clean.",
    },

    {
      id: 4,
      icon: <TbSpiral />,
      heading: "Additional mileage best in quality fuel and GST benefit",
      text: "Fuel for your engine.",
    },

    {
      id: 5,
      icon: <TbSpiral />,
      heading: "85% pollution reduction",
      text: "Go green, Breathe clean.",
    },
    {
      id: 6,
      icon: <TbSpiral />,
      heading: "85% pollution reduction",
      text: "Go green, Breathe clean.",
    },
  ],
};

export const servicedata = {
  title: "Our services",
  subtitle:"Find Our Best Services",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "services",
  img: banner,
  services: [
    {
      id: 1,
      title: "Service1",
      text:
        "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
      icon: <LiaChargingStationSolid />,
      img: banner,
      slug: "/services/service1",
      details:{
        title1:"Service1",
        para1: "Biocoal, also known as torrefied biomass or black Biomass Briquette/pellets, is a renewable energy product obtained by thermally treating biomass, such as wood chips, straw, or other plant material, in the absence of air. The process, known as torrefaction, involves heating the biomass at temperatures between 200-300°C in an oxygen-free environment, which causes the material to release water, volatile organic compounds, and other impurities, leaving behind a dry, high-energy-density product that is more resistant to water, rot, and combustion than raw biomass.",
        img1:banner,
        para2:"Biocoal has several advantages over traditional biomass fuels, including higher energy content, lower moisture content, and improved handling and storage properties. It can be used as a direct replacement for coal in power plants, industrial boilers, and other combustion processes, without the need for significant modifications to existing infrastructure. Biocoal also has a lower carbon footprint than fossil fuels, as it is made from renewable biomass, and can help to reduce greenhouse gas emissions and mitigate climate change.",
        title2:"IS THERE A FUTURE BEYOND COAL?",
        para3:"In the fast-developing world, coal is the largest contributor to the human-made increase of CO2 in the atmosphere. Its environmental impact spreads far across many areas, from air pollution, water, and waste management, up to the increased land uses.    In the face of greenhouse gas emissions, industries are seeking a new way to manage their environmental impact and reduce the carbon footprint of production. In this article, we are focusing on the biocoal as an emerging trend to replace the fossil coals in the industry, and specifically in the metallurgic industry.",
        para4:"The demand for biocoal in India is expected to grow in the coming years, driven by several factors including increasing energy demand, rising concerns about air pollution, and government policies promoting the use of renewable energy sources. According to a report by the International Energy Agency, India’s demand for biomass-based electricity is expected to increase from 80 TWh in 2019 to 224 TWh in 2040.",
        para5:"However, the growth of the biocoal industry in India will depend on several factors, including the availability of biomass feedstock’s, the development of efficient and cost-effective production technologies, and the establishment of a supportive policy and regulatory environment. Nevertheless, biocoal has the potential to play an important role in India’s energy mix, and its demand is likely to increase in the years to come.",
        img2:banner,
para6:"We always perform scheduled checks on your charging stations to ensure that we pick any signs of problems before they assume huge proportions. Every piece of wiring and mechanical structure is checked by our trained technical personnel to verify optimal performance. That is why, in case any repair work is necessary, we take care of it in order to avoid any interruption of services. ",
para7:"inspection and repair, we issue periodic updates or recommendations regarding the condition of your charging stations. We aim to be your operations support so that you can focus on what concerns your enterprise. When you work with us, we’ll ensure that the maintenance of your EV charging stations is efficient and timely, ensuring that our clients’ customers get the convenient and quality service they need for the growth of green mobility."
      }
    },
    {
      id: 2,
      title: "Service2",
      text:
        "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
      icon: <PiPlugChargingFill />,
      img: banner,
      slug: "/services/service2",
      details:{
        title1:"Service2",
        para1: "Biocoal, also known as torrefied biomass or black Biomass Briquette/pellets, is a renewable energy product obtained by thermally treating biomass, such as wood chips, straw, or other plant material, in the absence of air. The process, known as torrefaction, involves heating the biomass at temperatures between 200-300°C in an oxygen-free environment, which causes the material to release water, volatile organic compounds, and other impurities, leaving behind a dry, high-energy-density product that is more resistant to water, rot, and combustion than raw biomass.",
        img1:banner,
        para2:"Biocoal has several advantages over traditional biomass fuels, including higher energy content, lower moisture content, and improved handling and storage properties. It can be used as a direct replacement for coal in power plants, industrial boilers, and other combustion processes, without the need for significant modifications to existing infrastructure. Biocoal also has a lower carbon footprint than fossil fuels, as it is made from renewable biomass, and can help to reduce greenhouse gas emissions and mitigate climate change.",
        title2:"IS THERE A FUTURE BEYOND COAL?",
        para3:"In the fast-developing world, coal is the largest contributor to the human-made increase of CO2 in the atmosphere. Its environmental impact spreads far across many areas, from air pollution, water, and waste management, up to the increased land uses.    In the face of greenhouse gas emissions, industries are seeking a new way to manage their environmental impact and reduce the carbon footprint of production. In this article, we are focusing on the biocoal as an emerging trend to replace the fossil coals in the industry, and specifically in the metallurgic industry.",
        para4:"The demand for biocoal in India is expected to grow in the coming years, driven by several factors including increasing energy demand, rising concerns about air pollution, and government policies promoting the use of renewable energy sources. According to a report by the International Energy Agency, India’s demand for biomass-based electricity is expected to increase from 80 TWh in 2019 to 224 TWh in 2040.",
        para5:"However, the growth of the biocoal industry in India will depend on several factors, including the availability of biomass feedstock’s, the development of efficient and cost-effective production technologies, and the establishment of a supportive policy and regulatory environment. Nevertheless, biocoal has the potential to play an important role in India’s energy mix, and its demand is likely to increase in the years to come.",
        img2:banner,
para6:"We always perform scheduled checks on your charging stations to ensure that we pick any signs of problems before they assume huge proportions. Every piece of wiring and mechanical structure is checked by our trained technical personnel to verify optimal performance. That is why, in case any repair work is necessary, we take care of it in order to avoid any interruption of services. ",
para7:"inspection and repair, we issue periodic updates or recommendations regarding the condition of your charging stations. We aim to be your operations support so that you can focus on what concerns your enterprise. When you work with us, we’ll ensure that the maintenance of your EV charging stations is efficient and timely, ensuring that our clients’ customers get the convenient and quality service they need for the growth of green mobility."
      }
    },
    {
      id: 3,
      title: "Service3",
      text:
        "Bioethanol, commonly referred to as biofuel or simply ethanol, is a type of renewable fuel that is produced from biomass, typically crops like corn, sugarc.",
      icon: <MdWorkHistory />,
      img: banner,
      slug: "/services/service3",
      details:{
        title1:"Service3",
        para1: "Biocoal, also known as torrefied biomass or black Biomass Briquette/pellets, is a renewable energy product obtained by thermally treating biomass, such as wood chips, straw, or other plant material, in the absence of air. The process, known as torrefaction, involves heating the biomass at temperatures between 200-300°C in an oxygen-free environment, which causes the material to release water, volatile organic compounds, and other impurities, leaving behind a dry, high-energy-density product that is more resistant to water, rot, and combustion than raw biomass.",
        img1:banner,
        para2:"Biocoal has several advantages over traditional biomass fuels, including higher energy content, lower moisture content, and improved handling and storage properties. It can be used as a direct replacement for coal in power plants, industrial boilers, and other combustion processes, without the need for significant modifications to existing infrastructure. Biocoal also has a lower carbon footprint than fossil fuels, as it is made from renewable biomass, and can help to reduce greenhouse gas emissions and mitigate climate change.",
        title2:"IS THERE A FUTURE BEYOND COAL?",
        para3:"In the fast-developing world, coal is the largest contributor to the human-made increase of CO2 in the atmosphere. Its environmental impact spreads far across many areas, from air pollution, water, and waste management, up to the increased land uses.    In the face of greenhouse gas emissions, industries are seeking a new way to manage their environmental impact and reduce the carbon footprint of production. In this article, we are focusing on the biocoal as an emerging trend to replace the fossil coals in the industry, and specifically in the metallurgic industry.",
        para4:"The demand for biocoal in India is expected to grow in the coming years, driven by several factors including increasing energy demand, rising concerns about air pollution, and government policies promoting the use of renewable energy sources. According to a report by the International Energy Agency, India’s demand for biomass-based electricity is expected to increase from 80 TWh in 2019 to 224 TWh in 2040.",
        para5:"However, the growth of the biocoal industry in India will depend on several factors, including the availability of biomass feedstock’s, the development of efficient and cost-effective production technologies, and the establishment of a supportive policy and regulatory environment. Nevertheless, biocoal has the potential to play an important role in India’s energy mix, and its demand is likely to increase in the years to come.",
        img2:banner,
para6:"We always perform scheduled checks on your charging stations to ensure that we pick any signs of problems before they assume huge proportions. Every piece of wiring and mechanical structure is checked by our trained technical personnel to verify optimal performance. That is why, in case any repair work is necessary, we take care of it in order to avoid any interruption of services. ",
para7:"inspection and repair, we issue periodic updates or recommendations regarding the condition of your charging stations. We aim to be your operations support so that you can focus on what concerns your enterprise. When you work with us, we’ll ensure that the maintenance of your EV charging stations is efficient and timely, ensuring that our clients’ customers get the convenient and quality service they need for the growth of green mobility."
      }
    },
 
  ],
};

export const blogData = {
  title1: "Blogs & News",
  title2: "Stay Updated With our Latest News And Blogs",
  para:
    "We are best service Provider for We are best service Provider for We are best service Provider for service Provider for Petrolium",
  blogs: [
    {
      id: 1,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "05/09/23",
      img: banner,
    },
    {
      id: 2,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "15/12/23",
      img: banner,
    },
    {
      id: 3,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "05/09/24",
      img: banner,
    },
    {
      id: 4,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "07/03/24",
      img: banner,
    },
    {
      id: 5,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "15/09/24",
      img: banner,
    },
    {
      id: 6,
      title: "Learn more about the Best Electric Cars and Charging Time",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      date: "01/07/24",
      img: banner,
    },
  ],
};

export const testimonialData = {
  title1: "Testimonial",
  title2: "What our client Says",
  para:
    "We are best service Provider for We are best service Provider for We are best service Provider for service Provider for Petrolium",
  testimonials: [
    {
      id: 1,
      title: "R.M. Mathur",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
    {
      id: 2,
      title: "Shivam Goyal",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
      img: cl1,
    },
  ],
};

export const whychooseData = {
  title2: "Why Choose AI Eco Fuels",

  data: [
    {
      id: 1,
      icon: <SiTerraform />,
      title: "EV Site Identification",
      text:
        "Our surveys help determine site conditions for the purpose of meeting technical and regulatory expectations.",
    },
    {
      id: 2,
      icon: <TbRecharging />,
      title: "EV Location Survey",
      text:
        "Our surveys help determine site conditions for the purpose of meeting technical and regulatory expectations.",
    },
    {
      id: 3,
      title: "Installation and Activation",
      icon: <VscActivateBreakpoints />,
      text:
        "This is to mean that our technicians have the right to handle everything from installation to activation to enable charging stations to run as from the inception.",
    },
    {
      id: 4,
      title: "Charging Station Maintenance",
      icon: <GrVmMaintenance />,
      text:
        "Our surveys help determine site conditions for the purpose of meeting technical and regulatory expectations.",
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "lorem At AI Ecofuels, we are revolutionizing the biofuel industry and transforming the lives of millions of",

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
    links: [
      { id: 1, label: "About", href: "about" },
      { id: 2, label: "Services & Techs", href: "services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "blogs" },
      { id: 5, label: "Contact Us", href: "contact-us" },
    ],
  },

  newLetter: {
    title: "Contact Us",
    description: "Subscribe to our newsletter to get latest news and updates.",
  },
};

// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "about-us",
  img: banner,
};

export const aboutsec1 = {
  img: sec1,
  img2: car,
  title1: "About Us",
  title2: "Transforming India's Future ",
  title3: "with AI Ecofuels",
  para:
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  vision: [
    {
      id: 1,
      icon: <GiDeadEye />,
      heading: "Our Vision",
      text:
        "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    },
    {
      id: 2,
      icon: <LiaBullseyeSolid />,
      heading: "Our Mission",
      text:
        "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    },
  ],
  title4: "Join us at AI Ecofuels and be part of the change!",
};

// our outlet

export const outletBanner = {
  title: "Our Outlets",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "about-us",
  img: banner,
};

export const OutletDetails = [
  {
    id: 1,
    name: "Andhra Pradesh",
    cities: [
      {
        id: 1,
        title1: "City1",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 2,
        title1: "City2",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 3,
        title1: "City3",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },
    ],
  },

  {
    id: 2,
    name: "Arunachal Pradesh",
    cities: [
      {
        id: 1,
        title1: "City1",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 2,
        title1: "City2",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 3,
        title1: "City3",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },
    ],
  },

  {
    id: 3,
    name: "Assam",
    cities: [
      {
        id: 1,
        title1: "City1",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 2,
        title1: "City2",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 3,
        title1: "City3",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },
    ],
  },

  {
    id: 4,
    name: "Bihar",
    cities: [
      {
        id: 1,
        title1: "City1",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 2,
        title1: "City2",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 3,
        title1: "City3",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },
    ],
  },

  {
    id: 5,
    name: "Chhattisgarh",
    cities: [
      {
        id: 1,
        title1: "City1",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 2,
        title1: "City2",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 3,
        title1: "City3",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },
    ],
  },

  {
    id: 6,
    name: "Goa",
    cities: [
      {
        id: 1,
        title1: "City1",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 2,
        title1: "City2",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },

      {
        id: 3,
        title1: "City3",
        text1:
          "We assist in determining areas on the roads most suitable for setting up the EV charging station in order to be easily located by users. We place emphasis on selecting the optimum site in which to place EV charging stations to ensure the close vicinity of the users. This is good because if a driver gets into the car and needs to recharge the car soon, then he or she will be able to easily locate a charging station.",
        img: banner,
        text2:
          "Our team analyzes the  traffic and demand and makes conscious decisions about the patterns. and other features that make up the location to decide the best places to set the infrastructure. Such a placement makes use of figures to ascertain that the charging stations are positioned favorably in a way that they will benefit the most drivers. ",
      },
    ],
  },
];

// blog Page
export const blogBanner = {
  title: "Blogs & News",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "blogs",
  img: banner,
};


// contat Us

export const contactBanner = {
  title: "Contact Us",
  para:
    "lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
  slug: "contact-us",
  img: banner,
};

export const contactsec1 = {
  title: "Contact Us",
  para:
    "Please contact us, We are sure that you can receive our reply as soon as possible.",
  detail: [
    {
      id: 1,
      icon: <MdWifiCalling3 />,
      title: "Call Us",
      text: "(+91) 1800-214-122",
      slug: "tel:+911800-214-122",
    },
    {
      id: 2,
      icon: <MdAttachEmail />,
      title: "Email Us",
      text: "sunrays@example.com",
      slug: "mailto:sunrays@example.com",
    },
    {
      id: 3,
      icon: <FaMapLocationDot />,
      title: "Address",
      text: "lorem Consectetur adipiscing elit.",
      slug: "#",
    },
  ],
};
