import "./Page.css";

import React from "react";
import {
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { SiAngular, SiSpring, SiVite, SiMysql, SiPostgresql } from "react-icons/si";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { FaJava } from "react-icons/fa6";

const Page = () => {
  return (
    <main>
      <section className="container-Skills">
        <section className="container-aboutMe">
          <div
            className="containerApresentation-about"
            data-aos="zoom-in"
            id="aboutme"
          >
            <h1>Sobre Mim!</h1>
            <p>
              Transformo ideias em código, criando aplicações fluidas e bem
              estruturadas. Já desenvolvi desde sistemas de autenticação até um
              portal de empregos, sempre buscando melhorar a experiência do
              usuário e otimizar o código. Estou sempre aprendendo e aprimorando
              meus projetos.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="container-imgAbout"
          >
            <img src="bg-about.png" alt="icon-developer" />
          </div>
        </section>

        <section className="container-skillsBest-Projects">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            id="title-skillsFullstack"
          >
            <p>Skills</p>
          </div>

          <div data-aos="fade-up-right" className="cardSkills">
            <p>Frontend</p>
            <div className="container-iconSkills">
              <SiAngular id="iconAngular" />
              <DiJavascript1 id="iconJavaScript" />
              <DiReact id="iconReact" />
              <SiVite id="iconVite" />
            </div>
          </div>

          <div data-aos="fade-up-left" className="cardSkills">
            <p>Backend</p>
            <div className="container-iconSkillsBack">
              <FaJava id="iconJava" />
              <SiSpring id="iconSpring" />
              <DiNodejsSmall id="iconNode" />
              <DiMongodb id="iconMongodb" />
              <SiMysql id="iconMysql" />
              <SiPostgresql id="iconPostgre" />
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className="container-descriptionSkills"
          >
            <p>Projetos</p>
            <p id="descriptionBestProjects">
              Aqui estão os meus melhores projetos, destacando minhas
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
                  <img id="icon-redesSociais" src="github.png" alt="GitHub" />
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
