import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Truck, Package, Ship, Warehouse, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

/** Per-card CTA defaults (used when a service doesn't specify its own cta) */
const defaultCta = (title: string) => ({
  title: "ready to get started",
  description: `Contact us now to see how ${title} can simplify your logistics.`,
  buttonText: "Request Quote",
  // style hooks you can override per item
  wrapperClass:
    "bg-secondary p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300",
  iconWrapClass:
    "w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center",
  iconClass: "w-16 h-16 text-navy-900",
  headingClass: "text-2xl font-bold text-primary mb-4",
  paragraphClass: "text-muted-foreground mb-6",
  buttonVariant: "cta" as const,
  buttonClass: "",
});

/** Your data — add/adjust per-item cta overrides here only */
const services = [
  {
    icon: Truck,
    title: "Truckload (TL)",
    description:
      "Our Full Truckload services provide dedicated capacity for your larger shipments, ensuring security, speed, and efficiency. With a trusted carrier network across North America, we deliver freight on time, every time.",
    features: [
      "Exclusive truck capacity for high-volume shipments",
      "Real-time GPS tracking and status updates",
      "Expedited and standard delivery solutions",
      "Specialized and temperature-controlled equipments",
      "Faster transit times with reliable, direct routes",
    ],
    benefits:
      "Ideal for large shipments requiring dedicated capacity and faster transit times.",
    // 👉 New CTA content
    cta: {
      title: "Move More with Confidence.",
      description:
        "Contact us now to see how Truckload (TL) can simplify your logistics.",
      buttonText: "Request Quote",
    },
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective LTL shipping for smaller freight that doesn’t require a full truck. Consolidate shipments to save on costs, reduce environmental impact, and maintain reliable delivery schedules.",
    features: [
      "Shared truck space to maximize efficiency and reduce costs",
      "Extensive regional and national LTL network",
      "Flexible pickup and delivery options to suit your schedule",
      "Freight classification and optimization for safe, efficient transport",
    ],
    benefits:
      "Perfect for smaller shipments where cost efficiency is paramount without compromising service quality.",
    cta: {
      title: "Ship Smarter with LTL.",
      description:
        "Connect with our team today to optimize smaller shipments without sacrificing reliability.",
      buttonText: "Request Quote",
    },
  },
  {
    icon: Ship,
    title: "Smart Intermodal Freight",
    description:
      "Optimize long-distance shipments with seamless integration of rail, truck, and ocean freight. Our smart intermodal solutions maximize efficiency, reduce costs, and ensure reliable delivery across North America.",
    features: [
      "Integrated rail and truck transportation for streamlined logistics",
      "Real-time container tracking and management",
      "Cross-docking and transloading for faster transit",
      "Complete customs clearance and documentation support",
    ],
    benefits:
      "Combines cost savings of rail transport with door-to-door trucking convenience for optimal efficiency.",
    cta: {
      title: "Ready to Streamline Your Intermodal Freight?",
      description:
        "Connect with our team to see how integrated rail, truck, and ocean solutions can optimize your supply chain.",
      buttonText: "Request Quote",
    },
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description:
      "From secure storage to pick-and-pack operations, we handle your inventory with precision, care, and reliability. Our state-of-the-art warehousing facilities feature advanced inventory management systems to keep your supply chain running smoothly.",
    features: [
      "Pick, pack, and order fulfillment services",
      "Climate-controlled and secure storage environments",
      "Real-time inventory tracking and management",
      "Cross-docking and shipment consolidation for faster delivery",
    ],
    benefits:
      "Reduce overhead costs while maintaining optimal inventory levels and fast order fulfillment capabilities.",
    cta: {
      title: "Your Inventory, Our Expertise",
      description:
        "Let our experts show you how state-of-the-art warehousing and distribution can benefit your business.",
      buttonText: "Request Quote",
    },
  },
  {
    icon: MapPin,
    title: "Port Services",
    description:
      "Our Port Services make international shipping smooth and hassle-free. From container handling to inland transportation, we handle every step with efficiency, accuracy, and reliability.",
    features: [
      "Coordinated container pickup and delivery",
      "Comprehensive customs clearance and brokerage",
      "Secure port storage and consolidation",
      "Complete international shipping documentation",
    ],
    benefits:
      "Simplify international trade with end-to-end port logistics and customs expertise.",
    cta: {
      title: "Your Port Operations, Our Expertise",
      description:
        "Let our experts manage every step of the process for smoother, more efficient shipping.",
      buttonText: "Request Quote",
    },
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Comprehensive logistics solutions tailored to meet your unique transportation and
            warehousing needs
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              // merge defaults with per-item overrides (no mutation)
              const ctaCfg = { ...defaultCta(service.title), ...(service as any).cta };

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* LEFT: content */}
                  <div className={`animate-slide-up ${!isEven ? "lg:order-2" : ""}`}>
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
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-primary font-medium">{service.benefits}</p>
                    </div>
                  </div>

                  {/* RIGHT: CTA card (per-item overrides applied) */}
                  <div className={`animate-slide-up ${!isEven ? "lg:order-1" : ""}`}>
                    <div className={ctaCfg.wrapperClass}>
                      <div className={ctaCfg.iconWrapClass}>
                        <Icon className={ctaCfg.iconClass} />
                      </div>
                      <div className="text-center">
                        <h3 className={ctaCfg.headingClass}>{ctaCfg.title}</h3>
                        <p className={ctaCfg.paragraphClass}>{ctaCfg.description}</p>
                        <Link to="/contact" className="inline-block">
                          <Button
                            variant={ctaCfg.buttonVariant}
                            size="lg"
                            className={ctaCfg.buttonClass}
                          >
                            {ctaCfg.buttonText}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in">
            Logistics Built Around You?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a personalized plan that integrates Truckload, LTL, Intermodal, Warehousing, and Port Services for maximum efficiency.
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
