/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "../../styles";
import { motion } from "framer-motion";
function Skill({ skill: { title, level, Icon }, index }) {
  return (
    <motion.div
      className={`flex z-40 ss:flex-row flex-col gap-y-7  items-center gap-3`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index / 25 + 0.1, duration: 0.4 }}
    >
      <Icon className={`text-5xl  ss:text-6xl sm:text-7xl text-[#fff]`} />
      <div className="flex flex-row items-center justify-between">
        <h2 className={`${styles.heading2} whitespace-nowrap`}>{title}</h2>
        <p
          className={`${styles.paragraph} font-bold ss:mb-8 mb-0 ss:ml-2 ml-0 px-2 py-1 text-primary ss:border-[1px] ss:rounded-full ss:border-purple-50`}
        >
          {level}%
        </p>
      </div>
    </motion.div>
  );
}

export default Skill;
