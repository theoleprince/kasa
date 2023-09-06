import { Link } from 'react-router-dom'
import './Header.css'
import logo from './../../../assets/logo.png'

function Header() {
  return (
    <header className="container-fluid">
      <div className="d-flex align-items-center mt-4">
        <img src={logo} alt="Logo KASA" />
        <nav className="ms-auto">
          <ul className="nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link lin">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link lin">
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
