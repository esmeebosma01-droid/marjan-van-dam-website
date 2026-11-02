
import "./Services.css";
import Reveal from "./Reveal";

function Services() {
  return (
    <section className="services home-light">

      <div className="services-container">

        {/* =========================
            LINKERKANT
        ========================= */}

        <Reveal direction="left">

          <div className="services-intro">

            <span className="services-label">
              MIJN AANBOD
            </span>

            <h2>
              Waarmee ik
              <br />
              jou kan helpen.
            </h2>

            <div className="services-line"></div>

            <p>
              Of je nu op zoek bent naar meer rust en
              balans, inzicht in de relatie met je paard
              of betere samenwerking binnen je team.
              Samen kijken we wat bij jou past.
            </p>

          </div>

        </Reveal>


        {/* =========================
            RECHTERKANT
        ========================= */}

        <div className="services-list">


          {/* =========================
              01 INDIVIDUELE PAARDENCOACHING
          ========================= */}

          <Reveal direction="right">

            <article className="service-item">

              <div className="service-number">
                01
              </div>

              <div className="service-content">

                <h3>
                  Individuele paardencoaching
                </h3>

                <p>
                  Voor volwassenen die meer rust, balans of
                  zelfvertrouwen zoeken, of ergens tegenaan
                  lopen in hun werk of privéleven.
                </p>

                <a
                  href="/aanbod#individuele-coaching-info"
                  className="service-link"
                >
                  Ontdek paardencoaching
                  <span>→</span>
                </a>

              </div>

            </article>

          </Reveal>


          {/* =========================
              02 TEAMCOACHING
          ========================= */}

          <Reveal direction="right" delay={0.1}>

            <article className="service-item">

              <div className="service-number">
                02
              </div>

              <div className="service-content">

                <h3>
                  Teamcoaching
                </h3>

                <p>
                  Voor teams die willen werken aan communicatie,
                  samenwerking, vertrouwen en leiderschap.
                </p>

                <small className="service-availability">
                  Beschikbaar vanaf december 2026.
                </small>

                <a
                  href="/aanbod#teamcoaching-info"
                  className="service-link"
                >
                  Ontdek teamcoaching
                  <span>→</span>
                </a>

              </div>

            </article>

          </Reveal>


          {/* =========================
              03 COACHING MET JE EIGEN PAARD
          ========================= */}

          <Reveal direction="right" delay={0.2}>

            <article className="service-item">

              <div className="service-number">
                03
              </div>

              <div className="service-content">

                <h3>
                  Coaching met je eigen paard
                </h3>

                <p>
                  Voor paardeneigenaren die willen werken aan
                  vertrouwen, communicatie, grenzen en
                  samenwerking met hun paard.
                </p>

                <a
                  href="/aanbod#eigen-paard-info"
                  className="service-link"
                >
                  Ontdek coaching met je eigen paard
                  <span>→</span>
                </a>

              </div>

            </article>

          </Reveal>


        </div>

      </div>

    </section>
  );
}

export default Services;
