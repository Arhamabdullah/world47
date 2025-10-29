import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Mail, Phone, ArrowLeft, Send,
  Star, Heart, Feather, Zap, Sun, Moon, Cloud, Smile, Check, X, Icon as LucideIcon 
} from 'lucide-react';

// --- Configuration and Constants ---

/**
 * Type definitions for clarity and type safety
 */
type Avatar = {
  id: number;
  name: string;
  icon: typeof LucideIcon; 
  color: string;     // Tailwind text color class (e.g., 'text-yellow-400')
  hex: string;       // Corresponding HEX value for framer-motion glow
  thumbnail: string; 
  gif: string;       
};

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  selectedAvatar: number | null;
};

interface DetailsFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
  onExit: () => void;
  themeColorClass: string;
}

interface AvatarSelectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onBack: () => void;
  onNext: () => void;
  themeColorClass: string;
}

interface VerificationScreenProps {
  formData: FormData;
  onBack: () => void;
  onExit: () => void;
  themeColorClass: string;
}

// The list of 8 interactive avatars with distinct names, colors, and HEX values
const AVATARS: Avatar[] = [
  { id: 1, name: "Celestial Dragon", icon: Star, color: 'text-yellow-400', hex: '#fbbf24', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
  { id: 2, name: "Shadow Wyvern", icon: Heart, color: 'text-red-400', hex: '#f87171', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
  { id: 3, name: "Jade Basilisk", icon: Feather, color: 'text-green-400', hex: '#4ade80', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
  { id: 4, name: "Electric Serpent", icon: Zap, color: 'text-blue-400', hex: '#60a5fa', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
  { id: 5, name: "Solar Drake", icon: Sun, color: 'text-orange-400', hex: '#fb923c', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
  { id: 6, name: "Lunar Komodo", icon: Moon, color: 'text-purple-400', hex: '#c084fc', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
  { id: 7, name: "Mist Leviathan", icon: Cloud, color: 'text-cyan-400', hex: '#22d3ee', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
  { id: 8, name: "Aura Golem", icon: Smile, color: 'text-lime-400', hex: '#a3e635', thumbnail: '/thumbnailone.png', gif: '/dragon.gif' },
];

// Helper to convert Tailwind text color class to border color class
const getColorClass = (colorClass: string) => {
    // Example: text-yellow-400 -> border-yellow-400
    return colorClass.replace('text-', 'border-');
}

// Base classes
const inputClasses = 
  "w-full p-3 pl-10 bg-black/30 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder-cyan-200/70 text-cyan-50";

// --- Components ---

/**
 * Pulsing Background Glow (Now accepts HEX color)
 */
interface AnimatedGlowProps {
    themeHex: string;
}

const AnimatedGlow: React.FC<AnimatedGlowProps> = ({ themeHex }) => {
  // Utility function to convert HEX to RGBA for shadow string
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const shadowColorLow = hexToRgba(themeHex, 0.4);
  const shadowColorHigh = hexToRgba(themeHex, 0.8);
  const bgColor = hexToRgba(themeHex, 0.1);

  return (
    <motion.div
      key={themeHex} // Key forces re-render and animation when color changes
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-60 pointer-events-none"
      initial={{ 
          scale: 1, 
          boxShadow: `0 0 80px 40px ${shadowColorLow}`
      }}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          `0 0 80px 40px ${shadowColorLow}`, 
          `0 0 180px 90px ${shadowColorHigh}`, 
          `0 0 80px 40px ${shadowColorLow}`
        ],
      }}
      transition={{
        duration: 4.0, 
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        backgroundColor: bgColor,
        filter: 'blur(40px)',
      }}
    />
  );
};

/**
 * Avatar Thumbnail Item (Unchanged from previous update)
 */
interface ThumbnailItemProps {
    avatar: Avatar;
    isSelected: boolean;
    onSelect: (avatar: Avatar) => void;
}

const ThumbnailItem: React.FC<ThumbnailItemProps> = ({ avatar, isSelected, onSelect }) => {
  return (
    <motion.div
      className={`relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-1 rounded-md cursor-pointer transition-all duration-300 overflow-hidden shrink-0 ${avatar.color}`}
      onClick={() => onSelect(avatar)}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      
      style={{
        border: isSelected ? `3px solid currentColor` : '3px solid rgba(255, 255, 255, 0.2)',
        boxShadow: isSelected ? `0 0 10px currentColor` : 'none',
      }}
    >
      <img src={avatar.thumbnail} alt={`Avatar ${avatar.id} Thumbnail`} className="w-full h-full object-cover rounded-sm" />
    </motion.div>
  );
};

/**
 * Shared Glass Panel Styling (Now dynamic)
 */
const GlassPanel: React.FC<React.PropsWithChildren<{ themeColorClass: string }>> = ({ children, themeColorClass }) => {
    const borderColorClass = getColorClass(themeColorClass);
    return (
        <div className={`p-8 sm:p-10 w-full bg-[rgba(0,20,27,0.4)] backdrop-blur-[20px] border-[2px] ${borderColorClass}/80 shadow-[0_0_30px_rgba(0,255,255,0.2),_0_6px_15px_rgba(0,0,0,0.6)] rounded-xl flex flex-col items-center`}>
            {children}
        </div>
    );
}


// --- Step 1: User Details Form ---

const DetailsForm: React.FC<DetailsFormProps> = ({ formData, setFormData, onNext, onExit, themeColorClass }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.phone && formData.email) {
      onNext();
    }
  };
  
  const focusRingClass = themeColorClass.replace('-400', '-300').replace('text-', 'focus:border-');
  const accentColorClass = themeColorClass.replace('text-', 'text-');

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <h2 className={`text-2xl font-bold ${accentColorClass} text-center mb-6`}>Account Details</h2>
      
      {/* Name Fields */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <input type="text" name="firstName" className={`${inputClasses} border-cyan-500/50 ${focusRingClass}`} placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <User className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`} />
        </div>
        <div className="relative flex-1">
          <input type="text" name="lastName" className={`${inputClasses} border-cyan-500/50 ${focusRingClass}`} placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <User className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`} />
        </div>
      </div>

      {/* Phone Number */}
      <div className="relative">
        <input type="tel" name="phone" className={`${inputClasses} border-cyan-500/50 ${focusRingClass}`} placeholder="Phone Number" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10,15}" title="Phone number (10-15 digits)" />
        <Phone className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`} />
      </div>
      
      {/* Email */}
      <div className="relative">
        <input type="email" name="email" className={`${inputClasses} border-cyan-500/50 ${focusRingClass}`} placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <Mail className={`h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`} />
      </div>

      {/* Buttons */}
      <div className="pt-4 flex justify-between gap-4">
        <motion.button
          type="button"
          onClick={onExit}
          className="flex-1 py-3 bg-red-600/70 hover:bg-red-500/80 transition-all duration-300 rounded-md text-white font-semibold text-lg border border-red-500/50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <X className="inline h-5 w-5 mr-2" />
          Exit
        </motion.button>
        <motion.button
          type="submit"
          className={`flex-1 py-3 transition-all duration-300 rounded-md text-white font-semibold text-lg border ${themeColorClass.replace('text-', 'bg-').replace('-400', '-600/70')} hover:${themeColorClass.replace('text-', 'bg-').replace('-400', '-500/80')} ${getColorClass(themeColorClass)}/50`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Next
          <ArrowLeft className="inline h-5 w-5 ml-2 transform rotate-180" />
        </motion.button>
      </div>
    </form>
  );
};

// --- New Component for Swiping Display ---
interface AvatarDisplayProps {
    avatar: Avatar;
    direction: 1 | -1;
}

const swipeVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    })
};

const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ avatar, direction }) => {
    const borderColorClass = getColorClass(avatar.color);
    
    // Shadow color is derived from the hex to match the full app theme
    const shadowColorHex = avatar.hex;
    const shadowStyle = `0 0 20px ${shadowColorHex}`;

    return (
        <motion.div
            key={avatar.id} // Key is critical for AnimatePresence to trigger exit/enter
            custom={direction}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
                x: { type: "spring", stiffness: 300, damping: 30 }, 
                opacity: { duration: 0.2 } 
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
        >
            {/* The GIF Image */}
            <img 
              src={avatar.gif} 
              alt={`Selected Avatar GIF: ${avatar.name}`} 
              className="w-full h-full object-contain max-h-[60vh] rounded-xl"
            />
            
            {/* Avatar Name Display below the GIF */}
            <motion.div
              className={` p-3 px-8 text-2xl sm:text-3xl font-extrabold tracking-widest text-cyan-50 bg-black/60 backdrop-blur-sm rounded-full border-2 ${borderColorClass}/50`}
              style={{ boxShadow: shadowStyle }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {avatar.name.toUpperCase()}
            </motion.div>
        </motion.div>
    );
};


// --- Step 2: Avatar Selection (Full-Screen Immersive with Swipe) ---

const AvatarSelection: React.FC<AvatarSelectionProps> = ({ formData, setFormData, onBack, onNext, themeColorClass }) => {
  // State to track the ID of the avatar that is currently BEING DISPLAYED (for animation)
  const [displayedAvatarId, setDisplayedAvatarId] = useState<number>(formData.selectedAvatar || AVATARS[0].id);
  // State to track the direction of the swipe (1 or -1)
  const [direction, setDirection] = useState<1 | -1>(1);

  // Derive the currently selected avatar object based on the ID to display
  const currentAvatar = useMemo(() => 
    AVATARS.find(a => a.id === displayedAvatarId) || AVATARS[0], 
    [displayedAvatarId]
  );

  // Use useEffect to update the local display state when formData changes (e.g., on initial load)
  React.useEffect(() => {
    if (formData.selectedAvatar !== null) {
        setDisplayedAvatarId(formData.selectedAvatar);
    }
  }, [formData.selectedAvatar]);

  const handleSelect = (avatar: Avatar) => {
    // 1. Calculate direction before updating the ID
    const newDirection = avatar.id > displayedAvatarId ? 1 : -1;
    setDirection(newDirection);

    // 2. Update the local state to trigger the animation
    setDisplayedAvatarId(avatar.id);
    
    // 3. Update the form data (important for the 'Lock In' button)
    setFormData(prev => ({ ...prev, selectedAvatar: avatar.id }));
  };
  
  const isAvatarSelected = formData.selectedAvatar !== null;

  const handleSubmit = () => {
    if (isAvatarSelected) {
      onNext();
    }
  };

  const floatingGlassClasses = "bg-[rgba(0,20,27,0.4)] backdrop-blur-[20px] border-[2px] border-cyan-500/80 shadow-[0_0_30px_rgba(0,255,255,0.2),_0_6px_15px_rgba(0,0,0,0.6)] rounded-xl";

  return (
    // Outer container for the full-screen step content
    <div className="flex flex-col h-full w-full justify-between items-center text-center">
      
      {/* 1. Large GIF Display Area */}
      <div
        className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl relative overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
            <AvatarDisplay 
                key={currentAvatar.id} 
                avatar={currentAvatar} 
                direction={direction} 
            />
        </AnimatePresence>
      </div>

      {/* 2. Floating Control Bar (Selection Grid and Buttons) */}
      <div className={`w-full p-4 sm:p-6 mb-0 ${floatingGlassClasses} flex flex-col gap-4 max-w-4xl shrink-0`}>
        
        {/* Avatar Thumbnail Grid */}
        <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto py-2">
          {AVATARS.map((avatar) => (
            <ThumbnailItem
              key={avatar.id}
              avatar={avatar}
              isSelected={formData.selectedAvatar === avatar.id}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <motion.button
            type="button"
            onClick={onBack}
            className="flex-1 py-3 bg-slate-700/70 hover:bg-slate-600/80 transition-all duration-300 rounded-md text-white font-semibold text-lg border border-slate-600/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="inline h-5 w-5 mr-2" />
            Back
          </motion.button>
          <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={!isAvatarSelected}
            className={`flex-1 py-3 transition-all duration-300 rounded-md text-white font-semibold text-lg border ${
              isAvatarSelected
                ? `${themeColorClass.replace('text-', 'bg-').replace('-400', '-600/70')} hover:${themeColorClass.replace('text-', 'bg-').replace('-400', '-500/80')} ${getColorClass(themeColorClass)}/50`
                : "bg-gray-500/50 border-gray-600/50 cursor-not-allowed"
            }`}
            whileHover={isAvatarSelected ? { scale: 1.02 } : {}}
            whileTap={isAvatarSelected ? { scale: 0.98 } : {}}
          >
            Lock In
            <Check className="inline h-5 w-5 ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// --- Step 3: Email Verification ---

const VerificationScreen: React.FC<VerificationScreenProps> = ({ formData, onBack, onExit, themeColorClass }) => {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setEmailSent(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const accentColorClass = themeColorClass.replace('text-', 'text-');
  const accentBgClass = themeColorClass.replace('text-', 'bg-').replace('-400', '-400/20');
  const accentBorderClass = themeColorClass.replace('text-', 'border-').replace('-400', '-400/50');

  return (
    <div className="w-full text-center space-y-6">
      <h2 className={`text-3xl font-extrabold ${accentColorClass} mb-2`}>Almost There!</h2>
      <div className="flex justify-center">
        <motion.div
            className={`p-4 rounded-full ${accentBgClass} border-4 ${accentBorderClass}`}
            initial={{ scale: 0.8, rotate: -15 }}
            animate={{ scale: 1.1, rotate: 15 }}
            transition={{
                yoyo: Infinity,
                duration: 1.5,
                ease: "easeInOut",
            }}
        >
            <Send size={64} className={accentColorClass} />
        </motion.div>
      </div>
      
      <p className="text-lg text-cyan-100">
        We've sent a verification link to:
      </p>
      <p className="text-xl font-mono text-cyan-300 break-all p-3 bg-black/30 rounded-lg">
        {formData.email}
      </p>
      
      {emailSent ? (
        <p className="text-sm text-lime-300 flex items-center justify-center">
          <Check size={16} className="mr-2" />
          Verification email sent successfully. Please check your inbox!
        </p>
      ) : (
        <p className="text-sm text-yellow-400">
          Sending verification email...
        </p>
      )}

      {/* Buttons */}
      <div className="pt-4 flex justify-between gap-4">
        <motion.button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 bg-slate-700/70 hover:bg-slate-600/80 transition-all duration-300 rounded-md text-white font-semibold text-lg border border-slate-600/50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="inline h-5 w-5 mr-2" />
          Back
        </motion.button>
        <motion.button
          type="button"
          onClick={onExit}
          className={`flex-1 py-3 transition-all duration-300 rounded-md text-white font-semibold text-lg border ${themeColorClass.replace('text-', 'bg-').replace('-400', '-600/70')} hover:${themeColorClass.replace('text-', 'bg-').replace('-400', '-500/80')} ${getColorClass(themeColorClass)}/50`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Done (Go to Login)
        </motion.button>
      </div>
    </div>
  );
};

// --- Main App Component (Controls Step Transition and Layout) ---

const SignupApp: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    selectedAvatar: AVATARS[0].id, // Default to the first avatar
  });
  
  // 1. Determine the current theme color based on the selected avatar ID
  const currentAvatar = useMemo(() => 
    AVATARS.find(a => a.id === formData.selectedAvatar) || AVATARS[6], // Default to Cyan if none selected
    [formData.selectedAvatar]
  );
  
  const currentThemeColorClass = currentAvatar.color;
  const currentThemeHex = currentAvatar.hex;

  // Handlers for navigation
  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));
  const handleExit = () => {
      console.log("Exiting sign-up process.");
      setStep(1); 
      setFormData({
          firstName: '', lastName: '', phone: '', email: '', selectedAvatar: AVATARS[0].id,
      });
  };
  
  const isAvatarStep = step === 2;

  // Content based on current step
  const renderStep = () => {
    const props = {
        formData, 
        setFormData, 
        onBack: handleBack, 
        onNext: handleNext, 
        onExit: handleExit,
        themeColorClass: currentThemeColorClass
    };

    switch (step) {
      case 1:
        return <DetailsForm {...props} />;
      case 2:
        return <AvatarSelection {...props} />;
      case 3:
        return <VerificationScreen {...props} />;
      default:
        return <p className="text-red-500">Error: Invalid Step</p>;
    }
  };

  // Variant for motion component to transition between steps (Form transitions only)
  const pageVariants = {
    initial: (isAvatarStep: boolean) => ({ 
        opacity: 0, 
        scale: isAvatarStep ? 1 : 0.95,
        y: isAvatarStep ? 0 : 20,
    }),
    in: (isAvatarStep: boolean) => ({ 
        opacity: 1, 
        scale: 1,
        y: 0,
    }),
    out: (isAvatarStep: boolean) => ({ 
        opacity: 0, 
        scale: isAvatarStep ? 1 : 0.95,
        y: isAvatarStep ? 0 : -20,
    })
  };

  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#00050a] text-cyan-200">
      
      {/* Background Glows: The HEX color is now passed dynamically */}
      <AnimatedGlow themeHex={currentThemeHex} />

      {/* Main Content Wrapper */}
      <motion.div
        className={`z-10 w-full h-full flex items-center justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        
        {/* Step Content with Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            custom={isAvatarStep}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.3 }}
            className={`w-full ${isAvatarStep ? 'h-full' : 'max-w-lg'}`}
          >
            {isAvatarStep ? (
                // STEP 2: Full screen layout.
                renderStep() 
            ) : (
                // STEP 1 or 3: Contained glass frame with dynamic border color.
                <GlassPanel themeColorClass={currentThemeColorClass}>
                    <h1 className="text-3xl font-extrabold text-cyan-100 mb-6">
                        <span className={currentThemeColorClass}>SIGN-UP</span> ({step}/3)
                    </h1>
                    {renderStep()}
                </GlassPanel>
            )}
          </motion.div>
        </AnimatePresence>

      </motion.div>
    </section>
  );
};

export default SignupApp;
