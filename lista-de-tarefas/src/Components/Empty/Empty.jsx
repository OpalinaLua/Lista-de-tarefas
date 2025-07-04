import styles from "./Empty.module.css";

export const Empty = ({ isSearching }) => {
  return (
    <>
      {isSearching ? (
        <div className={styles.container}>
          <p className={styles.icon}>🙁✨</p>
          <p className={styles.tex}>Nenhum desejo brilhando por aqui</p>
        </div>
      ) : (
        <div className={styles.container}>
          <p className={styles.tex}>Sem desejos cadastrados...</p>
          <p className={styles.icon}>👀 </p>
          <p className={styles.tex}>nada por aqui!</p>
        </div>
      )}
    </>
  );
};
