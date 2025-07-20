import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const text = ``;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  useGSAP(() => {
    serviceRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          // Force refresh to recalculate positions after overflow changes
          refreshPriority: -1,
          invalidateOnRefresh: true,
        },
        duration: 1,
        ease: "circ.out",
      });
    });

    // Refresh ScrollTrigger after setup to ensure correct positioning
    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="values" className="min-h-screen bg-black rounded-t-4xl lg:px-20">
      <AnimatedHeaderSection
        subTitle={"What You'll Gain from This Book"}
        title={"VALUES"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={{
            ...(isDesktop
              ? {
                top: `calc(10vh + ${index * 5}em)`,
                marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
              }
              : { top: 0 }),
            // Ensure the sticky elements work with overflow constraints
            position: 'sticky',
            zIndex: servicesData.length + index, // Proper stacking
            // Contain the element within the viewport
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-4xl lg:text-5xl break-words">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty break-words">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`} className="w-full">
                    <h3 className="flex items-start">
                      <span className="mr-12 text-lg text-white/30 flex-shrink-0">
                        0{itemIndex + 1}
                      </span>
                      <span className="break-words flex-1">{item.title}</span>
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;

//
// import { useRef } from "react";
// import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
// import { servicesData } from "../constants";
// import { useMediaQuery } from "react-responsive";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// const Services = () => {
//   const text = ``;
//   const serviceRefs = useRef([]);
//   const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
//   useGSAP(() => {
//     serviceRefs.current.forEach((el) => {
//       if (!el) return;
//
//       gsap.from(el, {
//         y: 200,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//         },
//         duration: 1,
//         ease: "circ.out",
//       });
//     });
//   }, []);
//   return (
//     <section id="services" className="min-h-screen bg-black rounded-t-4xl lg:px-20">
//       <AnimatedHeaderSection
//         subTitle={"What You’ll Gain from This Book"}
//         title={"VALUES"}
//         text={text}
//         textColor={"text-white"}
//         withScrollTrigger={true}
//       />
//       {servicesData.map((service, index) => (
//         <div
//           ref={(el) => (serviceRefs.current[index] = el)}
//           key={index}
//           className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
//           style={
//             isDesktop
//               ? {
//                 top: `calc(10vh + ${index * 5}em)`,
//                 marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
//               }
//               : {
//                 top: 0
//               }
//           }
//         >
//           <div className="flex items-center justify-between gap-4 font-light">
//             <div className="flex flex-col gap-6">
//               <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
//               <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
//                 {service.description}
//               </p>
//               <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
//                 {service.items.map((item, itemIndex) => (
//                   <div key={`item-${index}-${itemIndex}`}>
//                     <h3 className="flex">
//                       <span className="mr-12 text-lg text-white/30">
//                         0{itemIndex + 1}
//                       </span>
//                       {item.title}
//                     </h3>
//                     {itemIndex < service.items.length - 1 && (
//                       <div className="w-full h-px my-2 bg-white/30" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };
//
// export default Services;
