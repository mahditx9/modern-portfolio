/* eslint-disable react/no-unescaped-entities */
import { services } from "../constants";
import styles from "../styles";
import Card from "./UI/Card";
import { motion } from "framer-motion";
function Services() {
  return (
    <section className={styles.section_layout} id="Services">
      <div className="w-full h-full">
        <h1 className={`${styles.main_heading}`}>Services</h1>
        {/* PORTFOLIO CARDS */}
        <div
          className={`w-full relative grid ss:grid-cols-2 grid-flow-row gap-x-4 gap-y-3 ${styles.marginTop}`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "circInOut", duration: 0.5 }}
            className="ss:inline-block hidden sm:w-96 sm:h-96 ss:w-72 ss:h-72 w-40 h-40 xl:w-[650px] xl:h-[650px] layout__shadow absolute  ss:left-[20%] ss:top-[28%] sm:left-[15%] md:left-[20%] sm:top-[25%] lg:left-[30%] xl:left-[20%] xl:top-[13%]"
          />
          {services.map((service, index) => (
            <Card key={service.id} service={service} index={index + 1} />
          ))}
        </div>
        {/* PORTFOLIO CARDS */}
      </div>
    </section>
  );
}

export default Services;
