/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import React, { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MessageSquare, HelpCircle, Mail, Users, Send, Loader2, Link, ChevronDown } from "lucide-react";
import Header from "../components/header";

const FAQ_DATA = [
  { q: "What is ABN Crypto?", a: "ABN (Aethelborn Network) Crypto is the official digital currency of the World47 ecosystem..." },
  { q: "How do I redeem my QR Code reward?", a: "Navigate to the Rewards Terminal and select 'QR Code Redemption'..." },
  { q: "Where can I find my user ID?", a: "Your User ID (e.g., ABNT01-34x-SYN) appears on the Rewards Terminal page above your balance." },
  { q: "Can I transfer ABN to other users?", a: "Yes. Use the Transfer function with the recipient's User ID for instant transfer." },
];

const makeApiCall = async (query: string, systemInstruction: string) => {
  const res = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, systemInstruction }),
  });
  const data = await res.json();
  return data;
};

const AIChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const systemInstruction = useMemo(
    () => "You are World47 Support AI. Help users with FAQs, crypto, or technical support concisely and politely.",
    []
  );

  useEffect(() => {
    setMessages([
      {
        id: 0,
        role: "bot",
        text: "Hello! I’m the World47 AI Assistant. How can I assist you today?",
      },
    ]);
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = useCallback(async (e) => {
    e.preventDefault();
    const userInput = input.trim();
    if (!userInput || isLoading) return;
    setInput("");
    setIsLoading(true);

    setMessages((m) => [...m, { id: Date.now(), role: "user", text: userInput }]);
    const reply = await makeApiCall(userInput, systemInstruction);

    if (reply.type === "image" && reply.imageUrl) {
      setMessages((m) => [...m, { id: Date.now(), role: "bot", image: reply.imageUrl }]);
    } else {
      setMessages((m) => [...m, { id: Date.now(), role: "bot", text: reply.text || "No response." }]);
    }

    setIsLoading(false);
  }, [input, isLoading]);

  return (
    <div className="glass-panel p-4 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/30 pb-3 flex-shrink-0">
        <MessageSquare size={24} className="text-[#66fff0]" />
        <h3 className="text-xl font-mono tracking-wider text-white/90">LIVE SUPPORT AI CHAT</h3>
      </div>

      {/* Scrollable chat */}
      <div ref={chatRef} className="flex-grow overflow-y-auto pr-3 space-y-4 scrollbar-thin">
        {messages.map((msg) => (
          <motion.div key={msg.id} className={`flex ${msg.role === "bot" ? "justify-start" : "justify-end"}`}>
            <div className={`max-w-xs md:max-w-md p-3 rounded-xl ${msg.role === "bot" ? "bg-cyan-800/40" : "bg-blue-800/40"}`}>
              {msg.image ? (
                <img src={msg.image} alt="Generated" className="rounded-lg w-full" />
              ) : (
                <p className="text-sm text-white">{msg.text}</p>
              )}
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-cyan-900/40 p-3 rounded-xl shadow-lg text-sm text-cyan-100 flex items-center gap-2">
              <Loader2 size={16} className="animate-spin text-[#66fff0]" />
              <span>AI is composing response...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="mt-4 border-t border-cyan-500/30 flex gap-2 pt-3">
        <input
          className="flex-grow bg-cyan-900/30 p-3 text-cyan-200 border border-cyan-500/50 focus:border-cyan-400 rounded-lg text-sm"
          placeholder="Ask a question or generate an image..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={isLoading || !input.trim()}
          className="bg-[#66fff0]/30 hover:bg-[#66fff0]/50 p-3 rounded-lg text-white"
        >
          <Send size={20} />
        </motion.button>
      </form>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpen] = useState<number | null>(null);
  return (
    <div className="glass-panel p-4 flex flex-col overflow-y-auto scrollbar-thin">
      <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/30 pb-3">
        <HelpCircle size={24} className="text-yellow-400" />
        <h3 className="text-xl font-mono tracking-wider text-white/90">FAQ</h3>
      </div>
      {FAQ_DATA.map((faq, i) => (
        <div key={i} className="border border-cyan-700/50 rounded-lg mb-2">
          <button onClick={() => setOpen(openIndex === i ? null : i)} className="w-full p-3 flex justify-between items-center text-sm">
            <span className="text-white/90">{faq.q}</span>
            <ChevronDown size={14} className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          {openIndex === i && <div className="p-3 text-xs opacity-70 bg-cyan-900/20">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
};

const ContactSection = () => (
  <div className="glass-panel p-4 flex flex-col space-y-4">
    <div className="flex items-center gap-3 border-b border-cyan-500/30 pb-3">
      <Mail size={24} className="text-red-400" />
      <h3 className="text-xl font-mono tracking-wider text-white/90">DIRECT CONTACT</h3>
    </div>
    <p className="text-sm opacity-70">For inquiries or partnership opportunities, contact:</p>
    <div className="bg-red-900/30 p-3 rounded-lg">
      <a href="mailto:info@world47.com" className="text-sm text-red-300 hover:underline">
        info@world47.com
      </a>
    </div>
  </div>
);

export default function App() {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-[#00050a] text-cyan-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"></div>
      <motion.header className="absolute top-6 left-6 right-6 z-50">
        <Header pageTitle="SUPPORT NEXUS V4.7" />
      </motion.header>

      <motion.div className="relative z-40 w-full max-w-7xl h-[85vh] p-8 mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <AIChatBot />
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <FAQSection />
          <ContactSection />
        </div>
      </motion.div>

      <style>{`
        .glass-panel {
          background: rgba(0, 20, 27, 0.4);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(0, 255, 255, 0.8);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
          border-radius: 12px;
          height: 100%;
        }
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background-color: rgba(0,255,255,0.6); border-radius: 3px; }
      `}</style>
    </section>
  );
}
