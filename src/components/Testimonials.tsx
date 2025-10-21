import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import bhanuImg from "@/assets/testimonials/bhanu.png";
import vaishhnaviImg from "@/assets/testimonials/vaishhnavi.png";
import sahithiImg from "@/assets/testimonials/sahithi.png";
import mukeshImg from "@/assets/testimonials/mukesh.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Bhanu Sanjana Nadella",
      achievement: "IPM, IIM Rohtak",
      text: "The faculty members are not only incredibly knowledgeable but also exceptionally supportive and encouraging, making the learning process truly enjoyable.",
      image: bhanuImg,
    },
    {
      name: "M. Vaishhnavi",
      achievement: "IPM, IIM Bodh Gaya",
      text: "The guidance by all the teachers, the support and all the one on one mentoring sessions which helped me in analysing my strengths and weakness and work according to it. They encouraged me to develop my time management skills.",
      image: vaishhnaviImg,
    },
    {
      name: "Sahithi Chaganti",
      achievement: "MBA, IIM Udaipur",
      text: "Exceptional mentors not only taught fundamentals but also instilled problem-solving approaches, fostering critical reasoning and analytical thinking. Weekly quizzes and consistent error analysis ensured precise preparation.",
      image: sahithiImg,
    },
    {
      name: "P. Mukesh",
      achievement: "IPM, IIM Rohtak",
      text: "Thinkplus exceeded expectations. Their creative mock exams boosted my IPMAT confidence, and the faculty were like friendly guides, making learning fun. Mentoring with IIM Rohtak students at Thinkplus was invaluable.",
      image: mukeshImg,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What students have to say about
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">THINKPLUS</h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <Card className="bg-card border-border p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-primary/20" size={80} />
            
            <div className="relative z-10 space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].achievement}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
