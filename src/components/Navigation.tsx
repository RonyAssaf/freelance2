import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-3 items-center py-4">

      {/* Left Section (Desktop) */}
      <div className="hidden md:flex justify-start space-x-8">
        <Link
          to="/"
          className="text-lg font-semibold text-primary hover:text-accent transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg font-semibold text-primary hover:text-accent transition-colors "
        >
          About
        </Link>
      </div>

      {/* Left placeholder on mobile to keep grid balance */}
      <div className="md:hidden" />

      {/* Center Logo */}
      <div className="flex justify-center transform translate-x-[5%]" >
        <Link
          to="/"
          className="block text-3xl font-extrabold text-transparent bg-gradient-accent bg-clip-text"
        >
          Lavlogisticsinc
        </Link>
      </div>

      {/* Right Section (Desktop) */}
      <div className="hidden md:flex justify-end space-x-8">
        <Link
          to="/services"
          className="text-lg font-semibold text-primary hover:text-accent transition-colors "
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-lg font-semibold text-primary hover:text-accent transition-colors"
        >
          Contact
        </Link>
      </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-primary hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-primary hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-primary hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-primary hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;