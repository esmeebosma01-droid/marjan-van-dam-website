
import { Link } from "react-router-dom";
import "./Contact.css";

function Bedankt() {
  return (
    <main className="contact-thankyou">

      <div className="contact-thankyou-content">

        <span className="contact-tag">
          MARJAN VAN DAM | PAARD & COACH
        </span>

        <h1>
          Bedankt voor
          <br />
          je bericht!
        </h1>

        <div className="contact-line"></div>

        <p>
          Wat fijn dat je contact hebt opgenomen.
          Marjan heeft je bericht ontvangen en
          komt zo snel mogelijk bij je terug.
        </p>

        <Link to="/" className="contact-button">
          Terug naar de website
          <span>→</span>
        </Link>

      </div>

    </main>
  );
}

export default Bedankt;
