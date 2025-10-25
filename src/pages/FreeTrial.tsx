import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, CheckCircle2, Lock } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: "video" | "pdf" | "quiz";
  free: boolean;
}

const FreeTrial = () => {
  const [searchParams] = useSearchParams();
  const course = searchParams.get("course") || "CAT";
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const lessons: Lesson[] = [
    { id: 1, title: "Introduction to " + course, duration: "15:30", type: "video", free: true },
    { id: 2, title: "Basic Concepts Overview", duration: "20:45", type: "video", free: true },
    { id: 3, title: "Sample Practice Questions", duration: "10:20", type: "pdf", free: true },
    { id: 4, title: "Advanced Problem Solving", duration: "25:15", type: "video", free: false },
    { id: 5, title: "Full Mock Test", duration: "120:00", type: "quiz", free: false },
  ];

  const freeLessons = lessons.filter(l => l.free);
  const paidLessons = lessons.filter(l => !l.free);

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <section className="section-padding pt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-semibold">
                <CheckCircle2 size={16} />
                Free Trial
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Try {course} Course <span className="text-primary">For Free</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience our premium teaching methodology before enrolling
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Free Preview Lessons */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Free Preview Lessons</h2>
                {freeLessons.map((lesson) => (
                  <Card key={lesson.id} className="p-6 hover:border-primary transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Play className="text-green-500" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">{lesson.duration} • {lesson.type.toUpperCase()}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        disabled
                      >
                        <Play size={14} className="mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </Card>
                ))}

                <div className="pt-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Lock className="text-muted-foreground" size={20} />
                    Unlock Full Course
                  </h2>
                  <div className="space-y-3 opacity-60">
                    {paidLessons.map((lesson) => (
                      <Card key={lesson.id} className="p-6 bg-muted/30">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <Lock size={20} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{lesson.title}</h3>
                            <p className="text-sm text-muted-foreground">{lesson.duration} • {lesson.type.toUpperCase()}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Info Sidebar */}
              <div className="space-y-6">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">{course} Complete Course</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>50+ Video Lessons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>100+ Practice Questions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>20 Full-Length Mocks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>Doubt Clearing Sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>Personal Mentorship</span>
                    </div>
                  </div>

                  <div className="border-t pt-6 space-y-3">
                    <Button size="lg" className="w-full" asChild>
                      <Link to="/contact">Enroll Now</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link to="/">Back to Home</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Course preview"
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

export default FreeTrial;
