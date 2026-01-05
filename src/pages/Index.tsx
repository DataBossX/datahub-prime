import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Bot, 
  BarChart3, 
  Cpu, 
  Lock, 
  Globe,
  ChevronRight
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents that execute complex workflows with precision and intelligence.",
  },
  {
    icon: Zap,
    title: "Mutation Engine",
    description: "Self-evolving automation that adapts to your data patterns in real-time.",
  },
  {
    icon: BarChart3,
    title: "Command Dashboards",
    description: "Military-grade analytics with real-time visibility across all operations.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Zero-trust architecture with end-to-end encryption and compliance.",
  },
  {
    icon: Cpu,
    title: "Edge Processing",
    description: "Distributed compute at the edge for millisecond response times.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Granular role-based permissions with audit trails.",
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<50ms", label: "Latency" },
  { value: "500+", label: "Integrations" },
  { value: "10M+", label: "Tasks/Day" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Now in Open Beta</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Command Your Data.{" "}
              <span className="text-gradient">Control Your Future.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              DataBossX is the AI-powered operating system for enterprise automation. 
              Deploy intelligent agents, orchestrate complex workflows, and dominate your data landscape.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/auth?mode=signup">
                <Button variant="hero" size="xl">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/demos">
                <Button variant="heroOutline" size="xl">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                {["FORTUNE 500", "ENTERPRISE", "GOVERNMENT", "DEFENSE"].map((name) => (
                  <span key={name} className="text-sm font-mono tracking-wider text-muted-foreground">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-muted-foreground rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="text-gradient">Mission-Critical</span> Operations
            </h2>
            <p className="text-muted-foreground text-lg">
              Enterprise-grade infrastructure designed to handle the most demanding workloads 
              with precision, security, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                variant="feature"
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/platform">
              <Button variant="outline" size="lg">
                Explore Platform
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4">
          <Card variant="neon" className="max-w-2xl mx-auto p-8 md:p-12">
            <div className="text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Take Command?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join the elite operators transforming their enterprises with DataBossX. 
                Start your free trial today.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  variant="neon"
                  inputSize="lg"
                  className="flex-1"
                />
                <Button size="lg">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
