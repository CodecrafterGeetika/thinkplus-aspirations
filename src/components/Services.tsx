import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import JoinModal from "@/components/JoinModal";
import catIcon from "@/assets/cat-icon.png";
import ipmatIcon from "@/assets/ipmat-icon.png";
import clatIcon from "@/assets/clat-icon.png";
import iqIcon from "@/assets/iq-icon.png";
import careerIcon from "@/assets/career-icon.png";

const Services = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleJoinClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsJoinModalOpen(true);
  };

  const services = [
    {
      id: "cat",
      title: "CAT",
      icon: catIcon,
      description: "The CAT program helps students to get a boost in their CAT preparation journey. The course is designed in a stepwise manner where the student is taken through concepts, practice, and mock tests.",
    },
    {
      id: "ipmat",
      title: "IPMAT",
      icon: ipmatIcon,
      description: "Thinkplus Education offers a unique and personalized course curriculum for IPMAT, aiming to shape well-rounded students with academic rigor and a transformative learning experience.",
    },
    {
      id: "clat",
      title: "CLAT",
      icon: clatIcon,
      description: "Thinkplus' CLAT program aims to assist students in preparing for the CLAT exam and pursuing a career in Law immediately after completing their 12th grade.",
    },
    {
      id: "iq",
      title: "IQ+",
      icon: iqIcon,
      description: "Looking to give your child an advantage in today's competitive world? Look no further than Thinkplus, a groundbreaking program specifically designed for students from class 6 to 10.",
    },
    {
      id: "career",
      title: "Career Counselling",
      icon: careerIcon,
      description: "Are you feeling uncertain about your future career path? Do you need guidance in finding the right fit for your interests and abilities? Thinkplus offers comprehensive career counselling services.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start your IPMAT, CAT, and CLAT preparation with Thinkplus Education. Our specially curated courses are crafted by IIM grads and expert faculty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                </div>

                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground line-clamp-3">
                  {service.description}
                </p>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link to={`/free-trial?course=${service.title}`}>
                      <Play size={14} className="mr-2" />
                      Try Free Demo
                    </Link>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleJoinClick(service.title)}
                  >
                    Enroll Now
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Card>
          ))}
        </div>
      </div>

      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        courseName={selectedCourse}
      />
    </section>
  );
};

export default Services;
