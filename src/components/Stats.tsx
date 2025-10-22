import { useState, useEffect, useRef } from "react";
import studentsIcon from "@/assets/stats/students.png";
import lecturesIcon from "@/assets/stats/lectures.png";
import facultyIcon from "@/assets/stats/faculty.png";
import admissionsIcon from "@/assets/stats/admissions.png";

const Stats = () => {
  const [counts, setCounts] = useState({ students: 0, lectures: 0, faculty: 0, admissions: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { students: 400, lectures: 600, faculty: 10, admissions: 47 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        students: Math.floor(targets.students * progress),
        lectures: Math.floor(targets.lectures * progress),
        faculty: Math.floor(targets.faculty * progress),
        admissions: Math.floor(targets.admissions * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Start your prep the <span className="text-primary">THINKPLUS</span> way
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-item animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <img src={studentsIcon} alt="Students" className="w-12 h-12 object-contain" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-primary">{counts.students}+</h3>
                <p className="text-lg text-muted-foreground">Our Happy Students</p>
              </div>
            </div>
          </div>

          <div className="stat-item animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <img src={lecturesIcon} alt="Lectures" className="w-12 h-12 object-contain" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-primary">{counts.lectures} Hrs</h3>
                <p className="text-lg text-muted-foreground">Dedicated Lectures</p>
              </div>
            </div>
          </div>

          <div className="stat-item animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <img src={facultyIcon} alt="Faculty" className="w-12 h-12 object-contain" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-primary">{counts.faculty}+ Yrs</h3>
                <p className="text-lg text-muted-foreground">Experienced Faculty</p>
              </div>
            </div>
          </div>

          <div className="stat-item animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <img src={admissionsIcon} alt="Admissions" className="w-12 h-12 object-contain" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-primary">{counts.admissions}</h3>
                <p className="text-lg text-muted-foreground">IIM Admissions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
