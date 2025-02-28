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
        <div className="container-descriptionSkills">
          <p>Skills</p>
          <p id="descriptionBestProjects">
            Aqui estão os meus 4 melhores projetos, destacando minhas
            habilidades em frontend e fullstack. confira clicando aqui
          </p>
          <div className="button-projects">
            <SlArrowRightCircle />
            <button> Projetos </button>
            <SlArrowLeftCircle />
          </div>
        </div>

        <section>
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
        </section>
      </section>
    </main>
  );
};

export default Page;
