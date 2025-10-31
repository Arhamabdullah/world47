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
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({
        error: "Method Not Allowed"
    });
    if (!GEMINI_API_KEY) return res.status(500).json({
        error: "Missing GEMINI_API_KEY in env"
    });
    try {
        const { query, systemInstruction } = req.body;
        if (!query) return res.status(400).json({
            error: "Missing query"
        });
        const payload = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: query
                        }
                    ]
                }
            ],
            system_instruction: {
                role: "system",
                parts: [
                    {
                        text: systemInstruction || ""
                    }
                ]
            }
        };
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const raw = await response.text();
        if (!response.ok) {
            console.error("Gemini API Error:", raw);
            return res.status(response.status).json({
                error: raw
            });
        }
        let data = {};
        try {
            data = JSON.parse(raw);
        } catch  {
            console.warn("⚠️ Gemini returned non-JSON response:", raw);
        }
        // ✅ Parse out text or image
        const candidate = data?.candidates?.[0];
        const part = candidate?.content?.parts?.[0];
        if (part?.inlineData?.data) {
            // Image in base64
            const imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            return res.status(200).json({
                type: "image",
                imageUrl
            });
        }
        const text = part?.text || candidate?.content?.parts?.map((p)=>p.text).join(" ") || "No response generated.";
        return res.status(200).json({
            type: "text",
            text
        });
    } catch (err) {
        console.error("❌ Gemini Handler Error:", err);
        return res.status(500).json({
            error: err.message || "Internal Server Error"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0de46e95._.js.map