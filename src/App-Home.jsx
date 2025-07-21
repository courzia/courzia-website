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



  // <ReactLenis root className="relative w-screen min-h-screen bg-black">
  //* </ReactLenis> */}
  return (
    <div
      className="transition-opacity duration-1000"
      style={{
        overflowX: 'clip',
        maxWidth: '100vw',
      }}
    >
      <div className="fixed top-2 left-4 sm:left-8 z-100 ">
        <img
          src="/images/courzia-logo.png"
          className="h-12 sm:h-18"
        />
      </div>
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </div>
  );
};

export default AppHome;
