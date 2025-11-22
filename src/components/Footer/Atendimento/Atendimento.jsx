import React from "react";
import "./atendimento.scss";

export default function Atendimento() {
  return (
    <section className="atendimento">
      <h3 className="atendimento__title">ATENDIMENTO</h3>

      <ul className="atendimento__list">
        <li className="atendimento__list__item">
          <a href="#" className="atendimento__list__item__link">
            Fale Conosco
          </a>
        </li>
        <li className="atendimento__list__item">
          <a href="#" className="atendimento__list__item__link">
            Perguntas Frequentes
          </a>
        </li>
        <li className="atendimento__list__item">
          <a href="#" className="atendimento__list__item__link">
            Meus Pedidos
          </a>
        </li>
        <li className="atendimento__list__item">
          <a href="#" className="atendimento__list__item__link">
            Nossas Lojas
          </a>
        </li>
      </ul>
    </section>
  );
}
