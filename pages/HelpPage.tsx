/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";
import React, { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MessageSquare, HelpCircle, Mail, Users, Send, Loader2, Link, ChevronDown } from "lucide-react";

// 1. IMPORT THE HEADER COMPONENT
import Header from "../components/header"; 

/* ------------------------------
    Constants & Configuration
    ------------------------------ */
// Gemini API Configuration - NOTE: This model is used for the AI Chat Bot
const API_CONFIG = {
    model: "gemini-2.5-flash-preview-09-2025",
    apiUrl: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent",
    apiKey: "", // Mandatory empty string for canvas environment
};

const FAQ_DATA = [
    {
        q: "What is ABN Crypto?",
        a: "ABN (Aethelborn Network) Crypto is the official digital currency of the World47 ecosystem. It's used for in-app purchases, rewarding content creators, and unlocking exclusive access to digital artifacts.",
    },
    {
        q: "How do I redeem my QR Code reward?",
        a: "Navigate to the Rewards Terminal, select 'QR Code Redemption,' and either upload a screenshot of the unique code from your E-book receipt or use your phone's camera for a live scan. The system will automatically credit your ABN balance.",
    },
    {
        q: "Where can I find my user ID?",
        a: "Your unique User ID (e.g., ABNT01-34x-SYN) is displayed prominently on the Rewards Terminal page, right above your current ABN balance and below your username.",
    },
    {
        q: "Can I transfer ABN to other users?",
        a: "Yes. Use the Transfer function on the Rewards Terminal. You need the recipient's User ID to initiate a secure peer-to-peer transfer. Transfers are instant and incur a minimal network fee.",
    },
];

/* ------------------------------
    Types & Interfaces
    ------------------------------ */

interface ChatMessage {
    id: number;
    role: "user" | "bot";
    text: string;
    sources?: { uri: string; title: string }[];
}

interface StaggeredBoxProps extends React.PropsWithChildren {
    className?: string;
}

/* ------------------------------
    Animation Variants
    ------------------------------ */

const panelVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.3, ease: "easeOut" },
    },
};

const chatMessageVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
};

/* ------------------------------
    Reusable UI pieces
    ------------------------------ */

const StaggeredBox: React.FC<StaggeredBoxProps> = ({ children, className = "" }) => {
    return (
        <motion.div className={`glass-panel ${className}`} variants={panelVariants}>
            <motion.div className="h-full w-full" variants={contentVariants}>
                {children}
            </motion.div>
        </motion.div>
    );
};

/* ------------------------------
    API & Utility Functions
    ------------------------------ */

/**
 * Helper to make the Gemini API call with exponential backoff.
 */
