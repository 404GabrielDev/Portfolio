import "./Portfolio.css";

import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="titlePortifolio">
        <h1>Portfolio</h1>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="containerAll-projects2 invert"
      >
        <div className="description-project">
          <h1>Projeto 1</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="screenshotProjects/project-portalJob/portalHome.png" alt="projeto 1" />
          </div>
          <div className="button-repository">
            <p>
              Job Portal 💼 Plataforma para busca e gerenciamento de vagas de
              emprego. Permite cadastro, pesquisa e aplicação para vagas, com um
              sistema completo de autenticação e gerenciamento de usuários.
              Desenvolvido com foco em funcionalidade e experiência do usuário.
            </p>
            <button
              id="button-rep"
              onClick={() =>
                window.open(
                  "https://github.com/404GabrielDev/Job-Portal",
                  "_blank"
                )
              }
            >
              📂 Repositório
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="containerAll-projects"
      >
        <div className="description-project">
          <h1>Projeto 2</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="screenshotProjects/project-Java/JavaW.png" alt="projeto 2" />
          </div>
          <div className="button-repository">
            <p>
            Autenticação com JWT (Angular + Java) — Implementação do fluxo de login e proteção de rotas com JSON Web Token. Projeto voltado para o domínio do JWT na prática, com envio de credenciais via frontend Angular.
            </p>
            <button
              id="button-rep"
              onClick={() =>
                window.open(
                  "https://github.com/404GabrielDev/Spring-Security-Token",
                  "_blank"
                )
              }
            >
              📂 Repositório
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="containerAll-projects invert"
      >
        <div className="description-project">
          <h1>Projeto 3</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="screenshotProjects/projectAuth/projectHome.png" alt="projeto 3" />
          </div>
          <div className="button-repository">
            <p>
              Auth System 🔐 Sistema de autenticação completo com registro,
              login e recuperação de senha. Usa OTP via e-mail com Nodemailer
              para verificação. Desenvolvido com lógica própria para segurança
              total.
            </p>
            <button
              id="button-rep"
              onClick={() =>
                window.open(
                  "https://github.com/404GabrielDev/MERN-STACK-Authentication",
                  "_blank"
                )
              }
            >
              📂 Repositório
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="containerAll-projects3"
      >
        <div className="description-project">
          <h1>Projeto 4</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="screenshotProjects/projectGym/desktop.png" alt="projeto 4" />
          </div>
          <div className="button-repository">
            <p>
              Site responsivo para academia, com design moderno e interativo.
              Possui um formulário para envio de e-mails, permitindo que
              usuários entrem em contato facilmente.
            </p>
            <button
              id="button-rep"
              onClick={() =>
                window.open(
                  "https://github.com/404GabrielDev/GYM-Site",
                  "_blank"
                )
              }
            >
              📂 Repositório
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="containerAll-projects4 invert"
      >
        <div className="description-project">
          <h1>Projeto 5</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="screenshotProjects/projectBreakfast/homeBreakfast.png" alt="projeto 5" />
          </div>
          <div className="button-repository">
            <p>
              Frontend detalhado e responsivo, com animações suaves (AOS) e um
              slider interativo (Swiper) para exibição de produtos. Foco na
              estética e experiência do usuário.
            </p>
            <button
              id="button-rep"
              onClick={() =>
                window.open(
                  "https://github.com/404GabrielDev/web-site-breakfast",
                  "_blank"
                )
              }
            >
              📂 Repositório
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
