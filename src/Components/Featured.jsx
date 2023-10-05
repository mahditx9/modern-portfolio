import styles from "../styles";
import FeaturedCard from "./UI/FeaturedCard";
import { featuredProjects } from "../constants";
function Featured() {
  return (
    <section
      className={`${styles.section_layout} overflow-hidden`}
      id="featured"
    >
      <h2 className={styles.main_heading}>Featured Projects</h2>
      <div
        className={`w-full flex flex-col  gap-28 sm:gap-32 md:gap-48 ${styles.marginTop}`}
      >
        {featuredProjects.map((featured, index) => (
          <FeaturedCard
            key={featured.id}
            index={index + 1}
            featured={featured}
          />
        ))}
      </div>
    </section>
  );
}

export default Featured;
