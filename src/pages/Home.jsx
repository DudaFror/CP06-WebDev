import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img 
          src="/foto-perfil.jpg" 
          alt="Foto de Duda Castro" 
          className="profile-pic"
        />
        <div className="text-section">
          <h1>Olá, eu sou a Duda 👋</h1>
          <p>
            Sou estudante de Engenharia de Software na FIAP e apaixonada por tecnologia, automação e criatividade. 
            Este portfólio foi criado para apresentar meus projetos e minha evolução ao longo da jornada acadêmica.
          </p>
          <p>
            Gosto de unir design e funcionalidade para criar soluções que realmente fazem diferença.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home