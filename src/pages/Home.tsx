import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Hero,
  BannerSection,
  AboutSection,
  ValuesSection,
  ProgramsSection,
  DonationCards,
  TestimonialSection,
  LocationSection,
  ContactSection,
} from "../components/HomeSections";

function Home() {
  return (
    <>
      <Header />
    
      <Hero />

      <AboutSection />

      <ValuesSection />

      <ProgramsSection />

      <DonationCards />

      <BannerSection />

      <TestimonialSection />

      <ContactSection />

      <LocationSection />


      <Footer />
    </>
  );
}

export default Home;

