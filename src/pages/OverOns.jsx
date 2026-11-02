
import "./OverOns.css";
import mamaFirenzio from "../assets/mamafirenzio.jpg";
import overons from "../assets/Overons.jpg";
import firenzio from "../assets/firenzio.jpg";
import samen from "../assets/samen.jpg";

function OverOns() {
  return (
    <main className="over-ons">

      {/* =========================
          HERO
      ========================= */}

      <section className="over-ons-hero">
        <div className="over-ons-container">

          <div className="over-ons-intro">

            <span className="over-ons-tag">
              OVER ONS
            </span>

            <div className="over-ons-line"></div>

            <h1>
              Marjan &<br />
              Firenzio
            </h1>

            <p className="over-ons-subtitle">
              Mijn verhaal begint bij mijn liefde voor paarden.
              Samen met Firenzio laat ik je ervaren wat paarden
              je kunnen leren over jezelf.
            </p>

            <a
              href="#ons-verhaal"
              className="over-ons-button"
            >
              Ontdek ons verhaal
              <span>↓</span>
            </a>

          </div>

          <div className="over-ons-main-photo">
            <img
              src={overons}
              alt="Marjan en Firenzio"
              className="firenzio-image"
            />
          </div>

        </div>
      </section>


      {/* =========================
          ONS VERHAAL
      ========================= */}

      <section
        className="over-ons-story"
        id="ons-verhaal"
      >
        <div className="over-ons-container story-layout">

          <div className="story-heading">

            <span className="over-ons-tag">
              ONS VERHAAL
            </span>

            <h2>
              Ruimte om te vertragen
              en jezelf te ontdekken.
            </h2>

          </div>

          <div className="story-text">

            <p>
              Paardencoaching gaat voor mij over vertragen,
              bewustwording en ontdekken wat er in jezelf speelt.
              In het dagelijks leven zijn we vaak bezig met doorgaan,
              oplossingen zoeken en voldoen aan verwachtingen.
              Daardoor staan we niet altijd stil bij wat we zelf nodig hebben.
            </p>

            <p>
              Juist in de samenwerking met een paard ontstaat ruimte
              om even uit je hoofd te komen en te ervaren wat er op
              dat moment gebeurt. Een paard reageert op zijn omgeving
              en op wat het waarneemt, zonder oordeel of verwachtingen.
              Dat kan je helpen om met een andere blik naar jezelf te kijken.
            </p>

            <p>
              Samen met Firenzio wil ik een plek bieden waar je op je
              eigen tempo mag onderzoeken, ervaren en ontdekken.
              Niet omdat alles meteen anders moet, maar omdat inzicht
              in jezelf een eerste stap kan zijn naar verandering.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          MARJAN
      ========================= */}

      <section className="person-section person-marjan">
        <div className="over-ons-container">

          <div className="person-grid">

            <div className="person-photo">
              <img
                src={mamaFirenzio}
                alt="Marjan van Dam"
                className="person-image"
              />
            </div>

            <div className="person-content">

              <span className="over-ons-tag">
                MARJAN
              </span>

              <h2>
                Wie ik ben en waarom
                ik dit werk doe.
              </h2>

              <p>
                Ik geloof dat we de antwoorden op veel van onze
                vragen vaak al in ons hebben, maar dat we ze niet
                altijd helder krijgen. Soms zitten we zo vast in
                onze gedachten of patronen dat we zelf even niet
                meer zien wat we nodig hebben.
              </p>

              <p>
                Met behulp van het paard en de coaching ontstaat
                er ruimte om te vertragen, stil te staan bij wat
                er speelt en niet alleen te begrijpen, maar ook
                te voelen en te ervaren wat er bij je gebeurt.
                Zo kun je nieuwe inzichten opdoen en je eigen
                antwoorden steeds helderder krijgen.
              </p>

              <p>
                In mijn coaching vind ik het belangrijk dat je
                de ruimte krijgt om op je eigen tempo te ontdekken
                wat er speelt. Zonder oordeel en zonder dat alles
                meteen opgelost hoeft te worden.
              </p>

              <p>
                Samen kijken we naar wat jij nodig hebt om verder
                te komen.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FIRENZIO
      ========================= */}

      <section className="person-section person-firenzio">
        <div className="over-ons-container">

          <div className="person-grid reverse">

            <div className="person-content">

              <span className="over-ons-tag">
                FIRENZIO
              </span>

              <h2>
                Maak kennis met
                Firenzio.
              </h2>

              <p>
                Firenzio is mijn paard en een belangrijk onderdeel
                van mijn manier van coachen. Hij reageert op wat er
                om hem heen gebeurt en laat met zijn lichaam
                verschillende signalen zien.
              </p>

              <p>
                Die signalen vormen een ingang om samen stil te
                staan bij wat er tijdens een sessie gebeurt. Niet
                omdat een paard alle antwoorden heeft, maar omdat
                zijn gedrag ons iets geeft om naar te kijken en
                over in gesprek te gaan.
              </p>

              <h3>
                Je hoeft geen ervaring met paarden te hebben
              </h3>

              <p>
                Tijdens de sessie werk je vanaf de grond met het
                paard. Je hoeft dus niet op het paard te rijden
                en je hebt ook geen ervaring met paarden nodig.
              </p>

              <p>
                We beginnen met jouw vraag en kijken samen wat er
                ontstaat. We kunnen oefeningen doen in de bak,
                samen met het paard, maar het is ook mogelijk om
                wat meer afstand te houden. Bijvoorbeeld door het
                paard in de bak te laten en zelf buiten de bak
                te blijven.
              </p>

              <p>
                We kijken samen wat voor jou prettig voelt en
                waar jij je op je gemak voelt. Alles gebeurt op
                een rustige en veilige manier, waarbij we rekening
                houden met jouw grenzen en die van het paard.
              </p>

              <p>
                Je hoeft niets te kunnen of te presteren. Je mag
                op je eigen tempo ontdekken en ervaren wat
                paardencoaching voor jou kan betekenen.
              </p>

            </div>

            <div className="person-photo">
              <img
                src={firenzio}
                alt="Firenzio"
                className="person-image"
              />
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          SAMEN
      ========================= */}

      <section className="together-section">
        <div className="over-ons-container">

          <div className="together-photo">
            <img
              src={samen}
              alt="Marjan en Firenzio"
              className="together-image"
            />
          </div>

          <div className="together-content">

            <div className="together-heading">

              <span className="over-ons-tag">
                SAMEN
              </span>

              <h2>
                Samen creëren we ruimte
                voor verandering.
              </h2>

            </div>

            <div className="together-text">

              <p>
                Ik hoef je niet te vertellen wie je moet zijn of
                wat je moet veranderen. Samen met Firenzio kijken
                we naar wat er bij jou speelt en waar je tegenaan
                loopt.
              </p>

              <p>
                Vaak heb je zelf al meer antwoorden in je dan je
                denkt. Door stil te staan bij wat er gebeurt, te
                voelen en te ervaren, ontstaat er ruimte om dingen
                helderder te krijgen en te ontdekken wat bij jou
                past.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default OverOns;
