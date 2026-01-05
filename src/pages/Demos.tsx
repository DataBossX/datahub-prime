import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const demos = [
  {
    title: "AI Agent Deployment",
    description: "Watch how to deploy an autonomous AI agent in under 5 minutes.",
    duration: "4:32",
    thumbnail: "agent",
  },
  {
    title: "Workflow Orchestration",
    description: "Build a complex multi-system workflow with our visual designer.",
    duration: "6:15",
    thumbnail: "workflow",
  },
  {
    title: "Real-time Dashboard",
    description: "Create custom command center dashboards with live data.",
    duration: "5:48",
    thumbnail: "dashboard",
  },
  {
    title: "Data Integration",
    description: "Connect multiple data sources and create unified pipelines.",
    duration: "7:22",
    thumbnail: "data",
  },
  {
    title: "Security & Compliance",
    description: "Configure role-based access and audit trail monitoring.",
    duration: "4:55",
    thumbnail: "security",
  },
  {
    title: "API Gateway Setup",
    description: "Set up the integration gateway for external system connections.",
    duration: "5:30",
    thumbnail: "api",
  },
];

const screenshots = [
  {
    title: "Command Center Dashboard",
    description: "Real-time operational overview with customizable widgets",
  },
  {
    title: "Agent Studio Interface",
    description: "Visual builder for creating and training AI agents",
  },
  {
    title: "Flow Designer",
    description: "Drag-and-drop workflow orchestration",
  },
  {
    title: "Analytics Dashboard",
    description: "Advanced analytics with predictive insights",
  },
];

const Demos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              See DataBossX <span className="text-gradient">In Action</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Explore our video tutorials, product demos, and interface screenshots 
              to understand the full power of the platform.
            </p>
            
            <Link to="/auth?mode=signup">
              <Button variant="hero">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Demos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Video <span className="text-gradient">Tutorials</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <Card 
                key={demo.title} 
                variant="feature"
                className="group cursor-pointer overflow-hidden"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="relative aspect-video bg-secondary flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300">
                    <Play className="h-8 w-8 text-primary fill-primary" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-mono bg-background/80 px-2 py-1 rounded">
                    {demo.duration}
                  </span>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {demo.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Interface <span className="text-gradient">Screenshots</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {screenshots.map((screenshot) => (
              <Card 
                key={screenshot.title} 
                variant="neon"
                className="group overflow-hidden"
              >
                {/* Screenshot Placeholder */}
                <div className="aspect-video bg-secondary/50 flex items-center justify-center border-b border-border">
                  <div className="text-center p-8">
                    <div className="w-24 h-16 mx-auto mb-4 rounded border border-primary/30 bg-primary/5 flex items-center justify-center">
                      <span className="text-xs text-primary font-mono">PREVIEW</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Screenshot placeholder</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{screenshot.title}</h3>
                  <p className="text-muted-foreground">{screenshot.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card variant="neon" className="max-w-3xl mx-auto p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want a Personalized Demo?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a live demo with our team to see how DataBossX can transform 
              your specific use cases.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero">
                  Schedule Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button variant="heroOutline">
                  Try It Yourself
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Demos;
