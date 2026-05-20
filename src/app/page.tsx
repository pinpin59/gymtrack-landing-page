import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Container>
        <Benefits />

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
