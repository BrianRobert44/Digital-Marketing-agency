import { ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-hero-gradient rounded-3xl opacity-10"></div>
          
          <Card className="relative border-0 shadow-agency-xl bg-card-gradient overflow-hidden">
            <CardContent className="p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      🚀 Ready to Grow?
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Let's Transform Your
                      <span className="text-gradient block">Digital Presence</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Ready to take your business to the next level? Get a free consultation 
                      with our digital marketing experts and discover how we can help you achieve 
                      extraordinary growth.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" className="group">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg">
                      View Our Pricing
                    </Button>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-4 pt-6 border-t border-border/50">
                    <p className="text-sm font-medium text-muted-foreground">Or reach out directly:</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="mailto:hello@nexusdigital.com"
                        className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        hello@nexusdigital.com
                      </a>
                      <a 
                        href="tel:+15551234567"
                        className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Content - Benefits */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    
                    
                    <div className="space-y-4">
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}