import { useParams, Link } from "react-router-dom";

function ProjetoDetalhes() {
  const { id } = useParams();

  // Aqui você pode colocar os mesmos projetos da página principal
  const projetos = [
    {
      id: 1,
      titulo: "Sistema de Monitoramento de Enchentes",
      descricao: "Projeto utilizando Arduino e sensores para detecção de alagamentos em tempo real.",
      tecnologias: ["Arduino", "C++", "HTML", "CSS", "JS"],
    },
    {
      id: 2,
      titulo: "Landing Page de Sustentabilidade",
      descricao: "Site criado para conscientização ambiental com design responsivo.",
      tecnologias: ["React", "Vite", "CSS"],
    },
    {
      id: 3,
      titulo: "Painel de Dados Educacionais",
      descricao: "Dashboard interativo usando Power BI e automação via Power Automate.",
      tecnologias: ["Power BI", "Power Automate", "Excel"],
    },
  ];

  const projeto = projetos.find((p) => p.id === Number(id));

  if (!projeto) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Projeto não encontrado 😢</h2>
        <Link to="/projetos">← Voltar aos projetos</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{projeto.titulo}</h1>
      <p>{projeto.descricao}</p>
      <h3>Tecnologias:</h3>
      <ul>
        {projeto.tecnologias.map((tec, index) => (
          <li key={index}>{tec}</li>
        ))}
      </ul>
      <Link to="/projetos" style={{ display: "inline-block", marginTop: "1rem" }}>
        ← Voltar aos projetos
      </Link>
    </div>
  );
}

export default ProjetoDetalhes;