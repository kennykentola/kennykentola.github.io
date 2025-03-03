import React from "react";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import HelmetProvider
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import EducationExperience from "./components/EducationExperience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import GraphicDesigns from "./components/GraphicDesigns";

function App() {
  return (
    <HelmetProvider> {/* ✅ Wrap the whole app */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/graphic-designs" element={<GraphicDesigns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education-experience" element={<EducationExperience />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
