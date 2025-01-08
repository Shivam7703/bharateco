import AboutSection from "@/components/home/AboutSection";
import Benifit from "@/components/home/benifit";
import Blogs from "@/components/home/blog";
import BannerSlider from "@/components/home/HomeBanner";
import Partner from "@/components/home/partner";
import ServiceSlider from "@/components/home/services";
import Testimonials from "@/components/home/testimonial";
import WhyChoose from "@/components/home/whychoose";


export default function Home() {
  return (
    < >
<BannerSlider/>
<AboutSection/>
<Benifit/>
<Partner/>
<ServiceSlider/>
<Testimonials/>
<WhyChoose/>
<Blogs/>
  </>
  );
}
