import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Looking for a Smarter Way to Ship?

          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover customized logistics strategies designed around your goals.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Start Your Free Consultation
            </Button>
          </Link>
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300 text-sm sm:text-base">+16479797700</p>
            <p className="text-gray-300 text-sm sm:text-base"></p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300 text-sm sm:text-base">info@lavlogisticsinc.com</p>
            <p className="text-gray-300 text-sm sm:text-base"></p>
          </div>
        </div>
          
         
        
        {/* Navigation Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        
      </div>
    </footer>
  );
};

export default Footer;