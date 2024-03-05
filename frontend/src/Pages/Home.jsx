import React from "react";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Qualities from "../components/Qualities";
import Menu from "../components/Menu";
import WhoAreWe from "../components/WhoAreWe";
import Team from "../components/Team";
import Reservation from "../components/Reservation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
