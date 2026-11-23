import CardCurso from "../components/CardCurso.jsx";

export default function Cursos() {
  const cursos = [
    {
      titulo: "Desenvolvimento Web",
      descricao:
        "Aprenda a criar sites e aplicações para a internet, trabalhando com estrutura, estilos e funcionalidades.",
    },
    {
      titulo: "Ciência de Dados",
      descricao:
        "Descubra como coletar, organizar e analisar dados para encontrar padrões e apoiar decisões.",
    },
    {
      titulo: "Design de Interface",
      descricao:
        "Conheça os fundamentos do design visual e da experiência do usuário para criar interfaces claras e acessíveis.",
    },
  ];

  return (
    <section>
      <h1>Cursos disponíves</h1>

      <div className="lista-cursos">
        {cursos.map((curso) => (
          <CardCurso
            key={curso.titulo}
            titulo={curso.titulo}
            descricao={curso.descricao}
          />
        ))}
      </div>
    </section>
  );
}