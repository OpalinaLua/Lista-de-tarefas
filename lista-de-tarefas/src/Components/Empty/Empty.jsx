import styles from "./Empty.module.css";

export const Empty = ({ isSearching }) => {
  return (
    <>
      <div className={styles.container}>
        {isSearching ? (
          <div className={styles.MSGcontainer}>
            <p className={styles.icon}>🙁✨</p>
            <p className={styles.tex}>Nenhum desejo brilhando por aqui</p>
          </div>
        ) : (
          <div className={styles.container}>
            <p className={styles.tex1}>Sem desejos cadastrados...</p>
            <p className={styles.icon}>👀 </p>
            <p className={styles.tex1}>nada por aqui!</p>
          </div>
        )}
      </div>
    </>
  );
};
