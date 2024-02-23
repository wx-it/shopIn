import "./collection.css";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ImageSlider from "../../components/ImageSlider";
gsap.registerPlugin(ScrollTrigger);
const Collection = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(slider.current.children);
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: 1,
          end: () => `+=${component.current.offsetWidth}`,
        },
      });
    }, component);
    return () => ctx.revert();
  }, [component, slider]);

  return (
    <div ref={component} className="collection">
      <div className="fixed">
        <motion.h2
         initial={{ y: 50 }}
         whileInView={{ y: 0 }}
         transition={{ duration: 1, ease: "linear" }}
        >
          our new collection is here!
        </motion.h2>
      </div>
     <ImageSlider slider={slider} />
    </div>
  );
};

export default Collection;
