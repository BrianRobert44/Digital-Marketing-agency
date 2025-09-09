import { Layout } from "@/components/Layout";
import { ArrowRight, Users, Award, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import teamRobert from "@/assets/Robert.jpeg";
import teamBritto from "@/assets/IMG_20250604_112444_813.jpg";
import teamEmily from "@/assets/team-emily.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your bottom line.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust and transparency.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We stay ahead of digital trends to keep your brand at the forefront of your industry.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team, combining our expertise with your vision.",
    },
  ];

  const team = [
    {
      name: "Robert J",
      role: "CEO & Founder",
      image: teamRobert,
      bio: "10+ years in digital marketing with a passion for helping businesses grow through innovative strategies.",
      expertise: ["Strategy", "Leadership", "Growth Marketing"],
    },
    {
      name: "Britto",
      role: "Creative Director",
      image: teamBritto,
      bio: "Award-winning creative professional specializing in brand development and visual storytelling.",
      expertise: ["Branding", "Design", "Creative Strategy"],
    },
    {
      name: "Emily Davis",
      role: "Marketing Specialist",
      image: teamEmily,
      bio: "Data-driven marketer with expertise in SEO, PPC, and conversion optimization.",
      expertise: ["SEO", "PPC", "Analytics"],
    },
  ];

  const stats = [
    { label: "Happy Clients", value: "200+", description: "Businesses we've helped grow" },
    { label: "Projects Completed", value: "500+", description: "Successful campaigns delivered" },
    { label: "Years Experience", value: "5+", description: "In the digital marketing industry" }, 
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              👋 About weboin Digital
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              We're Digital Marketing
              <span className="text-gradient block">Experts Who Care</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes to achieve sustainable growth through 
                  innovative digital marketing strategies, data-driven insights, and exceptional 
                  customer service. We believe every brand has a unique story to tell, and we're 
                  here to help you tell it effectively.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted digital marketing partner for ambitious brands, 
                  setting new standards for transparency, results, and client satisfaction 
                  in the industry. We envision a future where every business has access to 
                  world-class digital marketing expertise.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-2xl opacity-20 blur-3xl"></div>
              <Card className="relative border-0 shadow-agency-xl bg-card-gradient">
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-heading text-xl font-semibold">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Proven track record of success",
                      "Transparent reporting and communication",
                      "Customized strategies for each client",
                      "Dedicated account management",
                      "Continuous optimization and improvement"
                    ].map((item) => (
                      <li key={item} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

     

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Meet Our
              <span className="text-gradient block">Expert Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="group hover-lift border-0 shadow-agency-md bg-card-gradient">
                <CardContent className="p-8 text-center space-y-6">
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src={member.image} alt={member.name} className ="object-contain" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Growth
              <span className="text-gradient block">By Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These numbers reflect our commitment to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center hover-lift border-0 shadow-agency-md bg-card-gradient">
                <CardContent className="p-8 space-y-4">
                  <div className="font-heading text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Work
              <span className="text-gradient block">Together?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's discuss how we can help your business achieve extraordinary growth 
              through strategic digital marketing.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;