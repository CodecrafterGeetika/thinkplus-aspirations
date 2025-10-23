import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy, Target, BookCheck } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Learn from IIM/IIT alumni with proven track records in coaching competitive exams",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "400+ students successfully cracked CAT, IPMAT, and CLAT in 2024 with top percentiles",
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Customized study plans and one-on-one mentorship to match your unique learning pace",
    },
    {
      icon: BookCheck,
      title: "Smart Revision Tools",
      description: "Advanced analytics, mock tests, and performance tracking to optimize your preparation",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-primary">Think+</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to transforming aspirants into top achievers through proven methods and dedicated support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center border-border bg-card hover:border-primary transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
