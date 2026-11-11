
import "./Footer.css";
import logo from "../assets/marjan-logo-transparent.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Marjan van Dam - Paard & Coach"
            className="footer-logo-image"
          />

          <p>
            Paardencoaching, individuele coaching,
            teamcoaching en coaching met je eigen paard.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/marjanvandam.paard.en.coach/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://www.linkedin.com/in/marjan-van-dam-29b34995/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="mailto:paard.en.coach@outlook.com"
              aria-label="E-mail"
            >
              ✉
            </a>
          </div>
        </div>

        {/* NAVIGATIE */}
        <div className="footer-column">
          <span className="footer-heading">NAVIGATIE</span>
          <div className="footer-line"></div>

          <a href="/">Home</a>
          <a href="/over-ons">Over ons</a>
          <a href="/aanbod">Aanbod</a>
          <a href="/tarieven">Tarieven</a>
          <a href="/contact">Contact</a>
        </div>

        {/* AANBOD */}
        <div className="footer-column">
          <span className="footer-heading">AANBOD</span>
          <div className="footer-line"></div>

          <a href="/aanbod#individuele-coaching-info">
            Individuele coaching
          </a>

          <a href="/aanbod#eigen-paard-info">
            Coaching met eigen paard
          </a>

          <a href="/aanbod#teamcoaching-info">
            Teamcoaching
          </a>

          <a href="/aanbod#eigen-paard-info">
            Coaching op locatie
          </a>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <span className="footer-heading">CONTACT</span>
          <div className="footer-line"></div>

          <p>📍 Lutjegast, Groningen</p>

          <a href="tel:0654344039">
            ✆ 06 - 54 34 40 39
          </a>

          <a href="mailto:paard.en.coach@outlook.com">
            ✉ paard.en.coach@outlook.com
          </a>

          <a href="/contact" className="footer-button">
            <span>Plan een kennismaking</span>
            <span className="footer-button-arrow">→</span>
          </a>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <span>
          © 2026 Marjan van Dam | Paard & Coach
        </span>

        <span className="footer-leaf">❧</span>

        <div>
          <span>KvK: 42195201</span>

          <span>|</span>

          <a
            href="/privacyverklaring.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacyverklaring
          </a>

          <span>|</span>

          <a
            href="/algemene-voorwaarden.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Algemene voorwaarden
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
