import Atendimento from "./Atendimento/Atendimento";
import Pagamento from "./Pagamento/Pagamento";
import RedesSociais from "./RedesSociais/RedesSociais";
import "./footer.scss";

export default function Footer() {
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
