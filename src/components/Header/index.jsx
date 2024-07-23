import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/LOGO.svg'
import './header.scss'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" activeclassname="active">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header