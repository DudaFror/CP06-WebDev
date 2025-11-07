import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 — Desenvolvido por Duda Castro 🌙</p>
      <div className="social-icons">
        <a href="https://github.com/seuusuario" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/seuinstagram" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer