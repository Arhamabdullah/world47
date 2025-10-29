/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { DollarSign, User, Send, QrCode, TrendingUp, RefreshCw, ChevronRight, BarChart3, Camera, UploadCloud } from "lucide-react";
import Header from "../components/Header";
/* ------------------------------
    Types & Interfaces
    ------------------------------ */

interface RewardTransaction {
    id: number;
    source: string; // e.g., "E-book: Quantum Theory", "QR Code Scan", "Daily Login"
    amount: number; // ABN Crypto amount
    date: string; // ISO date string or simple date/time
}

interface StaggeredBoxProps extends React.PropsWithChildren {
    className: string;
}

interface UserInfo {
    id: string;
    name: string;
    level: number;
    status: string;
}

interface Friend {
    id: string;
    name: string;
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
const MOCK_USER: UserInfo = {
    id: "ABNT01-34x-SYN",
    name: "CYBER_NOMAD",
    level: 7,
    status: "VIP Tier III"
};

const MOCK_FRIENDS: Friend[] = [
    { id: "A01-47-BETA", name: "AURORA_23" },
    { id: "C99-01-GAM", name: "QUANTUM_LEAP" },
    { id: "D12-33-DEL", name: "DATA_JOCKEY" },
];

const MOCK_TRANSACTIONS: RewardTransaction[] = [
    { id: 1, source: "E-book: Code Nexus", amount: 15.50, date: "2025-10-24 14:30" },
    { id: 2, source: "QR Code Scan (Alpha Key)", amount: 5.00, date: "2025-10-24 10:15" },
    { id: 3, source: "E-book: AI Frontier", amount: 22.80, date: "2025-10-23 18:00" },
    { id: 4, source: "Daily Login Streak (3 days)", amount: 1.50, date: "2025-10-23 09:00" },
];

/* ------------------------------
    INNER PAGE COMPONENTS
    ------------------------------ */

const BalanceCard: React.FC<{ balance: number, user: UserInfo, friends: Friend[], onTransfer: (amount: number, friendId: string) => void }> = ({ balance, user, friends, onTransfer }) => {
    const [isTransferring, setIsTransferring] = useState(false);
    const [transferAmount, setTransferAmount] = useState<number | ''>('');
    const [targetFriendId, setTargetFriendId] = useState<string>(friends[0].id);
    const [transferStatus, setTransferStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

    const handleTransfer = (e: React.FormEvent) => {
        e.preventDefault();
        const amount = Number(transferAmount);
        if (amount > 0 && amount <= balance) {
            onTransfer(amount, targetFriendId);
            setTransferStatus("SUCCESS");
            setTimeout(() => {
                setIsTransferring(false);
                setTransferAmount('');
                setTransferStatus("IDLE");
            }, 1500);
        } else {
            setTransferStatus("ERROR");
            setTimeout(() => setTransferStatus("IDLE"), 2000);
        }
    };
    
    const transferMessage = 
        transferStatus === "SUCCESS"
            ? `TRANSFER SUCCESSFUL: ${transferAmount} ABN sent to ${friends.find(f => f.id === targetFriendId)?.name}.`
            : transferStatus === "ERROR"
            ? "TRANSFER DENIED: Insufficient funds or invalid amount."
            : "Initiate ABN transfer to a community member.";

    return (
        <StaggeredBox className="p-6 h-full flex flex-col">
            {/* User Info Section */}
            <div className="flex items-center gap-4 border-b border-cyan-500/30 pb-3 mb-4">
                <User size={36} className="text-[#66fff0]" />
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold tracking-wider text-white/90">{user.name}</h3>
                    <p className="text-xs font-mono opacity-60">ID: {user.id}</p>
                    <p className="text-sm text-cyan-400">{user.status} | LVL {user.level}</p>
                </div>
            </div>

            {/* ABN Balance Section */}
            <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                    <DollarSign size={20} className="text-[#66fff0]" />
                    <h4 className="text-sm font-mono tracking-wider text-cyan-300">
                        AVAILABLE FUNDS
                    </h4>
                </div>
                <div className="text-4xl font-extrabold text-white/95 drop-shadow-lg mb-4">
                    <span className="text-[#66fff0]">{balance.toFixed(2)}</span>
                    <span className="text-lg ml-1 opacity-70">ABN</span>
                </div>
                <p className="text-xs opacity-60 flex items-center gap-1 mb-4">
                    <TrendingUp size={12} className="text-green-400" />
                    +2.1% in last 24h (Simulated Market Data)
                </p>

                {/* Transfer Button/Form Toggle - Adjusted padding */}
                <motion.button 
                    onClick={() => setIsTransferring(prev => !prev)}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 font-semibold tracking-wider rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mt-auto ${isTransferring ? 'bg-red-700/70 hover:bg-red-600' : 'bg-green-700/70 hover:bg-green-600'}`}
                >
                    <Send size={16} /> {isTransferring ? 'CANCEL TRANSFER' : 'TRANSFER ABN CRYPTO'}
                </motion.button>
            </div>


            {/* Transfer Form (Conditional) */}
            {isTransferring && (
                <motion.form 
                    onSubmit={handleTransfer} 
                    className="mt-4 pt-3 border-t border-cyan-500/30 space-y-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <p className="text-xs font-mono text-cyan-400/80">{transferMessage}</p>

                    <input
                        type="number"
                        step="0.01"
                        min="0.01"
                        max={balance}
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(Number(e.target.value))}
                        placeholder="AMOUNT (ABN)"
                        className="w-full bg-cyan-900/30 p-2 text-cyan-200 border border-cyan-500/50 focus:border-cyan-400 font-mono text-sm rounded-md"
                    />

                    <select
                        value={targetFriendId}
                        onChange={(e) => setTargetFriendId(e.target.value)}
                        className="w-full bg-cyan-900/30 p-2 text-cyan-200 border border-cyan-500/50 focus:border-cyan-400 font-mono text-sm appearance-none rounded-md"
                    >
                        {friends.map(friend => (
                            <option key={friend.id} value={friend.id}>{friend.name} ({friend.id.substring(0, 7)}...)</option>
                        ))}
                    </select>
                    
                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.98 }}
                        // Adjusted padding
                        className={`w-full py-2.5 font-bold tracking-wider rounded-lg transition-all duration-200 ${
                            transferStatus === "SUCCESS" ? "bg-green-600/70" : transferStatus === "ERROR" ? "bg-red-600/70" : "bg-cyan-600/70 hover:bg-cyan-600"
                        }`}
                        disabled={transferStatus === "SUCCESS"}
                    >
                        {transferStatus === "SUCCESS" ? "CONFIRMED" : "EXECUTE TRANSFER"}
                    </motion.button>
                </motion.form>
            )}
        </StaggeredBox>
    );
};

const RedeemPanel: React.FC<{ onRedeem: (amount: number) => void }> = ({ onRedeem }) => {
    const [scanStatus, setScanStatus] = useState<"IDLE" | "SCANNING" | "SUCCESS" | "ERROR">("IDLE");
    const [fileName, setFileName] = useState<string | null>(null);
    // Ref for file input to trigger it programmatically
    const fileInputRef = useRef<HTMLInputElement>(null); 

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setScanStatus("SCANNING");
            
            // Simulate image processing delay
            setTimeout(() => {
                // Mock: Successful scan yields 18.90 ABN
                const rewardAmount = 18.90;
                setScanStatus("SUCCESS");
                onRedeem(rewardAmount); // Trigger parent update
                
                // Reset after showing success
                setTimeout(() => { setScanStatus("IDLE"); setFileName(null); }, 2500);
            }, 3000);
        }
    };
    
    const handleCameraScan = () => {
        // Simulate camera access and live QR detection
        setFileName(null); // Clear any previous file name
        setScanStatus("SCANNING");
        
        // Simulate scan delay
        setTimeout(() => {
            // Mock: Successful scan yields 12.50 ABN
            const rewardAmount = 12.50;
            setScanStatus("SUCCESS");
            onRedeem(rewardAmount); // Trigger parent update
            
            // Reset after showing success
            setTimeout(() => { setScanStatus("IDLE"); }, 2500);
        }, 4000);
    };

    const statusMessage =
        scanStatus === "SCANNING"
            ? fileName ? `PROCESSING IMAGE: ${fileName}...` : "ACTIVATING CAMERA AND SCANNING LIVE FEED..."
            : scanStatus === "SUCCESS"
            ? `REWARD CLAIMED! +${MOCK_TRANSACTIONS[0].amount.toFixed(2)} ABN Added.` // Using a mock amount for message
            : scanStatus === "ERROR"
            ? "SCAN FAILED: QR Code unreadable or already redeemed."
            : "Upload a screenshot of your E-book QR code or use your camera for a live scan.";

    const statusColor =
        scanStatus === "SUCCESS" ? "text-green-400" : scanStatus === "ERROR" ? "text-red-400" : "text-cyan-400/80";

    return (
        <StaggeredBox className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/30 pb-3 flex-shrink-0">
                <QrCode size={24} className="text-red-400" />
                <h3 className="text-xl font-mono tracking-wider text-red-300">
                    QR CODE REDEMPTION
                </h3>
            </div>
            
            <div className="flex flex-col gap-4 flex-grow">
                <p className="text-sm opacity-70">
                    Claim your variable **ABN Crypto reward** from your E-book purchase receipt by scanning the unique QR code.
                </p>

                {/* File Input for Screenshot Upload (Hidden) */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                    disabled={scanStatus !== "IDLE"}
                />

                <motion.button
                    onClick={() => fileInputRef.current?.click()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // Retaining nowrap for the shorter button
                    className="w-full py-2.5 font-bold tracking-wider rounded-lg transition-all duration-200 bg-cyan-700/50 hover:bg-cyan-600/70 flex items-center justify-center gap-2 whitespace-nowrap"
                    disabled={scanStatus !== "IDLE"}
                >
                    <UploadCloud size={18} /> UPLOAD QR SCREENSHOT
                </motion.button>
                
                <motion.button
                    onClick={handleCameraScan}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // REMOVED whitespace-nowrap to allow wrapping
                    // The flex items-center ensures the icon is vertically aligned to the center of the button block.
                    className="w-full py-2.5 font-bold tracking-wider rounded-lg transition-all duration-200 bg-red-700/50 hover:bg-red-600/70 flex items-center justify-center gap-2 text-center"
                    disabled={scanStatus !== "IDLE"}
                >
                    <Camera size={18} /> SCAN VIA PHONE CAMERA (SIMULATED)
                </motion.button>
                
            </div>
            
            <p className={`mt-4 text-xs font-mono ${statusColor} text-center`}>{statusMessage}</p>
        </StaggeredBox>
    );
};

const RecentActivityPanel: React.FC<{ transactions: RewardTransaction[] }> = ({ transactions }) => {
    return (
        <StaggeredBox className="p-4 w-full h-full flex flex-col">
            <h3 className="text-sm font-semibold mb-3 tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-2 flex items-center gap-2 flex-shrink-0">
                <BarChart3 size={16} /> RECENT REWARD TRANSACTIONS
            </h3>
            
            <div className="overflow-y-auto pr-2 flex-grow scrollbar-thin min-h-0">
                <ul className="space-y-2">
                    {transactions.map((tx: RewardTransaction, index: number) => (
                        <motion.li
                            key={tx.id}
                            // Retaining fix: increased horizontal padding (px-3) and ensure content is always in line (items-start)
                            className={`flex justify-between items-start p-3 rounded-md transition-colors ${
                                tx.source.includes("E-book") || tx.source.includes("QR Code Redemption") ? 'bg-cyan-900/10 hover:bg-cyan-900/20' : 'bg-green-900/10 hover:bg-green-900/20'
                            }`}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                        >
                            <div className="flex flex-col text-xs font-mono max-w-[65%]">
                                {/* Retaining fix: truncate to prevent source name from wrapping */}
                                <span className="text-white/90 truncate">{tx.source}</span>
                                <span className="opacity-50 text-[10px] whitespace-nowrap">{new Date(tx.date).toLocaleDateString()} {new Date(tx.date).toLocaleTimeString()}</span>
                            </div>
                            {/* Retaining fix: Ensured reward amount is flexible and remains in a single line */}
                            <span className="text-sm font-bold text-green-400 flex-shrink-0 text-right whitespace-nowrap ml-2">
                                {tx.amount >= 0 ? '+' : ''}{tx.amount.toFixed(2)} ABN
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </div>
            
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 py-2 text-xs font-mono text-cyan-300 hover:text-[#66fff0] flex items-center justify-center gap-2 border-t border-cyan-500/30 pt-2"
            >
                VIEW FULL LEDGER <ChevronRight size={14} />
            </motion.button>
        </StaggeredBox>
    );
};

/* ------------------------------
    MAIN APPLICATION
    ------------------------------ */

const App: React.FC = () => {
    const [abnBalance, setAbnBalance] = useState<number>(145.75);
    const [transactions, setTransactions] = useState<RewardTransaction[]>(MOCK_TRANSACTIONS);

    // Function to handle a successful reward redemption
    const handleRewardRedeem = (amount: number) => {
        const newReward: RewardTransaction = {
            id: Date.now(),
            source: "QR Code Redemption (E-book Reward)",
            amount: amount,
            date: new Date().toISOString(),
        };
        
        setAbnBalance(prev => prev + amount);
        setTransactions(prev => [newReward, ...prev]);
    };

    // Function to handle a successful transfer to a friend
    const handleTransfer = (amount: number, friendId: string) => {
        const friend = MOCK_FRIENDS.find(f => f.id === friendId);
        if (!friend) return;

        const newTransfer: RewardTransaction = {
            id: Date.now() + 1,
            source: `Transfer Out to ${friend.name}`,
            amount: -amount,
            date: new Date().toISOString(),
        };
        
        setAbnBalance(prev => prev - amount);
        setTransactions(prev => [newTransfer, ...prev]);
    };


    return (
        // FIX: Added pt-16 (padding-top) to push content below the fixed header
        <section className="relative w-screen h-screen flex flex-col items-center justify-start overflow-hidden bg-[#00050a] text-cyan-200 pt-16">
            
            {/* Background Gradient matching the original style */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"></div>

            {/* Simulated Grid Overlay for Sci-Fi look */}
            <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(cyan 1px, transparent 1px), radial-gradient(cyan 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>

            {/* Header Component (Now fixed at the top) */}
            <Header />

            {/* Main Content Area - Centered horizontally, occupies remaining vertical space */}
            <motion.div
                // Removed mt-12 (margin-top) as pt-16 on the section handles the spacing
                // Used mx-auto to center the content block horizontally
                className="relative z-40 w-full max-w-6xl p-8 mx-auto flex-grow grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                // Max height ensures it fits nicely within the remaining space
                style={{ maxHeight: 'calc(100vh - 4rem)'}}
            >
                {/* Column 1: User Info, Balance, and Transfer */}
                <div className="col-span-1">
                    <BalanceCard 
                        balance={abnBalance} 
                        user={MOCK_USER} 
                        friends={MOCK_FRIENDS} 
                        onTransfer={handleTransfer} 
                    />
                </div>

                {/* Column 2: QR Code Redemption (Image/Camera) */}
                <div className="col-span-1">
                    <RedeemPanel onRedeem={handleRewardRedeem} />
                </div>

                {/* Column 3: Recent Activity/Transactions (Kept the same) */}
                <div className="col-span-1">
                    <RecentActivityPanel transactions={transactions} />
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
