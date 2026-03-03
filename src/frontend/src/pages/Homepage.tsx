import React from "react";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Menu from "../components/Menu";
import OnlineOrdering from "../components/OnlineOrdering";
import OpeningHours from "../components/OpeningHours";
import ReservationForm from "../components/ReservationForm";
import Reviews from "../components/Reviews";

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
