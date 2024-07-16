import "../styles/Header.scss";
import logoKasa from "../assets/logo-kasa.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/Kasa/">
        <img src={logoKasa} alt="Logo de Kasa" className="logo-kasa" />
      </NavLink>
      <nav className="navBar">
        <NavLink className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')} to="/Kasa/" >
          Accueil
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')} to="/Kasa/a-propos">
          A propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;