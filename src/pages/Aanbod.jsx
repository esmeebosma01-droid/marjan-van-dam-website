
import "./Aanbod.css";
import Reveal from "../components/Reveal";
import paardHero from "../assets/paard-hero.png";
import persoonlijkeCoaching from "../assets/persoonlijkecoaching.jpg";
import teamcoaching from "../assets/teamcoaching.jpg";
import coachingEigenPaard from "../assets/coachingeigenpaard.jpg";

function Aanbod() {
  return (
    <main className="aanbod-page">

      {/* HERO */}

      <section className="aanbod-hero">

        <div className="aanbod-hero-image">
          <img
            src={paardHero}
            alt="Paard in de natuur"
          />
        </div>

        <div className="aanbod-hero-content">

          <span className="section-tag">
            MIJN AANBOD
          </span>

          <h1>
            Ruimte voor groei,
            <br />
            inzicht en verbinding.
          </h1>

          <div className="aanbod-line"></div>

          <p>
            Ontdek welke vorm van coaching het beste
            aansluit bij jou, jouw paard of jouw team.
          </p>

          <a
            href="#individuele-coaching"
            className="aanbod-button"
          >
            Bekijk mijn aanbod
            <span>→</span>
          </a>

        </div>

      </section>


      {/* 01 INDIVIDUELE COACHING */}

      <section
        id="individuele-coaching"
        className="aanbod-section"
      >

        <div className="aanbod-content">

          <Reveal direction="left">

            <div className="aanbod-text">

              <span className="aanbod-number">01</span>

              <h2>
                Individuele
                <br />
                coaching
              </h2>

              <div className="aanbod-small-line"></div>

              <p>
                Voor volwassenen die meer rust, balans,
                zelfvertrouwen of richting zoeken.
              </p>

              <p>
                Met behulp van paarden ontstaat ruimte om
                stil te staan bij wat er speelt en om nieuwe
                inzichten te krijgen in jezelf en je eigen
                patronen.
              </p>

              <p>
                Je hoeft niet altijd precies te weten wat je
                vraag is. Soms voel je alleen dat iets niet
                lekker loopt of dat je ergens in vastloopt.
                Ook dat is een prima beginpunt.
              </p>

              <a href="#individuele-coaching-info">
                Meer informatie <span>→</span>
              </a>

            </div>

          </Reveal>

          <Reveal direction="right">

            <div className="aanbod-photo-placeholder">

              <img
                src={persoonlijkeCoaching}
                alt="Individuele paardencoaching"
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* INFO INDIVIDUELE COACHING */}

      <section
        id="individuele-coaching-info"
        className="aanbod-info"
      >

        <Reveal>

          <div className="aanbod-info-content">

            <span className="section-tag">
              INDIVIDUELE COACHING
            </span>

            <h2>
              Meer rust,
              <br />
              balans en richting.
            </h2>

            <div className="aanbod-line"></div>

            <p>
              Tijdens de coaching kijken we naar wat er op
              dit moment bij jou speelt. Het paard reageert
              puur en zonder oordeel en kan zichtbaar maken
              wat soms moeilijk onder woorden te brengen is.
            </p>

            <p>Mogelijke thema's zijn:</p>

            <ul className="aanbod-list">
              <li>Grenzen aangeven</li>
              <li>Stress en spanning</li>
              <li>Zelfvertrouwen</li>
              <li>Persoonlijke ontwikkeling</li>
              <li>Werk-privébalans</li>
              <li>Keuzes maken</li>
              <li>Leiderschap</li>
            </ul>

            <p className="aanbod-last-text">
              Ervaring met paarden is niet nodig.
            </p>

          </div>

        </Reveal>

      </section>


      {/* 02 TEAMCOACHING */}

      <section
        id="teamcoaching"
        className="aanbod-section aanbod-section-reverse"
      >

        <div className="aanbod-content">

          <Reveal direction="left">

            <div className="aanbod-photo-placeholder">

              <img
                src={teamcoaching}
                alt="Paarden in de wei bij teamcoaching"
              />

            </div>

          </Reveal>

          <Reveal direction="right">

            <div className="aanbod-text">

              <span className="aanbod-number">02</span>

              <h2>Teamcoaching</h2>

              <div className="aanbod-small-line"></div>

              <p>
                Paarden maken zichtbaar wat er gebeurt binnen
                een team. Hoe communiceren jullie met elkaar?
                Hoe wordt er samengewerkt en wat gebeurt er
                als het even anders loopt dan verwacht?
              </p>

              <p>
                Met behulp van het paard onderzoeken we wat
                er speelt binnen het team. Zo ontstaat ruimte
                voor nieuwe inzichten en om samen te werken
                aan vertrouwen, communicatie en leiderschap.
              </p>

              <p>
                Teamcoaching wordt afgestemd op de samenstelling,
                doelen en behoeften van het team.
              </p>

              <p>
                Teamcoaching is beschikbaar vanaf januari 2027.
              </p>

              <a href="#teamcoaching-info">
                Meer informatie <span>→</span>
              </a>

            </div>

          </Reveal>

        </div>

      </section>


      {/* INFO TEAMCOACHING */}

      <section
        id="teamcoaching-info"
        className="aanbod-info"
      >

        <Reveal>

          <div className="aanbod-info-content">

            <span className="section-tag">
              TEAMCOACHING
            </span>

            <h2>
              Samen ontdekken
              <br />
              wat er speelt.
            </h2>

            <div className="aanbod-line"></div>

            <p>
              Paarden maken zichtbaar wat er gebeurt binnen
              een team. Hoe communiceren jullie met elkaar?
              Hoe wordt er samengewerkt en wat gebeurt er
              als het even anders loopt dan verwacht?
            </p>

            <p>
              Met behulp van het paard onderzoeken we wat
              er speelt binnen het team. Zo ontstaat ruimte
              voor nieuwe inzichten en om samen te werken
              aan vertrouwen, communicatie en leiderschap.
            </p>

            <p>
              Teamcoaching wordt afgestemd op de samenstelling,
              doelen en behoeften van het team.
            </p>

            <p className="aanbod-last-text">
              Teamcoaching is beschikbaar vanaf januari 2027.
            </p>

          </div>

        </Reveal>

      </section>


      {/* 03 COACHING MET JE EIGEN PAARD */}

      <section
        id="eigen-paard"
        className="aanbod-section"
      >

        <div className="aanbod-content">

          <Reveal direction="left">

            <div className="aanbod-text">

              <span className="aanbod-number">03</span>

              <h2>
                Coaching met
                <br />
                je eigen paard
              </h2>

              <div className="aanbod-small-line"></div>

              <p>
                Wil je samen met je eigen paard aan de slag?
                Ook dat is mogelijk.
              </p>

              <p>
                Ik verzorg coaching op locatie, op de plek
                waar jouw paard staat. Samen kijken we naar
                communicatie, vertrouwen, grenzen en
                samenwerking tussen jou en je paard.
              </p>

              <p>
                Coaching op locatie is mogelijk voor
                particulieren en, in overleg, voor organisaties
                en andere locaties waar paarden aanwezig zijn.
              </p>

              <a href="#eigen-paard-info">
                Meer informatie <span>→</span>
              </a>

            </div>

          </Reveal>

          <Reveal direction="right">

            <div className="aanbod-photo-placeholder">

              <img
                src={coachingEigenPaard}
                alt="Coaching met je eigen paard"
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* COACHING OP LOCATIE */}

      <section
        id="eigen-paard-info"
        className="aanbod-info"
      >

        <Reveal>

          <div className="aanbod-info-content">

            <span className="section-tag">
              COACHING OP LOCATIE
            </span>

            <h2>
              Coaching waar
              <br />
              jij en je paard zijn.
            </h2>

            <div className="aanbod-line"></div>

            <p>
              Wil je samen met je eigen paard aan de slag?
              Tijdens de coaching werken we op de plek waar
              jouw paard staat.
            </p>

            <p>
              Samen kijken we naar communicatie, vertrouwen,
              grenzen en samenwerking tussen jou en je paard.
              We onderzoeken wat er speelt en wat jullie
              nodig hebben om elkaar beter te begrijpen.
            </p>

            <p>
              Coaching op locatie is mogelijk voor
              particulieren en, in overleg, voor organisaties
              en andere locaties waar paarden aanwezig zijn.
            </p>

          </div>

        </Reveal>

      </section>


      {/* WERKWIJZE */}

      <section className="aanbod-werkwijze">

        <Reveal>

          <div className="aanbod-werkwijze-content">

            <span className="section-tag">
              WERKWIJZE
            </span>

            <h2>
              Van kennismaking
              <br />
              naar inzicht.
            </h2>

            <div className="aanbod-line"></div>

            <div className="werkwijze-stappen">

              <div className="werkwijze-stap">
                <span>01</span>
                <h3>Kennismaking</h3>
                <p>
                  We bespreken jouw vraag, wat je bezighoudt
                  en wat je uit de coaching wilt halen.
                </p>
              </div>

              <div className="werkwijze-stap">
                <span>02</span>
                <h3>Coaching met het paard</h3>
                <p>
                  We gaan praktisch aan de slag. Je bepaalt
                  mede wat voor jou prettig voelt.
                </p>
              </div>

              <div className="werkwijze-stap">
                <span>03</span>
                <h3>Reflectie</h3>
                <p>
                  We staan stil bij wat er gebeurde, wat je
                  opviel en wat je daarbij voelde.
                </p>
              </div>

              <div className="werkwijze-stap">
                <span>04</span>
                <h3>Vertaling naar de praktijk</h3>
                <p>
                  We kijken hoe je de inzichten kunt meenemen
                  naar je dagelijks leven, thuis of op je werk.
                </p>
              </div>

              <div className="werkwijze-stap">
                <span>05</span>
                <h3>
                  Afronding en eventuele vervolgstappen
                </h3>
                <p>
                  We bespreken wat je meeneemt uit de sessie
                  en of je nog een vervolgstap wilt zetten.
                </p>
              </div>

            </div>

          </div>

        </Reveal>

      </section>


      {/* CTA */}

      <section className="aanbod-cta">

        <Reveal>

          <div className="aanbod-cta-box">

            <span className="section-tag">
              KENNISMAKEN
            </span>

            <h2>
              Benieuwd wat bij jou past?
            </h2>

            <div className="aanbod-line"></div>

            <p>
              Soms begint verandering met één gesprek.
              Samen kijken we welke vorm van coaching
              het beste aansluit.
            </p>

            <a
              href="/contact"
              className="aanbod-button"
            >
              Plan een kennismaking
              <span>→</span>
            </a>

          </div>

        </Reveal>

      </section>

    </main>
  );
}

export default Aanbod;
