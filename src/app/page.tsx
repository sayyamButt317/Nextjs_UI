import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import LandingDesign from "@/components/landingDesignImage";


export default function Home() {
  return (
<main className=" main-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
{/* <HeroSection /> */}
<Instructor/>
<LandingDesign/>
<FeaturedCourses/>
<WhyChooseUs/>
<TestimonialCard/>
<UpcomingWebinars/>
<Instructor/>

</main>
  );
}
