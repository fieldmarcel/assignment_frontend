import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = ({setFormOpen}) => {
  const [openNav, setopenNav] = useState(false);
  const toggleMenu = () =>{
    setopenNav(!openNav)
  } 
const handleForm = () => {
setFormOpen(true);
    setopenNav(false);
    

}
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div>
          <img src="/" alt="logo" className="h-8 w-auto" />
        </div>

        
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/about" className="hover:text-red-400">About Us</Link>
          <Link to="/features" className="hover:text-red-400">Features</Link>
          <Link to="/moreoptions" className="hover:text-red-400">More Options</Link>
          <Link to="/contact" className="hover:text-red-400">Contact</Link>
        </div>

        <div className="hidden md:flex gap-2">
          <button className="border-2 border-red-400 px-3 py-1 rounded hover:bg-red-50">Login</button>
          <button onClick={handleForm} className="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500">Signup</button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {openNav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {openNav && (
        <div className="md:hidden bg-white w-full px-6 py-4 space-y-4 shadow-lg">
          <Link to="/about" onClick={toggleMenu} className="block">About Us</Link>
          <Link to="/features" onClick={toggleMenu} className="block">Features</Link>
          <Link to="/moreoptions" onClick={toggleMenu} className="block">More Options</Link>
          <Link to="/contact" onClick={toggleMenu} className="block">Contact</Link>
          <div className="flex gap-2 mt-2">
            <button className="border-2 border-red-400 px-3 py-1 rounded w-full">Login</button>
            <button onClick={handleForm} className="bg-red-400 text-white px-4 py-1 rounded w-full"  >Signup</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
