import { useParams } from "react-router";
import { useWishs } from "../../hooks/useWishs";
import { useEffect, useState } from "react";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading } = useWishs();
  const [wishDetail, setwishsDetail] = useState({});

  useEffect(() => {
    setLoading(true);
    if (id && useWishs.length > 0) {
      const foundWish = wishs.find((wish) => wishs.id === Number.parseInt(id));
      setwishsDetail(foundWish);
    }
    setLoading(false);
  }, [wishs, id]);
  if (loading) return <h1>Carregando...</h1>;

  return (
    <>
      <h1>Detalhes do desejo</h1>
      <p>{wishDetail.name}</p>
      <p>{wishDetail.description}</p>
      <p>
        <img width={200} src={wishDetail.urlImage} alt={wishDetail.name} />
      </p>
    </>
  );
};
