import { Shield, Clock, Award, Users } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "99.9% Accuracy Rate",
    description: "Industry-leading precision in order fulfillment and inventory management."
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock monitoring and support to keep your supply chain moving."
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Proven expertise across multiple industries with a track record of success."
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description: "Personal service with dedicated specialists who understand your business."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Why Choose Lavlogisticsinc?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver
            exceptional results that drive your business forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-white group-hover:text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;