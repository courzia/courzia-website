import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "WIN",
    "Precision",
    "PREDICTION",
    "Collaboration",
    "Excellence",
  ];
  // useGSAP(() => {
  //   gsap.to(containerRef.current, {
  //     scrollTrigger: {
  //       // trigger: containerRef.current,
  //       // start: "center center",
  //       // end: "+=800 center",
  //       // scrub: 0.5,
  //       pin: true,
  //       pinSpacing: true,
  //       markers: false,
  //     },
  //   });
  // }, []);



  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center-safe min-h-screen gap-12  "
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive mt-20">
        <p>
          “Decode maths & patterns <br />
          {/* <span className="italic -normal">& patterns </span> */}
          <span className="font-normal">  transforming calculated risks into </span>
          <br />
          <span className="text-gold">consistent victories.</span>“
        </p>

      </div>
    </section>
  );
};

export default ContactSummary;
