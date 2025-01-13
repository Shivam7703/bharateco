import Section1 from "@/components/about/section1";
import Section2 from "@/components/about/section2";
import Banner from "@/components/global/banner";
import Testimonials from "@/components/home/testimonial";
import Outlet from "@/components/outlet/outlet";
import { aboutBanner,aboutsec1 } from "@/data/homeData";


export default function About() {
  return (
    < >
<Banner img ={aboutBanner?.img}
title={aboutBanner.title}
para={aboutBanner.para}
slug={aboutBanner.slug}/>


<Outlet/>
<Testimonials/>
  </>
  );
}
