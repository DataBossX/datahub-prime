import { 
  Bot, 
  Zap, 
  BarChart3, 
  Database, 
  Network, 
  Shield, 
  Workflow,
  Cpu,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "Deploy intelligent agents that understand context, make decisions, and execute tasks without human intervention. Self-healing and self-optimizing.",
    features: ["Natural language understanding", "Multi-step reasoning", "Continuous learning", "Human-in-the-loop controls"],
  },
  {
    icon: Zap,
    title: "Mutation Engine",
    description: "Our proprietary mutation engine adapts workflows in real-time based on data patterns, anomalies, and business conditions.",
    features: ["Dynamic rule generation", "Pattern recognition", "Anomaly detection", "Adaptive optimization"],
  },
  {
    icon: Workflow,
    title: "Orchestration Layer",
    description: "Coordinate complex multi-system workflows with enterprise-grade reliability and complete visibility.",
    features: ["Visual workflow builder", "Conditional branching", "Error recovery", "Version control"],
  },
  {
    icon: BarChart3,
    title: "Command Dashboards",
    description: "Military-grade operational dashboards with real-time metrics, alerts, and drill-down capabilities.",
    features: ["Real-time streaming", "Custom visualizations", "Alert management", "Executive reports"],
  },
  {
    icon: Database,
    title: "Data Fabric",
    description: "Unified data layer that connects, transforms, and serves data across your entire enterprise ecosystem.",
    features: ["Multi-source ingestion", "Schema evolution", "Data lineage", "Quality monitoring"],
  },
  {
    icon: Network,
    title: "Integration Hub",
    description: "500+ pre-built connectors and a powerful SDK for custom integrations with any system.",
    features: ["REST/GraphQL APIs", "Event streaming", "Webhook management", "Custom connectors"],
  },
];

const architecture = [
  {
    layer: "Edge Layer",
    description: "Distributed processing at the edge for ultra-low latency operations.",
    color: "primary",
  },
  {
    layer: "Intelligence Layer",
    description: "AI/ML models, reasoning engines, and decision systems.",
    color: "neon-blue",
  },
  {
    layer: "Orchestration Layer",
    description: "Workflow coordination, state management, and task scheduling.",
    color: "neon-purple",
  },
  {
    layer: "Data Layer",
    description: "Unified data fabric with transformation and governance.",
    color: "primary",
  },
];

const Platform = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Platform Overview</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Operating System for{" "}
              <span className="text-gradient">Enterprise AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              DataBossX combines autonomous AI agents, a self-evolving mutation engine, 
              and enterprise-grade infrastructure to deliver unprecedented automation capabilities.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/auth?mode=signup">
                <Button variant="hero">
                  Start Building
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/demos">
                <Button variant="heroOutline">
                  See It In Action
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Platform Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A modular, scalable architecture designed for enterprise demands.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {architecture.map((layer, index) => (
              <div 
                key={layer.layer}
                className="flex items-center gap-6 p-4 rounded-lg border border-border bg-secondary/30 hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-32 text-sm font-mono text-primary">
                  LAYER {architecture.length - index}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{layer.layer}</h3>
                  <p className="text-sm text-muted-foreground">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Six powerful modules that work together to transform your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={capability.title} 
                variant="feature"
                className="group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{capability.title}</CardTitle>
                  <CardDescription className="text-base">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Enterprise Security</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Military-Grade <span className="text-gradient">Security</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8">
                Built from the ground up with zero-trust architecture, end-to-end encryption, 
                and comprehensive compliance frameworks.
              </p>
              
              <ul className="space-y-4">
                {[
                  "SOC 2 Type II Certified",
                  "HIPAA & GDPR Compliant",
                  "Zero-Trust Architecture",
                  "End-to-End Encryption",
                  "Complete Audit Trails",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <Card variant="neon" className="p-8">
                <div className="aspect-square rounded-lg bg-secondary/50 flex items-center justify-center">
                  <Shield className="h-32 w-32 text-primary/30" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of enterprise AI automation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/auth?mode=signup">
              <Button variant="hero">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
