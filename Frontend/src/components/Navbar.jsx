import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return ( 
    <header className="font-[Gabarito] w-full fixed z-50 mt-[30px]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center bg-white rounded-[30px] shadow-2xl ">
        
        {/* Logo */}
        <div className="flex items-center justify-between space-x-1">
        <i className="ri-dice-line text-2xl font-[100] "></i>
        
          <span className="text-[20px] font-semibolt">Helix </span>
        </div>
       

         <div className="flex gap-x-[100px]">

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#" className="hover:text-gray-700">Products</a>
          <a href="#" className="hover:text-gray-700">Pricing</a>
          <a href="#" className="hover:text-gray-700">Docs</a>
          <a href="#" className="hover:text-gray-700">Customers</a>
          <a href="#" className="hover:text-gray-700">Resources</a>

        
        </nav>
        <div className="hidden md:flex items-center gap-6  ">
          <a href="#" className="hover:text-gray-700">Login</a>
          <button className="px-4 py-1 border rounded-full bg-black text-white shadow-lg ">Sign-up</button>
        </div>
      
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-start px-6 pb-6 space-y-4 text-sm font-medium py-[20px] bg-white">
          <a href="#">Products</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Customers</a>
          <a href="#">Resources</a>
          <a href="#">Login</a>
          <button >Sign-up</button>
       
        </div>
      )}
    </header>
  );
}
