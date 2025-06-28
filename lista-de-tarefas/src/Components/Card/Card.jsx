import style from "./card.module.css";

export const Card = ({ name, description, image }) => {
  return (
    <div className={Style.card}>
      <div className={Style.imgcontainer}>
        <img src={image} alt={name} className={Style.image} />
      </div>
      <div className={Style.content}>
        <h3 className={Style.name}>{name}</h3>
        <p className={Style.description}>{description}</p>
      </div>
    </div>
  );
};
