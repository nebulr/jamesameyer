import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Repositories from './components/Repositories';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Services />
        <Testimonials />
        <Repositories />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
