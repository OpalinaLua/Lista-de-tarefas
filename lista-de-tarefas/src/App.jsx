import styles from "./App.module.css";
import { Card } from "./Components/Card/Card";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Card name="ps5" description="para jogo " image="linkk" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
