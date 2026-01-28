import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";
import Logo from "../../assets/logo.png";

import "./header.scss";

function Header() {
    const { t } = useTranslation();

    return (
        <header className="header">
            <Link
                to="/"
                aria-label="Retour à l'accueil"
                className="header__logo"
            >
                <img src={Logo} alt="Logo de Kasa" className="logo" />
            </Link>

            <nav className="navbar">
                <div className="navbar__language">
                    <LanguageSelector />
                </div>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "navbar-link--active" : "navbar-link"
                    }
                    to="/"
                >
                    <span className="navbar-link__icon">🏠</span>
                    <span className="navbar-link__text">
                        {t("navbar.home")}
                    </span>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "navbar-link--active" : "navbar-link"
                    }
                    to="/about"
                >
                    <span className="navbar-link__icon">ℹ️</span>
                    <span className="navbar-link__text">
                        {t("navbar.about")}
                    </span>
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
