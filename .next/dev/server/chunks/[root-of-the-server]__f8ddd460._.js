module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@google/generative-ai [external] (@google/generative-ai, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@google/generative-ai");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/pages/api/gemini.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$google$2f$generative$2d$ai__$5b$external$5d$__$2840$google$2f$generative$2d$ai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@google/generative-ai [external] (@google/generative-ai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$google$2f$generative$2d$ai__$5b$external$5d$__$2840$google$2f$generative$2d$ai$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$google$2f$generative$2d$ai__$5b$external$5d$__$2840$google$2f$generative$2d$ai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
console.log("Gemini key loaded?", !!process.env.GEMINI_API_KEY);
async function handler(req, res) {
    // Ensure this is a POST request
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    try {
        // Get the message from the frontend
        const { message } = req.body;
        // Initialize Gemini client
        const genAI = new __TURBOPACK__imported__module__$5b$externals$5d2f40$google$2f$generative$2d$ai__$5b$external$5d$__$2840$google$2f$generative$2d$ai$2c$__esm_import$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });
        // Generate response
        const result = await model.generateContent(message);
        const output = result.response.text();
        // Send response back to frontend
        return res.status(200).json({
            reply: output
        });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f8ddd460._.js.map