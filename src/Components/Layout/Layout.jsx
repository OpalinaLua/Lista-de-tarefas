import styles from "../../App.module.css";
import { Header } from "../Header/Header";
import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";

export const Layout = ({ onSearch, onClear }) => {
  return (
    <div className={styles.app}>
      <Header onSearch={onSearch} onClear={onClear} />
      <Outlet />
      <Footer />
    </div>
  );
};