const makeApiCall = async (query: string, systemInstruction: string, maxRetries = 3): Promise<ChatMessage | null> => {
    // This payload enables Google Search grounding
    const payload = {
        contents: [{ parts: [{ text: query }] }],
        tools: [{ "google_search": {} }], 
        systemInstruction: { parts: [{ text: systemInstruction }] },
    };

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(`${API_CONFIG.apiUrl}?key=${API_CONFIG.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                // Log non-200 status errors
                console.error(`Attempt ${attempt + 1}: API call failed with status: ${response.status}`);
                
                if (response.status === 429 && attempt < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                    continue; // Retry after backoff
                }
                throw new Error(`API returned status ${response.status}`);
            }

            // Attempt to parse JSON response
            let result: any;
            try {
                result = await response.json();
            } catch (e) {
                console.error(`Attempt ${attempt + 1}: Failed to parse JSON response.`, e);
                // If parsing fails, treat it as a temporary error and retry (if not last attempt)
                if (attempt < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                    continue;
                }
                throw new Error('Invalid response format from API.');
            }

            const candidate = result.candidates?.[0];

            if (candidate && candidate.content?.parts?.[0]?.text) {
                const text = candidate.content.parts[0].text;
                let sources = [];

                // Extract grounding sources from the response metadata
                const groundingMetadata = candidate.groundingMetadata;
                if (groundingMetadata && groundingMetadata.groundingAttributions) {
                    sources = groundingMetadata.groundingAttributions
                        .map((attribution: any) => ({
                            uri: attribution.web?.uri,
                            title: attribution.web?.title,
                        }))
                        .filter((source: any) => source.uri && source.title);
                }

                return {
                    id: Date.now(),
                    role: 'bot',
                    text: text,
                    sources: sources,
                };
            }

            // Handle cases where response is OK but contains no text/candidates
            console.warn(`Attempt ${attempt + 1}: API response OK, but no valid text found.`);
            return { id: Date.now(), role: 'bot', text: 'Sorry, I received an empty response. Please try rephrasing your question.', sources: [] };

        } catch (error) {
            console.error(`Attempt ${attempt + 1}: General error during API call.`, error);
            if (attempt === maxRetries - 1) {
                // On final attempt failure, return a user-facing error message
                return { id: Date.now() + 1, role: 'bot', text: 'I encountered a connection error. Please try again later.', sources: [] };
            }
            // Wait for exponential backoff before retrying
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
    }
    return null;
};

/* ------------------------------
    INNER PAGE COMPONENTS
    ------------------------------ */

const AIChatBot: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const systemInstruction = useMemo(() => (
        "You are World47 Support AI, a friendly and concise virtual assistant. Your role is to help users with FAQs about the platform and technical issues. Keep your answers brief and professional, typically under 50 words. Use Google Search grounding to provide up-to-date answers when necessary."
    ), []);

    useEffect(() => {
        // Initial welcome message
        if (messages.length === 0) {
            setMessages([{
                id: 0,
                role: 'bot',
                text: "Hello! I'm the World47 Support AI Bot. I can help you with questions about ABN Crypto, rewards, and technical issues. What can I assist you with today?",
                sources: []
            }]);
        }
    }, []);

    // Scroll to bottom when new message arrives
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = useCallback(async (e?: React.FormEvent) => {
        e?.preventDefault();
        const userQuery = input.trim();
        if (!userQuery || isLoading) return;

        setInput("");
        setIsLoading(true);

        const newUserMessage: ChatMessage = { id: Date.now(), role: 'user', text: userQuery };
        setMessages(prev => [...prev, newUserMessage]);

        // --- GEMINI API CALL ---
        const botResponse = await makeApiCall(userQuery, systemInstruction);

        if (botResponse) {
            setMessages(prev => [...prev, botResponse]);
        } else {
             // Fallback error message if all retries fail
            setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: 'Connection failed after multiple attempts. Check your network or try again later.', sources: [] }]);
        }

        setIsLoading(false);
    }, [input, isLoading, systemInstruction]);

    // Component to render a single message bubble
    const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
        const isBot = message.role === 'bot';
        const bgColor = isBot ? 'bg-cyan-800/40' : 'bg-blue-800/40';
        const alignment = isBot ? 'justify-start' : 'justify-end';
        const textColor = isBot ? 'text-cyan-100' : 'text-white';

        return (
            <motion.div
                className={`flex w-full ${alignment}`}
                variants={chatMessageVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={`max-w-xs md:max-w-md p-3 rounded-xl shadow-lg ${bgColor}`}>
                    <p className={`text-sm ${textColor} mb-1`}>{message.text}</p>
                    {message.sources && message.sources.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-white/10">
                            <p className="text-[10px] font-mono opacity-60 mb-1">Sources (Grounding):</p>
                            <ul className="space-y-0.5">
                                {message.sources.slice(0, 2).map((source, index) => (
                                    <li key={index} className="flex items-center text-[10px] opacity-70 hover:opacity-100 transition-opacity">
                                        <Link size={10} className="mr-1 flex-shrink-0" />
                                        <a href={source.uri} target="_blank" rel="noopener noreferrer" className="truncate hover:underline" title={source.title || source.uri}>
                                            {source.title || source.uri}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </motion.div>
        );
    };

    return (
        <StaggeredBox className="p-4 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/30 pb-3 flex-shrink-0">
                <MessageSquare size={24} className="text-[#66fff0]" />
                <h3 className="text-xl font-mono tracking-wider text-white/90">
                    LIVE SUPPORT AI CHAT
                </h3>
            </div>
            
            {/* Chat Messages Area */}
            <motion.div 
                className="flex-grow overflow-y-auto pr-3 space-y-4 scrollbar-thin min-h-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-cyan-900/40 p-3 rounded-xl shadow-lg text-sm text-cyan-100 flex items-center gap-2">
                            <Loader2 size={16} className="animate-spin text-[#66fff0]" />
                            <span className="opacity-80">AI is composing response...</span>
                        </div>
                    </div>
                )}

                <div ref={chatEndRef} />
            </motion.div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="mt-4 pt-3 border-t border-cyan-500/30 flex-shrink-0 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question about World47 or your ABN account..."
                    className="flex-grow bg-cyan-900/30 p-3 text-cyan-200 border border-cyan-500/50 focus:border-cyan-400 focus:outline-none rounded-lg font-mono text-sm placeholder:opacity-60"
                    disabled={isLoading}
                />
                <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#66fff0]/30 hover:bg-[#66fff0]/50 p-3 rounded-lg text-white font-bold transition-colors disabled:opacity-50"
                    disabled={isLoading || !input.trim()}
                >
                    <Send size={20} />
                </motion.button>
            </form>
        </StaggeredBox>
    );
};

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <StaggeredBox className="p-4 h-full flex flex-col overflow-y-auto scrollbar-thin">
            <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/30 pb-3 flex-shrink-0">
                <HelpCircle size={24} className="text-yellow-400" />
                <h3 className="text-xl font-mono tracking-wider text-white/90">
                    FREQUENTLY ASKED QUESTIONS
                </h3>
            </div>
            
            <div className="space-y-3 flex-grow min-h-0">
                {FAQ_DATA.map((faq, index) => (
                    <div key={index} className="border border-cyan-700/50 rounded-lg overflow-hidden transition-all duration-300">
                        <motion.button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-3 flex justify-between items-center text-sm font-semibold hover:bg-cyan-900/30 transition-colors"
                        >
                            <span className="text-white/90">{faq.q}</span>
                            <motion.span
                                initial={false}
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown size={16} className="text-cyan-400" />
                            </motion.span>
                        </motion.button>

                        <motion.div
                            initial={false}
                            animate={{ height: openIndex === index ? "auto" : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="p-3 pt-0 text-xs opacity-70 bg-cyan-900/20">
                                {faq.a}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </StaggeredBox>
    );
};

const ContactSection: React.FC = () => {
    return (
        <StaggeredBox className="p-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3 border-b border-cyan-500/30 pb-3">
                <Mail size={24} className="text-red-400" />
                <h3 className="text-xl font-mono tracking-wider text-white/90">
                    DIRECT CONTACT
                </h3>
            </div>
            
            <div className="space-y-3">
                <p className="text-sm opacity-70">
                    For detailed account inquiries, bug reports, or partnership opportunities, contact the World47 Administration Core directly.
                </p>
                <div className="flex items-center bg-red-900/30 p-3 rounded-lg">
                    <Mail size={16} className="text-red-400 mr-3 flex-shrink-0" />
                    <a href="mailto:info@world47.com" className="text-sm font-mono text-red-300 hover:text-red-200 transition-colors truncate"
                        onClick={(e) => { e.preventDefault(); /* Prevent actual navigation in sandbox */ }}>
                        info@world47.com
                    </a>
                </div>
            </div>

            <div className="flex items-center gap-3 border-t border-cyan-500/30 pt-4">
                <Users size={24} className="text-green-400" />
                <h3 className="text-xl font-mono tracking-wider text-white/90">
                    COMMUNITY SUPPORT
                </h3>
            </div>
            
            <div className="space-y-3">
                <p className="text-sm opacity-70">
                    Engage with the World47 community, find solutions, and share your experiences in the official communication threads.
                </p>
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 font-bold tracking-wider rounded-lg transition-colors duration-200 bg-green-700/50 hover:bg-green-600/70 flex items-center justify-center gap-2"
                >
                    <Link size={18} /> ACCESS COMMUNITY THREADS (Simulated Link)
                </motion.button>
            </div>
        </StaggeredBox>
    );
};

/* ------------------------------
    MAIN APPLICATION
    ------------------------------ */

const App: React.FC = () => {
    // We define the page title here to pass it to the Header component
    const pageTitle = "SUPPORT NEXUS V4.7";

    const simpleFade = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#00050a] text-cyan-200">
            {/* Background Gradient matching the original style */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"></div>

            {/* Simulated Grid Overlay for Sci-Fi look */}
            <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(cyan 1px, transparent 1px), radial-gradient(cyan 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>

            {/* 2. REPLACED THE OLD HEADER BLOCK WITH THE NEW HEADER COMPONENT */}
            <motion.header 
                className="absolute top-6 left-6 right-6 z-50 pointer-events-auto" // Restores positioning
                {...simpleFade} 
                transition={{ ...simpleFade.animate.transition, delay: 0.1 }}
            >
                <Header pageTitle={pageTitle} /> 
            </motion.header>

            {/* Main Content Area: Increased margin-top (mt-28) to push content below the new header. */}
            <motion.div
                className="relative z-40 w-full max-w-7xl h-[85vh] p-8 mt-28 grid grid-cols-1 md:grid-cols-3 gap-8" // ⬅️ CHANGED mt-12 to mt-28
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                }}
            >
                {/* Column 1 (2/3 width): AI Chat Bot */}
                <div className="col-span-1 md:col-span-2">
                    <AIChatBot />
                </div>

                {/* Column 2 (1/3 width): FAQs and Contact (Flex layout to distribute space) */}
                <div className="col-span-1 flex flex-col gap-8">
                    <div className="h-1/2 min-h-[300px]">
                        <FAQSection />
                    </div>
                    <div className="h-1/2">
                        <ContactSection />
                    </div>
                </div>
            </motion.div>

            {/* Global CSS for the repeated aesthetic look */}
            <style>{`
                .glass-panel {
                    background: rgba(0, 20, 27, 0.4);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 2px solid rgba(0, 255, 255, 0.8);
                    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2), 0 6px 15px rgba(0, 0, 0, 0.6);
                    border-radius: 12px;
                    height: 100%;
                }
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 255, 255, 0.6);
                    border-radius: 3px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </section>
    );
};

export default App;