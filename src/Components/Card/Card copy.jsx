//import styles from "./Card.module.css";
//import { Contador } from "../Contador/Contador";
import { ContadorStateless } from "../ContadorStateless.jsx/ContadorStateless";
import { useState } from "react";

//export const Card = ({ name, description, image }) => {
// const [contador, setContador] = useState(1);
//const [nome, setNome] = useState("");
//const [nome2, setNome2] = useState("");

//const adicionarContador = () => {
//   setContador((prevState) => prevState + 1);
// };
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Nome: ", nome2);
// };
// return (
//  <>
//     <div className={styles.card}>
//       <div className={styles.imgContainer}>
//         <img src={image} alt={name} className={styles.image} />
//       </div>
//       <div className={styles.content}>
//         <h3 className={styles.name}>{name}</h3>
//        <p className={styles.description}>{description}</p>
//
//          <Contador />
//          <ContadorStateless
//           contador={contador}
//           adicionarContador={adicionarContador}
//         />
//         <ContadorStateless
//           contador={contador}
//           adicionarContador={adicionarContador}
//         />
//         <h1>{nome}</h1>
//         <input
//           type="text"
//           value={nome}
//           onChange={(e) => setNome(e.target.value)}
//         />
//         <h1>{nome2}</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={nome2}
//             onChange={(e) => setNome2(e.target.value)}
//           />
//           <button type="submit">atualizar estado</button>
//         </form>
//       </div>
//      </div>
//    </>
// );
//};
