import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Menu from '../components/Menu';
import Experience from '../components/Experience';
import Reviews from '../components/Reviews';
import Location from '../components/Location';
import CallToAction from '../components/CallToAction';

export default function Homepage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Menu />
      <Experience />
      <Reviews />
      <Location />
      <CallToAction />
    </>
  );
}
