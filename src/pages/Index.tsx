import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import ExamCountdown from "@/components/ExamCountdown";
import YouTubeVideos from "@/components/YouTubeVideos";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <ExamCountdown />
        <YouTubeVideos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
