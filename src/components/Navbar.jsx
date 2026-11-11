
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/marjan-logo-transparent.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">

        {/* LOGO + NAAM */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Marjan van Dam Paard & Coach"
            className="brand-logo"
          />

          <div className="brand-text">
            <div className="brand-name">
              Marjan van Dam
            </div>

            <div className="brand-subtitle">
              PAARD & COACH
            </div>
          </div>
        </Link>

        {/* HAMBURGERMENU */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATIE */}
        <nav className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/over-ons" onClick={closeMenu}>Over ons</Link></li>
            <li><Link to="/aanbod" onClick={closeMenu}>Aanbod</Link></li>
            <li><Link to="/tarieven" onClick={closeMenu}>Tarieven</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="btn-nav"
          onClick={closeMenu}
        >
          Plan een kennismaking
        </Link>

      </div>
    </header>
  );
}

export default Navbar;
