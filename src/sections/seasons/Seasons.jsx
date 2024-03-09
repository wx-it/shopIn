import "./seasons.css";
import { motion } from "framer-motion";

const Seasons = () => {
  return (
    <section className="seasons">
      <div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "linear" }}
          >
            ELEVATING COMFORT WITH EVERY CURVE
          </motion.h2>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="desktop"
          >
            Explore more
          </motion.button>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </motion.p>
      </div>
      <div>
        <div>
          <motion.img
            className="desktop"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/winter.webp"
            alt=""
          />

          <motion.img
            className="mobile"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/mobile/winter.webp"
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            Winter
          </motion.p>
        </div>
        <div>
          <motion.img
            className="desktop"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/summer.webp"
            alt=""
          />

          <motion.img
            className="mobile"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/mobile/summer.webp"
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            Summer
          </motion.p>
        </div>
        <div>
          <motion.img
            className="desktop"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/fall.webp"
            alt=""
          />

          <motion.img
            className="mobile"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/mobile/fall.webp"
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            Fall
          </motion.p>
        </div>
        <div>
          <motion.img
            className="desktop"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/spring.webp"
            alt=""
          />

          <motion.img
            className="mobile"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            src="/images/mobile/spring.webp"
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            Spring
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Seasons;
