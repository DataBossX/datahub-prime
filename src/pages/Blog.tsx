import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "Introducing the Mutation Engine: Self-Evolving Automation",
    excerpt: "Our latest breakthrough in adaptive automation technology that learns and improves in real-time.",
    date: "2025-01-03",
    readTime: "5 min read",
    category: "Product",
    featured: true,
  },
  {
    id: 2,
    title: "How AI Agents are Transforming Enterprise Workflows",
    excerpt: "A deep dive into the impact of autonomous AI agents on modern business operations.",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "Insights",
    featured: false,
  },
  {
    id: 3,
    title: "DataBossX Achieves SOC 2 Type II Certification",
    excerpt: "Our commitment to security and compliance reaches new milestones.",
    date: "2024-12-20",
    readTime: "3 min read",
    category: "News",
    featured: false,
  },
  {
    id: 4,
    title: "Building Resilient Data Pipelines with the Data Fabric",
    excerpt: "Best practices for creating fault-tolerant, scalable data integration architectures.",
    date: "2024-12-15",
    readTime: "10 min read",
    category: "Technical",
    featured: false,
  },
  {
    id: 5,
    title: "Customer Spotlight: Fortune 500 Manufacturing Success",
    excerpt: "How a leading manufacturer reduced operational costs by 40% with DataBossX.",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Case Study",
    featured: false,
  },
  {
    id: 6,
    title: "The Future of Workflow Orchestration",
    excerpt: "Trends and predictions for the next generation of enterprise automation.",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Insights",
    featured: false,
  },
];

const categories = ["All", "Product", "Insights", "News", "Technical", "Case Study"];

const Blog = () => {
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog & <span className="text-gradient">Updates</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Insights, announcements, and technical deep-dives from the DataBossX team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
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
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card variant="neon" className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured Image Placeholder */}
                <div className="aspect-video lg:aspect-auto bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-20 mx-auto mb-4 rounded border border-primary/30 bg-primary/5 flex items-center justify-center">
                      <span className="text-xs text-primary font-mono">FEATURED</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button variant="hero" className="w-fit">
                    Read Article
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card 
                key={post.id}
                variant="feature"
                className="group cursor-pointer flex flex-col"
              >
                {/* Post Image Placeholder */}
                <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                  <Tag className="h-8 w-8 text-muted-foreground/30" />
                </div>
                
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, insights, and product announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-lg border border-border bg-secondary/50 focus:border-primary focus:outline-none transition-colors"
            />
            <Button size="lg">
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
