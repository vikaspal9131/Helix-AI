// Footer.jsx
export default function Footer() {
  return (
    <footer className="text-black bg-white py-12 px-6 border-gray-700 font-[Gabarito]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <h1 className="flex items-center">
              <i className="ri-dice-line text-2xl font-[100] "></i>
              helix ai
          </h1>
        </div>

        {/* Product */}
        <div>
          <h2 className=" font-semibold mb-3">Product</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Protfolio</a></li>
            <li><a href="#" className="hover:text-white">Resume</a></li>
            <li><a href="#" className="hover:text-white">Application</a></li>
            <li><a href="#" className="hover:text-white">Roadmap</a></li>
          </ul>
        </div>

        {/* Company */}


        {/* Platform */}
        <div>
          <h2 className="font-semibold mb-3">Platform</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Login</a></li>
            <li><a href="#" className="hover:text-white">Get started</a></li>
            <li><a href="#" className="hover:text-white">Pricing </a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Side project </a></li>
          </ul>
        </div>


      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t  pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Helix ai All rights reserved. Made by Sphinx 
      </div>
    </footer>
  );
}
