import "../styles/Footer.scss";
import logoKasaFooter from "../assets/logo-kasa-footer.png";

function Footer() {
  return (
    <footer>
      <img
        src={logoKasaFooter}
        alt="Logo de Kasa"
        className="logo-kasa-footer"
      />
      <p>@ 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;