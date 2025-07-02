import styles from "./Card.module.css";

export const Card = ({ name, description, image }) => {
  const adicionarContador = () => {
    setContador((prevState) => prevState + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome: ", nome2);
  };
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
    </div>
  );
};
