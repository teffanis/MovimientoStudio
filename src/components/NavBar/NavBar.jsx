import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/img/logo.jpg'
import './NavBar.css'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo  */}
        <div className="nav-logo">
          <img 
            src={logo} 
            alt="Movimiento Studio Logo" 
            className="logo-image"
          />
          <div className="logo-text-container">
            <span className="logo-main">Movimiento</span>
            <span className="logo-sub">Studio</span>
          </div>
        </div>

        {/* Enlaces de Navegación */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/clases" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Clases Sede
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/cursos" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Cursos Online
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/ebooks" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Ebooks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Widget Carrito -  */}
        <div className="nav-right">
          <CartWidget />
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar