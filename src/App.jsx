import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import ProjetoDetalhe from './pages/ProjetosDetalhes'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App