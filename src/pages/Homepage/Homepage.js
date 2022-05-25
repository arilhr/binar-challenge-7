import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { NavbarDefault } from "../../components/Navbar/NavbarDefault";
import { OurService } from "../../components/OurService/OurService";
import { PopularCar } from "../../components/PopularCar/PopularCar";
import { WhyUs } from "../../components/WhyUs/WhyUs";

export const Homepage = () => {
  return (
    <>
      <NavbarDefault />
      <div className="home">
        <HeroBanner />
        <OurService />
        <WhyUs />
        <PopularCar />
        <Footer />
      </div>
    </>
  );
};
