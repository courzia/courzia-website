import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";

const AppHome = () => {
  // const { progress } = useProgress();
  const [showFallback, setShowFallback] = useState(true);



  return (
    <ReactLenis root className="relative w-screen min-h-screen bg-black">
      {/* Main Content */}
      <div
        className="transition-opacity duration-1000"
        style={{
          overflowX: 'clip',
          maxWidth: '100vw',
        }}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default AppHome;
