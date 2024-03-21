import React from "react";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Hero from "./Hero";
import Features from "./Features";
import FloatingFooter from "./FloatingFooter";
import Perks from "./Perks";
import Advantages from "./Advantages";
import Commitment from "./Commitment";
import TrustCard from "./TrustCard";
import Guidelines from "./Guidelines";
import DownloadCard from "./DownloadCard";
import DesktopFloatingFooter from "./DesktopFloatingFooter";

const HomePageComp = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Perks />
      <Advantages />
      <Commitment />
      <Guidelines />
      <DownloadCard />
      <TrustCard />
      <Footer />
      <FloatingFooter />
      <DesktopFloatingFooter />
    </div>
  );
};

export default HomePageComp;
