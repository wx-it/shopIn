import "./seasons.css";
import { motion } from "framer-motion";

const Seasons = () => {
  return (
    <section className="seasons">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "linear" }}
      >
        ELEVATING COMFORT WITH EVERY CURVE
      </motion.h2>
      <div>
        <div>
          <img src="/images/model.jpg" alt="" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            Winter
          </motion.p>
        </div>
        <div>
          <img src="/images/model.jpg" alt="" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            Summer
          </motion.p>
        </div>
        <div>
          <img src="/images/model.jpg" alt="" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            Fall
          </motion.p>
        </div>
        <div>
          <img src="/images/model.jpg" alt="" />
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
