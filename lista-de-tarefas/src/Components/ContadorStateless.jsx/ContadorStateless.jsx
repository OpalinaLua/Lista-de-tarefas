export function ContadorStateless({ contador, adicionarContador }) {
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}
