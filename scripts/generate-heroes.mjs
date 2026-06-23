import { GoogleGenAI } from "@google/genai";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = "gemini-3-pro-image-preview";

const STYLE =
  "Editorial wellness photography, warm natural daylight, soft golden glow, calm medical-spa atmosphere. " +
  "Palette of warm ivory, deep botanical forest green, soft sage, restrained brushed-gold, with subtle clinical aqua-teal accents. " +
  "Shallow depth of field, refined, expensive, serene, low saturation, warm-neutral white balance (not stocky-blue). " +
  "No text, no logos, no watermarks. Photorealistic, 50mm look.";

const JOBS = [
  { file: "hero-drips.jpg", aspect: "4:5", prompt:
    "Elegant close-up arrangement of several clear glass IV vitamin vials and one amber dropper bottle standing on a warm travertine stone ledge, a single fresh eucalyptus sprig resting beside them, soft window light, condensation droplets catching the light, clinical-luxe still life." },
  { file: "hero-services.jpg", aspect: "4:5", prompt:
    "A serene high-end med-spa treatment moment: a calm clean treatment bed with crisp ivory linen, a brushed-gold tray of neatly arranged aesthetic tools, a folded sage towel and a small dish of cotton, soft daylight through linen curtains, eucalyptus in a slim vase, immaculate and inviting, no people." },
  { file: "hero-wellness.jpg", aspect: "4:5", prompt:
    "A tranquil wellness scene: a warm ivory bouclé recliner beside a slim brushed-gold IV stand holding a clear hydration bag, a soft cashmere throw, lush green palm fronds softly out of focus, golden afternoon light, restorative and luxurious, no people." },
];

for (const job of JOBS) {
  const out = join(OUT, job.file);
  if (existsSync(out) && !process.argv.includes("--force")) { console.log("skip", job.file); continue; }
  try {
    const res = await ai.models.generateContent({
      model: MODEL,
      contents: `${job.prompt}\n\n${STYLE}`,
      config: { responseModalities: ["Image"], imageConfig: { aspectRatio: job.aspect } },
    });
    const parts = res.candidates?.[0]?.content?.parts ?? [];
    const img = parts.find((p) => p.inlineData);
    if (!img) { console.error("no image for", job.file); continue; }
    writeFileSync(out, Buffer.from(img.inlineData.data, "base64"));
    console.log("wrote", job.file);
  } catch (e) { console.error("FAIL", job.file, e.message); }
}
