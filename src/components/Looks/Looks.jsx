import React from "react";
import labios from "../../assets/images/looks/labios.png";
import olhos from "../../assets/images/looks/olhos.png";
import rosto from "../../assets/images/looks/rosto.png";
import tendencia from "../../assets/images/looks/tendencia.png";
import "./looks.scss";

export default function Looks() {
  const looksItems = [
    {
      id: 1,
      image: labios,
      title: "Lábios",
    },
    {
      id: 2,
      image: olhos,
      title: "Olhos",
    },
    {
      id: 3,
      image: rosto,
      title: "Rosto",
    },
    {
      id: 4,
      image: tendencia,
      title: "Tendência",
    },
  ];

  return (
    <section className="looks" id="looks">
      <h2 className="looks__title">Looks e Dicas de Maquiagem</h2>

      <div className="looks__items">
        {looksItems.map((look) => (
          <LooksItem key={look.id} image={look.image} />
        ))}
      </div>
    </section>
  );
}

function LooksItem({ image, title }) {
  return (
    <div className="looks__item">
      <img src={image} alt={title} className="looks__item__image" />
    </div>
  );
}
