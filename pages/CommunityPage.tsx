"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Hash, Mail, Zap, X, ArrowLeft, TrendingUp, LucideIcon, MessageSquare, Clock } from "lucide-react";

 // 1. CORRECT IMPORT PATH for the Header
 import Header from "../components/Header";

/* ------------------------------
    Types & Interfaces
    ------------------------------ */
interface Channel {
    id: number;
    name: string;
    icon: LucideIcon; // Using LucideIcon type for the icon component
    members: number;
    status: "Active" | "Critical" | "High" | "Silent";
}

interface Thread {
    id: number;
    title: string;
    channelId: number;
    replies: number;
    lastActivity: string; // e.g., "5 minutes ago"
}

interface User {
    id: number;
    name: string;
    status: "ONLINE" | "IDLE" | "AWAY" | "STREAMING";
    color: string; // Tailwind class string for status color
}

interface StaggeredBoxProps extends React.PropsWithChildren {
    className: string;
}

interface ChannelCardProps {
    channel: Channel;
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
};

/* ------------------------------
    Reusable UI pieces
    ------------------------------ */

const StaggeredBox: React.FC<StaggeredBoxProps> = ({ children, className }) => {
    return (
        <motion.div className={`glass-panel ${className}`} variants={panelVariants}>
            <motion.div className="h-full w-full" variants={contentVariants}>
                {children}
            </motion.div>
        </motion.div>
    );
};

/* ------------------------------
    DATA MOCKUP
    ------------------------------ */
const MOCK_CHANNELS: Channel[] = [
    { id: 1, name: "WORLD-47-LOBBY", icon: Hash, members: 1245, status: "Active" },
    { id: 2, name: "PROJECT-SYNAPSE-DEV", icon: Zap, members: 58, status: "Critical" },
    { id: 3, name: "TRADE-NET-ALPHA", icon: TrendingUp, members: 890, status: "High" },
    { id: 4, name: "ART-LAB-COMM", icon: Mail, members: 420, status: "Active" },
    { id: 5, name: "SECURITY-FEED-BETA", icon: X, members: 12, status: "Silent" },
];

const BASE_THREADS: Thread[] = [
    { id: 101, title: "Urgent: Synapse Deployment Error 404 - Need Fix by EOD", channelId: 2, replies: 15, lastActivity: "5 minutes ago" },
    { id: 102, title: "Brainstorming new features for World-47 interface v2.0", channelId: 1, replies: 210, lastActivity: "1 hour ago" },
    { id: 103, title: "Market Volatility Discussion: Alpha Trade Net - Q4 Projections", channelId: 3, replies: 55, lastActivity: "3 hours ago" },
    { id: 104, title: "Best AI Art Prompts of the Week - Share your latest work!", channelId: 4, replies: 32, lastActivity: "1 day ago" },
    { id: 105, title: "Review of the new Security Protocol v3.1 access logs", channelId: 5, replies: 8, lastActivity: "2 days ago" },
    { id: 106, title: "Welcome new members - quick guide and FAQs", channelId: 1, replies: 12, lastActivity: "1 week ago" },
    { id: 107, title: "Optimizing the Zap module: performance tuning feedback", channelId: 2, replies: 7, lastActivity: "1 week ago" },
];

// Function to generate a long list of threads to force scrolling
const generateLongMockThreads = (count: number): Thread[] => {
    const longList: Thread[] = [];
    
    for (let i = 1; i <= count; i++) {
        const base = BASE_THREADS[(i - 1) % BASE_THREADS.length];
        longList.push({
            id: i + 1000, // Ensure unique IDs
            title: `[ACTIVITY #${i}] ${base.title}`,
            channelId: base.channelId,
            replies: base.replies + Math.floor(i / 5),
            lastActivity: `${Math.floor(i / 3) + 1} minutes ago`,
        });
    }
    return longList;
};

// Use the function to create a long list for guaranteed scrolling
const MOCK_THREADS: Thread[] = generateLongMockThreads(50); 


const MOCK_USERS: User[] = [
    { id: 1, name: "ABNT01", status: "ONLINE", color: "text-green-400" },
    { id: 2, name: "CYBERPIRATE_77", status: "IDLE", color: "text-yellow-400" },
    { id: 3, name: "AURORA_23", status: "AWAY", color: "text-gray-400" },
    { id: 4, name: "QUANTUM_LEAP", status: "ONLINE", color: "text-green-400" },
    { id: 5, name: "NEON_WRAITH", status: "STREAMING", color: "text-purple-400" },
    { id: 6, name: "DATA_JOCKEY", status: "ONLINE", color: "text-green-400" },
];

/* ------------------------------
    INNER PAGE COMPONENTS
    ------------------------------ */

const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
    const Icon = channel.icon;
    const isCritical = channel.status === "Critical";
    const statusColor = isCritical ? "text-red-400" : "text-cyan-400";

    return (
        <motion.div
            className={`glass-panel p-4 cursor-pointer hover:bg-cyan-900/40 transition-all duration-200 border-2 ${
                isCritical ? 'border-red-500/70' : 'border-cyan-500/70'
            }`}
            variants={panelVariants}
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${isCritical ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 255, 255, 0.4)'}` }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-start justify-between">
                <Icon size={28} className={`mb-2 ${statusColor}`} />
                <span className={`text-[10px] font-mono tracking-wider ${statusColor}`}>{channel.status}</span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-[#66fff0] mb-1 truncate">{channel.name}</h3>
            <div className="flex justify-between text-xs opacity-70">
                <span>Members:</span>
                <span className="font-mono">{channel.members.toLocaleString()}</span>
            </div>
        </motion.div>
    );
};

