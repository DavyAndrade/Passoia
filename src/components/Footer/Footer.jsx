import React from "react";
import mastercard from "../../assets/images/footer/mastercard.svg";
import visa from "../../assets/images/footer/visa.svg";
import pix from "../../assets/images/footer/pix.svg";
import boleto from "../../assets/images/footer/boleto.svg";
import Atendimento from "./Atendimento/Atendimento";
import Pagamento from "./Pagamento/Pagamento";
import RedesSociais from "./RedesSociais/RedesSociais";
import "./footer.scss";

export default function Footer() {
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
    <footer className="footer">
      <div className="footer__container">
        <Atendimento />

        <Pagamento />

        <RedesSociais />
      </div>
    </footer>
  );
}
