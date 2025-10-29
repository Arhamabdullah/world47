module.exports = [
"[externals]/framer-motion [external] (framer-motion, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("framer-motion");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [ssr] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
const NavButton = ({ label, href })=>{
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        whileTap: {
            scale: href ? 0.95 : 1
        },
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        className: `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${href ? "cursor-pointer" : "cursor-default opacity-90"}`,
        style: {
            width: "110px",
            textAlign: "center"
        },
        animate: {
            color: isHovering && !href ? "#facc15" : isHovering && href ? "#ffffff" : "#afeeee",
            backgroundColor: isHovering && href ? "rgba(175, 238, 238, 0.1)" : "transparent",
            boxShadow: isHovering && !href ? "0 0 10px rgba(250,200,50,0.5)" : isHovering && href ? "0 0 10px rgba(175,238,238,0.5)" : "0 0 0px rgba(0,0,0,0)",
            scale: href && isHovering ? 1.05 : 1
        },
        transition: {
            duration: 0.2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative h-[22px] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].span, {
                    initial: {
                        opacity: 0,
                        y: 6
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -6
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: `absolute w-full text-center ${isHovering && !href ? "text-yellow-400 drop-shadow-[0_0_5px_rgba(250,200,50,0.6)]" : ""}`,
                    children: isHovering && !href ? "COMING SOON" : label.toUpperCase()
                }, isHovering && !href ? "coming-soon" : "label", false, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ActionButton = ({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
            whileTap: {
                scale: 0.92
            },
            className: "flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm cursor-pointer flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 77,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Header() {
    const [audioActive, setAudioActive] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const handleToggle = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!audioRef.current) return;
        if (audioActive) {
            audioRef.current.pause();
            setAudioActive(false);
        } else {
            audioRef.current.volume = 0.45;
            audioRef.current.loop = true;
            audioRef.current.play().catch(()=>{});
            setAudioActive(true);
        }
    }, [
        audioActive
    ]);
    const navPages = [
        {
            label: "World47",
            href: "/index"
        },
        {
            label: "Community",
            href: "/CommunityPage"
        },
        {
            label: "HELP",
            href: "/HelpPage"
        },
        {
            label: "REWARDS",
            href: "/RewardsPage"
        },
        {
            label: "SHOP",
            href: "/StorePage"
        },
        {
            label: "$ABNT CRYPTO"
        },
        {
            label: "APPS"
        },
        {
            label: "VIDEO GAMES"
        },
        {
            label: "ARTWORK",
            href: "/ArtworkPage"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].header, {
        className: "w-full flex flex-nowrap items-center justify-between py-[22px] px-4 bg-gradient-to-r from-[#0b1120] to-[#111633] text-cyan-100 overflow-hidden",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-8 flex-shrink-1",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold tracking-tight text-cyan-100 flex-shrink-0",
                        children: "WORLD 47"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: "hidden xl:flex flex-nowrap gap-6 text-sm",
                        children: [
                            " ",
                            navPages.map((page, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavButton, {
                                    label: page.label,
                                    href: page.href
                                }, i, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                        label: "Login",
                        href: "/loginpage"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                        label: "Signup",
                        href: "/signuppage"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                        whileTap: {
                            scale: 0.92
                        },
                        onClick: handleToggle,
                        className: "flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500 text-cyan-100 bg-[#00121a]/30 backdrop-blur-sm flex-shrink-0",
                        children: [
                            audioActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 144,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 144,
                                columnNumber: 50
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: audioActive ? "Sound On" : "Sound Off"
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/sound.mp3",
                preload: "auto",
                style: {
                    display: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/@react-three/fiber [external] (@react-three/fiber, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@react-three/fiber", () => require("@react-three/fiber"));

module.exports = mod;
}),
"[externals]/@react-three/drei [external] (@react-three/drei, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@react-three/drei", () => require("@react-three/drei"));

module.exports = mod;
}),
"[externals]/three [external] (three, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("three");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/PlanetSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@react-three/fiber [external] (@react-three/fiber, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@react-three/drei [external] (@react-three/drei, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/three [external] (three, esm_import)"); // <-- ensure Header.tsx is placed here (adjust path if needed)
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
const EASE_OUT = [
    0.33,
    1,
    0.68,
    1
];
;
// --- ANIMATION VARIANTS (TS Resolution: Variants type added) ---
// 👇 Explicitly type Framer Motion Variants
const panelVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: EASE_OUT
        }
    }
};
// 👇 Explicitly type Framer Motion Variants
const contentVariants = {
    hidden: {
        opacity: 0,
        y: 5
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.3,
            ease: EASE_OUT
        }
    }
};
// 👇 Explicitly type Framer Motion Variants
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5
        }
    }
};
;
/* ------------------------------
    LOADER COMPONENT (click-to-start)
    ------------------------------ */ function Loader({ onComplete }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [hasStarted, setHasStarted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const handleStart = async ()=>{
        setHasStarted(true);
        const video = videoRef.current;
        const audio = audioRef.current;
        try {
            if (video) {
                video.muted = false;
                await video.play();
            }
            if (audio) {
                await audio.play();
            }
        } catch (err) {
            console.warn("Playback failed:", err);
        }
    };
    const handleVideoEnd = ()=>{
        // Start fade out
        setIsVisible(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        // Complete transition after fade duration
        setTimeout(onComplete, 800);
    };
    // Adjusted variants for a dark fade
    const loaderVariants = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: EASE_OUT
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden",
        variants: loaderVariants,
        initial: "visible",
        animate: isVisible ? "visible" : "hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: "/web-loader.mp4",
                playsInline: true,
                onEnded: handleVideoEnd,
                className: "jsx-9be69bbffa22757f" + " " + "absolute inset-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/loader-audio.mp3",
                preload: "auto",
                className: "jsx-9be69bbffa22757f"
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            !hasStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                onClick: handleStart,
                initial: {
                    opacity: 0,
                    scale: 0.88
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.8,
                    ease: EASE_OUT
                },
                className: "relative z-50 px-10 py-4 text-xl font-semibold tracking-wider text-cyan-300 border border-cyan-500/40 rounded-l bg-black/40 backdrop-blur-lg hover:bg-cyan-500/20 hover:text-cyan-100 transition-all duration-300 pointer-events-auto",
                children: [
                    "CLICK TO ENTER",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "jsx-9be69bbffa22757f" + " " + "text-cyan-400 font-bold",
                        children: "WORLD 47"
                    }, void 0, false, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: isVisible ? 0 : 1
                },
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                },
                className: "absolute inset-0 bg-black pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "9be69bbffa22757f",
                children: "@keyframes glow{0%,to{text-shadow:0 0 16px #00ffff59}50%{text-shadow:0 0 36px #00ffffe6}}button.jsx-9be69bbffa22757f span.jsx-9be69bbffa22757f{animation:2s ease-in-out infinite glow}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
/* ------------------------------
    Reusable UI pieces
    ------------------------------ */ const StaggeredBox = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        className: `glass-panel ${className}`,
        variants: panelVariants,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
            className: "h-full w-full",
            variants: contentVariants,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/PlanetSection.tsx",
            lineNumber: 197,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
/* ------------------------------
    THREE.js Shader & Mesh Components
    ------------------------------ */ function NeonGlow({ isDragging }) {
    // 👇 Explicitly define the uniform type on the ref
    const materialRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const dragColor = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["Color"]("#ff00ff"), []);
    const idleColor = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["Color"]("#00ffff"), []);
    const glowUniform = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>({
            value: idleColor.clone()
        }), [
        idleColor
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__["useFrame"])(({ clock })=>{
        if (materialRef.current) {
            // ✅ Now TS knows 'uniforms' has 'time' and 'glowColor'
            materialRef.current.uniforms.time.value = clock.elapsedTime;
            const targetColor = isDragging ? dragColor : idleColor;
            // ✅ Type assertion to satisfy TS that the uniform value is a THREE.Color
            const currentColor = materialRef.current.uniforms.glowColor.value;
            currentColor.lerp(targetColor, 0.05);
        }
    });
    return(// 👇 The component tags are now recognized
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    0.67,
                    64,
                    64
                ]
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("shaderMaterial", {
                as: true,
                any: true,
                ref: materialRef,
                uniforms: {
                    time: {
                        value: 0
                    },
                    glowColor: glowUniform
                },
                vertexShader: `
            varying vec3 vNormal;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
        `,
                fragmentShader: `
            uniform float time;
            uniform vec3 glowColor;
            varying vec3 vNormal;
            void main() {
                float falloff = pow(1.0 - dot(vNormal, vec3(0.0,0.0,1.0)), 3.0);
                float coronaPulse = sin(time * 0.8) * 0.2 + 1.0;
                float intensity = pow(falloff * coronaPulse, 3.5);
                vec3 color = glowColor;
                gl_FragColor = vec4(color * intensity, intensity * 0.2);
            }
        `,
                transparent: true,
                blending: __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["AdditiveBlending"],
                side: __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["BackSide"]
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this));
}
function GlobeSphere({ texture, isDragging }) {
    const globeRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__["useFrame"])(()=>{
        if (globeRef.current && !isDragging) globeRef.current.rotation.y += 0.0008;
    });
    return(// 👇 The component tags are now recognized
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("group", {
        ref: globeRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.62,
                            64,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meshBasicMaterial", {
                        map: texture || null,
                        side: __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["DoubleSide"],
                        toneMapped: false
                    }, void 0, false, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NeonGlow, {
                isDragging: isDragging
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this));
}
function WindLayer({ texture }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__["useFrame"])(()=>{
        if (meshRef.current) meshRef.current.rotation.y += 0.0003;
    });
    if (!texture) return null;
    return(// 👇 The component tags are now recognized
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    0.80,
                    64,
                    64
                ]
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meshBasicMaterial", {
                map: texture,
                transparent: true,
                opacity: 0.3,
                side: __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["DoubleSide"],
                depthWrite: false
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this));
}
/* ------------------------------
    Network Mesh
    ------------------------------ */ function NetworkMesh() {
    const groupRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const lineOpacity = 0.15;
    const [points] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>Array.from({
            length: 70
        }, ()=>({
                position: new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["Vector3"]((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2),
                velocity: new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["Vector3"]((Math.random() - 0.5) * 0.002, (Math.random() - 0.5) * 0.002, (Math.random() - 0.5) * 0.002)
            })));
    const lineGeom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["BufferGeometry"](), []);
    const material = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const shaderMat = new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["ShaderMaterial"]({
            uniforms: {
                colorLeft: {
                    value: new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["Color"]("#d9d9d9")
                },
                colorRight: {
                    value: new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["Color"]("#f5f5f5")
                },
                opacity: {
                    value: lineOpacity
                }
            },
            vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 colorLeft;
        uniform vec3 colorRight;
        uniform float opacity;
        varying vec3 vPosition;
        void main() {
          float t = smoothstep(-3.0, 3.0, vPosition.x);
          vec3 c = mix(colorLeft, colorRight, t);
          gl_FragColor = vec4(c, opacity);
        }
      `,
            transparent: true,
            blending: __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["AdditiveBlending"],
            depthWrite: false
        });
        return shaderMat;
    }, [
        lineOpacity
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__["useFrame"])(()=>{
        const positions = [];
        points.forEach((p)=>{
            p.position.add(p.velocity);
            // ✅ Type-safe key access for Vector3
            [
                "x",
                "y",
                "z"
            ].forEach((axis)=>{
                if (Math.abs(p.position[axis]) > 3) {
                    p.velocity[axis] *= -1;
                }
            });
        });
        for(let i = 0; i < points.length; i++){
            for(let j = i + 1; j < points.length; j++){
                const dist = points[i].position.distanceTo(points[j].position);
                if (dist < 1.0) {
                    positions.push(points[i].position.x, points[i].position.y, points[i].position.z, points[j].position.x, points[j].position.y, points[j].position.z);
                }
            }
        }
        lineGeom.setAttribute("position", new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["Float32BufferAttribute"](positions, 3));
        lineGeom.computeBoundingSphere();
        if (groupRef.current) groupRef.current.rotation.y += 0.0004;
    });
    return(// 👇 The component tags are now recognized
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("lineSegments", {
            geometry: lineGeom,
            material: material
        }, void 0, false, {
            fileName: "[project]/components/PlanetSection.tsx",
            lineNumber: 395,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this));
}
/* ------------------------------
    Ticker & Typing Console
    ------------------------------ */ const Ticker = ({ animation })=>{
    const tickerText = "ALERT: CORE TEMP ELEVATED BY +0.02% | SYSTEM LOG: INTRUSION ATTEMPT BLOCKED | NETWORK TRAFFIC: PEAK UTILIZATION 98.7% | SECTOR 4-B ONLINE | PREPARE FOR DATA SYNCHRONIZATION...";
    const tickerVariants = {
        animate: {
            x: [
                "100%",
                "-100%"
            ],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear"
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        className: "absolute bottom-16 left-0 right-0 z-40 h-8 overflow-hidden pointer-events-auto",
        ...animation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "h-full w-full bg-[#00121a]/30 backdrop-blur-sm border-t border-b border-cyan-500/40 flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                className: "whitespace-nowrap text-sm font-mono tracking-wider opacity-80",
                variants: tickerVariants,
                animate: "animate",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-[#00ffff] font-bold mr-12",
                        children: "[TICKER]"
                    }, void 0, false, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tickerText,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-[#00ffff] font-bold ml-12",
                        children: "[TICKER]"
                    }, void 0, false, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 419,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tickerText
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 416,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/PlanetSection.tsx",
            lineNumber: 415,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 414,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const TypingConsoleContent = ()=>{
    const codeLines = [
        "$ user@login: attempting connection to 'World47'",
        "CONNECTION: Status OK. Welcome protocol initiated.",
        "PROTOCOL: Loading community module 'World47.v1.0'",
        "LOG: We're thrilled to have you join our community. ",
        "ACTION: Analyzing user intent (learn, create, connect)...",
        "RESULT: User ready to explore. Use 'help' for guidance.",
        "COMMAND: Jump in, explore, and get started!",
        "LOG: Session 001 established. Time: 23:45:12"
    ];
    const [typedCode, setTypedCode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const lineIndexRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const charIndexRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const isTypingRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isTypingRef.current) return;
        isTypingRef.current = true;
        const typeLine = ()=>{
            if (lineIndexRef.current >= codeLines.length) {
                setTimeout(()=>{
                    lineIndexRef.current = 0;
                    charIndexRef.current = 0;
                    setTypedCode([]);
                    isTypingRef.current = false;
                    typeLine();
                }, 5000);
                return;
            }
            const currentLine = codeLines[lineIndexRef.current];
            if (charIndexRef.current < currentLine.length) {
                setTypedCode((prev)=>{
                    const newCode = [
                        ...prev
                    ];
                    if (newCode[lineIndexRef.current] === undefined) newCode[lineIndexRef.current] = "";
                    newCode[lineIndexRef.current] += currentLine[charIndexRef.current];
                    return newCode;
                });
                charIndexRef.current++;
                setTimeout(typeLine, 45 + Math.random() * 60);
            } else {
                lineIndexRef.current++;
                charIndexRef.current = 0;
                setTimeout(typeLine, 1200);
            }
        };
        typeLine();
        return ()=>{
            isTypingRef.current = false;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-4 w-64 h-64 font-mono text-xs overflow-hidden flex flex-col justify-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                className: "text-xs font-semibold mb-2",
                children: "NETWORK ACCESS LOG"
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-y-hidden text-cyan-500/80",
                children: typedCode.slice(-6).map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: line.startsWith("SHELL") ? "text-green-400" : line.startsWith("ATTEMPT") ? "text-yellow-400" : "",
                        children: [
                            line,
                            index === typedCode.slice(-1).length - 1 && charIndexRef.current < (codeLines[lineIndexRef.current]?.length ?? 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "animate-pulse bg-cyan-500 w-1 h-3 inline-block ml-0.5 align-middle"
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 493,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 490,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .animate-pulse {
                animation: pulse 1s infinite;
            }
        `
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 486,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function App() {
    // Hooks first
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [audioActive, setAudioActive] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null); // site background audio
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const dataArrayRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [texture, setTexture] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [windTexture, setWindTexture] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const handleSetIsDragging = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((state)=>{
        setIsDragging(state);
    }, []);
    const BANDS_COUNT = 32;
    const [bands, setBands] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(Array.from({
        length: BANDS_COUNT
    }, (_, i)=>({
            name: i,
            value: 2
        })));
    const handleLoaderComplete = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setIsLoaded(true);
    }, []);
    // load textures
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const loader = new __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["TextureLoader"]();
        loader.load("/maa-ki-ankh.png", (tex)=>{
            // ❌ tex.encoding = THREE.sRGBEncoding; // Deprecated
            // ✅ Use colorSpace instead
            tex.colorSpace = __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["SRGBColorSpace"];
            tex.needsUpdate = true;
            setTexture(tex);
        });
        loader.load("/wind.png", (tex)=>{
            // ❌ tex.encoding = THREE.sRGBEncoding; // Deprecated
            // ✅ Use colorSpace instead
            tex.colorSpace = __TURBOPACK__imported__module__$5b$externals$5d2f$three__$5b$external$5d$__$28$three$2c$__esm_import$29$__["SRGBColorSpace"];
            tex.needsUpdate = true;
            setWindTexture(tex);
        });
    }, []);
    // Audio / analyser setup for site audio
    const setupAudio = ()=>{
        if (!audioRef.current) return;
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioCtx.createMediaElementSource(audioRef.current);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        audioCtxRef.current = audioCtx;
        analyserRef.current = analyser;
        dataArrayRef.current = dataArray;
    };
    const animateEqualizer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (analyserRef.current && dataArrayRef.current) {
            analyserRef.current.getByteFrequencyData(dataArrayRef.current);
            const step = Math.floor(dataArrayRef.current.length / BANDS_COUNT);
            const newBands = Array.from({
                length: BANDS_COUNT
            }, (_, i)=>{
                let sum = 0;
                // 👇 Non-null assertion (!) used here to avoid TS error inside the loop
                for(let j = 0; j < step; j++)sum += dataArrayRef.current[i * step + j] || 0;
                const averagedValue = sum / step;
                return {
                    name: i,
                    value: averagedValue / 2
                };
            });
            setBands((prevBands)=>prevBands.map((b, i)=>({
                        name: i,
                        value: prevBands[i].value * 0.7 + newBands[i].value * 0.3
                    })));
        }
        rafRef.current = requestAnimationFrame(animateEqualizer);
    }, []);
    const handleToggle = ()=>{
        if (!audioRef.current) return;
        if (audioActive) {
            audioRef.current.pause();
            setAudioActive(false);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        } else {
            audioRef.current.volume = 0.45;
            audioRef.current.loop = true;
            audioRef.current.play().catch((e)=>console.log("Audio play error:", e));
            setAudioActive(true);
            if (!audioCtxRef.current) setupAudio();
            animateEqualizer();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (audioActive) return;
        let id;
        const tick = ()=>{
            setBands(Array.from({
                length: BANDS_COUNT
            }, (_, i)=>({
                    name: i,
                    value: 2 + Math.abs(Math.sin(Date.now() / 600 + i * 0.8)) * 20
                })));
            id = requestAnimationFrame(tick);
        };
        tick();
        return ()=>cancelAnimationFrame(id);
    }, [
        audioActive
    ]);
    // 👇 The type of 'animation' passed to Ticker must conform to 'initial: any; animate: any;'
    const simpleFade = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1.0,
                ease: EASE_OUT
            }
        }
    };
    // Early return to show loader until complete (all hooks above)
    if (!isLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Loader, {
        onComplete: handleLoaderComplete
    }, void 0, false, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 637,
        columnNumber: 25
    }, this);
    /* ------------------------------
      MAIN DASHBOARD JSX
      ------------------------------ */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#00050a] text-cyan-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$29$__["Canvas"], {
                    camera: {
                        position: [
                            0,
                            0,
                            2
                        ],
                        fov: 45
                    },
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ambientLight", {
                            intensity: 0.8
                        }, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("pointLight", {
                            position: [
                                0,
                                0,
                                3
                            ],
                            color: "#00ffff",
                            intensity: 2.2
                        }, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 650,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("pointLight", {
                            position: [
                                3,
                                0,
                                1
                            ],
                            color: "#b100ff",
                            intensity: 1.6,
                            distance: 6,
                            decay: 2
                        }, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("pointLight", {
                            position: [
                                -3,
                                0,
                                1
                            ],
                            color: "#0088ff",
                            intensity: 1.6,
                            distance: 6,
                            decay: 2
                        }, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NetworkMesh, {}, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GlobeSphere, {
                            texture: texture,
                            isDragging: isDragging
                        }, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(WindLayer, {
                            texture: windTexture
                        }, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 655,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$29$__["OrbitControls"], {
                            enableZoom: false,
                            enablePan: false,
                            rotateSpeed: 1.0,
                            enableDamping: true,
                            dampingFactor: 0.1,
                            onStart: ()=>handleSetIsDragging(true),
                            onEnd: ()=>handleSetIsDragging(false)
                        }, void 0, false, {
                            fileName: "[project]/components/PlanetSection.tsx",
                            lineNumber: 656,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PlanetSection.tsx",
                    lineNumber: 647,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 px-8 flex justify-between items-center z-40 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        className: "flex flex-col gap-4 pointer-events-auto",
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-4 w-64 h-64 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-2 tracking-wider text-[#66fff0]",
                                        children: "ABNT01"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 674,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold mb-2 mt-2",
                                                children: "SYSTEM STATUS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 676,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-80",
                                                children: "All systems nominal — monitoring sensors active. Core temperature stable at 72°C."
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 677,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 675,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-xs flex items-center justify-between opacity-80 border-t border-cyan-500/20 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "CPU Utilization"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 680,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-green-400 font-mono",
                                                children: "87.5%"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 681,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 679,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 673,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-4 w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold text-yellow-400",
                                        children: "THREAT ASSESSMENT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-2 opacity-80",
                                        children: [
                                            "Threat Level: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-300",
                                                children: "MEDIUM"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 687,
                                                columnNumber: 70
                                            }, this),
                                            ". Proximity: 1.2 AU."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 687,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-[11px] flex items-center justify-between opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Threat Vector"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 689,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Kilo-98"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 690,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 688,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 685,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-3 w-64 h-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: bands,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "value",
                                                fill: "#00ffef",
                                                isAnimationActive: false
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                hide: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 698,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                hide: true,
                                                domain: [
                                                    0,
                                                    128
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 699,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 696,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PlanetSection.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-3 w-64 h-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                        data: bands,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "value",
                                                stroke: "#00ffef",
                                                strokeWidth: 2,
                                                dot: false,
                                                isAnimationActive: false
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 707,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                hide: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                hide: true,
                                                domain: [
                                                    0,
                                                    128
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 709,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PlanetSection.tsx",
                                    lineNumber: 705,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-4 w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold",
                                        children: "DATA TRANSFER LOG"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 715,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-2 opacity-80",
                                        children: "Last Sync: 21:05:44. Packet Loss: 0.1%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 716,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-[11px] flex items-center justify-between opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Bandwidth"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 718,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "1.2 Tb/s"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 719,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 717,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 714,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        className: "flex flex-col gap-4 pointer-events-auto",
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 1.0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "w-64 h-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TypingConsoleContent, {}, void 0, false, {
                                    fileName: "[project]/components/PlanetSection.tsx",
                                    lineNumber: 726,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 725,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-4 w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold",
                                        children: "WEATHER OVERVIEW"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 730,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-2 opacity-80",
                                        children: "Atmospheric readings: stable"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 731,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-[11px] flex items-center justify-between opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Pressure"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 733,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "1012 hPa"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 734,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 732,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 729,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-4 w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold",
                                        children: "RESOURCE ALLOCATION"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 739,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-2 opacity-80",
                                        children: [
                                            "Memory Pool: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-green-300",
                                                children: "OPTIMAL"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 740,
                                                columnNumber: 69
                                            }, this),
                                            ". Reserve: 40%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 740,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-[11px] flex items-center justify-between opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Energy Core"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 742,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "99%"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 743,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 741,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-3 w-64 h-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: bands,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "value",
                                                fill: "#66fff0",
                                                isAnimationActive: false
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 750,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                hide: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 751,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                hide: true,
                                                domain: [
                                                    0,
                                                    128
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 752,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 749,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PlanetSection.tsx",
                                    lineNumber: 748,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StaggeredBox, {
                                className: "p-4 w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold",
                                        children: "GEO-TELEMETRY"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-2 opacity-80",
                                        children: "Lattice Integrity: 99.9%. Tilt: 0.001°"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-[11px] flex items-center justify-between opacity-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Target Lock"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 761,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PlanetSection.tsx",
                                                lineNumber: 762,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PlanetSection.tsx",
                                        lineNumber: 760,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Ticker, {
                animation: {
                    ...simpleFade,
                    transition: {
                        ...simpleFade.animate.transition,
                        delay: 1.8
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 768,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                className: "absolute bottom-8 left-8 right-8 flex items-center justify-between px-8 z-50 pointer-events-none",
                ...simpleFade,
                transition: {
                    ...simpleFade.animate.transition,
                    delay: 2.0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "glass-panel px-4 py-2 rounded-full pointer-events-auto",
                                children: "1D"
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "glass-panel px-4 py-2 rounded-full pointer-events-auto",
                                children: "S/N"
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 773,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "glass-panel px-4 py-2 rounded-full pointer-events-auto",
                                children: "S/A"
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 771,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "glass-panel px-4 py-2 rounded-full pointer-events-auto",
                                children: "Views"
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 777,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "glass-panel px-4 py-2 rounded-full pointer-events-auto",
                                children: "Recalculate"
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 778,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "glass-panel px-4 py-2 rounded-full pointer-events-auto",
                                children: "N/Waves"
                            }, void 0, false, {
                                fileName: "[project]/components/PlanetSection.tsx",
                                lineNumber: 779,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlanetSection.tsx",
                        lineNumber: 776,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 770,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/sound.mp3",
                preload: "auto",
                style: {
                    display: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 784,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
            .glass-panel {
                background: rgba(0, 20, 27, 0.4);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 2px solid rgba(0, 255, 255, 0.8);
                box-shadow: 0 0 30px rgba(0, 255, 255, 0.2), 0 6px 15px rgba(0, 0, 0, 0.6);
                border-radius: 12px;
            }
            @media (max-width: 1280px) {
                header nav {
                    display: none;
                }
            }
        `
            }, void 0, false, {
                fileName: "[project]/components/PlanetSection.tsx",
                lineNumber: 786,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlanetSection.tsx",
        lineNumber: 643,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// "use client";
// import React, { useRef, useState, useEffect, Suspense, useMemo } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Stars, Html, useProgress } from "@react-three/drei";
// import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
// import * as THREE from "three";
// import { useRouter } from "next/navigation";
// // 🌍 Planet Component (smaller planet)
// function Planet({ planetRef }) {
//   const texture = useMemo(
//     () => new THREE.TextureLoader().load("/textures/moon.jpg"),
//     []
//   );
//   return (
//     <mesh ref={planetRef}>
//       {/* smaller radius from 4 → 2.8 */}
//       <sphereGeometry args={[2.8, 128, 128]} />
//       <meshStandardMaterial
//         map={texture}
//         metalness={0.2}
//         roughness={0.8}
//         emissive={"#555"}
//         emissiveIntensity={0.25}
//       />
//     </mesh>
//   );
// }
// // 🌌 Main 3D Scene
// function HeroScene({ zoomTarget }) {
//   const planetRef = useRef();
//   const { camera } = useThree();
//   useFrame(() => {
//     // rotate planet
//     if (planetRef.current) {
//       planetRef.current.rotation.y += 0.002;
//     }
//     // smooth zoom control (slightly adjusted for new size)
//     const targetZ = zoomTarget ? 2 : 8;
//     camera.position.lerp(new THREE.Vector3(0, 0, targetZ), 0.05);
//     camera.lookAt(0, 0, 0);
//   });
//   return (
//     <>
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[8, 8, 8]} intensity={2.2} />
//       <Planet planetRef={planetRef} />
//       <Stars radius={200} depth={50} count={8000} factor={4} fade />
//       <EffectComposer>
//         <Bloom intensity={1.2} />
//         <Vignette offset={0.2} darkness={0.6} />
//       </EffectComposer>
//     </>
//   );
// }
// // ⏳ Loader
// function Loader() {
//   const { progress } = useProgress();
//   return (
//     <Html center>
//       <div className="text-white text-xl">Loading {Math.floor(progress)}%</div>
//     </Html>
//   );
// }
// // 🪐 Main Page
// export default function Page() {
//   const router = useRouter();
//   const [zoomTarget, setZoomTarget] = useState(false);
//   const [soundOn, setSoundOn] = useState(false);
//   const audioRef = useRef(null);
//   // 🎵 Galaxy sound
//   useEffect(() => {
//     if (!audioRef.current) {
//       audioRef.current = new Audio("/sounds/galaxy.mp3");
//       audioRef.current.loop = true;
//       audioRef.current.volume = 0.4;
//     }
//     if (soundOn) audioRef.current.play();
//     else audioRef.current.pause();
//   }, [soundOn]);
//   // 🌠 Zoom and Navigate
//   const handleNavClick = (path) => {
//     setZoomTarget(true);
//     setTimeout(() => {
//       router.push(path);
//       setZoomTarget(false);
//     }, 1500);
//   };
//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30 text-white text-sm tracking-wide border-b border-gray-700 bg-black/60 backdrop-blur">
//         {/* Logo */}
//         <div
//           className="flex items-center gap-3 cursor-pointer"
//           onClick={() => handleNavClick("/")}
//         >
//           <div className="w-8 h-8 bg-white rounded-full" />
//           <span className="font-semibold">OZIRION</span>
//         </div>
//         {/* Nav Links */}
//         <div className="flex items-center gap-3">
//           {[
//             { label: "Store", path: "/store" },
//           { label: "Help", path: "/help" },
//             { label: "Shop", path: "/shop" },
//           ].map(({ label, path }) => (
//             <button
//               key={label}
//               onClick={() => handleNavClick(path)}
//               className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
//             >
//               {label.toUpperCase()}
//             </button>
//           ))}
//           <button
//             onClick={() => setSoundOn(!soundOn)}
//             className="ml-3 opacity-70 hover:opacity-100"
//           >
//             {soundOn ? "SOUND ON" : "SOUND OFF"}
//           </button>
//         </div>
//       </div>
//       {/* 3D Scene */}
//       <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
//         <Suspense fallback={<Loader />}>
//           <HeroScene zoomTarget={zoomTarget} />
//         </Suspense>
//       </Canvas>
//       {/* Footer Message */}
//       <div className="absolute bottom-10 w-full text-center text-white text-sm opacity-80 select-none">
//         CLICK A TAB TO TRAVEL ↓
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useRef, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Stars, useTexture } from "@react-three/drei";
// import * as THREE from "three";
// import { motion } from "framer-motion";
// // Example country data (simplified)
// const countryData = {
//   Pakistan: { info: "Details about Pakistan" },
//   India: { info: "Details about India" },
//   // ... other countries
// };
// // Helper: convert 3D point to lat/long and find country
// function pointToCountry(point: THREE.Vector3): string | null {
//   // Convert to lat / lon:
//   const { x, y, z } = point;
//   const r = Math.sqrt(x * x + y * y + z * z);
//   const lat = Math.asin(y / r) * (180 / Math.PI);
//   const lon = Math.atan2(z, x) * (180 / Math.PI);
//   // Now you need a geo map (like a shapefile) to match which country that lat/lon falls in
//   // For now, this is dummy:
//   if (lon > 60 && lat > 10) return "Pakistan";
//   if (lon > 70 && lat < 30) return "India";
//   // etc...
//   return null;
// }
// // === Globe component ===
// const Globe = ({ onClickPosition }: { onClickPosition: (point: THREE.Vector3) => void }) => {
//   const globeRef = useRef<THREE.Mesh>(null);
//   const texture = useTexture("/textures/planet1.jpg");
//   useFrame(() => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.001;
//     }
//   });
//   return (
//     <mesh
//       ref={globeRef}
//       onClick={(e) => {
//         e.stopPropagation();
//         const intersect = e.point; 
//         onClickPosition(intersect.clone());
//       }}
//     >
//       <sphereGeometry args={[1.2, 64, 64]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };
// // === Main Page ===
// export default function Page() {
//   const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
//   const [countryInfo, setCountryInfo] = useState<string | null>(null);
//   const handleClickOnGlobe = (point: THREE.Vector3) => {
//     const country = pointToCountry(point);
//     if (country) {
//       setSelectedCountry(country);
//       setCountryInfo(countryData[country]?.info || "No data");
//     }
//   };
//   return (
//     <div className="relative w-full h-screen bg-black">
//       <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 3, 5]} intensity={1} />
//         <Stars radius={100} depth={50} count={3000} factor={4} fade />
//         <Globe onClickPosition={handleClickOnGlobe} />
//         <OrbitControls enablePan={false} enableZoom={false} />
//       </Canvas>
//       {selectedCountry && (
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute top-1/2 right-10 -translate-y-1/2 bg-black/80 text-white p-6 rounded-lg border border-red-500 shadow-lg backdrop-blur-lg w-80"
//         >
//           <h2 className="text-xl font-bold mb-2">{selectedCountry}</h2>
//           <p className="text-sm">{countryInfo}</p>
//           <button
//             onClick={() => {
//               setSelectedCountry(null);
//               setCountryInfo(null);
//             }}
//             className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition"
//           >
//             Close
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// }
/* eslint-disable @typescript-eslint/ban-ts-comment */ // @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [ssr] (ecmascript)"); // ✅ make sure file name is Header.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlanetSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PlanetSection.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlanetSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlanetSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "relative w-full min-h-screen bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlanetSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__394ceb50._.js.map