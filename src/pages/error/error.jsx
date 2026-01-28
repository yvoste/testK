import { NavLink } from "react-router-dom";

import "./error.scss";

const Error = () => {
  document.title = "Erreur 404 - Kasa";

  return (
    <div className="error">
      <p className="error-404">404</p>
      <p className="error-text">
        <span className="error-text-left">Oups! La page que</span>
        <span className="error-text-right"> vous demandez n'existe pas.</span>
      </p>
      <NavLink to="/" className="error-link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error;
