"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  role: "user" | "bot";
  text: string;
};

type KbEntry = {
  keywords: string[];
  response: string;
};

const knowledgeBase: KbEntry[] = [
  {
    keywords: ["skill", "technology", "tool", "know", "technologies", "what can you do"],
    response:
      "I have expertise in:\n\u2022 Python (Pandas, NumPy, Matplotlib, Seaborn)\n\u2022 SQL (complex queries, joins, window functions)\n\u2022 Power BI (dashboards, DAX, Power Query)\n\u2022 Advanced Excel (pivot tables, VLOOKUP, macros)",
  },
  {
    keywords: ["python"],
    response:
      "I use Python for data cleaning, analysis, and visualization with Pandas, NumPy, Matplotlib, and Seaborn.",
  },
  {
    keywords: ["sql", "database", "query"],
    response:
      "I write complex SQL queries including joins, subqueries, window functions, and optimize database performance.",
  },
  {
    keywords: ["power bi", "powerbi", "dashboard", "dax", "power query"],
    response:
      "I build interactive Power BI dashboards with DAX measures, data modeling, and Power Query transformations.",
  },
  {
    keywords: ["excel", "spreadsheet", "vlookup", "pivot"],
    response:
      "I use Advanced Excel for pivot tables, VLOOKUP/XLOOKUP, Power Query, macros, and financial modeling.",
  },
  {
    keywords: ["project", "portfolio", "work", "done", "built"],
    response:
      "Here are my projects:\n1. End-to-End Sales Project \u2014 revenue trends, product performance, RFM segmentation\n2. Supply Chain Dashboard \u2014 KPI scorecards, logistics view, profitability forecasting",
  },
  {
    keywords: ["sales", "end-to-end", "revenue", "rfm"],
    response:
      "The End-to-End Sales Project covers revenue trends, product performance, regional breakdowns, and RFM customer segmentation using Power BI. Check out the full report in the Projects section!",
  },
  {
    keywords: ["supply chain", "supply", "logistics", "kpi"],
    response:
      "The Supply Chain Dashboard tracks executive KPIs, logistics performance, geographic views, and includes profitability simulation & forecasting in Power BI. View the report in the Projects section!",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "message", "get in touch"],
    response:
      "You can reach me at:\n\u2022 Email: irfanshaukat4249@gmail.com\n\u2022 Phone: 03334004249\n\u2022 LinkedIn: linkedin.com/in/irfan-shaukat4249\n\u2022 GitHub: github.com/irfanshaukat4249-alt/Irfan-Shaukat",
  },
  {
    keywords: ["phone", "call", "number", "mobile", "whatsapp"],
    response: "You can call me at 03334004249.",
  },
  {
    keywords: ["linkedin"],
    response:
      "Connect with me on LinkedIn: https://www.linkedin.com/in/irfan-shaukat4249",
  },
  {
    keywords: ["github", "code", "source"],
    response:
      "Check out my code on GitHub: https://github.com/irfanshaukat4249-alt/Irfan-Shaukat",
  },
  {
    keywords: ["about", "who", "experience", "background", "story", "tell me about yourself"],
    response:
      "I'm a data analyst passionate about uncovering patterns and telling stories through data. I work with Python, SQL, Power BI, and Excel \u2014 turning raw data into clear, actionable insights that drive business decisions.",
  },
  {
    keywords: ["data analyst", "analyst", "role", "job", "career"],
    response:
      "I'm a data analyst skilled in the full pipeline: from cleaning and transforming messy datasets to building interactive dashboards and delivering data-driven solutions.",
  },
  {
    keywords: ["help", "what can i ask", "options", "guide", "abilities"],
    response:
      "You can ask me about:\n\u2022 Skills (Python, SQL, Power BI, Excel)\n\u2022 Projects (Sales, Supply Chain)\n\u2022 Experience & background\n\u2022 Contact info (email, phone, LinkedIn, GitHub)\n\u2022 Or just say hi!",
  },
];

const greetingKeywords = [
  "hi", "hello", "hey", "greetings", "hi there",
  "good morning", "good evening", "good afternoon", "what's up", "sup",
];

function findBestResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  if (!lower) return "Please type a message and I'll be happy to help!";

  for (const g of greetingKeywords) {
    if (lower.includes(g))
      return "Hello! Welcome to Irfan's portfolio. Ask me about his skills, projects, or how to get in touch!";
  }

  let bestEntry: KbEntry | null = null;
  let bestCount = 0;

  for (const entry of knowledgeBase) {
    let count = 0;
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) count++;
    }
    if (count > bestCount) {
      bestCount = count;
      bestEntry = entry;
    }
  }

  if (bestEntry && bestCount > 0) return bestEntry.response;

  return 'I\'m not sure about that, but I can help with questions about Irfan\'s skills, projects, experience, and contact info. Try asking something like "What skills do you have?" or "Tell me about your projects!"';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm Irfan's virtual assistant. Ask me about his skills, projects, experience, or how to contact him!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-card/90 shadow-2xl shadow-accent/5 backdrop-blur-xl sm:w-[380px]">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MessageCircle size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold">Chat with Irfan</p>
                <p className="text-[11px] text-muted">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-muted transition-colors hover:bg-border hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex h-[380px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent text-background"
                      : "border border-border bg-background text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-border bg-background px-4 py-3">
                  <div className="flex gap-1.5">
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-muted"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-muted"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-muted"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-background transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:hover:bg-accent"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
