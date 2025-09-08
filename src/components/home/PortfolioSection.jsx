import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioBranding from "@/assets/portfolio-branding.jpg";

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Growth",
      category: "SEO & Paid Ads",
      description: "Increased online sales by 340% through strategic SEO optimization and targeted advertising campaigns.",
      image: portfolioEcommerce,
      metrics: [
        { label: "Revenue Growth", value: "+340%" },
        { label: "Organic Traffic", value: "+280%" },
      ],
      tags: ["E-commerce", "SEO", "Google Ads"],
    },
    {
      title: "Social Media Success",
      category: "Social Media Marketing",
      description: "Built a thriving community of 100K+ followers and achieved 500% increase in engagement rates.",
      image: portfolioSocial,
      metrics: [
        { label: "Followers", value: "100K+" },
        { label: "Engagement", value: "+500%" },
      ],
      tags: ["Social Media", "Content", "Community"],
    },
    {
      title: "Brand Transformation",
      category: "Branding & Design",
      description: "Complete brand overhaul that resulted in 200% increase in brand recognition and customer trust.",
      image: portfolioBranding,
      metrics: [
        { label: "Brand Awareness", value: "+200%" },
        { label: "Customer Trust", value: "+180%" },
      ],
      tags: ["Branding", "Design", "Strategy"],
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            🎯 Our Work
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Success Stories That
            <span className="text-gradient block">Speak for Themselves</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped brands achieve extraordinary growth through 
            innovative digital marketing strategies and data-driven campaigns.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="group hover-lift border-0 shadow-agency-md overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Button size="icon" variant="glass" className="opacity-0 group-hover:opacity-100 transition-smooth">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/90 text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/50">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="font-heading text-lg font-bold text-gradient">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}