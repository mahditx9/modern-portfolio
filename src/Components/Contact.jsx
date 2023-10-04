/* eslint-disable react/no-unescaped-entities */
import styles from "../styles";
import { BsInstagram, BsTelegram, BsGithub } from "react-icons/bs";
function Contact() {
  return (
    <section className={`${styles.section_layout}`}>
      <h1 className={`${styles.main_heading}`}>Contact</h1>
      <div className={`xl:w-[60%] sm:w-[85%] w-full  ${styles.marginTop}`}>
        <p className={`${styles.paragraph} sm:text-start text-center`}>
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </p>
        <span
          className={`${styles.paragraph} sm:inline-block block mt-6 text-center sm:text-start`}
        >
          mahdienetzari79@gmail.com
        </span>
        <div className="flex items-center justify-center sm:justify-start gap-x-4 text-[#fff] text-xl mt-6">
          <BsInstagram className="hover:text-red-600 cursor-pointer" />
          <BsTelegram className="hover:text-blue-600 cursor-pointer" />
          <BsGithub className="hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
