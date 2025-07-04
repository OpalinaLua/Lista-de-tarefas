import { useState } from "react";
import style from "./Header.module.css";
import { useCallback } from "react";

export const Header = ({ onSearch, onClear }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(searchValue);
    },
    [searchValue, onSearch]
  );
  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setSearchValue(value);
  }, []);

  return (
    <header className={style.header}>
      <div className={style.conteiner}>
        <h1 className={style.title}>Wishs List</h1>
        <form className={style.searchForm} onSubmit={handleSubmit}>
          <div className={style.searchGroup}>
            <input
              type="text"
              placeholder="Pesquisar desejo..."
              value={searchValue}
              onChange={handleChange}
              className={style.input}
            />
            <button type="submit" className={style.button}>
              Pesquisar
            </button>
            <button type="button" onClick={onClear} className={style.clear}>
              Limpar
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};
