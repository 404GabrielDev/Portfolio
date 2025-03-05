import "./Portfolio.css";

import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="titlePortifolio">
        <h1>Portfolio</h1>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="containerAll-projects"
      >
        <div className="description-project">
          <h1>Projeto 1</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="/Mernstack.jpg" alt="projeto 1" />
          </div>
          <div className="button-repository">
            <p>
              Auth System 🔐 Sistema de autenticação completo com registro,
              login e recuperação de senha. Usa OTP via e-mail com Nodemailer
              para verificação. Desenvolvido com lógica própria para segurança
              total.
            </p>
            <button id="button-rep">
              {" "}
              <a
                href="https://github.com/404GabrielDev/MERN-STACK-Authentication"
                target="_blank"
                rel="noopener noreferrer"
              >
                📂 Repositório
              </a>
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="containerAll-projects2 invert"
      >
        <div className="description-project">
          <h1>Projeto 2</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="/Mernstack.jpg" alt="projeto 1" />
          </div>
          <div className="button-repository">
            <p>
              Job Portal 💼 Plataforma para busca e gerenciamento de vagas de
              emprego. Permite cadastro, pesquisa e aplicação para vagas, com um
              sistema completo de autenticação e gerenciamento de usuários.
              Desenvolvido com foco em funcionalidade e experiência do usuário.
            </p>
            <button>
              <a
                href="https://github.com/404GabrielDev/Job-Portal"
                target="_blank"
                rel="noopener noreferrer"
              >
                📂 Repositório
              </a>
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
          <h1>Projeto 3</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="/Mernstack.jpg" alt="projeto 1" />
          </div>
          <div className="button-repository">
            <p>
              Site responsivo para academia, com design moderno e interativo.
              Possui um formulário para envio de e-mails, permitindo que
              usuários entrem em contato facilmente.
            </p>
            <button>
              <a
                href="https://github.com/404GabrielDev/GYM-Site"
                target="_blank"
                rel="noopener noreferrer"
              >
                📂 Repositório
              </a>
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
          <h1>Projeto 4</h1>
        </div>

        <div className="card-ContainerDesktop">
          <div className="container-imgProject">
            <img className="iconProject" src="/Mernstack.jpg" alt="projeto 1" />
          </div>
          <div className="button-repository">
            <p>
              Frontend detalhado e responsivo, com animações suaves (AOS) e um
              slider interativo (Swiper) para exibição de produtos. Foco na
              estética e experiência do usuário.
            </p>
            <button>
              <a
                href="https://github.com/404GabrielDev/web-site-breakfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                📂 Repositório
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
