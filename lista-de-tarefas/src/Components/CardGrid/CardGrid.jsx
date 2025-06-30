import { Card } from "../Card/Card";
import styles from "./CardGrid.module.css";

export const CardGrid = () => {
  return (
    <div className={styles.grid}>
      <Card
        name="Cozinha e sala "
        description="Limpeza as segundas"
        image="https://lojasimperio-s3.s3.amazonaws.com/f14a7ad6-365d-4df8-8ccd-7e7024cae9db.webp"
      />
      <Card
        name="Escada e Varanda"
        description="Limpeza as Terças"
        image="https://i.pinimg.com/474x/be/39/fe/be39fe48fd4b775599409fe74605097b.jpg"
      />
      <Card
        name="buraco"
        description="Limpeza as segundas"
        image="https://blog.archtrends.com/wp-content/uploads/2023/04/Dimorestudio-2023-Fuorisalone-1.jpg"
      />
      <Card
        name="Quarto Crianca"
        description="Limpeza as Quintas"
        image="https://images.prismic.io/guararapes/10f1ff27-de2b-423a-875c-6bda24513b9c_quarto%20infantil%20duplo.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
      />
      <Card
        name="Quarto Casal"
        description="Limpeza as sextas"
        image="https://projetomobiliando.com.br/system/dbkgCKDGRxh2Jjivb_J54kJD2TGyyNYvCWXPhzb6Ghw_prdp-ZP3dV-q8Nmz4XfNiwWMMKcj0RXJvKd4PVlz7g/files/Ambientes/Quarto%20de%20Casal%20-%20Tropical%20-%203,40x2,90m/Tenda%20-%20DORM-Folha-cam01-EF.jpg"
      />
    </div>
  );
};
