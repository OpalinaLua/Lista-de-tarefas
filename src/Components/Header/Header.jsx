import { useState } from "react";
import style from "./Header.module.css";
import { useCallback } from "react";
import { PiBroomFill, PiMagnifyingGlassBold } from "react-icons/pi";

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
        <div className={style.test}>
          <div class={style.gif}>
            <a href="https://tenor.com/view/i%27m-cooking---cat-typing-on-keyboard-gif-6822434066253257359">
              I&#39;M Cooking - Cat Typing On Keyboard GIF
            </a>
            from{" "}
            <a href="https://tenor.com/search/i%27m+cooking+-+cat+typing+on+keyboard-gifs">
              I&#39;M Cooking - Cat Typing On Keyboard GIFs
            </a>
          </div>{" "}
          <script
            type="text/javascript"
            async
            src="https://tenor.com/embed.js"
          ></script>
          <h1 className={style.title}>Wishs List</h1>
        </div>
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
              <p className={style.colorp}>
                <PiMagnifyingGlassBold />
              </p>
            </button>
            <button type="button" onClick={onClear} className={style.clear}>
              <PiBroomFill />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};
