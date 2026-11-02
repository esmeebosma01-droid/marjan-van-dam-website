
import "./Tarieven.css";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import halsterMuur from "../assets/halster-muur.png";

function Tarieven() {
  return (
    <main className="tarieven-page">

      {/* =========================
          HERO
      ========================= */}

      <section
        className="tarieven-hero"
        aria-label="Tarieven voor paardencoaching"
      >

        <div className="tarieven-hero-text">

          <Reveal direction="left">

            <span className="tarieven-tag">
              TARIEVEN
            </span>

            <h1>
              Ruimte voor groei,
              <br />
              met aandacht voor jou.
            </h1>

            <div className="tarieven-line"></div>

            <p>
              Heldere tarieven voor persoonlijke coaching,
              coaching met je eigen paard en teamcoaching.
            </p>

          </Reveal>

        </div>

        <Reveal
          direction="right"
          className="tarieven-hero-photo-reveal"
        >

          <div className="tarieven-hero-photo">

            <img
              src={halsterMuur}
              alt="Paardenhalster aan een houten muur"
            />

          </div>

        </Reveal>

      </section>


      {/* =========================
          INVESTERING
      ========================= */}

      <section
        id="tarieven-overzicht"
        className="tarieven-investering"
        aria-label="Overzicht van de tarieven"
      >

        <Reveal>

          <div className="tarieven-intro">

            <span className="tarieven-tag">
              INVESTERING
            </span>

            <h2>
              Een investering
              <br />
              in jezelf.
            </h2>

            <div className="tarieven-line"></div>

            <p>
              Bekijk de tarieven voor individuele coaching,
              coaching met je eigen paard en teamcoaching.
              Heb je vragen over welk aanbod bij jou past?
              Neem gerust contact op.
            </p>

          </div>

        </Reveal>


        {/* =========================
            INDIVIDUELE COACHING
        ========================= */}

        <Reveal>

          <div className="tarief-card">

            <div className="tarief-number">
              01
            </div>

            <div className="tarief-info">

              <span>
                INDIVIDUELE COACHING
              </span>

              <h3>
                Persoonlijke coaching
              </h3>

              <p>
                Een persoonlijke sessie waarin we samen
                kijken naar wat er op dit moment bij jou
                speelt.
              </p>

              <div className="tarief-prijzen">

                <div className="tarief-prijs-regel">
                  <span>1 sessie</span>
                  <strong>€ 125</strong>
                </div>

                <div className="tarief-prijs-regel">
                  <span>3 sessies</span>
                  <strong>€ 120</strong>
                </div>

                <div className="tarief-prijs-regel">
                  <span>5 sessies</span>
                  <strong>€ 115</strong>
                </div>

              </div>

              <small className="tarief-per-sessie">
                Prijs per sessie
              </small>

              <div className="tarief-prijzen">

                <div className="tarief-prijs-regel">
                  <span>Totaal 1 sessie</span>
                  <strong>€ 125</strong>
                </div>

                <div className="tarief-prijs-regel">
                  <span>Totaal 3 sessies</span>
                  <strong>€ 360</strong>
                </div>

                <div className="tarief-prijs-regel">
                  <span>Totaal 5 sessies</span>
                  <strong>€ 575</strong>
                </div>

              </div>

              <small className="tarief-per-sessie">
                Totaalprijs per pakket
              </small>

            </div>

          </div>

        </Reveal>


        {/* =========================
            EIGEN PAARD
        ========================= */}

        <Reveal>

          <div className="tarief-card">

            <div className="tarief-number">
              02
            </div>

            <div className="tarief-info">

              <span>
                COACHING MET JE EIGEN PAARD
              </span>

              <h3>
                Coaching op locatie
              </h3>

              <p>
                Persoonlijke coaching met jouw eigen paard,
                op de locatie waar jouw paard staat.
              </p>

            </div>

            <div className="tarief-prijs">

              <strong>
                Op aanvraag
              </strong>

            </div>

          </div>

        </Reveal>


        {/* =========================
            TEAMCOACHING
        ========================= */}

        <Reveal>

          <div className="tarief-card">

            <div className="tarief-number">
              03
            </div>

            <div className="tarief-info">

              <span>
                TEAMCOACHING
              </span>

              <h3>
                Teamcoaching
              </h3>

              <p>
                Coaching voor teams, afgestemd op de
                samenstelling, doelen en behoeften van
                de organisatie.
              </p>

              <small className="tarief-beschikbaar">
                Beschikbaar vanaf januari 2027.
              </small>

            </div>

            <div className="tarief-prijs">

              <strong>
                Op aanvraag
              </strong>

            </div>

          </div>

        </Reveal>


        {/* =========================
            GOED OM TE WETEN
        ========================= */}

        <Reveal>

          <div className="tarieven-notice">

            <span>
              GOED OM TE WETEN
            </span>

            <p>
              Eventuele reiskosten worden vooraf besproken.
            </p>

          </div>

        </Reveal>

      </section>


      {/* =========================
          AANDACHT
      ========================= */}

      <section
        className="tarieven-aandacht"
        aria-label="Persoonlijke aandacht bij coaching"
      >

        <Reveal>

          <div className="tarieven-aandacht-content">

            <span className="tarieven-tag">
              GOED OM TE WETEN
            </span>

            <h2>
              Persoonlijke aandacht
              <br />
              staat centraal.
            </h2>

            <div className="tarieven-line"></div>

            <p>
              Voor iedere begeleiding wordt gekeken naar
              de persoonlijke situatie en de gewenste
              resultaten. Tijdens een kennismaking kunnen
              we bespreken wat het beste aansluit.
            </p>

            <p>
              Heb je vragen over de tarieven of weet je nog
              niet welke vorm van coaching bij jou past?
              Neem gerust contact op. Ik denk graag met je mee.
            </p>

          </div>

        </Reveal>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section
        className="tarieven-cta"
        aria-label="Vrijblijvend kennismaken"
      >

        <Reveal>

          <div className="tarieven-cta-content">

            <span className="tarieven-tag">
              KENNISMAKEN
            </span>

            <h2>
              Eerst even kennismaken?
            </h2>

            <div className="tarieven-line"></div>

            <p>
              Heb je een vraag of wil je bespreken welke
              vorm van coaching bij jou past? Neem gerust
              contact op voor een vrijblijvend gesprek.
            </p>

            <Link
              to="/contact"
              className="tarieven-button"
            >
              Neem contact op
              <span>→</span>
            </Link>

          </div>

        </Reveal>

      </section>

    </main>
  );
}

export default Tarieven;
