import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logistics-hero.jpg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern logistics warehouse with advanced technology and automation systems"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-600/80 to-navy-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            End-to-End 
            <span className="text-transparent bg-gitan bg-clip-text"> Logistics Excellence</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
            Lavlogisticsinc delivers comprehensive 3PL solutions that optimize your operations,
            reduce costs, and accelerate growth with cutting-edge technology and expert service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 min-w-[200px]"
              >
                Get Free Quote
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[200px] border-white text-white hover:bg-white hover:text-navy-900"
              asChild
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Hero;