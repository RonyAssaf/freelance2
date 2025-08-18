import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "Supply Chain Director",
    content: "ApexLink transformed our logistics operations. Their technology integration reduced our fulfillment times by 40% while cutting costs significantly.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    company: "GreenEarth Products",
    role: "Operations Manager",
    content: "The level of service and attention to detail is exceptional. ApexLink feels like an extension of our own team, not just a vendor.",
    rating: 5
  },
  {
    name: "Jennifer Walsh",
    company: "Precision Manufacturing",
    role: "Logistics VP",
    content: "We've worked with several 3PLs, but ApexLink's combination of technology, service, and reliability is unmatched in the industry.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-primary text-lg">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-accent font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;