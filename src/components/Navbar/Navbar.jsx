import { useState } from "react";
import logo from "../../assets/icons/passoia-logo.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      id: 1,
      label: "Looks",
      href: "#looks",
    },
    {
      id: 2,
      label: "Lançamentos",
      href: "#launches",
    },
    {
      id: 3,
      label: "Novidades",
      href: "#news",
    },
  ];

  return (
    <header className="navbar">
      {/* Navbar Container */}
      <div className="navbar__container">
        {/* Navbar Logo */}
        <a className="navbar__logo" href="#home">
          <img src={logo} alt="Passoia Logo" className="navbar__logo__image" />
        </a>

        {/* Mobile Menu Button */}
        <button className="navbar__menu-button" onClick={toggleMenu}>
          <img src={isMenuOpen ? close : menu} alt="Menu" />
        </button>

        {/* Desktop Menu */}
        <nav className="navbar__desktop">
          {navItems.map((item) => (
            <NavItem key={item.id} {...item} closeMenu={closeMenu} />
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}

      {isMenuOpen ? (
        <nav className="navbar__mobile">
          {navItems.map((item) => (
            <NavItem key={item.id} {...item} closeMenu={closeMenu} />
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function NavItem({ label, href, closeMenu }) {
  return (
    <a href={href} onClick={closeMenu} className="navbar__item">
      {label}
    </a>
  );
}
