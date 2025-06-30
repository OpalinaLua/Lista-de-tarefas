import { Card } from "../Card/Card";
import styles from "./CardGrid.module.css";

export const CardGrid = () => {
  return (
    <div className={styles.grid}>
      <Card
        name="Cozinha"
        description="Limpeza as segundas"
        image="https://lojasimperio-s3.s3.amazonaws.com/f14a7ad6-365d-4df8-8ccd-7e7024cae9db.webp"
      />
      <Card
        name="Cozinha"
        description="Limpeza as segundas"
        image="https://lojasimperio-s3.s3.amazonaws.com/f14a7ad6-365d-4df8-8ccd-7e7024cae9db.webp"
      />
    </div>
  );
};
