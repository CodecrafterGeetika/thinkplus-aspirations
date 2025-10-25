import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

const YouTubeVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Real Think+ YouTube Channel Videos
  const videos: Video[] = [
    {
      id: "CVbyIwpaQTo",
      title: "CAT 2025 Preparation Strategy - Complete Guide",
      thumbnail: "https://img.youtube.com/vi/CVbyIwpaQTo/maxresdefault.jpg",
    },
    {
      id: "byuJwZ3nO1E",
      title: "IPMAT Success Tips - IIM Indore & Rohtak",
      thumbnail: "https://img.youtube.com/vi/byuJwZ3nO1E/maxresdefault.jpg",
    },
    {
      id: "U8fiLy9BArU",
      title: "TS ICET Preparation Strategy - Complete Guide",
      thumbnail: "https://img.youtube.com/vi/U8fiLy9BArU/maxresdefault.jpg",
    },
    {
      id: "CcewluUMmhE",
      title: "How to Crack AP ICET - Complete Strategy Guide",
      thumbnail: "https://img.youtube.com/vi/CcewluUMmhE/maxresdefault.jpg",
    },
  ];

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-semibold">
              <Youtube size={16} />
              ThinkPlus MBA Channel
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Latest <span className="text-primary">Videos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our latest preparation tips, strategies, and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {videos.map((video, index) => (
              <Card
                key={video.id + index}
                className="group overflow-hidden border-border bg-card hover:border-primary transition-all animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <Button variant="outline" size="sm" className="w-full">
                    <Play size={14} className="mr-2" />
                    Watch Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.youtube.com/@ThinkplusMBA/videos" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} className="mr-2" />
                View All Videos
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default YouTubeVideos;
