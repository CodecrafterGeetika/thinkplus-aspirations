import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "CAT", href: "#cat" },
    { name: "IPMAT", href: "#ipmat" },
    { name: "CLAT", href: "#clat" },
    { name: "IQ+", href: "#iq" },
    { name: "Career Counselling", href: "#career" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="ThinkPlus Education" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <div className="pl-4 space-y-2">
                <p className="text-sm text-muted-foreground font-semibold">Services</p>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button variant="hero" className="w-full">
                Join Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
