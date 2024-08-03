import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
<main className=" main-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
<HeroSection />
<FeaturedCourses/>
<WhyChooseUs/>
<TestimonialCard/>
</main>
  );
}
