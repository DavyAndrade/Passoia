import { useState } from "react";
import batomAzul from "../../assets/images/azul.png";
import batomVermelho from "../../assets/images/vermelho.png";
import batomMarrom from "../../assets/images/marrom.png";
import batomBase from "../../assets/images/base.png";
import fiveStars from "../../assets/icons/five-stars.svg";
import "./launches.css";

export default function Launches() {
  const launches = [
    {
      id: 1,
      name: "Batom Azul",
      image: batomAzul,
      color: "#B1B0D8",
    },
    {
      id: 2,
      name: "Batom Vermelho",
      image: batomVermelho,
      color: "#E1342A",
    },
    {
      id: 3,
      name: "Batom Marrom",
      image: batomMarrom,
      color: "#73282D",
    },
    {
      id: 4,
      name: "Batom Base",
      image: batomBase,
      color: "#DE755E",
    },
  ];

  return (
    <section className="launches scroll-container" id="launches">
      <h2 className="launches__title">Aproveite os Lançamentos</h2>

      <div className="launches__container">
        <div className="launches__grid-1">
          <div className="launches__batons">
            
          </div>
          <img src={batomAzul} alt="Batom Azul" className="launches__image" />
        </div>

        <article className="launches__grid-2">
          <img src={fiveStars} alt="5 Estrelas" />

          <h3 className="launches__name">Matte Premium</h3>

          <div className="launches__colors">
            <p className="launches__colors__title">Cores disponíveis</p>

            <div className="launches__colors__item">
              {launches.map((launch) => (
                <ColorItem key={launch.id} color={launch.color} />
              ))}
            </div>
          </div>

          <p className="launches__description">Descrição</p>

          <p className="launches__description__text">
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </article>
      </div>
    </section>
  );
}

function ColorItem({ color }) {
  return (
    <div
      className="launches__colors__item__color"
      style={{ backgroundColor: color }}
    ></div>
  );
}
