import { Users, Clock, Award, GraduationCap } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "400+",
      label: "Our Happy Students",
    },
    {
      icon: Clock,
      number: "600 Hrs",
      label: "Dedicated Lectures",
    },
    {
      icon: Award,
      number: "10+ Yrs",
      label: "Experienced Faculty",
    },
    {
      icon: GraduationCap,
      number: "47",
      label: "IIM Admissions",
    },
  ];

  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Start your prep the <span className="text-primary">THINKPLUS</span> way
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={32} />
                </div>

                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
