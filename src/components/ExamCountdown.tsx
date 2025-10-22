import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Calendar } from "lucide-react";
import { toast } from "sonner";

interface Exam {
  name: string;
  date: Date;
  color: string;
}

const ExamCountdown = () => {
  const exams: Exam[] = [
    { name: "CAT 2025", date: new Date("2025-11-24"), color: "from-red-500 to-pink-500" },
    { name: "XAT 2026", date: new Date("2026-01-05"), color: "from-blue-500 to-cyan-500" },
    { name: "NMAT 2025", date: new Date("2025-10-10"), color: "from-purple-500 to-indigo-500" },
  ];

  const [countdowns, setCountdowns] = useState<{ [key: string]: { days: number; hours: number; minutes: number; seconds: number } }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const newCountdowns: any = {};

      exams.forEach((exam) => {
        const distance = exam.date.getTime() - now;
        newCountdowns[exam.name] = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      });

      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSetReminder = (examName: string) => {
    toast.success(`Reminder set for ${examName}!`, {
      description: "We'll notify you as the exam date approaches.",
    });
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            <Calendar size={16} />
            Exam Calendar
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Live Exam <span className="text-primary">Countdown</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay on track with live countdowns to upcoming MBA entrance exams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {exams.map((exam, index) => (
            <Card
              key={exam.name}
              className="relative overflow-hidden border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exam.color}`} />
              
              <div className="p-6 space-y-6">
                <h3 className="text-2xl font-bold text-center">{exam.name}</h3>
                
                {countdowns[exam.name] && (
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${exam.color} bg-clip-text text-transparent`}>
                        {countdowns[exam.name].days}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Days</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${exam.color} bg-clip-text text-transparent`}>
                        {countdowns[exam.name].hours}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${exam.color} bg-clip-text text-transparent`}>
                        {countdowns[exam.name].minutes}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Mins</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${exam.color} bg-clip-text text-transparent`}>
                        {countdowns[exam.name].seconds}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Secs</div>
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => handleSetReminder(exam.name)}
                >
                  <Bell size={16} className="mr-2 group-hover:animate-pulse" />
                  Set Reminder
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCountdown;
