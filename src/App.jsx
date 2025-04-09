import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import About from './Pages/About/About'
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Project/Project";
import Resume from "./Pages/Resume/Resume";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
