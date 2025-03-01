// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home"; // Ensure this path is correct

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import EducationExperience from "./components/EducationExperience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import GraphicDesigns from "./components/GraphicDesigns";
// import HeroSection from "./components/HeroSection";
// import CylinderCanvas from "./components/CylinderCanvas"; // Import the new file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/EducationExperience" element={<EducationExperience />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/graphic-designs" element={<GraphicDesigns />} /> {/* New Route */}
      </Routes>
      <Footer />
      {/* <CylinderCanvas />  */}
    </Router>
  );
}

export default App;