// Helper function to find channel name from ID
const getChannelName = (id: number): string => {
    const channel = MOCK_CHANNELS.find(c => c.id === id);
    return channel ? channel.name.replace('-', ' ') : 'Unknown Channel';
};

const ThreadListPanel: React.FC = () => {
    return (
        // 🎯 FIX: Simplified the height constraint to rely fully on the parent's flex-grow
        <StaggeredBox className="p-4 w-full h-full flex flex-col">
            <div className="flex justify-between items-center border-b border-cyan-500/30 pb-2 mb-3 flex-shrink-0">
                <h3 className="text-sm font-semibold tracking-wider text-cyan-400 flex items-center gap-2">
                    <MessageSquare size={16} /> RECENT ACTIVITY THREADS ({MOCK_THREADS.length})
                </h3>
                {/* System Info integrated here */}
                <p className="text-[10px] font-mono opacity-80 flex items-center gap-2">
                    <span className="text-green-300">PING: 22ms</span>
                    <span className="text-yellow-300">NOTICE: Low traffic in ART-LAB-COMM.</span>
                </p>
            </div>
            
            {/* THIS IS THE SCROLLABLE AREA */}
            <div className="overflow-y-auto pr-2 flex-grow scrollbar-thin min-h-0">
                <ul className="space-y-3">
                    {MOCK_THREADS.map((thread: Thread, index: number) => (
                        <motion.li
                            key={thread.id}
                            className={`p-3 rounded-lg hover:bg-cyan-900/20 transition-colors cursor-pointer border-l-4 ${thread.channelId === 2 ? 'border-red-500' : 'border-cyan-500'}`}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.01 }}
                        >
                            <h4 className="text-sm font-medium text-white/90 truncate">{thread.title}</h4>
                            <div className="flex justify-between items-center text-[11px] opacity-70 mt-1 font-mono">
                                <span className="text-cyan-300/80">
                                    <Hash size={10} className="inline-block mr-1" />
                                    {getChannelName(thread.channelId)}
                                </span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1">
                                        <MessageSquare size={10} /> {thread.replies} Replies
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={10} /> {thread.lastActivity}
                                    </span>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </StaggeredBox>
    );
};


const ActiveUsersPanel: React.FC = () => {
    return (
        <StaggeredBox className="p-4 w-full h-full flex flex-col">
            <h3 className="text-sm font-semibold mb-3 tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-2 flex items-center gap-2 flex-shrink-0">
                <Users size={16} /> ACTIVE TERMINALS ({MOCK_USERS.length})
            </h3>
            <ul className="space-y-2 overflow-y-auto flex-grow min-h-0 pr-2 scrollbar-thin">
                {MOCK_USERS.map((user: User) => (
                    <li key={user.id} className="flex justify-between items-center text-xs font-mono border-b border-cyan-500/10 pb-1">
                        <span className="opacity-90">{user.name}</span>
                        <div className="flex items-center gap-1">
                            <span className={`w-2 h-2 rounded-full ${user.color.includes('green') ? 'bg-green-500' : user.color.includes('yellow') ? 'bg-yellow-500' : user.color.includes('purple') ? 'bg-purple-500' : 'bg-gray-500'} animate-pulse-slow`}></span>
                            <span className={`${user.color} opacity-70`}>{user.status}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </StaggeredBox>
    );
};

/* ------------------------------
    MAIN APPLICATION
    ------------------------------ */

const App: React.FC = () => {
    // State is typed as string
    const [pageTitle, setPageTitle] = useState<string>("COMMUNITY HUB");

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

            {/* 2. HEADER COMPONENT PLACEMENT - Re-wrapped with original positioning */}
            <motion.header 
                className="absolute top-6 left-6 right-6 z-50 pointer-events-auto" // Restored positioning
                {...simpleFade} 
                transition={{ ...simpleFade.animate.transition, delay: 0.1 }}
            >
                {/* Pass the pageTitle prop if your Header component uses it */}
                <Header pageTitle={pageTitle} /> 
            </motion.header>
            
            {/* OLD HEADER BLOCK REMOVED */}

            {/* Main Content Area: Increased margin-top (mt-28) to push content below the header. */}
            <motion.div
                className="relative z-40 w-full max-w-7xl h-[85vh] p-8 mt-28 grid grid-cols-1 md:grid-cols-4 gap-8" // ⬅️ CHANGED mt-12 to mt-28
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Channels & Threads (Main Content - Col Span 3) */}
                {/* h-full ensures this flex-col container fills the parent's height */}
                <div className="col-span-1 md:col-span-3 flex flex-col space-y-6 overflow-hidden h-full">
                    {/* Channels Section - Fixed height area */}
                    <div className="flex-shrink-0">
                        <h2 className="text-2xl font-mono tracking-wider mb-4 text-[#66fff0] border-b border-cyan-500/50 pb-2">
                            NETWORK CHANNELS
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MOCK_CHANNELS.map((channel: Channel) => (
                                <ChannelCard key={channel.id} channel={channel} />
                            ))}
                        </div>
                    </div>

                    {/* Threads Section - Takes remaining vertical space and is scrollable */}
                    <div className="flex-grow">
                        <ThreadListPanel />
                    </div>
                </div>

                {/* Sidebar (Active Users - Col Span 1) */}
                <div className="col-span-1 h-full"> 
                    <ActiveUsersPanel />
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
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default App;