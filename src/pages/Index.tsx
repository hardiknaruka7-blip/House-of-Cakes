import { SmoothScroll } from "@/components/cinematic/SmoothScroll";
import { Cursor } from "@/components/cinematic/Cursor";
import { Atmosphere } from "@/components/cinematic/Atmosphere";
import { Navbar } from "@/components/cinematic/Navbar";
import { PersistentProduct } from "@/components/cinematic/PersistentProduct";
import { Hero } from "@/components/cinematic/Hero";
import { Story } from "@/components/cinematic/Story";
import { Menu } from "@/components/cinematic/Menu";
import { Ambience } from "@/components/cinematic/Ambience";
import { Experience } from "@/components/cinematic/Experience";
import { Voices } from "@/components/cinematic/Voices";
import { Reserve } from "@/components/cinematic/Reserve";
import { Footer } from "@/components/cinematic/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SmoothScroll />
      <Cursor />
      <Atmosphere />
      <Navbar />
      <PersistentProduct />
      <Hero />
      <Story />
      <Menu />
      <Ambience />
      <Experience />
      <Voices />
      <Reserve />
      <Footer />
    </main>
  );
};

export default Index;
