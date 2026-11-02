
import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      className="cta"
      aria-label="Vrijblijvend kennismaken met paardencoaching"
    >
      <div className="cta-content">

        <span className="section-tag">
          KENNISMAKEN
        </span>

        <h2>
          Eerst even kennismaken?
        </h2>

        <p>
          Je hoeft niet precies te weten wat je coachvraag is.
          Tijdens een vrijblijvende kennismaking bespreken we
          waar je tegenaan loopt, wat je graag zou willen
          veranderen en of paardencoaching bij je past.
        </p>

        <Link to="/contact" className="primary">
          Plan een kennismaking
        </Link>

      </div>
    </section>
  );
}

export default CTA;
