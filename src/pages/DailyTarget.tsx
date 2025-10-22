import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Target, Plus, Check, Flame, Trophy, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface DailyTask {
  id: number;
  title: string;
  duration: number;
  completed: boolean;
}

const DailyTarget = () => {
  const [tasks, setTasks] = useState<DailyTask[]>(() => {
    const saved = localStorage.getItem("dailyTasks");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newTask, setNewTask] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("studyStreak");
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));
  }, [tasks]);

  const totalTarget = tasks.reduce((sum, task) => sum + task.duration, 0);
  const completedTime = tasks.filter(t => t.completed).reduce((sum, task) => sum + task.duration, 0);
  const progress = totalTarget > 0 ? (completedTime / totalTarget) * 100 : 0;

  const addTask = () => {
    if (!newTask || !newDuration) {
      toast.error("Please fill in all fields");
      return;
    }

    const task: DailyTask = {
      id: Date.now(),
      title: newTask,
      duration: parseInt(newDuration),
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
    setNewDuration("");
    toast.success("Task added successfully!");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newCompleted = !task.completed;
        if (newCompleted) {
          toast.success("Task completed! Keep going! 🎉");
        }
        return { ...task, completed: newCompleted };
      }
      return task;
    }));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast.info("Task removed");
  };

  const resetDay = () => {
    if (progress === 100) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("studyStreak", newStreak.toString());
      toast.success(`Day completed! 🔥 ${newStreak} day streak!`);
    }
    setTasks([]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Target size={16} />
              Daily Progress Tracker
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Your Daily <span className="text-primary">Study Target</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Set goals, track progress, and build consistent study habits
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Stats Cards */}
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Flame className="text-orange-500" size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold">{streak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Calendar className="text-blue-500" size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold">{completedTime}h</div>
                  <div className="text-sm text-muted-foreground">Completed Today</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Trophy className="text-green-500" size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold">{Math.round(progress)}%</div>
                  <div className="text-sm text-muted-foreground">Daily Progress</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Task Input */}
            <Card className="lg:col-span-2 p-6 space-y-4">
              <h2 className="text-2xl font-bold">Add New Task</h2>
              
              <div className="space-y-3">
                <Input
                  placeholder="Task name (e.g., Quant Practice)"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Duration in hours"
                  value={newDuration}
                  onChange={(e) => setNewDuration(e.target.value)}
                />
                <Button onClick={addTask} className="w-full">
                  <Plus size={18} className="mr-2" />
                  Add Task
                </Button>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Today's Target</span>
                  <span className="text-sm text-muted-foreground">{completedTime}h / {totalTarget}h</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
            </Card>

            {/* Task List */}
            <Card className="lg:col-span-3 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Today's Tasks</h2>
                {tasks.length > 0 && (
                  <Button variant="outline" size="sm" onClick={resetDay}>
                    Complete Day
                  </Button>
                )}
              </div>

              {tasks.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Target size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No tasks added yet. Start planning your day!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                        task.completed
                          ? "border-green-500 bg-green-500/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          task.completed
                            ? "border-green-500 bg-green-500"
                            : "border-muted-foreground"
                        }`}
                      >
                        {task.completed && <Check size={14} className="text-white" />}
                      </button>

                      <div className="flex-1">
                        <div className={`font-semibold ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                          {task.title}
                        </div>
                        <div className="text-sm text-muted-foreground">{task.duration} hours</div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DailyTarget;
