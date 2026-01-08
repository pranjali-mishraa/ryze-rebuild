import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

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

    
        <Button >Get Started</Button>

  
        <Button onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu">
            =
           </Button>
        
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

          <button className="bg-primary text-white">
            Book a Demo
          </button>
        </div>
      )}
    </header>
  );
}


