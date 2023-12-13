import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Skill from "./Skill";
import About from "./About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Router>
    </div>
  );
}
export default App;
