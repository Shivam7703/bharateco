import Section1 from "@/components/about/section1";
import Section2 from "@/components/about/section2";
import Banner from "@/components/global/banner";
import Testimonials from "@/components/home/testimonial";
import Outlet from "@/components/outlet/outlet";
import {outletBanner } from "@/data/homeData";


export default function About() {
  return (
    < >
<Banner img ={outletBanner?.img}
title={outletBanner.title}
para={outletBanner.para}
slug={outletBanner.slug}/>


<Outlet/>
<Testimonials/>
  </>
  );
}
