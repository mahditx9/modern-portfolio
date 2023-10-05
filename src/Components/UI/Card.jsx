/* eslint-disable react/prop-types */
import styles from "../../styles";
import Button from "./Button";
import { motion } from "framer-motion";
function Card({ service: { title, description, img }, index }) {
  return (
    <motion.div
      initial={
        index % 2 == 0 ? { x: 400, opacity: 0 } : { x: -400, opacity: 0 }
      }
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className=" rounded-[15px] px-12 py-6 flex flex-col items-center ss:items-start card "
    >
      <img src={img} alt="me" className="w-full max-h-64 object-cover" />
      <div className="mt-10 text-center ss:text-start">
        <h2 className={styles.heading2}>{title}</h2>
        <p className={`${styles.paragraph} my-4`}>
          {description.slice(0, 25)}...
        </p>
        <Button>Show More</Button>
      </div>
    </motion.div>
  );
}

export default Card;
