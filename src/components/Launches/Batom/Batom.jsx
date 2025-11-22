import { useState } from "react";
import "./batom.scss";
import batomAzul from "../../../assets/images/lancamentos/azul.png";
import batomVermelho from "../../../assets/images/lancamentos/vermelho.png";
import batomMarrom from "../../../assets/images/lancamentos/marrom.png";
import batomBase from "../../../assets/images/lancamentos/base.png";
import fiveStars from "../../../assets/icons/five-stars.svg";

export default function Batom() {
  const [color, setColor] = useState(batomAzul);

  const batons = [
    {
      batom: batomAzul,
      name: "Azul",
      color: "#B1B0D8",
    },
    {
      batom: batomVermelho,
      name: "Vermelho",
      color: "#E1342A",
    },
    {
      batom: batomMarrom,
      name: "Marrom",
      color: "#73282D",
    },
    {
      batom: batomBase,
      name: "Base",
      color: "#DE755E",
    },
  ];

  const toggleColor = (batom) => {
    setColor(batom);
  };

  return (
    <div className="batom">
      <div className="batom__images">
        <img src={color} alt="Batom Azul" />
      </div>

      <article className="batom__card">
        <img src={fiveStars} alt="5 Estrelas" />

        <h3 className="batom__card__title">Matte Premium</h3>

        <p className="batom__card__subtitle">Cores disponíveis</p>

        <div className="batom__card__colors">
          {batons.map((baton) => (
            <BatomItem baton={baton} toggleColor={toggleColor} />
          ))}
        </div>

        <p className="batom__card__description">Descrição</p>

        <p className="batom__card__description__text">
          O Batom Matte possui uma fórmula inovadora desenvolvida para entregar
          o máximo de cor na primeira aplicação com um deslize suave e macio.
          Tem acabamento matte aveludado e manteiga de manga que ajuda a
          hidratar e a proteger os lábios contra ressecamento. Ajuda na
          hidratação dos lábios, textura fina e macia que não pesa nos lábios.
        </p>
      </article>
    </div>
  );
}

function BatomItem({ baton, toggleColor }) {
  return (
    <button onClick={() => toggleColor(baton.batom)}>
      <div
        className="batom__card__colors__item"
        style={{ backgroundColor: baton.color }}
      ></div>
    </button>
  );
}
