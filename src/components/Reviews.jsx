
import "./Reviews.css";
import { useEffect, useState } from "react";

function Reviews() {
  const reviews = [
    {
      text: "De paardencoaching was voor mij een bijzondere ervaring. Vanaf het eerste moment voelde ik me op mijn gemak bij Marjan. Door de rustige begeleiding en de fijne sfeer kreeg ik de ruimte om mezelf te zijn en stil te staan bij wat er in mij omging. De samenwerking met Firenzio maakte het extra bijzonder. Ik kijk met een goed gevoel terug op deze ervaring!",
      name: "Linda",
    },
    {
      text: "Ik vond het best spannend om aan mezelf te werken en te ontdekken hoe een paard op mijn gedrag reageert. Marjan stelde me direct op mijn gemak en begeleidde de sessie op een rustige en prettige manier. Tijdens de oefeningen gebeurde er iets bijzonders. Op een moment dat ik blokkeerde, gaf Firenzio mij letterlijk het zetje in de rug dat ik nodig had. Marjan voelde goed aan wat er bij mij speelde en wist hier mooi op in te spelen. Marjan is een rustige vrouw met veel inzicht, gevoel en geduld. De samenwerking tussen haar en Firenzio is bijzonder om te ervaren. Ik heb veel inzichten gekregen, concrete adviezen meegekregen en ben blij dat ik deze sessie heb gedaan. Ik was vooraf best sceptisch, maar kan nu zeggen: het werkt echt! Absoluut een aanrader en zeker voor herhaling vatbaar.",
      name: "Enna",
    },
    {
      text: "Ik heb een hele positieve ervaring gehad met de paardencoaching. Ze was rustig, geduldig en stelde me op mijn gemak. Er hing een fijne en vertrouwde sfeer, waardoor ik mezelf kon zijn. Ik vond het een fijne ervaring. Ik zou haar zeker aanraden aan anderen!",
      name: "Lynn",
    },
  ];

  const [activeReview, setActiveReview] = useState(0);

  // Automatisch wisselen
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="reviews home-dark">
      <div className="reviews-container">

        {/* TITEL */}
        <div className="reviews-heading">
          <span className="section-tag">
            ERVARINGEN
          </span>

          <div className="reviews-line"></div>

          <h2>
            Wat anderen ervaren.
          </h2>
        </div>

        {/* REVIEW */}
        <div className="review-main">
          <div className="quote-mark">
            “
          </div>

          <div
            key={activeReview}
            className="review-content"
          >
            <p className="review-text">
              {reviews[activeReview].text}
            </p>

            <span className="review-name">
              — {reviews[activeReview].name}
            </span>

            <div className="review-stars">
              ★★★★★
            </div>
          </div>

          {/* STREEPJES */}
          <div className="review-dots">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                className={index === activeReview ? "active" : ""}
                onClick={() => setActiveReview(index)}
                aria-label={`Bekijk review van ${review.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
