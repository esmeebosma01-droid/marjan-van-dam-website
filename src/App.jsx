
import { Routes, Route } from "react-router-dom";

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
