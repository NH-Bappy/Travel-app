import Hero from "@/components/Hero";
import TopDestinations from "@/components/TopDestinations";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import SafetyBanner from "@/components/SafetyBanner";
import Testimonials from "@/components/Testimonials";
import BlogNews from "@/components/BlogNews";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <>
      <Hero />
      <TopDestinations />
      <Camp />
      <Guide />
      <Features />
      <SafetyBanner />
      <Testimonials />
      <BlogNews />
      <GetApp />
    </>
  );
}
