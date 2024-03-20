import React from "react";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Hero from "./Hero";
import Features from "./Features";
import FloatingFooter from "./FloatingFooter";

const HomePageComp = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
      <FloatingFooter />
    </div>
  );
};

export default HomePageComp;
