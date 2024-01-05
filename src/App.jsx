import Description from "./sections/description/Description";
import Header from "./sections/header/Header";
import Seasons from "./sections/seasons/Seasons";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
    </div>
  );
}

export default App;
