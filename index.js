import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import multer from "multer";
import express from "express";

const app = express();
const upload = multer();
const ai = new GoogleGenAI({});

app.use(express.json());
app.use(express.static('public'));

const PORT = 4000;
const model = "gemini-2.5-flash-lite";

const system_prompt = `
You are Ar. Radhi Dinata, ST., IAI, AA — a registered principal architect, sustainable spatial designer, and the founder of Radhi Architecture & Spatial Studio.
- Personal Background: Over 12 years of architectural practice with 65+ realized projects across Indonesia and Southeast Asia. Winner of national architectural excellence awards. Your projects specialize in Modern Tropical Architecture, Biophilic Luxury Villas, Contemporary Urban Residences, Boutique Commercial & Hospitality spaces, and Adaptive Reuse Renovations.
- Core Design Philosophy: "Harmonizing Nature, Form, and Humanity." You believe architecture must breathe with its climate (passive cross-ventilation, shaded overhangs, daylight capture, honest raw materials like exposed concrete, weathered teak, natural limestone, and lush greenery).
- Your Mission on this Platform:
  1. Welcome clients, students, and property enthusiasts warmly to your personal architectural atelier.
  2. Help clients define, articulate, and solve their specific building design needs:
     - Assessing land size, orientation, zoning regulations (PBG/SLF in Indonesia), and topography.
     - Recommending spatial zoning (private vs. public flow, service core, courtyards, indoor-outdoor transitions).
     - Giving realistic architectural cost estimations (RAB) and budget optimization tips.
     - Suggesting climate-resilient, sustainable materials and passive cooling strategies.
     - Recommending aesthetics: Modern Tropical, Japandi Minimalist, Brutalist Concrete, Biophilic Green, or Contemporary Vernacular.
  3. If the user attaches an image (e.g. land photo, hand sketch, floor plan, Pinterest inspiration, or facade picture), act as an expert design critic: analyze layout efficiency, sun/wind orientation, structural logic, and propose concrete aesthetic and functional improvements.
  4. Language & Tone: Strictly bilingual. If the user asks in Indonesian, answer in natural, elegant, friendly Bahasa Indonesia. If in English, answer in articulate, visionary, and professional English.
  5. Use clear, inspiring markdown formatting with headings, bullet points, and practical action steps.
  6. If a query is unrelated to architecture, interior design, building construction, or spatial planning, politely redirect the conversation back to architectural design and the built environment.
`;

function getMimeType(file) {
    if (file.mimetype && file.mimetype !== 'application/octet-stream') {
        return file.mimetype;
    }
    const ext = file.originalname ? file.originalname.split('.').pop()?.toLowerCase() : '';
    const extToMime = {
        pdf: 'application/pdf',
        csv: 'text/csv',
        txt: 'text/plain',
        json: 'application/json',
        html: 'text/html',
        htm: 'text/html',
        md: 'text/markdown',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        webp: 'image/webp',
        svg: 'image/svg+xml',
        mp3: 'audio/mp3',
        wav: 'audio/wav',
        ogg: 'audio/ogg',
        m4a: 'audio/m4a',
        aac: 'audio/aac',
        mp4: 'video/mp4',
        webm: 'video/webm',
        mov: 'video/quicktime',
        avi: 'video/x-msvideo',
    };
    return (ext && extToMime[ext]) || file.mimetype || 'application/octet-stream';
}

function getContentType(mimeType = '') {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('audio/')) return 'audio';
    if (mimeType.startsWith('video/')) return 'video';
    return 'document';
}

function getDefaultFilePrompt(contentType) {
    switch (contentType) {
        case 'image':
            return 'Describe and analyze the architectural, spatial, and design qualities of this image or drawing.';
        case 'audio':
            return 'Describe this audio.';
        case 'video':
            return 'Describe this video.';
        default:
            return 'Describe this document.';
    }
}

async function handleChat(req, res) {
    try {
        let { prompt, sessionId } = req.body || {};
        const files = req.files && req.files.length > 0 ? req.files : (req.file ? [req.file] : []);

        if (!prompt && files.length === 0) {
            return res.status(400).json({ message: "Prompt or file is required." });
        }

        if (!sessionId) {
            sessionId = crypto.randomUUID();
        }

        const sessionHistory = getSessionHistory(sessionId);

        const content = [];
        if (prompt && prompt.trim()) {
            content.push({ type: "text", text: prompt.trim() });
        } else if (files.length > 0) {
            const firstFileType = getContentType(getMimeType(files[0]));
            content.push({ type: "text", text: getDefaultFilePrompt(firstFileType) });
        }

        for (const file of files) {
            const mimeType = getMimeType(file);
            const contentType = getContentType(mimeType);
            const base64Data = file.buffer.toString("base64");
            content.push({
                type: contentType,
                data: base64Data,
                mime_type: mimeType
            });
        }

        sessionHistory.push({
            type: "user_input",
            content: content
        });

        const interaction = await ai.interactions.create({
            model,
            store: false,
            input: sessionHistory,
            system_instruction: system_prompt,
        });
        sessionHistory.push(...interaction.steps);

        res.status(200).json({ sessionId, result: sessionHistory });
    } catch (error) {
        console.error("Error in /api/chat:", error);
        res.status(500).json({ message: error.message });
    }
}

app.post('/api/chat', upload.any(), handleChat);
app.post('/chat', upload.any(), handleChat);

const sessions = new Map();
function getSessionHistory(sessionId) {
    if (!sessions.has(sessionId)) {
        sessions.set(sessionId, []);
    }
    return sessions.get(sessionId);
}

export default app;

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
