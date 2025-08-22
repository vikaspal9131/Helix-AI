import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return ( 
    <header className="font-[Gabarito]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center bg-white rounded-[30px] mt-[20px] shadow-lg ">
        
        {/* Logo */}
        <div className="flex items-center justify-between space-x-2">
          <img src="/icon.svg" alt="logo" className="w-6 h-6 " />
        
          <span className="text-[14px]">Aplict </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-700">Products</a>
          <a href="#" className="hover:text-gray-700">Pricing</a>
          <a href="#" className="hover:text-gray-700">Docs</a>
          <a href="#" className="hover:text-gray-700">Customers</a>
          <a href="#" className="hover:text-gray-700">Resources</a>

          <a href="#" className="hover:text-gray-700">Login</a>
          <button className="px-4 py-1 border rounded-full bg-black text-white">Sign-up</button>
      
        </nav>

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
