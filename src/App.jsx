import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";  
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Footer from "./components/layout/Footer";

export default function App() {
     const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
     
      <Footer />
    </>
  );
}
