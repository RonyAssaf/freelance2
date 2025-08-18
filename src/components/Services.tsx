import { Truck, Warehouse, Package, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "State-of-the-art facilities with advanced inventory management and automated fulfillment systems."
  },
  {
    icon: Truck,
    title: "Transportation Management",
    description: "Comprehensive freight solutions with real-time tracking and optimized routing for maximum efficiency."
  },
  {
    icon: Package,
    title: "Order Fulfillment",
    description: "End-to-end fulfillment services from pick and pack to same-day shipping and returns processing."
  },
  {
    icon: BarChart3,
    title: "Supply Chain Analytics",
    description: "Data-driven insights and reporting to optimize performance, reduce costs, and improve decision-making."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comprehensive 3PL Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From warehousing to last-mile delivery, we provide integrated logistics solutions
            that scale with your business and exceed your expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-navy-900" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;