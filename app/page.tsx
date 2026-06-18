import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TourCategories from "@/components/TourCategories";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <TourCategories />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
