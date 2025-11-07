import { Link } from "react-router-dom";
import "./Projetos.css";

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Sistema de Monitoramento de Enchentes",
      descricao: "Projeto utilizando Arduino e sensores para detectar enchentes em tempo real.",
      imagem: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
      tecnologias: ["Arduino", "C++", "HTML", "CSS", "JS"],
    },
    {
      id: 2,
      titulo: "Landing Page de Sustentabilidade",
      descricao: "Site criado para conscientização ambiental com design moderno e responsivo.",
      imagem: "https://cdn-icons-png.flaticon.com/512/2737/2737199.png",
      tecnologias: ["React", "Vite", "CSS"],
    },
    {
      id: 3,
      titulo: "Painel de Dados Educacionais",
      descricao: "Dashboard interativo feito com Power BI e automações com Power Automate.",
      imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      tecnologias: ["Power BI", "Power Automate", "Excel"],
    },
  ];

  return (
    <section className="projetos">
      <h1>Meus Projetos</h1>
      <div className="projetos-container">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="projeto-card">
            <img src={projeto.imagem} alt={projeto.titulo} className="projeto-imagem" />
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            <div className="tecnologias">
              {projeto.tecnologias.map((tec, index) => (
                <span key={index} className="tag">{tec}</span>
              ))}
            </div>
            <Link to={`/projetos/${projeto.id}`} className="btn-ver-mais">
              Ver mais →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;