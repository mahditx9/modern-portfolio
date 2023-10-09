/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../../styles";
import { SiClickup } from "react-icons/si";
import { motion } from "framer-motion";
function FeaturedCard({ index, featured: { cover, title, description } }) {
  return (
    <div
      className={`relative flex flex-col-reverse ${
        index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-x-8`}
    >
      <div className="md:max-w-[50%] w-full">
        <h2
          className={`${styles.heading2} mt-6 md:mt-0 md:text-start text-center`}
        >
          Featured Project
        </h2>
        <p className={`${styles.paragraph} md:text-start text-center mt-2`}>
          {title}
        </p>
        <div className="mt-8">
          <motion.p
            className={`${styles.paragraph} py-6 px-8 rounded-lg shadow-lg shadow-[rgba(0,0,0,.8)] bg-[rgba(0,0,0,.3)] blur-[.5px] gradient__darkest`}
            initial={{ translateY: 30 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 0.4, ease: "linear", type: "just" }}
          >
            {description}
          </motion.p>
          <div className="text-[#fff] mt-5 sm:mt-10 flex justify-center md:justify-start items-center sm:pl-6">
            <SiClickup className="text-lg" />
            <SiClickup className="text-lg" />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: "linear",
          type: "just",
        }}
        className="md:max-w-[50%] w-full  relative text-center"
      >
        <div className="md:inline-block hidden absolute inset-0 layout__shadow md-[w-22rem] md:h-[22rem]  lg:w-[25rem] lg:h-[25rem] xl:w-[40rem] xl:h-[40rem] md:-top-24  lg:-top-24 lg:left-8  xl:-top-48 xl:-left-8 opacity-[.5]" />
        <img
          src={cover}
          alt="project-cover"
          className={`object-contain relative rounded-lg${
            index % 2 == 0 ? "img_right__shadow" : "img_left__shadow"
          }`}
        />
      </motion.div>
    </div>
  );
}

export default FeaturedCard;
