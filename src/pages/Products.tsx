import { 
  LayoutDashboard, 
  Bot, 
  Workflow, 
  Database, 
  BarChart3, 
  Shield,
  Webhook,
  FileSearch,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: LayoutDashboard,
    title: "Command Center",
    description: "Unified operational dashboard for complete visibility across all systems and processes.",
    status: "Live",
    features: ["Real-time monitoring", "Custom widgets", "Multi-tenant", "Mobile app"],
    category: "Core",
  },
  {
    icon: Bot,
    title: "Agent Studio",
    description: "Build, train, and deploy autonomous AI agents with no-code visual interface.",
    status: "Live",
    features: ["Visual builder", "Pre-built templates", "Testing sandbox", "Version control"],
    category: "AI",
  },
  {
    icon: Workflow,
    title: "Flow Designer",
    description: "Orchestrate complex multi-system workflows with enterprise-grade reliability.",
    status: "Live",
    features: ["Drag-and-drop", "Conditional logic", "Error handling", "Scheduling"],
    category: "Automation",
  },
  {
    icon: Database,
    title: "Data Fabric",
    description: "Connect, transform, and unify data from any source with schema evolution.",
    status: "Live",
    features: ["500+ connectors", "ETL/ELT", "Data lineage", "Quality monitoring"],
    category: "Data",
  },
  {
    icon: BarChart3,
    title: "Analytics Engine",
    description: "Advanced analytics and reporting with AI-powered insights and predictions.",
    status: "Live",
    features: ["Custom dashboards", "Predictive models", "Anomaly detection", "Exports"],
    category: "Analytics",
  },
  {
    icon: Shield,
    title: "Security Hub",
    description: "Centralized security management with threat detection and compliance monitoring.",
    status: "Beta",
    features: ["Threat detection", "Compliance reports", "Access control", "Audit logs"],
    category: "Security",
  },
  {
    icon: Webhook,
    title: "Integration Gateway",
    description: "API management and webhook orchestration for seamless system integration.",
    status: "Live",
    features: ["API gateway", "Rate limiting", "Transformation", "Documentation"],
    category: "Integration",
  },
  {
    icon: FileSearch,
    title: "Document AI",
    description: "Intelligent document processing with OCR, extraction, and classification.",
    status: "Beta",
    features: ["OCR processing", "Entity extraction", "Classification", "Search index"],
    category: "AI",
  },
];

const categories = ["All", "Core", "AI", "Automation", "Data", "Analytics", "Security", "Integration"];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Products & <span className="text-gradient">Applications</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive suite of tools designed to automate, analyze, 
              and accelerate your enterprise operations.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card 
                key={product.title} 
                variant="feature"
                className="group cursor-pointer flex flex-col"
              >
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant={product.status === "Live" ? "default" : "secondary"}
                      className={product.status === "Live" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                    >
                      {product.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{product.title}</CardTitle>
                  <CardDescription>
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 3).map((feature) => (
                      <span 
                        key={feature} 
                        className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:text-primary">
                    Learn More
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our team can build custom applications and integrations tailored to your specific needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero">
                Talk to an Expert
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
