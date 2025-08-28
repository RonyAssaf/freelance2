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
            Two decades of innovation, excellence, and partnership in supply chain solutions
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
                  Founded in 2003, Lavlogisticsinc began as a vision to revolutionize supply chain 
                  management through technology-driven solutions and unwavering commitment to client success. 
                  What started as a small team in Atlanta has grown into a premier 3PL provider serving 
                  companies across North America.
                </p>
                <p>
                  Over the past two decades, we've continuously evolved our services, invested in 
                  cutting-edge technology, and expanded our footprint to meet the changing needs of modern 
                  commerce. Today, we operate multiple state-of-the-art facilities and serve over 500 
                  active clients across diverse industries.
                </p>
                <p>
                  Our growth has been fueled by a simple philosophy: when our clients succeed, we succeed. 
                  This partnership mindset has earned us industry recognition and, more importantly, 
                  lasting relationships with the companies we serve.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-secondary p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                  "To empower businesses with seamless, technology-driven logistics solutions that 
                  optimize operations, reduce costs, and accelerate growth while maintaining the 
                  highest standards of service excellence."
                </blockquote>
                <div className="border-t pt-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">Our Vision</h4>
                  <p className="text-muted-foreground">
                    To be the most trusted logistics partner, known for innovation, reliability, 
                    and exceptional service that transforms how businesses manage their supply chains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and excellence at Lavlogisticsinc
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Thompson",
                role: "Chief Executive Officer",
                bio: "With over 25 years in logistics and supply chain management, Sarah founded ApexLink with a vision to transform how businesses approach their logistics needs. Her leadership has guided the company through consistent growth and industry recognition.",
                experience: "Former VP of Operations at Global Logistics Solutions"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                bio: "Michael leads our technology initiatives, ensuring ApexLink stays at the forefront of logistics innovation. His expertise in automation and data analytics has been instrumental in developing our proprietary management systems.",
                experience: "Former Senior Director at TechFlow Innovations"
              },
              {
                name: "Jennifer Walsh",
                role: "Chief Operations Officer",
                bio: "Jennifer oversees our day-to-day operations across all facilities, ensuring consistent service quality and operational excellence. Her attention to detail and process optimization expertise drives our 99.9% accuracy rate.",
                experience: "Former Operations Manager at Precision Logistics"
              }
            ].map((leader, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-navy-900" />
                  <span className="sr-only">High-quality, professional headshot of {leader.name}</span>
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-2">
                  {leader.name}
                </h3>
                <p className="text-accent font-semibold text-center mb-4">
                  {leader.role}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {leader.bio}
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground italic">
                    {leader.experience}
                  </p>
                </div>
              </div>
            ))}
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
              The principles that guide our decisions, shape our relationships, and drive our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We pursue the highest standards in everything we do, from technology implementation to customer service delivery."
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We build lasting relationships based on trust, transparency, and mutual success with clients and team members alike."
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "We operate with honesty and ethical practices in all our business dealings, ensuring accountability at every level."
              },
              {
                icon: Globe,
                title: "Innovation",
                description: "We continuously invest in new technologies and processes to stay ahead of industry trends and client needs."
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

      {/* Accolades & Community */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-primary mb-8">Recognition & Awards</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">3PL Provider of the Year 2023</h3>
                    <p className="text-muted-foreground">Supply Chain Excellence Awards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Top Technology Innovation 2022</h3>
                    <p className="text-muted-foreground">Logistics Management Magazine</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Best Customer Service Excellence</h3>
                    <p className="text-muted-foreground">National 3PL Association, 2021-2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Workplace Excellence Certification</h3>
                    <p className="text-muted-foreground">Georgia Business Excellence Foundation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-primary mb-8">Community Involvement</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Lavlogisticsinc, we believe in giving back to the communities where we operate. 
                  Our team actively participates in local initiatives and supports organizations that 
                  make a positive impact.
                </p>
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-semibold text-primary mb-4">Our Commitments</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Annual food drive supporting local food banks
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Scholarship program for logistics students
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Volunteer hours for community development projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Environmental sustainability initiatives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Partner with ApexLink?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience the difference that two decades of excellence can make for your supply chain.
          </p>
          <Link to="/">
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