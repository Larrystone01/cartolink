import Header from "@/components/header";
import HeroCarousel from "@/components/Hero";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroCarousel />
        <FeaturesSection />
        <Footer />
      </div>
    </>
  );
}
