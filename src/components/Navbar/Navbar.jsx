import logo from "../../assets/icons/passoia-logo.svg";
import menu from "../../assets/icons/menu.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <img src={logo} alt="Passoia Logo" className="navbar__logo" />
      <button>
        <img src={menu} alt="Menu" />
      </button>
    </header>
  );
}
