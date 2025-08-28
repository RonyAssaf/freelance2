import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("https://api.lavlogisticsinc.com/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data?.error || "Request failed");

    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setShowSuccess(false), 3000);
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert(`Failed to send: ${err.message}`);
    } else {
      alert("Failed to send: Unknown error");
    }
  }
};

  return (
      <div className="min-h-screen bg-background pt-24">
      {/* Shared Navigation (same as Home) */}
      <Navigation />


      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Ready to optimize your supply chain? Get in touch with our logistics experts today.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of logistics professionals is ready to help you streamline your supply chain 
                operations. Contact us today for a free consultation and custom quote.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">1-800-APEX-LOG (1-800-273-9564)</p>
                    <p className="text-muted-foreground">Direct: (865) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">info@apexlinklogistics.com</p>
                    <p className="text-muted-foreground">sales@apexlinklogistics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      1250 Commerce Drive<br />
                      Knoxville, TN 37919<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 7:00 PM EST<br />
                      Saturday: 8:00 AM - 4:00 PM EST<br />
                      Sunday: Emergency services only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Generation Form */}
            <div className="animate-slide-up">
              <div className="bg-secondary p-8 rounded-lg shadow-soft">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Request a Free Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours 
                  with a customized logistics solution.
                </p>
                
                {showSuccess && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                    <p className="text-green-800 font-medium">
                      Thank you for your inquiry! Our team will contact you within 24 hours.
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your logistics needs, shipment volumes, destinations, or any specific requirements..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full text-lg py-4"
                    disabled={showSuccess}
                  >
                    {showSuccess ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            For urgent logistics needs or time-sensitive shipments, call our dedicated support line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-4"
              asChild
            >
              <a href="tel:18002739564">Call Now: 1-800-APEX-LOG</a>
            </Button>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy-900"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;