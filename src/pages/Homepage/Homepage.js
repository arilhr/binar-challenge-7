import React from "react";
import { Container } from "react-bootstrap";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { NavbarDefault } from "../../components/Navbar/NavbarDefault";
import { OurService } from "../../components/OurService/OurService";

export const Homepage = () => {
  return (
    <>
      <NavbarDefault />
      <div className="home">
        <HeroBanner />
        <OurService />
      </div>
    </>
  );
};
