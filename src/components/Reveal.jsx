import { useEffect, useRef } from "react";
import "../styles/animations.css";

function Reveal({ children, className = "", direction = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Delay vanuit de component meegeven
    if (delay) {
      element.style.setProperty("--reveal-delay", `${delay}s`);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");
        } else {
          // Haal de class weer weg zodat de animatie
          // opnieuw kan starten wanneer je terug scrollt
          element.classList.remove("reveal-visible");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`reveal ${direction} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;