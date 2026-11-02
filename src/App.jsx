
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import OverOns from "./pages/OverOns";
import Aanbod from "./pages/Aanbod";
import Tarieven from "./pages/Tarieven";
import Contact from "./pages/Contact";
import Bedankt from "./pages/Bedankt";


function Home() {
  return (
    <>
      <Helmet>
        <title>Paardencoaching Groningen | Marjan van Dam</title>
        <meta
          name="description"
          content="Op zoek naar paardencoaching in Groningen? Marjan van Dam biedt persoonlijke coaching met paarden, coaching met je eigen paard en teamcoaching in Lutjegast."
        />
      </Helmet>

      <Navbar />
      <Hero />
      <Why />
      <About />
      <Services />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}


function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* OVER ONS */}
      <Route
        path="/over-ons"
        element={
          <>
            <Helmet>
              <title>Over Marjan van Dam | Paardencoaching Groningen</title>
              <meta
                name="description"
                content="Leer Marjan van Dam kennen. Ontdek haar achtergrond, ervaring en passie voor paardencoaching in Lutjegast, Groningen."
              />
            </Helmet>

            <Navbar />
            <OverOns />
            <Footer />
          </>
        }
      />

      {/* AANBOD */}
      <Route
        path="/aanbod"
        element={
          <>
            <Helmet>
              <title>Aanbod paardencoaching | Marjan van Dam</title>
              <meta
                name="description"
                content="Ontdek het aanbod van Marjan van Dam: individuele paardencoaching, coaching met je eigen paard en teamcoaching in Groningen."
              />
            </Helmet>

            <Navbar />
            <Aanbod />
            <Footer />
          </>
        }
      />

      {/* TARIEVEN */}
      <Route
        path="/tarieven"
        element={
          <>
            <Helmet>
              <title>Tarieven paardencoaching | Marjan van Dam</title>
              <meta
                name="description"
                content="Bekijk de tarieven voor individuele paardencoaching, coaching met je eigen paard en teamcoaching bij Marjan van Dam."
              />
            </Helmet>

            <Navbar />
            <Tarieven />
            <Footer />
          </>
        }
      />

      {/* CONTACT */}
      <Route
        path="/contact"
        element={
          <>
            <Helmet>
              <title>Contact | Paardencoaching Marjan van Dam</title>
              <meta
                name="description"
                content="Neem vrijblijvend contact op met Marjan van Dam voor paardencoaching in Lutjegast, Groningen. Plan een kennismaking."
              />
            </Helmet>

            <Navbar />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* BEDANKTPAGINA */}
      <Route
        path="/bedankt"
        element={
          <>
            <Helmet>
              <title>Bedankt voor je bericht | Marjan van Dam</title>
              <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <Navbar />
            <Bedankt />
            <Footer />
          </>
        }
      />

    </Routes>
  );
}

export default App;
