module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/gemini.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    // Debug log to confirm the route is running
    console.log("✅ /api/gemini route hit");
    try {
        const { query, systemInstruction } = req.body;
        if (!query) {
            console.log("❌ No query provided");
            return res.status(400).json({
                error: "Missing query text"
            });
        }
        // Ensure your Gemini API key is loaded correctly
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        if (!GEMINI_API_KEY) {
            console.error("❌ GEMINI_API_KEY is not defined in .env.local");
            return res.status(500).json({
                error: "Server missing Gemini API key"
            });
        }
        // Make the API call to Gemini
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: query
                            }
                        ]
                    }
                ],
                tools: [
                    {
                        google_search: {}
                    }
                ],
                systemInstruction: {
                    parts: [
                        {
                            text: systemInstruction
                        }
                    ]
                }
            })
        });
        const data = await response.json();
        console.log("✅ Gemini API response:", JSON.stringify(data, null, 2));
        return res.status(200).json(data);
    } catch (error) {
        console.error("🔥 Gemini API error:", error.message || error);
        return res.status(500).json({
            error: error.message || "Internal Server Error"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0de46e95._.js.map