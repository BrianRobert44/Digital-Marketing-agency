import { Search, MousePointer, Users, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your visibility and drive organic traffic with our proven SEO strategies and techniques.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: MousePointer,
      title: "Paid Advertising",
      description: "Maximize ROI with targeted ad campaigns across Google, Facebook, and other platforms.",
      features: ["Google Ads", "Facebook Ads", "Display Advertising", "Campaign Optimization"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all social media platforms.",
      features: ["Content Creation", "Community Management", "Influencer Marketing", "Social Analytics"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Palette,
      title: "Brand Development",
      description: "Create compelling brand identities that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            💼 Our Services
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Complete Digital Marketing
            <span className="text-gradient block">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From SEO to social media, we provide comprehensive digital marketing services 
            that drive growth and deliver measurable results for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover-lift border-0 shadow-agency-md bg-card-gradient">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor}`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}