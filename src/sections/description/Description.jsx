import "./description.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const ref = useRef();
  const line = useRef();
  const section = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const el = ref.current;
      gsap.to(el, {
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",

        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
      return () => ctx.revert();
    });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const lineRef = line.current;
      gsap.from(lineRef, {
        scaleX: 0,
        duration: 2,
        transformOrigin: "left center",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: lineRef,
          start: "top 90%",
          end: "bottom",
          toggleActions: "play none none reverse",
        },
      });
      return () => ctx.revert();
    });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sectionRef = section.current;
      gsap.to(sectionRef, {
        scrollTrigger: sectionRef, // start the animation when ".section" enters the viewport (once)
        backgroundColor: "#7c151a",
      });
      return () => ctx.revert();
    });
  }, []);

  return (
    <div className="description" ref={section}>
      <div>
        <div>
          <h2>ELEVATING COMFORT WITH EVERY CURVE</h2>
          <div ref={line} className="line"></div>
        </div>
        <img className="mobile" src="/images/model.jpg" alt="" />
        <p ref={ref}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>

      <img className="desktop" src="/images/model.jpg" alt="" />
    </div>
  );
};

export default Description;
