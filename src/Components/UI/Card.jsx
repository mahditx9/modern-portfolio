import styles from "../../styles";
import Button from "./Button";
function Card() {
  return (
    <div className=" rounded-[15px] px-12 py-6 flex flex-col items-center card ">
      <img
        src="/my-photo.png"
        alt="me"
        className="w-full max-h-64 object-contain"
      />
      <div className="mt-10 text-center ss:text-start">
        <h2 className={styles.heading2}>Amitis JW</h2>
        <p className={`${styles.paragraph} my-4`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
          {/* Veniam
                illum iusto debitis recusandae quae. Cumque doloribus, sequi,
                consectetur quibusdam quidem harum ducimus, maxime suscipit
                cupiditate distinctio dolorum sunt facere voluptates!
 */}
        </p>
        <Button>Show More</Button>
      </div>
    </div>
  );
}

export default Card;
