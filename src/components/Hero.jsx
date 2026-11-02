import "./Hero.css";
import Reveal from "./Reveal";
import firenzioHero from "../assets/firenzio-hero2.jpg";

function Hero() {
  return (
    <section className="home-hero">

      <div className="home-hero-content">

        <Reveal direction="left">

          <div className="home-hero-text">

            <span className="home-hero-label">
              WELKOM BIJ MARJAN VAN DAM
            </span>

            <h1>
              Samen ontdekken
              <br />
              wat er echt speelt.
            </h1>

            <div className="home-hero-line"></div>

            <p>
              Coaching met paarden voor meer rust,
              inzicht, vertrouwen en verbinding.
            </p>

            <a
              href="/aanbod"
              className="home-hero-button"
            >
              Ontdek het aanbod
              <span>→</span>
            </a>

          </div>

        </Reveal>

        <Reveal direction="right">

          <div className="home-hero-image">

            <img
              src={firenzioHero}
              alt="Firenzio"
            />

          </div>

        </Reveal>

      </div>

    </section>
  );
}

export default Hero;