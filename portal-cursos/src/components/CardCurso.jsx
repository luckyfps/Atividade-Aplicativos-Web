export default function CardCurso({ titulo, descricao }) {
  return (
    <div className="card-curso">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}