import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", company: "Penguin IT", timestamp: new Date().toISOString() });
  });

  // Chatbot API endpoint using Gemini API
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message string is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "API key is not configured on the server. Please check environment variables.",
          reply: "Hello! I am the Penguin IT Virtual Assistant. I'm operating in offline mode right now as the API key is being initialized. For urgent support, please email us directly at support@penguinit.com or call our 24/7 hotline!"
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are the friendly, professional, and knowledgeable AI Assistant for Penguin IT ("IT ON YOUR SIDE.").
Company details:
- Name: Penguin IT
- Headline: IT ON YOUR SIDE. OS Switch, AI, automation, and everyday tech support.
- Hotline / Text: 580-826-7475
- Support Email: support@penguinit.com
- Membership Plans:
  1. Plan 1: Windows/Mac to Linux Switch & Setup ($199 per device)
  2. Plan 2: Penguin Tech Support ($59 /mo for up to 3 Linux devices)
  3. Plan 3: Custom AI Setup ($299 per user/workstation)
  4. Plan 4: Tech Partner ($199 /mo Home | $299 /mo Small Business) - BEST VALUE
- The Penguin IT Loop: 1. ASK -> 2. SOLVE -> 3. SAVE -> 4. IMPROVE -> 5. REUSABLE
- Guarantees: Privacy by Design, You Stay in Control, No-Shame Support, Gets Smarter Over Time.

Your Goal:
- Answer questions accurately, politely, and concisely about Penguin IT plans and services.
- Help users select a plan or guide them to text/call 580-826-7475 or email support@penguinit.com.
- Keep responses friendly, structured, clear, and professional. Use markdown formatting like bullet points.`;

      // Build conversation history if present
      let formattedContents: any[] = [];
      if (Array.isArray(history) && history.length > 0) {
        formattedContents = history.map((item: { role: string; text: string }) => ({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.text }]
        }));
      }
      formattedContents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "Thank you for reaching out to Penguin IT. How else can we assist your business today?";
      return res.json({ reply });
    } catch (err: any) {
      console.error("Error in /api/chat:", err);
      return res.status(500).json({
        error: "Failed to generate AI response",
        reply: "I apologize for the hiccup! Our Penguin IT system experienced a minor disruption. Please feel free to email our engineering team directly at support@penguinit.com or retry your message!"
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    const { name, company, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required fields." });
    }

    console.log("Contact submission received:", { name, company, email, phone, message, date: new Date().toISOString() });

    return res.json({
      success: true,
      message: "Thank you for contacting Penguin IT! An IT solution specialist will reach out to you within 1 business hour."
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Penguin IT Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
