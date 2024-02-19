import Description from "./sections/description/Description";
import Header from "./sections/header/Header";
import Seasons from "./sections/seasons/Seasons";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Collection from "./sections/collection/Collection";
import Footer from "./sections/footer/Footer";
gsap.registerPlugin(ScrollTrigger);

function App() {

  useLayoutEffect(()=>{
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".wrapper",
    });
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Seasons />
      <Description />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
