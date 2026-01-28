import WhiteLogo from "../../assets/logo_white.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={WhiteLogo} alt="Logo de Kasa" />
      <p>
        <span className="footer-text-1">© 2020 Kasa. All </span>
        <span className="footer-text-2">rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
