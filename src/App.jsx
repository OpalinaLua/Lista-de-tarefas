import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { AddItemForm } from "./Components/AddItemForm/AddItemForm";
import { useWishs } from "./hooks/useWishs";

const DEFAULT_FORM = {
  name: "",
  description: "",
  urlImage: "",
  date: "",
};

function App({ search }) {
  const { wishs, setWishs } = useWishs();

  const [form, setform] = useState(DEFAULT_FORM);

  const filteredWishs = useMemo(() => {
    if (!search.trim()) {
      return wishs;
    }
    return wishs.filter((wish) => {
      const searchLower = search.toLowerCase();
      return (
        wish.name.toLowerCase().includes(searchLower) ||
        wish.description.toLowerCase().includes(searchLower)
      );
    });
  }, [search, wishs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId =
      wishs.length > 0 ? Math.max(...wishs.map((w) => Number(w.id))) + 1 : 1;
    const newWish = { ...form, id: newId };
    const updatedWishs = [...wishs, newWish];
    setWishs(updatedWishs);
    orm(DEFAULT_FORM);
  };

  const handleDelete = useCallback(
    (indexToDelete) => {
      const updatedWishs = wishs.filter((_, index) => index !== indexToDelete);
      setWishs(updatedWishs);
    },
    [wishs]
  );

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <AddItemForm
          handleSubmit={handleSubmit}
          form={form}
          setform={setform}
        />
        <CardGrid
          wishs={filteredWishs}
          handleDelete={handleDelete}
          search={search}
        />
      </main>
    </div>
  );
}

export default App;
