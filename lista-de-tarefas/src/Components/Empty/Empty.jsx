import styles from "./Empty.module.css";

export const EmptyStatus = (isSearching) => {
  return (
    <>
      {isSearching ? (
        <div className={styles.container}>Nenhum desejos encontrados</div>
      ) : (
        <div className={styles.container}> Sem desejos cadrastrados...</div>
      )}
    </>
  );
};
