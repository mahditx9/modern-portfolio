/* eslint-disable react/no-unescaped-entities */
import styles from "../styles";
import { motion } from "framer-motion";
function Intro() {
  return (
    <section id="intro" className={styles.section_layout}>
      {/* USER INTRO */}
      <div className="lg:w-[80%] xl:w-[60%]">
        <div className="flex  ss:flex-row flex-col  capitalize">
          <div className="ss:max-w-[50%] ss:max-h-[80%] max-h-full max-w-full  sm:mr-0 mr-5">
            <motion.img
              src="/my-photo.png"
              alt="me"
              className=" object-contain relative z-40"
              initial={{ opacity: 0, translateX: -200 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ ease: "easeIn", duration: 0.3 }}
            />
            {/* <div className="gradiant__light opacity-[.5] rounded-full w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] absolute left-12 top-36 sm:left-32 sm:top-24" /> */}
          </div>

          <motion.div
            className=" flex flex-col justify-around ss:mt-0 mt-8"
            initial={{ opacity: 0, translateY: -60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ ease: "linear", duration: 0.4 }}
          >
            <p className={styles.paragraph}>
              hello im{" "}
              <span className="text-[#7127BA] text-xl font-semibold">
                Mahdi Entezari
              </span>
            </p>
            <div className="flex flex-col sm:mt-0 mt-5">
              <span className="text-sm text-[#fff]">a developer who:</span>
              <h1 className={`${styles.main_heading} my-3 sm:my-0 text-start`}>
                Judges a book by its{" "}
                <span className="text-[#7127BA]">content...</span>
              </h1>
              <span className="text-sm text-[#fff]">
                Because if the cover does not impress you what else can?
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      {/* USER INTRO */}
      {/* USER INFO */}
      <div
        className={`${styles.content_layer} mt-24 text-center sm:text-start`}
      >
        <h2 className={`${styles.main_heading}`}>I'm a Software Engineer.| </h2>
        {/* <p>Currently, I'm a Software Engineer at Facebook</p> */}
        <p className={`${styles.paragraph} text-base mt-24 text-[#fff]`}>
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
      </div>
      {/* USER INFO */}
    </section>
  );
}

export default Intro;
