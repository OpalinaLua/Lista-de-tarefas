import { useCallback, useState } from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import { WishDetail } from "../Components/WishDetail/WishDetail";
import App from "../App";
import { Layout } from "../Components/Layout/Layout";

export const Router = () => {
  const [search, setSearch] = useState("");
  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });
  const onClear = useCallback(() => {
    setSearch("");
  });
  return (
    <Routes>
      <Route element={<Layout onClear={onClear} onSearch={onSearch} />}>
        <Route path="/Lista-de-tarefas" element={<App search={search} />} />
        <Route path="/Lista-de-tarefas/wish/:id" element={<WishDetail />} />
        <Route path="/*" element={<App search={search} />} />
      </Route>
    </Routes>
  );
};
