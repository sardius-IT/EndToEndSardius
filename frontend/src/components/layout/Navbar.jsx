import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/erasebg-transformed .png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="absolute top-0 left-0 w-full bg-gray-950/40 backdrop-blur-md z-20 shadow-md border-b border-white/">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-start">
          <img src={logo} alt="Logo" className="h-20 w-30" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Who we are</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/sectors" >What we think</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
          <Link to="/admin-login">Admin Login</Link>
        </li>
         
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm px-4 py-4 space-y-4 text-white font-medium grid">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/sectors" onClick={toggleMenu}>Sectors</Link>
          <Link to="/careers" onClick={toggleMenu}>Careers</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
