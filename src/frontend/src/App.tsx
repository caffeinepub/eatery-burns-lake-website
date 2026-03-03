import React, { useState } from "react";
import AboutSection from "./components/AboutSection";
import ChefsSpecials from "./components/ChefsSpecials";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import Navigation from "./components/Navigation";
import ReservationModal from "./components/ReservationModal";
import ReviewsSection from "./components/ReviewsSection";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-100">
      <Navigation onReserveClick={() => setReservationOpen(true)} />
      <main className="flex-1">
        <HeroSection onReserveClick={() => setReservationOpen(true)} />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ReviewsSection />
        <ChefsSpecials />
        <ContactSection />
      </main>
      <SiteFooter />
      <ReservationModal
        open={reservationOpen}
        onOpenChange={setReservationOpen}
      />
    </div>
  );
}
