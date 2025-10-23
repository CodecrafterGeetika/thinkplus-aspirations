import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";
import { toast } from "sonner";

const Blogs = () => {
  const blogs = [
    {
      title: "CAT 2025 Strategy – Study Smart, Not Hard",
      description: "Learn the proven strategies used by 99 percentilers to crack CAT with smart preparation techniques and time management tips.",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      category: "Strategy",
    },
    {
      title: "Top 10 IPMAT Tips to Crack in First Attempt",
      description: "Essential preparation tips and shortcuts to help you secure admission in IIM Indore or IIM Rohtak through IPMAT.",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      category: "IPMAT",
    },
    {
      title: "Important Formulae for Quant & LRDI",
      description: "Master the essential mathematical formulas and logical reasoning techniques that appear frequently in competitive exams.",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
      category: "Quant",
    },
    {
      title: "Study Plan for Working Professionals",
      description: "A realistic and effective study plan designed specifically for working professionals preparing for MBA entrance exams.",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      category: "Planning",
    },
  ];

  const resources = [
    { name: "CAT Quant Formula Sheet", type: "PDF" },
    { name: "VARC Strategy Guide", type: "PDF" },
    { name: "LRDI Practice Sets", type: "PDF" },
  ];

  const handleDownload = (resourceName: string) => {
    toast.success(`${resourceName} will be available soon!`);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            <BookOpen size={16} />
            Knowledge Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Blogs & <span className="text-primary">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights, preparation strategies, and study materials to boost your exam preparation
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card hover:border-primary transition-all animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {blog.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Downloadable Resources */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Free <span className="text-primary">Downloadable Resources</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm">{resource.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{resource.type}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDownload(resource.name)}
                    >
                      <Download size={18} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
