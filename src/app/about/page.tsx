import Section1 from "@/components/about/section1";
import Banner from "@/components/global/banner";
import { aboutBanner,aboutsec1 } from "@/data/homeData";


export default function About() {
  return (
    < >
<Banner img ={aboutBanner?.img}
title={aboutBanner.title}
para={aboutBanner.para}
slug={aboutBanner.slug}/>

<Section1 aboutdata={aboutsec1}/>
  </>
  );
}
