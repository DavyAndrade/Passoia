import React from "react";
import "./pagamento.scss";
import mastercard from "../../../assets/images/footer/mastercard.svg";
import visa from "../../../assets/images/footer/visa.svg";
import pix from "../../../assets/images/footer/pix.svg";
import boleto from "../../../assets/images/footer/boleto.svg";

export default function Pagamento() {
  const formasPagamento = [
    {
      id: 1,
      label: "Master Card",
      icon: mastercard,
    },
    {
      id: 2,
      label: "Visa",
      icon: visa,
    },
    {
      id: 3,
      label: "Pix",
      icon: pix,
    },
    {
      id: 4,
      label: "Boleto",
      icon: boleto,
    },
  ];

  return (
    <section className="pagamento">
      <h3 className="pagamento__title">FORMAS DE PAGAMENTO</h3>

      <div className="pagamento__icons">
        {formasPagamento.map((formaPagamento) => (
          <img
            key={formaPagamento.id}
            src={formaPagamento.icon}
            alt={formaPagamento.label}
          />
        ))}
      </div>
    </section>
  );
}
