
import "./Why.css";
import Reveal from "./Reveal";

function Why() {
  return (
    <section className="why home-dark">
      <div className="container">

        <Reveal className="why-intro-reveal">
          <div className="why-intro-wrapper">

            <span className="section-tag">
              PAARD&COACH · PAARDENCOACHING
            </span>

            <div className="why-line"></div>

            <h2>
              Meer inzicht in jezelf.
              <br />
              Met hulp van het paard.
            </h2>

            <p className="why-intro">
              Soms loop je ergens in vast, twijfel je over een keuze
              of merk je dat je steeds in hetzelfde patroon terechtkomt.
            </p>

            <p className="why-description">
              Samen met mij en Firenzio onderzoek je wat er speelt.
              Op een rustige, praktische manier, met het paard als spiegel.
            </p>

          </div>
        </Reveal>

        <div className="why-grid">

          <Reveal className="why-card-reveal">
            <div className="why-card">
              <span className="why-number">01</span>
              <div className="card-line"></div>

              <h3>Zonder oordeel</h3>

              <p>
                Een paard reageert puur op jouw gedrag en energie.
                Hierdoor worden patronen zichtbaar die je zelf misschien
                niet direct opmerkt.
              </p>
            </div>
          </Reveal>

          <Reveal className="why-card-reveal delay-1">
            <div className="why-card">
              <span className="why-number">02</span>
              <div className="card-line"></div>

              <h3>Meer inzicht</h3>

              <p>
                Door letterlijk stil te staan ontstaat ruimte om te voelen,
                te reflecteren en opnieuw naar jezelf te kijken.
              </p>
            </div>
          </Reveal>

          <Reveal className="why-card-reveal delay-2">
            <div className="why-card">
              <span className="why-number">03</span>
              <div className="card-line"></div>

              <h3>Persoonlijke groei</h3>

              <p>
                Vanuit vertrouwen en verbinding werk je aan verandering
                die ook na de coaching doorwerkt.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default Why;
