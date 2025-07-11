import { useNavigate, useParams } from "react-router";
import { useWishs } from "../../hooks/useWishs";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { AddItemForm } from "../AddItemForm/AddItemForm";
import style from "./WishDetail.module.css";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading, form, setForm, setWishs } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((wish) => wish.id === Number.parseInt(id));
      console.log(foundWish);
      setWishDetail(foundWish);
      setForm({
        name: foundWish.name,
        description: foundWish.description,
        urlImage: foundWish.urlImage,
        date: foundWish.date || "",
      });
    }
    setLoading(false);
  }, [wishs, id]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedWish = { ...form, id: wishDetail.id };
    setWishs((prev) =>
      prev.map((wish) => (wish.id === updatedWish.id ? updatedWish : wish))
    );
    setIsEditing(false);
  };
  if (loading) return <h1>Carregando...</h1>;
  return (
    <div className={style.card}>
      <h1>Detalhes do desejo</h1>
      <button className={style.voltar} onClick={() => navigate(-1)}>
        ↩️ Voltar
      </button>
      <button className={style.editar} onClick={handleEditToggle}>
        ✏️Editar
      </button>
      {isEditing ? (
        <>
          <AddItemForm
            handleSubmit={handleUpdate}
            setForm={setForm}
            form={form}
          />
        </>
      ) : (
        <>
          <div className={style.imgCaixa}>
            <img
              src={wishDetail.urlImage}
              alt={wishDetail.name}
              className={style.image}
            />
          </div>
          <div className={style.text}>
            <p>{wishDetail.name}</p>
            <br />
            <p>{wishDetail.description}</p>
            <br />
            <p>{formatDate(wishDetail.date)}</p>
            <br />
          </div>
        </>
      )}
    </div>
  );
};
