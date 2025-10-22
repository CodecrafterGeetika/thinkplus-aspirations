import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero1, hero2, hero3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Welcome To
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Think Plus <br />
              <span className="text-primary">Education</span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">CAT, IPMAT, CLAT,</span>{" "}
              <span className="text-foreground">and More</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl">
              Crack <strong className="text-foreground">CAT, IPMAT, CLAT,</strong> and other competitive exams the Thinkplus way with specially curated courses that are made by IIM grads for future IIM grads.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/mock-test">
                  Take Mock Test
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/contact">
                  Contact Us
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Hero ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-primary w-8" : "bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/people/ThinkPlus-Education/100092544815760/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/thinkpluseducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/thinkplus-education-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@ThinkplusMBA/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  <Youtube size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">Let's Keep In Touch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
