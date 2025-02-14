import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import React from "react";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <div>
            <Hero />
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
          </div>
        </AnimatePresence>
        <Footer/>
      </div>
    </Router>
  );
}
