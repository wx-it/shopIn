import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ImageSlider = ({slider}) => {
  return (
    <div ref={slider} className="slider">
      <img src="/images/model.jpg" alt="" className="panel" />
      <img src="/images/model.jpg" alt="" className="panel" />
      <img src="/images/model.jpg" alt="" className="panel" />
      <img src="/images/model.jpg" alt="" className="panel" />
      <img src="/images/model.jpg" alt="" className="panel" />
      <img src="/images/model.jpg" alt="" className="panel" />
    </div>
  );
};

export default ImageSlider;
