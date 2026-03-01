import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OpeningHours from '../components/OpeningHours';
import Menu from '../components/Menu';
import OnlineOrdering from '../components/OnlineOrdering';
import ReservationForm from '../components/ReservationForm';
import Reviews from '../components/Reviews';
import Location from '../components/Location';

export default function Homepage() {
  return (
    <>
      <Hero />
      <section id="about">
        <AboutUs />
      </section>
      <OpeningHours />
      <section id="menu">
        <Menu />
      </section>
      <section id="order">
        <OnlineOrdering />
      </section>
      <section id="reservation">
        <ReservationForm />
      </section>
      <Reviews />
      <section id="contact">
        <Location />
      </section>
    </>
  );
}
