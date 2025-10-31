module.exports = [
"[externals]/framer-motion [external] (framer-motion, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("framer-motion");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/SignupApp.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* eslint-disable @typescript-eslint/ban-ts-comment */ // @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$feather$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Feather$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/feather.js [ssr] (ecmascript) <export default as Feather>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
// The list of 8 interactive avatars with distinct names, colors, and HEX values
const AVATARS = [
    {
        id: 1,
        name: "Celestial Dragon",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        color: 'text-yellow-400',
        hex: '#fbbf24',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    },
    {
        id: 2,
        name: "Shadow Wyvern",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        color: 'text-red-400',
        hex: '#f87171',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    },
    {
        id: 3,
        name: "Jade Basilisk",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$feather$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Feather$3e$__["Feather"],
        color: 'text-green-400',
        hex: '#4ade80',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    },
    {
        id: 4,
        name: "Electric Serpent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: 'text-blue-400',
        hex: '#60a5fa',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    },
    {
        id: 5,
        name: "Solar Drake",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
        color: 'text-orange-400',
        hex: '#fb923c',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    },
    {
        id: 6,
        name: "Lunar Komodo",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
        color: 'text-purple-400',
        hex: '#c084fc',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    },
    {
        id: 7,
        name: "Mist Leviathan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        color: 'text-cyan-400',
        hex: '#22d3ee',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    },
    {
        id: 8,
        name: "Aura Golem",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
        color: 'text-lime-400',
        hex: '#a3e635',
        thumbnail: '/thumbnailone.png',
        gif: '/dragon.gif'
    }
];
// Helper to convert Tailwind text color class to border color class
const getColorClass = (colorClass)=>{
    // Example: text-yellow-400 -> border-yellow-400
    return colorClass.replace('text-', 'border-');
};
// Base classes
const inputClasses = "w-full p-3 pl-10 bg-black/30 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder-cyan-200/70 text-cyan-50";
const AnimatedGlow = ({ themeHex })=>{
    // Utility function to convert HEX to RGBA for shadow string
    const hexToRgba = (hex, alpha)=>{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const shadowColorLow = hexToRgba(themeHex, 0.4);
    const shadowColorHigh = hexToRgba(themeHex, 0.8);
    const bgColor = hexToRgba(themeHex, 0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-60 pointer-events-none",
        initial: {
            scale: 1,
            boxShadow: `0 0 80px 40px ${shadowColorLow}`
        },
        animate: {
            scale: [
                1,
                1.05,
                1
            ],
            boxShadow: [
                `0 0 80px 40px ${shadowColorLow}`,
                `0 0 180px 90px ${shadowColorHigh}`,
                `0 0 80px 40px ${shadowColorLow}`
            ]
        },
        transition: {
            duration: 4.0,
            ease: "easeInOut",
            repeat: Infinity
        },
        style: {
            backgroundColor: bgColor,
            filter: 'blur(40px)'
        }
    }, themeHex, false, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ThumbnailItem = ({ avatar, isSelected, onSelect })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        className: `relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-1 rounded-md cursor-pointer transition-all duration-300 overflow-hidden shrink-0 ${avatar.color}`,
        onClick: ()=>onSelect(avatar),
        whileHover: {
            scale: 1.1,
            zIndex: 10
        },
        whileTap: {
            scale: 0.95
        },
        style: {
            border: isSelected ? `3px solid currentColor` : '3px solid rgba(255, 255, 255, 0.2)',
            boxShadow: isSelected ? `0 0 10px currentColor` : 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
            src: avatar.thumbnail,
            alt: `Avatar ${avatar.id} Thumbnail`,
            className: "w-full h-full object-cover rounded-sm"
        }, void 0, false, {
            fileName: "[project]/components/SignupApp.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
/**
 * Shared Glass Panel Styling (Now dynamic)
 */ const GlassPanel = ({ children, themeColorClass })=>{
    const borderColorClass = getColorClass(themeColorClass);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `p-8 sm:p-10 w-full bg-[rgba(0,20,27,0.4)] backdrop-blur-[20px] border-[2px] ${borderColorClass}/80 shadow-[0_0_30px_rgba(0,255,255,0.2),_0_6px_15px_rgba(0,0,0,0.6)] rounded-xl flex flex-col items-center`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --- Step 1: User Details Form ---
const DetailsForm = ({ formData, setFormData, onNext, onExit, themeColorClass })=>{
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (formData.firstName && formData.lastName && formData.phone && formData.email) {
            onNext();
        }
    };
    const focusRingClass = themeColorClass.replace('-400', '-300').replace('text-', 'focus:border-');
    const accentColorClass = themeColorClass.replace('text-', 'text-');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: `text-2xl font-bold ${accentColorClass} text-center mb-6`,
                children: "Account Details"
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "firstName",
                                className: `${inputClasses} border-cyan-500/50 ${focusRingClass}`,
                                placeholder: "First Name",
                                value: formData.firstName,
                                onChange: handleChange,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: `h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`
                            }, void 0, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "lastName",
                                className: `${inputClasses} border-cyan-500/50 ${focusRingClass}`,
                                placeholder: "Last Name",
                                value: formData.lastName,
                                onChange: handleChange,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: `h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`
                            }, void 0, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "tel",
                        name: "phone",
                        className: `${inputClasses} border-cyan-500/50 ${focusRingClass}`,
                        placeholder: "Phone Number",
                        value: formData.phone,
                        onChange: handleChange,
                        required: true,
                        pattern: "[0-9]{10,15}",
                        title: "Phone number (10-15 digits)"
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                        className: `h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "email",
                        name: "email",
                        className: `${inputClasses} border-cyan-500/50 ${focusRingClass}`,
                        placeholder: "Email Address",
                        value: formData.email,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                        className: `h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 ${accentColorClass} pointer-events-none`
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "pt-4 flex justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                        type: "button",
                        onClick: onExit,
                        className: "flex-1 py-3 bg-red-600/70 hover:bg-red-500/80 transition-all duration-300 rounded-md text-white font-semibold text-lg border border-red-500/50",
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "inline h-5 w-5 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Exit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                        type: "submit",
                        className: `flex-1 py-3 transition-all duration-300 rounded-md text-white font-semibold text-lg border ${themeColorClass.replace('text-', 'bg-').replace('-400', '-600/70')} hover:${themeColorClass.replace('text-', 'bg-').replace('-400', '-500/80')} ${getColorClass(themeColorClass)}/50`,
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: [
                            "Next",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "inline h-5 w-5 ml-2 transform rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const swipeVariants = {
    enter: (direction)=>({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction)=>({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
};
const AvatarDisplay = ({ avatar, direction })=>{
    const borderColorClass = getColorClass(avatar.color);
    // Shadow color is derived from the hex to match the full app theme
    const shadowColorHex = avatar.hex;
    const shadowStyle = `0 0 20px ${shadowColorHex}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        custom: direction,
        variants: swipeVariants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
            x: {
                type: "spring",
                stiffness: 300,
                damping: 30
            },
            opacity: {
                duration: 0.2
            }
        },
        className: "absolute inset-0 flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: avatar.gif,
                alt: `Selected Avatar GIF: ${avatar.name}`,
                className: "w-full h-full object-contain max-h-[60vh] rounded-xl"
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                className: ` p-3 px-8 text-2xl sm:text-3xl font-extrabold tracking-widest text-cyan-50 bg-black/60 backdrop-blur-sm rounded-full border-2 ${borderColorClass}/50`,
                style: {
                    boxShadow: shadowStyle
                },
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 0.1,
                    duration: 0.3
                },
                children: avatar.name.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, avatar.id, true, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 273,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// --- Step 2: Avatar Selection (Full-Screen Immersive with Swipe) ---
const AvatarSelection = ({ formData, setFormData, onBack, onNext, themeColorClass })=>{
    // State to track the ID of the avatar that is currently BEING DISPLAYED (for animation)
    const [displayedAvatarId, setDisplayedAvatarId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(formData.selectedAvatar || AVATARS[0].id);
    // State to track the direction of the swipe (1 or -1)
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    // Derive the currently selected avatar object based on the ID to display
    const currentAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>AVATARS.find((a)=>a.id === displayedAvatarId) || AVATARS[0], [
        displayedAvatarId
    ]);
    // Use useEffect to update the local display state when formData changes (e.g., on initial load)
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(()=>{
        if (formData.selectedAvatar !== null) {
            setDisplayedAvatarId(formData.selectedAvatar);
        }
    }, [
        formData.selectedAvatar
    ]);
    const handleSelect = (avatar)=>{
        // 1. Calculate direction before updating the ID
        const newDirection = avatar.id > displayedAvatarId ? 1 : -1;
        setDirection(newDirection);
        // 2. Update the local state to trigger the animation
        setDisplayedAvatarId(avatar.id);
        // 3. Update the form data (important for the 'Lock In' button)
        setFormData((prev)=>({
                ...prev,
                selectedAvatar: avatar.id
            }));
    };
    const isAvatarSelected = formData.selectedAvatar !== null;
    const handleSubmit = ()=>{
        if (isAvatarSelected) {
            onNext();
        }
    };
    const floatingGlassClasses = "bg-[rgba(0,20,27,0.4)] backdrop-blur-[20px] border-[2px] border-cyan-500/80 shadow-[0_0_30px_rgba(0,255,255,0.2),_0_6px_15px_rgba(0,0,0,0.6)] rounded-xl";
    return(// Outer container for the full-screen step content
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full justify-between items-center text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center flex-grow w-full max-w-4xl relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                    initial: false,
                    custom: direction,
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AvatarDisplay, {
                        avatar: currentAvatar,
                        direction: direction
                    }, currentAvatar.id, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 360,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/SignupApp.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `w-full p-4 sm:p-6 mb-0 ${floatingGlassClasses} flex flex-col gap-4 max-w-4xl shrink-0`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-2 sm:gap-4 overflow-x-auto py-2",
                        children: AVATARS.map((avatar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ThumbnailItem, {
                                avatar: avatar,
                                isSelected: formData.selectedAvatar === avatar.id,
                                onSelect: handleSelect
                            }, avatar.id, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                type: "button",
                                onClick: onBack,
                                className: "flex-1 py-3 bg-slate-700/70 hover:bg-slate-600/80 transition-all duration-300 rounded-md text-white font-semibold text-lg border border-slate-600/50",
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "inline h-5 w-5 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SignupApp.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                type: "button",
                                onClick: handleSubmit,
                                disabled: !isAvatarSelected,
                                className: `flex-1 py-3 transition-all duration-300 rounded-md text-white font-semibold text-lg border ${isAvatarSelected ? `${themeColorClass.replace('text-', 'bg-').replace('-400', '-600/70')} hover:${themeColorClass.replace('text-', 'bg-').replace('-400', '-500/80')} ${getColorClass(themeColorClass)}/50` : "bg-gray-500/50 border-gray-600/50 cursor-not-allowed"}`,
                                whileHover: isAvatarSelected ? {
                                    scale: 1.02
                                } : {},
                                whileTap: isAvatarSelected ? {
                                    scale: 0.98
                                } : {},
                                children: [
                                    "Lock In",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "inline h-5 w-5 ml-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SignupApp.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
// --- Step 3: Email Verification ---
const VerificationScreen = ({ formData, onBack, onExit, themeColorClass })=>{
    const [emailSent, setEmailSent] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(()=>{
        const timer = setTimeout(()=>setEmailSent(true), 500);
        return ()=>clearTimeout(timer);
    }, []);
    const accentColorClass = themeColorClass.replace('text-', 'text-');
    const accentBgClass = themeColorClass.replace('text-', 'bg-').replace('-400', '-400/20');
    const accentBorderClass = themeColorClass.replace('text-', 'border-').replace('-400', '-400/50');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-full text-center space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: `text-3xl font-extrabold ${accentColorClass} mb-2`,
                children: "Almost There!"
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                    className: `p-4 rounded-full ${accentBgClass} border-4 ${accentBorderClass}`,
                    initial: {
                        scale: 0.8,
                        rotate: -15
                    },
                    animate: {
                        scale: 1.1,
                        rotate: 15
                    },
                    transition: {
                        yoyo: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        size: 64,
                        className: accentColorClass
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 444,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/SignupApp.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-lg text-cyan-100",
                children: "We've sent a verification link to:"
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-xl font-mono text-cyan-300 break-all p-3 bg-black/30 rounded-lg",
                children: formData.email
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            emailSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-sm text-lime-300 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        size: 16,
                        className: "mr-2"
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Verification email sent successfully. Please check your inbox!"
                ]
            }, void 0, true, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 456,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-sm text-yellow-400",
                children: "Sending verification email..."
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 461,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "pt-4 flex justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                        type: "button",
                        onClick: onBack,
                        className: "flex-1 py-3 bg-slate-700/70 hover:bg-slate-600/80 transition-all duration-300 rounded-md text-white font-semibold text-lg border border-slate-600/50",
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "inline h-5 w-5 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/SignupApp.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                        type: "button",
                        onClick: onExit,
                        className: `flex-1 py-3 transition-all duration-300 rounded-md text-white font-semibold text-lg border ${themeColorClass.replace('text-', 'bg-').replace('-400', '-600/70')} hover:${themeColorClass.replace('text-', 'bg-').replace('-400', '-500/80')} ${getColorClass(themeColorClass)}/50`,
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: "Done (Go to Login)"
                    }, void 0, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// --- Main App Component (Controls Step Transition and Layout) ---
const SignupApp = ()=>{
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        selectedAvatar: AVATARS[0].id
    });
    // 1. Determine the current theme color based on the selected avatar ID
    const currentAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>AVATARS.find((a)=>a.id === formData.selectedAvatar) || AVATARS[6], [
        formData.selectedAvatar
    ]);
    const currentThemeColorClass = currentAvatar.color;
    const currentThemeHex = currentAvatar.hex;
    // Handlers for navigation
    const handleNext = ()=>setStep((prev)=>Math.min(prev + 1, 3));
    const handleBack = ()=>setStep((prev)=>Math.max(prev - 1, 1));
    const handleExit = ()=>{
        console.log("Exiting sign-up process.");
        setStep(1);
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            selectedAvatar: AVATARS[0].id
        });
    };
    const isAvatarStep = step === 2;
    // Content based on current step
    const renderStep = ()=>{
        const props = {
            formData,
            setFormData,
            onBack: handleBack,
            onNext: handleNext,
            onExit: handleExit,
            themeColorClass: currentThemeColorClass
        };
        switch(step){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DetailsForm, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/components/SignupApp.tsx",
                    lineNumber: 539,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AvatarSelection, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/components/SignupApp.tsx",
                    lineNumber: 541,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VerificationScreen, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/components/SignupApp.tsx",
                    lineNumber: 543,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: "Error: Invalid Step"
                }, void 0, false, {
                    fileName: "[project]/components/SignupApp.tsx",
                    lineNumber: 545,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    // Variant for motion component to transition between steps (Form transitions only)
    const pageVariants = {
        initial: (isAvatarStep)=>({
                opacity: 0,
                scale: isAvatarStep ? 1 : 0.95,
                y: isAvatarStep ? 0 : 20
            }),
        in: (isAvatarStep)=>({
                opacity: 1,
                scale: 1,
                y: 0
            }),
        out: (isAvatarStep)=>({
                opacity: 0,
                scale: isAvatarStep ? 1 : 0.95,
                y: isAvatarStep ? 0 : -20
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#00050a] text-cyan-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AnimatedGlow, {
                themeHex: currentThemeHex
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                className: `z-10 w-full h-full flex items-center justify-center`,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        custom: isAvatarStep,
                        variants: pageVariants,
                        initial: "initial",
                        animate: "in",
                        exit: "out",
                        transition: {
                            duration: 0.3
                        },
                        className: `w-full ${isAvatarStep ? 'h-full' : 'max-w-lg'}`,
                        children: isAvatarStep ? // STEP 2: Full screen layout.
                        renderStep() : // STEP 1 or 3: Contained glass frame with dynamic border color.
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GlassPanel, {
                            themeColorClass: currentThemeColorClass,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-extrabold text-cyan-100 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: currentThemeColorClass,
                                            children: "SIGN-UP"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SignupApp.tsx",
                                            lineNumber: 601,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " (",
                                        step,
                                        "/3)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SignupApp.tsx",
                                    lineNumber: 600,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                renderStep()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SignupApp.tsx",
                            lineNumber: 599,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, step, false, {
                        fileName: "[project]/components/SignupApp.tsx",
                        lineNumber: 584,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/SignupApp.tsx",
                    lineNumber: 583,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/SignupApp.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/SignupApp.tsx",
        lineNumber: 569,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SignupApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/signuppage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/signuppage.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// 💡 We import the full, multi-step application component
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SignupApp$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SignupApp.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SignupApp$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SignupApp$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
/**
 * The page component for the /signuppage route.
 * It is responsible for rendering the multi-step SignupApp component.
 * In Next.js (or similar routers), this file makes the content available
 * at the corresponding URL (e.g., /signuppage).
 */ const SignupPage = ()=>{
    return(// We render the main application component which contains all the UI logic.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SignupApp$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/signuppage.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = SignupPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8340e1d3._.js.map