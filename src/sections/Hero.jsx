import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer, useProgress } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import '../button.css'
import { CONTACT_LINK } from "../constants";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleclick = () => {
    setOpen(!open);
  }

  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `designed to teach you the real mindset, math, and discipline \n behind high-level decision-making in environments.`;

  return (
    <section id="home" className="flex flex-col justify-center  sm:pt-0 sm:justify-end  min-h-screen ">
      <AnimatedHeaderSection
        subTitle={"COURZIA"}
        title={"smart winning formula"}
        text={text}
        tectclasses="backdrop-blur-xl text-black "
        textColor={"text-black"}
        handleclick={handleclick}
        open={open}
      />

      {/* Fallback Image */}
      {!modelLoaded && (
        <div
          className="absolute inset-0 -z-40 flex items-center justify-center overflow-hidden"
          style={{ width: "100vw", height: "100vh" }}
        >
          <img
            src="/images/circle.png"
            alt="Loading preview"
            className="max-w-full max-h-full object-contain opacity-90"
            style={{
              maxWidth: isMobile ? '140%' : '100%',
              height: 'auto'
            }}
          />
        </div>
      )}

      {/* 3D Canvas */}
      <figure
        className={`absolute inset-0 -z-50 transition-opacity duration-1000 ${modelLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ModelLoader onLoad={() => setModelLoaded(true)} />
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            {/* <Planet scale={isMobile ? 0.7 : 1} /> */}
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

// Component to track model loading progress
const ModelLoader = ({ onLoad }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        onLoad();
      }, 300);
    }
  }, [progress, onLoad]);

  return null;
};

export default Hero;

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  tectclasses,
  textColor,
  withScrollTrigger = false,
  handleclick,
  open
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger ? {
        trigger: contextRef.current,
      } : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div className="relative" ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div ref={headerRef} className="flex flex-col justify-center gap-10 pt-16  sm:gap-16 lg:px-20">
          <p className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor} relative`}>
            COURZIA
          </p>
          <div className="px-10 sm:py-0 pt-8 sm:mt-0   bg-clip-text bg-gradient-to-r  from-black  to-gold orange-200 ">
            <h1
              className={`flex flex-col gap-12 uppercase hero-text-responsive sm:gap-16 md:block text-transparent mb-[14px]`}
            >
              {titleParts.map((part, index) => (
                <span key={index}> {part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative  px-10 ${textColor}`}>
        <div className="py-12 lg:px-20 sm:py-16 lg:text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive mb-2  ${textColor}  ${tectclasses}`}
          />
          <div className="relative mt-8  sm:mt-4">
            <button className="aesthetic-shimmer-button-dark bg-gradient-to-br from-black via-black to-black gold/50 text-white h-[3rem]" onClick={handleclick}>
              <div className="h-[5px] w-full absolute bottom-1 bg-gradient-to-r from-transparent via-[#26a7e9] to-transparent " />
              <div className="flex items-center gap-2">
                <p className="text-sm font-light tracking-[0.19rem] uppercase text-whtie -700 flex items-center gap-2 flex gap-2 items-center justify-center">
                  join telegram
                  <div className="flex items-center justify-center">
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)" />
                        <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white" />
                        <defs>
                          <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#37BBFE" />
                            <stop offset="1" stop-color="#007DBB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </>

                  </div>
                </p>
              </div>
              {open &&
                <div className="fixed -top-[260px] lg:-top-[268px]  rounded-lg bg-[#e5e5e0]  h-[250px]  lg:h-[265px] overflow-hidden p-[3px] ">
                  <div className=" red-100 h-full rounded-lg aesthetic-shimmer-button " >
                    <div className="space-y-5">
                      <p className="font-semibold text-sm text-start ">
                        BOOK , EXCLUSIVE VIDEOS,
                        LIFETIME LOSS RECOVERY TIPS
                        AND MORE—ALL COMPLETELY FREE!
                        HURRY, THIS IS A LIMITED-TIME
                        OFFER!
                      </p>

                      <p className="text-center text-white">
                        <a
                          href={CONTACT_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 bg-black p-4 rounded-md shadow-lg  "
                        >
                          GET YOUR BOOK
                        </a>
                      </p>
                      <h1 className="value-text-responsive text-center text-xs">
                        Read the{" "}
                        <a
                          href="/tnc"
                          className="lg:font-semibold underline"
                        >
                          terms and conditions
                        </a>{" "}
                        before clicking below
                      </h1>
                    </div>
                  </div>
                </div>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


