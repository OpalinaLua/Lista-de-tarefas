import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.conteiner}>
        <h1 className={style.title}>Lista de Tarefas</h1>
      </div>
    </header>
  );
};
