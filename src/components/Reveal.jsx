
import { useEffect, useRef } from "react";
import "../styles/animations.css";

function Reveal({ children, className = "", direction = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Animatievertraging instellen
    if (delay) {
      element.style.setProperty("--reveal-delay", `${delay}s`);
    }

    // Controleren wanneer het element in beeld komt
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");

          // Observer stoppen zodra de animatie is gestart
          observer.unobserve(element);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
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
