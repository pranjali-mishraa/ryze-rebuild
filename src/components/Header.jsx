import { useState } from "react";
import { Link } from "react-router-dom";

 export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
       
        <h1 className="text-2xl font-bold text-primary">Ryze</h1>

    
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/features" className="hover:text-primary">Features</Link>
          <Link to="/pricing" className="hover:text-primary">Pricing</Link>
        </nav>

    
        <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg">
          Book a Demo
        </button>

  
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>
          <Link to="/features" onClick={() => setMenuOpen(false)} className="block">
            Features
          </Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block">
            Pricing
          </Link>

          <button className="w-full bg-primary text-white py-2 rounded-lg">
            Book a Demo
          </button>
        </div>
      )}
    </header>
  );
}


