import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialJohn from "@/assets/testimonial-john.jpg";
import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "John Miller",
      role: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: testimonialJohn,
      rating: 5,
      quote: "Weboin Digital transformed our online presence completely. Their strategic approach to SEO and paid advertising increased our revenue by 340% in just 6 months. The team is professional, responsive, and truly understands digital marketing.",
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Director, Fashion Forward",
      company: "Fashion Forward",
      image: testimonialMaria,
      rating: 5,
      quote: "Working with Weboin Digital was a game-changer for our brand. They helped us build a community of over 100K followers and increased our engagement by 500%. Their creative content and strategic approach are unmatched in the industry.",
    },
    {
      name: "David Chen",
      role: "Founder, StartupHub",
      company: "StartupHub",
      image: testimonialDavid,
      rating: 5,
      quote: "The results speak for themselves. Weboin Digital helped us achieve a 200% increase in qualified leads and improved our conversion rate significantly. Their data-driven approach and attention to detail are exceptional.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            ⭐ Testimonials
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our Clients
            <span className="text-gradient block">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Weboin Digital.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-agency-xl bg-card-gradient overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                <div className="p-8 pt-20">
                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex space-x-1">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg leading-relaxed text-foreground">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                        <AvatarFallback>{testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonials[activeIndex].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[activeIndex].role}
                        </div>
                        <div className="text-xs text-primary">
                          {testimonials[activeIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="hover-scale"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="hover-scale"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`cursor-pointer transition-smooth hover-lift ${
                index === activeIndex
                  ? "border-primary shadow-agency-md"
                  : "border-border/50 hover:border-primary/50"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6 text-center space-y-4">
                <Avatar className="h-16 w-16 mx-auto">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}