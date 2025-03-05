import { Link } from "react-scroll";
import "./Footer.css";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="footerAll-section">
        <div data-aos="fade-right" className="btn-tels">
          <div className="container-imgLogotipo">
            <img src="/logotipo.png" alt="logotipo" />
          </div>

          <button
            id="btn-whatsapp"
            onClick={() =>
              window.open(
                "https://wa.me/5561986641977?text=Desenvolvedor%20Gabriel",
                "_blank"
              )
            }
          > 
            Whatsapp <FaWhatsapp id="icon-whatsapp" size={25} />
          </button>
        </div>

        <div className="container-linksFooter" data-aos="zoom-in">
          <p>Menu</p>
          <div className="menu-footer">
            <li>
              <Link to="aboutme" smooth={true} duration={700}>
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={700}>
                Portfolio
              </Link>
            </li>
          </div>
        </div>

        <div className="footer-section3" data-aos="fade-left">
          <p>Redes Sociais</p>

          <div className="container-imgsFooter">
            <a
              href="https://github.com/404GabrielDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="icon-redesSociais" src="/github.png" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-santos-0659702b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="icon-redesSociais" src="/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="footer-section4"
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-duration="1500"
      >
        <p>
          © 2025 | Portfolio - Desenvolvido por<span>João Gabriel</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
