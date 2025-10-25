import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Think+ AI Assistant. Ask me anything about CAT, CLAT, or IPMAT preparation!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes("cat") || lowerMsg.includes("preparation")) {
      return "For CAT preparation, focus on strengthening your fundamentals in Quantitative Aptitude, Verbal Ability, and Data Interpretation. Practice mock tests regularly and analyze your mistakes. Our expert faculty at Think+ can guide you through personalized study plans!";
    }
    if (lowerMsg.includes("clat")) {
      return "CLAT requires consistent practice in Legal Reasoning, Logical Reasoning, English, GK, and Quantitative Techniques. Stay updated with current affairs and practice previous year papers. Join our CLAT batch for comprehensive preparation!";
    }
    if (lowerMsg.includes("ipmat")) {
      return "IPMAT focuses on Quantitative Ability and Verbal Ability. Time management is crucial. Our IPMAT program includes extensive mock tests and personalized doubt clearing sessions to help you score high!";
    }
    if (lowerMsg.includes("mock test") || lowerMsg.includes("test")) {
      return "We offer comprehensive mock tests for CAT, CLAT, and IPMAT that simulate actual exam conditions. Regular practice with our tests will boost your confidence and improve your time management skills!";
    }
    if (lowerMsg.includes("faculty") || lowerMsg.includes("teacher")) {
      return "Our faculty consists of experienced educators with proven track records. They provide personalized attention and use innovative teaching methods to ensure concept clarity!";
    }
    if (lowerMsg.includes("join") || lowerMsg.includes("enroll") || lowerMsg.includes("admission")) {
      return "Great! We'd love to have you join Think+. You can start with a free trial to experience our teaching methodology. Click the 'Join Now' button to get started!";
    }
    
    return "That's a great question! Think+ offers comprehensive coaching for CAT, CLAT, and IPMAT with expert faculty, personalized attention, and regular mock tests. Would you like to know more about any specific exam or our courses?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = simulateResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary/90 z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Think+ AI</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about CAT, CLAT, IPMAT..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
