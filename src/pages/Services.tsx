import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation"
import { ArrowLeft, Truck, Package, Ship, Warehouse, MapPin } from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Truckload (TL)",
    description: "Full truckload transportation services with dedicated capacity for large shipments. Our extensive carrier network ensures reliable, on-time delivery across North America.",
    features: [
      "Dedicated truck capacity for your shipments",
      "Advanced GPS tracking and real-time updates",
      "Expedited and standard delivery options",
      "Temperature-controlled and specialized equipment"
    ],
    benefits: "Ideal for large shipments requiring dedicated capacity and faster transit times."
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective LTL shipping solutions for smaller freight that doesn't require a full truck. Consolidate shipments with other customers to optimize costs and reduce environmental impact.",
    features: [
      "Shared truck space for cost optimization",
      "Regional and national LTL networks",
      "Flexible pickup and delivery scheduling",
      "Freight classification and optimization services"
    ],
    benefits: "Perfect for smaller shipments where cost efficiency is paramount without compromising service quality."
  },
  {
    icon: Ship,
    title: "Intermodal Transport",
    description: "Seamless integration of multiple transportation modes including rail, truck, and ocean freight. Leverage the efficiency of rail with the flexibility of trucking for long-distance shipments.",
    features: [
      "Rail and truck transportation integration",
      "Container management and tracking",
      "Cross-docking and transloading services",
      "Customs clearance and documentation"
    ],
    benefits: "Combines cost savings of rail transport with door-to-door trucking convenience for optimal efficiency."
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "State-of-the-art warehousing facilities with advanced inventory management systems. From storage to pick-and-pack fulfillment, we handle your inventory with precision and care.",
    features: [
      "Climate-controlled storage environments",
      "Real-time inventory management systems",
      "Pick, pack, and fulfillment services",
      "Cross-docking and consolidation services"
    ],
    benefits: "Reduce overhead costs while maintaining optimal inventory levels and fast order fulfillment capabilities."
  },
  {
    icon: MapPin,
    title: "Port Services",
    description: "Comprehensive port logistics including container handling, customs clearance, and inland transportation. Streamline your international shipping with our experienced port operations team.",
    features: [
      "Container pickup and delivery coordination",
      "Customs brokerage and clearance",
      "Port storage and consolidation",
      "International shipping documentation"
    ],
    benefits: "Simplify international trade with end-to-end port logistics and customs expertise."
  }
];

const Services = () => {
  return (
     <div className="min-h-screen bg-background pt-24">
      {/* Shared Navigation (same as Home) */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Comprehensive logistics solutions tailored to meet your unique transportation and warehousing needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`animate-slide-up ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-navy-900" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="bg-secondary/50 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-primary font-medium">{service.benefits}</p>
                    </div>
                  </div>
                  
                  <div className={`animate-slide-up ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="bg-secondary p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-navy-900" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          Ready to Get Started?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Contact our team to discuss how {service.title.toLowerCase()} can optimize your supply chain.
                        </p>
                        <Button variant="cta" size="lg">
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our logistics experts can design a tailored solution that combines multiple services 
            to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Contact Our Experts
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;