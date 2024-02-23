import Description from "./sections/description/Description";
import Header from "./sections/header/Header";
import Seasons from "./sections/seasons/Seasons";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Collection from "./sections/collection/Collection";
import Footer from "./sections/footer/Footer";
//import { LocomotiveScrollProvider } from "react-locomotive-scroll";
//import { useLocomotiveScroll } from "react-locomotive-scroll";
gsap.registerPlugin(ScrollTrigger);

function App() {
  // const { scroll } = useLocomotiveScroll();
  useLayoutEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".wrapper",
    });
  }, []);

  const scrollRef = useRef(null);

  return (
    // <LocomotiveScrollProvider
    //   el={scrollRef}
    //   options={{
    //     lock: true, // Prevent native scrolling until animations finish
    //     smooth: true, // Maintain smooth scrolling when unlocked
    //     // Other options as needed: https://locomotivejs.com/scroll-options
    //   }}
    //   onLocationChange={(scroll) =>
    //     scroll.scrollTo(0, { duration: 0, disableLerp: true })
    //   }
    // >
    <div className="wrapper" ref={scrollRef}>
      <Header />
      <Seasons />
      <Collection />
      <Description />
      <Footer />
    </div>
    //</LocomotiveScrollProvider>
  );
}

export default App;
