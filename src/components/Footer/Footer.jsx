import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="footerAll-section">
        <div className="btn-tels">
          <div className="container-imgLogotipo">
            <img src="/logotipo.png" alt="logotipo" />
          </div>

          <button>Tel. 99 99999-9999</button>
          <button>Tel. 99 99999-9999</button>
          <button>Contato</button>
        </div>

        <div className="footer-section3">
          <p>Redes Sociais</p>

          <div className="container-imgsFooter">
            <img id="icon-redesSociais" src="/github.png" alt="icon-youtube" />
            <img
              id="icon-redesSociais"
              src="/linkedin.png"
              alt="icon-instagram"
            />
          </div>
        </div>
      </div>

      <div className="footer-section4">
        <p>
          © 2025 | Portfolio - 
          <span>João Gabriel</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
