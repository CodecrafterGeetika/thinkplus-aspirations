import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const MockTest = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(240); // 4 minutes
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "If x + y = 10 and xy = 21, what is the value of x² + y²?",
      options: ["58", "100", "42", "64"],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Choose the word that is most similar in meaning to 'ELOQUENT':",
      options: ["Silent", "Articulate", "Confused", "Dull"],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "What is the next number in the series: 2, 6, 12, 20, ?",
      options: ["30", "28", "32", "26"],
      correctAnswer: 0,
    },
    {
      id: 4,
      question: "If all roses are flowers and some flowers fade quickly, which conclusion is correct?",
      options: [
        "All roses fade quickly",
        "Some roses may fade quickly",
        "No roses fade quickly",
        "All flowers are roses"
      ],
      correctAnswer: 1,
    },
  ];

  useEffect(() => {
    if (testStarted && !showResults && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && testStarted) {
      toast.error("Time's Up! Your test has been auto-submitted.", {
        duration: 5000,
      });
      handleSubmit();
    }
  }, [testStarted, timeLeft, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStartTest = () => {
    setTestStarted(true);
    toast.success("Test Started! Good luck!");
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const handleSubmit = () => {
    setShowResults(true);
    toast.success("Test submitted successfully!");
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) correct++;
    });
    return correct;
  };

  const score = showResults ? calculateScore() : 0;
  const percentage = showResults ? Math.round((score / questions.length) * 100) : 0;

  if (!testStarted) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="section-padding pt-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="p-8 md:p-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} className="text-primary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold">
                Mock Test <span className="text-primary">Platform</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Test your preparation with our comprehensive mock tests designed by IIM experts
              </p>

              <div className="grid md:grid-cols-3 gap-4 py-8">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground mt-1">Questions</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground mt-1">Minutes</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">100</div>
                  <div className="text-sm text-muted-foreground mt-1">Total Marks</div>
                </div>
              </div>

              <div className="space-y-4 text-left bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg">Instructions:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Each question carries equal marks</li>
                  <li>• No negative marking</li>
                  <li>• Test will auto-submit after 4 minutes</li>
                  <li>• You can navigate between questions</li>
                </ul>
              </div>

              <Button size="lg" className="mt-6" onClick={handleStartTest}>
                Start Test Now
              </Button>

              <Link to="/" className="inline-block text-primary hover:underline">
                Back to Home
              </Link>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="section-padding pt-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="p-8 md:p-12 text-center space-y-6">
              <div className={`w-32 h-32 rounded-full ${percentage >= 75 ? 'bg-green-500/10' : percentage >= 50 ? 'bg-yellow-500/10' : 'bg-red-500/10'} flex items-center justify-center mx-auto`}>
                <div className="text-5xl font-bold">
                  <span className={percentage >= 75 ? 'text-green-500' : percentage >= 50 ? 'text-yellow-500' : 'text-red-500'}>
                    {percentage}%
                  </span>
                </div>
              </div>

              <h1 className="text-4xl font-bold">Test Completed!</h1>
              
              <div className="grid md:grid-cols-3 gap-4 py-6">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-green-500">{score}</div>
                  <div className="text-sm text-muted-foreground mt-1">Correct</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-red-500">{questions.length - score}</div>
                  <div className="text-sm text-muted-foreground mt-1">Incorrect</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">{questions.length}</div>
                  <div className="text-sm text-muted-foreground mt-1">Total</div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" onClick={() => window.location.reload()}>
                  Retake Test
                </Button>
                <Link to="/">
                  <Button variant="outline" size="lg" className="ml-4">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen">
      <Header />
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Timer and Progress */}
          <Card className="p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Clock className="text-primary" />
                <span className="text-2xl font-bold">{formatTime(timeLeft)}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
            <Progress value={progress} />
          </Card>

          {/* Question Card */}
          <Card className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">
              Q{currentQuestion + 1}. {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === index
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="mr-2" size={18} />
                Previous
              </Button>

              {currentQuestion === questions.length - 1 ? (
                <Button onClick={handleSubmit} variant="hero">
                  Submit Test
                </Button>
              ) : (
                <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                  Next
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              )}
            </div>
          </Card>

          {/* Question Navigator */}
          <Card className="p-6 mt-6">
            <h3 className="font-semibold mb-4">Question Navigator</h3>
            <div className="grid grid-cols-8 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg border-2 font-semibold transition-all ${
                    index === currentQuestion
                      ? "border-primary bg-primary text-primary-foreground"
                      : answers[index] !== undefined
                      ? "border-green-500 bg-green-500/10 text-green-500"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MockTest;
