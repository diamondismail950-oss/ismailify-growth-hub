import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyIsmailify } from "@/components/site/WhyIsmailify";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Results } from "@/components/site/Results";
import { Testimonials } from "@/components/site/Testimonials";
import { MeetIsmail } from "@/components/site/MeetIsmail";
import { CallToAction } from "@/components/site/CallToAction";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BRAND, SERVICES, SOCIALS } from "@/lib/site-content";

const TITLE = "ISMAILIFY | Digital Marketing & Brand Growth";
const DESCRIPTION =
  "ISMAILIFY helps businesses build stronger digital brands, reach the right audience, and turn online attention into measurable growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: BRAND.name,
          description: DESCRIPTION,
          founder: { "@type": "Person", name: BRAND.founder, jobTitle: "Digital Marketer" },
          email: BRAND.email,
          telephone: BRAND.phone,
          areaServed: "Worldwide",
          sameAs: SOCIALS.map((s) => s.href),
          makesOffer: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyIsmailify />
        <Process />
        <Portfolio />
        <Results />
        <Testimonials />
        <MeetIsmail />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
