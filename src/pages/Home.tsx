import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Hero,
  BannerSection,
  ValuesSection,
  ProgramsSection,
  //DonationCards,
  LocationSection,
  ContactSection,
} from "../components/HomeSections";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header />

      <Hero />

      

      <ProgramsSection />

      <ValuesSection />

      {/*<DonationCards */}

      <BannerSection />

      <ContactSection />

      <LocationSection />

      <Footer />
    </>
  );
}

export default Home;