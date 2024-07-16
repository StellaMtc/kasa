import "../styles/PageError.scss";
import { NavLink } from "react-router-dom";

function PageError(props) {
  return (
    <div className="page-error">
      <p className="code-error">404</p>
      <p className="comment">Oups ! La page que vous demandez n'existe pas</p>
      <NavLink to="/Kasa/" className="home-btn">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default PageError;