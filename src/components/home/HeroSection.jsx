import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Digital marketing team working in modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🚀 #1 Digital Marketing Agency
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with{" "}
                <span className="text-gradient">Digital Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We help ambitious brands achieve extraordinary growth through data-driven digital marketing strategies, innovative campaigns, and measurable results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center sm:text-left">
                <div className="font-heading text-3xl font-bold text-gradient">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-heading text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-heading text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Additional visual element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative bg-card-gradient p-8 rounded-2xl shadow-agency-xl border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Campaign Performance</span>
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Revenue Growth</span>
                      <span className="font-semibold text-green-500">+245%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-hero-gradient h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lead Generation</span>
                      <span className="font-semibold text-blue-500">+180%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}