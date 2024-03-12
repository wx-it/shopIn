import "./description.css";
import gsap from "gsap";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  return (
    <div className="description">
      <div>
        <div>
          <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{
                 type: "spring",
                 stiffness: 50,
                 restDelta: 0.001,
               }}
          >
            WHO ARE WE ?
          </motion.h2>
        </div>
        <img className="mobile" src="/images/mobile/description.webp" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
          ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>

      <img className="desktop" src="/images/description.webp" alt="" />
    </div>
  );
};

export default Description;
