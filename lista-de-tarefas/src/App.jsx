import styles from "./App.module.css";
import { Card } from "./Components/Card/Card";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Contador } from "./Components/Contador/Contador";
import { ContadorStateless } from "./Components/ContadorStateless.jsx/ContadorStateless";
import { useState } from "react";

function App() {
  const [wishs, setWishs] = useState([]);
  const [form, setsform] = useState({
    name: "",
    descripition: "",
  });
  const handleAChange = (newItem) => {
    const { name, value } = e.target;
    setsform((prev) => ({
      ...prev,
      [name]: value,
    }));
    const newWishs = { name: newItem.name, descripition: newItem.descripition };
    const update = [...wishs, newWishs];
    setWishs(updateWishs);
  };
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <form action=""></form>
        <CardGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
