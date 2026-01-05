import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams exploring automation",
    price: "$99",
    period: "/month",
    features: [
      "Up to 5 team members",
      "10 AI agents",
      "100 workflow executions/day",
      "Basic dashboards",
      "Community support",
      "Standard integrations",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    description: "For growing teams with advanced needs",
    price: "$499",
    period: "/month",
    features: [
      "Up to 25 team members",
      "Unlimited AI agents",
      "1,000 workflow executions/day",
      "Custom dashboards",
      "Priority support",
      "All integrations",
      "Advanced analytics",
      "Role-based access",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Mission-critical deployments at scale",
    price: "Custom",
    period: "",
    features: [
      "Unlimited team members",
      "Unlimited AI agents",
      "Unlimited executions",
      "White-label options",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantees",
      "Security reviews",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "The 14-day free trial includes full access to Professional plan features with no credit card required.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, annual plans receive a 20% discount compared to monthly billing.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your needs. Scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                variant={plan.featured ? "pricingFeatured" : "pricing"}
                className="flex flex-col"
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Zap className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Link to={plan.name === "Enterprise" ? "/contact" : "/auth?mode=signup"}>
                      <Button 
                        variant={plan.featured ? "hero" : "outline"} 
                        className="w-full"
                      >
                        {plan.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq) => (
              <Card key={faq.question} variant="glass" className="p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Enterprise Features?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss custom solutions, on-premise deployment, and enterprise SLAs.
          </p>
          <Link to="/contact">
            <Button variant="hero">
              Contact Sales
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
