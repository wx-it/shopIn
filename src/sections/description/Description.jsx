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
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "linear" }}
          >
            WHO ARE WE ?
          </motion.h2>
        </div>
        <img className="mobile" src="/images/model.jpg" alt="" />
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

      <motion.img
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
        className="desktop"
        src="/images/description.jpg"
        alt=""
      />
    </div>
  );
};

export default Description;
