import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Location from './components/Location';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Menu />
        <Experience />
        <Location />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
