import { GoogleGenAI } from "@google/genai";
import { writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = "gemini-3-pro-image-preview";

const STYLE =
  "Warm editorial wellness photography, golden natural light, candid and human, genuine warmth. " +
  "Warm ivory and honey tones, soft botanical green, brushed gold. Inviting boutique IV lounge, NOT a cold clinic. " +
  "Shallow depth of field, soft film grain, warm-neutral white balance, premium and real. No text, no logos, no watermarks. 50mm.";

const JOBS = [
  { file: "warm-relax.jpg", aspect: "1:1", prompt: "A relaxed woman in her 30s reclining in a cream bouclé lounge chair receiving an IV drip, eyes softly closed, a calm content half-smile, a soft knit throw over her lap, warm golden window light, a slim brushed-gold IV stand beside her, lush green plant softly blurred behind." },
  { file: "warm-cheers.jpg", aspect: "1:1", prompt: "Two happy friends laughing together on a warm ivory sofa in a boutique wellness lounge after their treatment, glowing healthy skin, holding glasses of citrus-infused water, golden afternoon light, genuine candid joy." },
  { file: "warm-hands.jpg", aspect: "1:1", prompt: "Warm close-up of a nurse's gloved hands gently preparing a vitamin IV line for a smiling client, golden light, brushed-gold tray with vials softly out of focus, caring and human, shallow depth of field." },
];

for (const job of JOBS) {
  const out = join(OUT, job.file);
  if (existsSync(out) && !process.argv.includes("--force")) { console.log("skip", job.file); continue; }
  try {
    const res = await ai.models.generateContent({ model: MODEL, contents: `${job.prompt}\n\n${STYLE}`, config: { responseModalities: ["Image"], imageConfig: { aspectRatio: job.aspect } } });
    const img = (res.candidates?.[0]?.content?.parts ?? []).find((p) => p.inlineData);
    if (!img) { console.error("no image", job.file); continue; }
    writeFileSync(out, Buffer.from(img.inlineData.data, "base64"));
    console.log("wrote", job.file);
  } catch (e) { console.error("FAIL", job.file, e.message); }
}
