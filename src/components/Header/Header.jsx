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
import { FaJava } from "react-icons/fa6";
import { SiVite, SiSpringboot, SiSpringsecurity, SiSpring, SiMysql, SiPostgresql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

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
          
        <TiThMenu style={{fontSize:'25px'}} className="icon" onClick={toggleMenu} />
        </div>
      </div>

      <div className={`navbar-menuBurger ${openMenu ? "open" : ""}`}>
        <div className="container-iconClose">
          <p>Gabriel</p>
          <MdClose style={{fontSize:'25px'}} className="icon" onClick={toggleMenu}/>
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
          <FaJava id="iconJava" />
          <SiSpring id="iconSpring" />
          <FaAngular id="iconAngular" />
          <DiJavascript1 id="iconJavaScript" />
          <DiNodejsSmall id="iconNode" />
          <DiReact id="iconReact" />
          <DiMongodb id="iconMongodb" />
          <SiVite id="iconVite" />
          <SiMysql id="iconMysql" />
          <SiPostgresql id="iconPostgre" />
        </div>
      </section>
    </header>
  );
};

export default Header;
