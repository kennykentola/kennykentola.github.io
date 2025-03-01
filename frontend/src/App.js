import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import EducationExperience from "./components/EducationExperience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import GraphicDesigns from "./components/GraphicDesigns";

function App() {
  return (
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
  );
}

export default App;
