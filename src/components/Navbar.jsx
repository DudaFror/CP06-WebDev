import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">Duda Castro</Link>
      <nav className="nav-links">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}

export default Navbar