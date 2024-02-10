import "./collection.css";
import { motion } from "framer-motion";
const Collection = () => {
  return (
    <div className="collection">
      <div>
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          our new collection is here!
        </motion.h2>
      </div>
      <div>
        <motion.img
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          src="/images/model.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Collection;
