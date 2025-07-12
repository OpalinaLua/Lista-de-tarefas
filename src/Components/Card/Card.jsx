import { useNavigate } from "react-router";
import styles from "./Card.module.css";
import { formatDate } from "../../utils/formatDate";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

export const Card = ({ name, description, image, date, onDelete, id }) => {
  const formatedDate = formatDate(date);
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.description}>{formatedDate}</p>
        <button className={styles.delete} onClick={onDelete}>
          <RiDeleteBin6Line color="yellow" />
        </button>
        <button
          className={styles.detalhe}
          onClick={() => navigate(`wish/${id}`)}
        >
          <TbListDetails color="red" />
        </button>
      </div>
    </div>
  );
};
