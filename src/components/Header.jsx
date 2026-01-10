
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Tools/Button";
import AboutUs from "./AboutUs/AboutUs";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 
                 bg-white/70 backdrop-blur-md 
                 border-b border-black/10 shadow-sm"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-heading tracking-tight">
          Ryze
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/aboutUs" className="hover:text-primary transition">
            About Us
          </Link>
          <Link to="/caseStudy" className="hover:text-primary transition">
            Case Study
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t px-6 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block font-medium"
          >
            Home
          </Link>

          <Link
            to="./AboutUs/AboutUs"
            onClick={() => setOpen(false)}
            className="block font-medium"
          >
            About Us
          </Link>

          <Link
            to="/pricing"
            onClick={() => setOpen(false)}
            className="block font-medium"
          >
            Case Study
          </Link>

          <Button>Get Started</Button>
        </div>
      )}
    </header>
  );
}
