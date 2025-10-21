import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { name: "CAT", href: "#cat" },
    { name: "IPMAT", href: "#ipmat" },
    { name: "CLAT", href: "#clat" },
    { name: "IQ+", href: "#iq" },
    { name: "Career Counselling", href: "#career" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-2 space-y-6">
            <img src={logo} alt="ThinkPlus Education" className="h-12 w-auto" />
            <p className="text-muted-foreground max-w-md">
              Thinkplus Education, an initiative by IIM grads started in the year 2022 to help students prepare for alternate career opportunities. It is focused on building a platform for students to learn and build personalities and profiles.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <p className="text-muted-foreground text-sm">
                  45-56-03/5/4, near Axis Bank, Narasimhanagar, Akkayyapalem, Vishakapatnam Andhra Pradesh 530024
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:9581400055" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9581400055
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:support@thinkpluseducation.com" className="text-muted-foreground hover:text-primary transition-colors">
                  support@thinkpluseducation.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Think Plus Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
