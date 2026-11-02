import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/marjan-logo-transparent.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container">

        {/* =========================
            LOGO + NAAM
        ========================= */}

        <Link to="/" className="brand">

          <img
            src={logo}
            alt="Marjan van Dam Paard & Coaching"
            className="brand-logo"
          />

          <div className="brand-text">

            <div className="brand-name">
              Marjan van Dam
            </div>

            <div className="brand-subtitle">
              PAARD & COACHING
            </div>

          </div>

        </Link>


        {/* =========================
            NAVIGATIE
        ========================= */}

        <nav>
          <ul>

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/over-ons">
                Over ons
              </Link>
            </li>

            <li>
              <Link to="/aanbod">
                Aanbod
              </Link>
            </li>

            <li>
              <Link to="/tarieven">
                Tarieven
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </nav>


        {/* =========================
            CTA
        ========================= */}

        <Link
          to="/contact"
          className="btn-nav"
        >
          Plan een kennismaking
        </Link>

      </div>

    </header>
  );
}

export default Navbar;