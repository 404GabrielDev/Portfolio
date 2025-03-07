import { useState } from "react";
import "./Header.css";
import { TypeAnimation } from "react-type-animation";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { SiVite } from "react-icons/si";
import { Link } from "react-scroll";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="navbar-mobile" data-aos="fade-down">
        <div>Gabriel</div>

        <div>
          <img
            style={{ filter: "invert(1)" }}
            src="/burgerBar.png"
            className="icon"
            alt="menu-icon"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div className={`navbar-menuBurger ${openMenu ? "open" : ""}`}>
        <div className="container-iconClose">
          <p>Gabriel</p>
          <img
            onClick={toggleMenu}
            src="/close.png"
            alt="icon-close"
            className="icon"
          />
        </div>
        <ul className="nav-burger">
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
          <li>
            <Link to="contact" smooth={true} duration={700}>
              Contato
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-desktop" data-aos="fade-down">
        <p>Desenvolvedor Gabriel</p>
        <ul>
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
        </ul>

        <button>
          <Link to="contact" smooth={true} duration={700}>
            Contato
          </Link>
        </button>
      </div>

      <section className="apresentation">
        <div className="container-typeAnimation" data-aos="fade-right">
          <TypeAnimation
            sequence={[
              "Gabriel",
              2000,
              "",
              1000, // Apaga a frase antes de começar a próxima
              "Desenvolvedor Full Stack ",
              2000,
              "",
              1000,
              "MERN Stack",
              2000,
              "",
              1000,
            ]}
            wrapper="span"
            speed={50} // Velocidade de digitação
            repeat={Infinity} // Repetição infinita
            className="type-animationText"
          />

          <p>
            Olá! Sou João <span>Gabriel</span>, desenvolvedor web full stack,
            interfaces responsivas e funcionais.
          </p>
          {/*<p>
            Busco aprimorar minhas habilidades full stack e trabalhar em
            projetos inovadores, criando aplicações eficientes.
          </p>*/}
        </div>

        <section
          className="container-imgProfile"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          
        </section>

        <section
          className="container-imgProfile2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          
        </section>
      </section>

      <section
        className="container-myStack"
        data-aos="zoom-in"
        data-aos-duration="2500"
      >
        <p>Minha Stack</p>
        <div className="iconsStack">
          <DiHtml5 id="iconHTML" />
          <DiCss3 id="iconCSS" />
          <DiJavascript1 id="iconJavaScript" />
          <DiReact id="iconReact" />
          <SiVite id="iconVite" />
          <DiNodejsSmall id="iconNode" />
          <DiMongodb id="iconMongodb" />
        </div>
      </section>
    </header>
  );
};

export default Header;
