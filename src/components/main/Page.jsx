import "./Page.css";

import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { SiVite } from "react-icons/si";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

const Page = () => {
  return (
    <main>
      <section className="container-Skills">
        <section className="container-aboutMe">
          <div className="containerApresentation-about" id="aboutme">
            <h1>Sobre Mim!</h1>
            <p>
              Transformo ideias em código, criando aplicações fluidas e bem
              estruturadas. Já desenvolvi desde sistemas de autenticação até um
              portal de empregos, sempre buscando melhorar a experiência do
              usuário e otimizar o código. Estou sempre aprendendo e aprimorando
              meus projetos.
            </p>
          </div>

          <div className="container-imgAbout">
            <img src="bg-about.png" alt="icon-developer" />
          </div>
        </section>

        <section className="container-skillsBest-Projects">
          <div id="title-skillsFullstack">
            <p>Skills</p>
          </div>

          <div className="cardSkills">
            <p>Frontend</p>
            <div className="container-iconSkills">
              <DiHtml5 id="iconHTML" />
              <DiJavascript1 id="iconJavaScript" />
              <DiCss3 id="iconCSS" />
              <DiReact id="iconReact" />
              <SiVite id="iconVite" />
            </div>
          </div>

          <div className="cardSkills">
            <p>Backend</p>
            <div className="container-iconSkillsBack">
              <DiNodejsSmall id="iconNode" />
              <DiMongodb id="iconMongodb" />
              <DiReact id="iconReact" />
              <AiOutlineGithub />
            </div>
          </div>

          <div className="container-descriptionSkills">
            <p>Projetos</p>
            <p id="descriptionBestProjects">
              Aqui estão os meus 4 melhores projetos, destacando minhas
              habilidades em frontend e fullstack. confira clicando aqui
            </p>
            <div className="button-projects">
              <SlArrowRightCircle className="icons-arrows" />
              <button>
                {" "}
                <a
                  href="https://github.com/404GabrielDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="icon-redesSociais" src="/github.png" alt="GitHub" />
                </a>{" "}
              </button>
              <SlArrowLeftCircle className="icons-arrows" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Page;
