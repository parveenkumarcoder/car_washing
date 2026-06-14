import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Packages } from "@/components/site/Packages";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AquaDrive — Premium Mobile Car Wash & Detailing" },
      { name: "description", content: "Showroom shine delivered to your driveway. Eco-friendly mobile car wash, ceramic coating, and full detailing by trained pros." },
      { property: "og:title", content: "AquaDrive — Premium Mobile Car Wash" },
      { property: "og:description", content: "Book a premium mobile car wash in under 60 seconds. Eco-friendly, doorstep, showroom finish." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Packages />
      <Process />
      <Gallery />
      <Testimonials />
      <Booking />
      <FAQ />
      <Footer />
    </main>
  );
}
