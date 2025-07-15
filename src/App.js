import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/services" style={{ marginRight: "1rem" }}>Services</Link>
        <Link to="/contact" style={{ marginRight: "1rem" }}>Contact</Link>
        <Link to="/testimonials">Testimonials</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}
