# Specification

## Summary
**Goal:** Rebuild the entire website as the Bunsik Korean Restaurant website, replacing all Luna's Kitchen branding with a Korean street food inspired theme, full menu, reservation system, and supporting sections.

**Planned changes:**
- Replace all Luna's Kitchen branding, colors, fonts, and content with Bunsik Korean Restaurant branding using a warm red (#C0392B), black, and cream palette with appropriate sans-serif fonts
- Update index.html meta title, description, and keywords for Bunsik Korean Restaurant in Griffith NSW
- Create a full-screen Hero section with headline "Authentic Korean Street Food in Griffith", subheadline "Fresh • Flavorful • Made with Love", and three CTA buttons (View Menu, Order Online, Book a Table) with smooth scroll, using the hero background image with dark overlay
- Create an About Us section with restaurant story text, address (Shop 1/2 Yambil St, Griffith NSW 2680, Griffin Plaza), and tappable phone number (+61 2 6964 7310)
- Create an Opening Hours section displaying the full weekly schedule with the current day highlighted
- Create a Menu section with four tabbed/separated categories: Korean Street Food, Korean Fried Chicken, Signature Meals, and CUPBAP Bowls — all items and prices exactly as specified
- Create an Online Ordering section with prominent "Order Pickup" and "Order Delivery" buttons linking to placeholder URLs
- Create a Table Reservation section with a form (Name, Phone, Date, Time, Number of Guests) that submits to the backend and shows a success message
- Create a Reviews section with a 4.7-star rating and at least three customer testimonials in a carousel/scrollable list
- Create a Location & Contact section with embedded Google Map iframe, address, tappable phone, and amenity badges (Free Parking, Wheelchair Accessible, Accepts Credit/Debit/NFC)
- Create a fixed Header/Navigation with Bunsik branding, smooth-scroll nav links, and mobile hamburger menu
- Create a Footer with business name, address, phone, opening hours summary, and copyright
- Implement Motoko backend actor with `storeReservation` (name, phone, date, time, guestCount) persisted in stable storage and `getReservations` query function

**User-visible outcome:** Users can browse the full Bunsik Korean Restaurant website, explore the menu, check opening hours, order online (pickup or delivery), book a table, read reviews, and find location/contact details — all in a mobile-friendly Korean street food themed design.
