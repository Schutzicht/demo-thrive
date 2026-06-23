import { GoogleGenAI } from "@google/genai";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = "gemini-3-pro-image-preview";

// Shared art direction for a premium med-spa / IV wellness brand.
const STYLE =
  "Editorial wellness photography, warm natural daylight, soft golden hour glow, " +
  "calm spa atmosphere. Palette of warm ivory, deep botanical forest green, brushed gold accents, soft sage. " +
  "Shallow depth of field, refined, expensive, serene. No text, no logos, no watermarks, no visible faces unless described. Photorealistic, 50mm look.";

const JOBS = [
  { file: "hero-lounge.jpg", aspect: "16:9", prompt:
    "Interior of a luxurious modern IV hydration lounge. Two elegant cream leather recliners angled toward a wall of floor-to-ceiling windows with sheer linen curtains, lush green potted palms, a slim brushed-gold IV stand beside a recliner with a clear hydration bag catching the light. Polished concrete and warm oak floor, minimal, airy, high-end medical spa." },
  { file: "iv-detail.jpg", aspect: "4:5", prompt:
    "Close-up product-style shot of a clear IV hydration bag hanging from a brushed-gold stand, soft golden backlight, a single tropical monstera leaf softly out of focus in the foreground, droplets of condensation, serene and clinical-luxe." },
  { file: "treatment-room.jpg", aspect: "4:5", prompt:
    "A serene aesthetics treatment room in a high-end med spa, a clean treatment bed with crisp white linens, soft sage-green wall, brushed-gold sconce lighting, a small tray of medical aesthetic tools neatly arranged, eucalyptus stems in a vase, calm and immaculate." },
  { file: "glow.jpg", aspect: "4:5", prompt:
    "Profile silhouette of a woman with radiant healthy glowing skin, eyes closed, relaxed, soft golden rim light against a deep forest-green background, dewy luminous complexion, wellness and renewal, beauty editorial, face softly lit in three-quarter back view." },
  { file: "lounge-detail.jpg", aspect: "16:9", prompt:
    "Detail of a wellness lounge: a warm ivory bouclé armchair beside a small marble side table holding a glass of infused water with citrus, a folded sage towel, soft daylight, green plants blurred behind, inviting and restorative." },
  { file: "mobile-care.jpg", aspect: "16:9", prompt:
    "A bright modern Florida home living room with sunlight, a comfortable cream sofa, a portable brushed-gold IV stand with a hydration bag set up beside it for an at-home wellness house call, plants and linen, calm and premium, no people." },
];

async function run() {
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
      if (!img) { console.error("no image for", job.file, JSON.stringify(res).slice(0, 200)); continue; }
      writeFileSync(out, Buffer.from(img.inlineData.data, "base64"));
      console.log("wrote", job.file);
    } catch (e) {
      console.error("FAIL", job.file, e.message);
    }
  }
}
run();
