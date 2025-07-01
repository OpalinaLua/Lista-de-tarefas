import styles from "./Card.module.css";
import { Contador } from "../Contador/Contador";

export const Card = ({ name, description, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <Contador />
      </div>
    </div>
  );
};
