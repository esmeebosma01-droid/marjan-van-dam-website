
import "./Contact.css";
import Reveal from "../components/Reveal";
import tarieven from "../assets/tarieven.jpg";

function Contact() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section
        className="contact-hero"
        aria-label="Contact met Marjan van Dam"
      >
        <div className="contact-hero-content">
          <Reveal direction="left">
            <div className="contact-hero-text">
              <span className="contact-tag">CONTACT</span>

              <h1>
                Laten we
                <br />
                kennismaken.
              </h1>

              <div className="contact-line"></div>

              <p>
                Heb je een vraag of wil je ontdekken wat
                paardencoaching voor jou kan betekenen?
                Neem gerust contact met mij op.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="contact-hero-photo">
              <img
                src={tarieven}
                alt="Paard tijdens een paardencoachingsessie"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact-main"
        aria-label="Contactgegevens en contactformulier"
      >
        <div className="contact-container">

          <Reveal direction="left">
            <div className="contact-info">
              <span className="contact-tag">NEEM CONTACT OP</span>

              <h2>
                Ik hoor graag
                <br />
                van je.
              </h2>

              <div className="contact-line"></div>

              <p className="contact-intro">
                Wil je meer weten over paardencoaching,
                teamcoaching of een kennismaking plannen?
                Stuur gerust een bericht.
              </p>

              <div className="contact-details">

                <div className="contact-detail">
                  <span className="contact-detail-label">
                    TELEFOON
                  </span>

                  <a href="tel:0654344039">
                    06 - 54 34 40 39
                  </a>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail-label">
                    EMAIL
                  </span>

                  <a href="mailto:paard.en.coach@outlook.com">
                    paard.en.coach@outlook.com
                  </a>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail-label">
                    LOCATIE
                  </span>

                  <p>Lutjegast, Groningen</p>
                </div>

              </div>
            </div>
          </Reveal>

          {/* CONTACTFORMULIER */}
          <Reveal direction="right">
            <div className="contact-form-wrapper">

              <form
                className="contact-form"
                name="contact"
                method="POST"
                action="/bedankt"
                data-netlify="true"
              >

                <input
                  type="hidden"
                  name="form-name"
                  value="contact"
                />

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="naam">Naam</label>

                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      placeholder="Je naam"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mailadres</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Je e-mailadres"
                      autoComplete="email"
                      required
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label htmlFor="telefoon">
                    Telefoonnummer
                  </label>

                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    placeholder="Je telefoonnummer"
                    autoComplete="tel"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bericht">Bericht</label>

                  <textarea
                    id="bericht"
                    name="bericht"
                    rows="7"
                    placeholder="Waar kan ik je mee helpen?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-button"
                >
                  Verstuur bericht
                  <span>→</span>
                </button>

              </form>
            </div>
          </Reveal>

        </div>
      </section>

      {/* CTA */}
      <section
        className="contact-cta"
        aria-label="Vrijblijvend kennismaken met paardencoaching"
      >
        <Reveal>
          <div className="contact-cta-content">
            <span className="contact-tag">KENNISMAKEN</span>

            <h2>
              Soms begint verandering
              <br />
              met één gesprek.
            </h2>

            <div className="contact-line"></div>

            <p>
              Neem de eerste stap en ontdek wat
              paardencoaching voor jou kan betekenen.
            </p>

            <a
              href="mailto:paard.en.coach@outlook.com"
              className="contact-button"
            >
              Neem contact op
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </section>

    </main>
  );
}

export default Contact;
