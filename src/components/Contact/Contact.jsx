import "./Contact.css";
import React, { useRef, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .sendForm(
        "service_zst5r1l",
        "template_esp1st9",
        form.current,
        "zsUO0yDf20g0Bq55C"
      )
      .then(
        (result) => {
          setStatus("Email enviado com sucesso!✅ ");
          toast.success("Email Enviado Com sucesso! ✅");
          form.current.reset();
        },
        (error) => {
          setStatus("Erro ao enviar. Tente Novamente");
          toast.error("Erro ao enviar, Tente Novamente");
          console.error(error);
        }
      );
  };

  return (
    <>
      {/*SECTION PRA ENVIAR EMAIL*/}
      <section className="container-sectionForm" id="contact">
        <p>
          <h2 className="section__title">Me contate</h2>
        </p>

        <div className="containerAll-form">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="container-form"
          >

            <div className="inputInformations-user">
            <input
                type="text"
                name="user_name"
                required
                placeholder="Digite seu nome"
              />
              <input
                type="email"
                name="insira seu email"
                required
                placeholder="Insira seu email"
              />
            </div>
             
            

            <textarea
              name="user_project"
              required
              placeholder="Insira sua Mensagem"
              className="container-textarea"
            />

            <div className="container-buttonSubmit">
              <button type="submit">
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
