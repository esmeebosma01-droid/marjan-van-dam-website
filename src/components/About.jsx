
import "./About.css";
import mama from "../assets/mama2.jpg";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about home-light">

      <div className="container about-grid">

        {/* FOTO */}

        <Reveal direction="left">
          <div className="about-image">
            <img
              src={mama}
              alt="Marjan van Dam"
            />
          </div>
        </Reveal>

        {/* TEKST */}

        <Reveal direction="right">
          <div className="about-content">

            <span className="about-label">
              OVER MIJ
            </span>

            <h2>
              Samen ontdekken we
              <br />
              wat jij nodig hebt.
            </h2>

            <p>
              Mijn naam is Marjan van Dam. Paarden zijn al jarenlang
              een belangrijk onderdeel van mijn leven. Daarnaast werk
              ik als leidinggevende in de zorg, waar ik dagelijks te
              maken heb met mensen, communicatie en persoonlijke
              ontwikkeling.
            </p>

            <p>
              Wat mij zo aanspreekt in paardencoaching, is de manier
              waarop een paard je kan laten stilstaan bij je eigen
              gedrag en patronen. Juist de combinatie van mijn ervaring
              in het begeleiden van mensen en de bijzondere manier
              waarop paarden reageren, maakt dit werk voor mij zo waardevol.
            </p>

            <Link to="/over-ons" className="about-button">
              Ontdek het aanbod
              <span aria-hidden="true">→</span>
            </Link>

          </div>
        </Reveal>

      </div>

    </section>
  );
}

export default About;
