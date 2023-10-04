import styles from "../styles";
import { skills } from "../constants";
import Skill from "./UI/Skill";
function Skills() {
  return (
    <section className={`${styles.section_layout}`}>
      <h2 className={`${styles.main_heading}`}>My Skills</h2>
      <div
        className={`w-full grid justify-center items-center gap-y-28 grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${styles.marginTop} relative`}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="layout__shadow xl:w-[700px] xl:h-[700px] md:w-[450px] md:h-[450px] sm:w-[39rem] sm:h-[39rem] " />
        </div>
        <div className="ss:hidden absolute layout__shadow w-[50rem] h-[50rem] -top-20 -right-2/3 opacity-[.3]" />
        <div className="ss:hidden absolute layout__shadow w-[50rem] h-[50rem] top-[40%] -left-2/3 opacity-[.3]" />
        <div className="ss:hidden absolute layout__shadow w-[40rem] h-[40rem] top-[60%] -right-2/3 opacity-[.2]" />
        {skills.map((skilItem) => (
          <Skill key={skilItem.id} skill={skilItem} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
