import { useState } from "react";
import batomAzul from "../../assets/images/lancamentos/azul.png";
import batomVermelho from "../../assets/images/lancamentos/vermelho.png";
import batomMarrom from "../../assets/images/lancamentos/marrom.png";
import batomBase from "../../assets/images/lancamentos/base.png";
import fiveStars from "../../assets/icons/five-stars.svg";
import "./launches.scss";
import Batom from "./Batom/Batom";

export default function Launches() {
  return (
    <section className="launches scroll-container" id="launches">
      <h2 className="launches__title">Aproveite os Lançamentos</h2>

      <Batom />
    </section>
  );
}
