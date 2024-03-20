import React from "react";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Hero from "./Hero";
import Features from "./Features";
import FloatingFooter from "./FloatingFooter";
import Perks from "./Perks";
import Advantages from "./Advantages";

const HomePageComp = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Perks />
      <Advantages />
      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default HomePageComp;
