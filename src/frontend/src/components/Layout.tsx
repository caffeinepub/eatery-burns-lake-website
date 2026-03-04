import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
