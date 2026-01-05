import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Building } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@databossx.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (888) DATA-BOSS",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "San Francisco, CA",
    description: "HQ location",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Have questions? Want a demo? Our team is ready to help you transform 
              your operations with DataBossX.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <Card key={method.title} variant="glass" className="text-center p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{method.title}</h3>
                <p className="text-primary font-medium mb-1">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card variant="neon" className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        variant="neon"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        variant="neon"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      variant="neon"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Acme Corp" 
                      variant="neon"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] bg-secondary/50 border-border focus:border-primary"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Sales Contact */}
            <div className="space-y-8">
              <Card variant="feature" className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Enterprise Sales</h3>
                    <p className="text-muted-foreground mb-4">
                      Looking for enterprise solutions? Our sales team is ready to 
                      discuss custom deployments, volume pricing, and dedicated support.
                    </p>
                    <Button variant="outline">
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card variant="feature" className="p-8">
                <h3 className="font-semibold text-lg mb-4">Frequently Asked</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">What's the typical response time?</p>
                    <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours.</p>
                  </li>
                  <li>
                    <p className="font-medium">Do you offer demos?</p>
                    <p className="text-sm text-muted-foreground">Yes! Request a demo and we'll schedule a personalized walkthrough.</p>
                  </li>
                  <li>
                    <p className="font-medium">Where are you located?</p>
                    <p className="text-sm text-muted-foreground">Headquartered in San Francisco with team members globally.</p>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
