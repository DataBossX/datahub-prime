import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We engineer every component with military-grade precision and attention to detail.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication, clear documentation, and honest partnerships.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work alongside our customers as true partners in their success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle. Continuous improvement is embedded in our DNA.",
  },
];

const milestones = [
  { year: "2021", event: "DataBossX founded with a vision to democratize enterprise AI" },
  { year: "2022", event: "Launched first AI agent framework and secured seed funding" },
  { year: "2023", event: "Released mutation engine, crossed 100 enterprise customers" },
  { year: "2024", event: "Series A funding, expanded to 500+ integrations" },
  { year: "2025", event: "Global expansion, processing 10M+ tasks daily" },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder" },
  { name: "Sarah Mitchell", role: "CTO & Co-founder" },
  { name: "Marcus Johnson", role: "VP Engineering" },
  { name: "Elena Rodriguez", role: "VP Product" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">DataBossX</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              We're building the future of enterprise automation. Our mission is to 
              empower organizations with AI that works alongside humans to achieve the extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card variant="neon" className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To democratize enterprise AI by providing powerful, accessible automation 
                tools that transform how organizations operate, compete, and succeed.
              </p>
            </Card>
            
            <Card variant="neon" className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                A world where every organization has access to intelligent automation, 
                enabling humans to focus on creativity, strategy, and meaningful work.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="text-gradient">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} variant="feature" className="text-center p-6">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Leadership <span className="text-gradient">Team</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} variant="glass" className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Revolution
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Be part of the future of enterprise automation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/auth?mode=signup">
              <Button variant="hero">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
