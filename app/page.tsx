import HeroSection from "@/sections/HeroSection";
import ChiSonoSection from "@/sections/ChiSonoSection";
import ServiziSection from "@/sections/ServiziSection";
import PercheFidarmiSection from "@/sections/PercheFidarmiSection";
import ContattoSection from "@/sections/ContattoSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChiSonoSection />
      <ServiziSection />
      <PercheFidarmiSection />
      <ContattoSection />
      <Footer />
    </main>
  );
}

