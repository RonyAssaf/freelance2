import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Users, Heart, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Shared Navigation (same as Home) */}
      <Navigation />


      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Lavlogisticsinc
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            A proven leader in cross-border freight, connecting Canada and the USA with seamless efficiency.
          </p>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Lav Logistics INC, we understand that freight is
                   more than just moving goods—it’s about keeping businesses 
                   connected and supply chains strong.
                </p>
                <p>
                  What started as a vision to make logistics simpler, safer, and smarter has grown into a 
                  trusted freight brokerage serving clients across Canada and the USA.


                </p>
                <p>
                  With decades of combined expertise, we’ve built our reputation on reliability, 
                  transparency, and innovation. By blending advanced technology with a personalized 
                  approach, we provide logistics solutions that deliver peace of mind as much as
                   they deliver freight.
                </p>
                <p>Today, Lav Logistics INC is proud to be a partner businesses can count on 
                  for cross-border shipping, fraud prevention, and 24/7 support. And as
                   we continue to grow, our mission remains the same:
                  to move freight with integrity, efficiency, and care—every time.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-secondary p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                  "To empower our clients with transparent, secure, and scalable 
                  logistics solutions that fuel growth and long-term success."
                </blockquote>
                <div className="border-t pt-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">Our Vision</h4>
                  <p className="text-muted-foreground">
                    To lead with innovation and service, creating a smarter, safer, and more connected logistics future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      {/* Culture & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaboration – We work as a team—with our clients, carriers, and employees—to achieve shared success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Reliability",
                description: "We keep our promises, ensuring every shipment is handled with consistency and care."
              },
              {
                icon: Users,
                title: "Accountability",
                description: "We take ownership of our actions and deliver on our commitments without compromise."
              },
              {
                icon: Heart,
                title: "Innovation",
                description: "We embrace new ideas and advanced technology to deliver smarter, more efficient logistics solutions."
              },
              {
                icon: Globe,
                title: "Adaptability",
                description: "We remain agile and flexible, ready to adjust to changing market conditions and customer needs."
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-gradient-accent hover:scale-110 transition-all duration-300 group">
                    <Icon className="w-10 h-10 text-white group-hover:text-navy-900" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready for Smarter Logistics?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Connect with Lav Logistics INC and unlock secure, efficient, and cost-effective solutions.
          </p>
          <Link to="/services">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;