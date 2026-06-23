export const biz = {
  name: "ThrIVe Hydration & Spa",
  tagline: "Thrive! Don't just survive.",
  subtitle: "Orlando's premier IV hydration & wellness destination",
  phone: "407.205.9070",
  phoneHref: "tel:4072059070",
  email: "info@thrivehydraspa.com",
  address: "7067 Narcoossee Rd, Suite B, Loft 12, Orlando, FL 32822",
  mapUrl: "https://www.google.com/maps/place/ThrIVe+Hydration+%26+Spa/@28.3658332,-81.3104411,15z",
  bookingUrl: "https://thrivehydrationspa.myaestheticrecord.com/online-booking",
  instagram: "https://www.instagram.com/thrivehydra_spa/",
  facebook: "https://www.facebook.com/thrivehydraspa/",
  hours: [
    { d: "Monday – Friday", t: "9:00 AM – 6:00 PM" },
    { d: "Saturday", t: "10:00 AM – 4:00 PM" },
    { d: "Sunday", t: "By appointment" },
  ],
};

export const nav = [
  { label: "Drip Menu", href: "/drips" },
  { label: "Drip Finder", href: "/drip-finder" },
  { label: "Services", href: "/services" },
  { label: "Memberships", href: "/memberships" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Drip = {
  slug: string;
  name: string;
  tag: string;              // short benefit
  feel: string[];           // feelings used by the Drip Finder
  ingredients: string[];
  treats: string;
  color: string;            // accent for the card
};

export const drips: Drip[] = [
  {
    slug: "hangover-remedy",
    name: "Hangover Remedy",
    tag: "Reset & rebound",
    feel: ["hungover", "nauseous", "headache"],
    ingredients: ["Electrolyte-rich fluids", "B vitamins", "Anti-nausea", "Anti-inflammatory"],
    treats: "Hangovers, headaches, GI distress and acid reflux.",
    color: "#C77F52",
  },
  {
    slug: "detox-elixir",
    name: "Detox Elixir",
    tag: "Cellular cleanse",
    feel: ["run down", "sluggish", "toxic"],
    ingredients: ["High-dose Glutathione"],
    treats: "Cellular detox, immune support and toxin removal.",
    color: "#5C8C6E",
  },
  {
    slug: "rapid-recovery",
    name: "Rapid Recovery Elixir",
    tag: "Energy & repair",
    feel: ["tired", "foggy", "sore"],
    ingredients: ["B-complex", "Vitamin C", "Amino acid blend", "Mineral blend"],
    treats: "Mental & physical energy, brain fog, tissue repair and collagen.",
    color: "#BE9540",
  },
  {
    slug: "slim-mix",
    name: "Slim Mix",
    tag: "Metabolism support",
    feel: ["weight loss", "low metabolism"],
    ingredients: ["MIC lipotropic blend", "L-Carnitine", "Chromium", "B vitamins", "Glutathione"],
    treats: "Weight-loss support, metabolism boost and fitness recovery.",
    color: "#8A9B5B",
  },
  {
    slug: "travelers-tonic",
    name: "Traveler's Tonic",
    tag: "Beat the jet-lag",
    feel: ["jet-lagged", "dehydrated", "travel"],
    ingredients: ["Vitamin C", "B-complex", "Magnesium", "Taurine"],
    treats: "Jet-lag, dehydration, low energy and travel stress.",
    color: "#4A8FA6",
  },
  {
    slug: "gal-pal-glow-up",
    name: "Gal Pal Glow Up",
    tag: "Skin, hair & nails",
    feel: ["dull skin", "glow up", "beauty"],
    ingredients: ["Glutathione", "Vitamin C", "Biotin", "B-complex", "Mineral & amino blend"],
    treats: "Collagen, radiant skin, healthy hair and nails, anti-aging.",
    color: "#C98AA0",
  },
  {
    slug: "immunoboost",
    name: "ImmunoBoost",
    tag: "Defend & protect",
    feel: ["getting sick", "immune", "run down"],
    ingredients: ["Ascorbic acid", "B vitamins", "Zinc", "Glutathione"],
    treats: "Immune support before travel, flu season and the holidays.",
    color: "#D08F3C",
  },
  {
    slug: "merry-gut-microbiome",
    name: "Merry Gut Microbiome",
    tag: "Gut reset",
    feel: ["bloated", "gut", "inflamed"],
    ingredients: ["Magnesium", "L-Glutamine", "Zinc", "Vitamin C", "Iron infusion"],
    treats: "Gut health, bloating, inflammation and stomach-lining repair.",
    color: "#A36A5C",
  },
  {
    slug: "pms-rescue",
    name: "PMS Rescue",
    tag: "Cycle relief",
    feel: ["pms", "cramps", "moody"],
    ingredients: ["Magnesium", "Selenium", "Vitamin B", "Folic acid", "Alpha lipoic acid"],
    treats: "Premenstrual syndrome symptoms and cramping.",
    color: "#B07AA0",
  },
  {
    slug: "focused-mind",
    name: "Focused Mind",
    tag: "Clarity & calm",
    feel: ["foggy", "stressed", "unfocused"],
    ingredients: ["Taurine", "Vitamin C", "Glutathione", "Vitamin B6"],
    treats: "Mental clarity, focus and overall well-being.",
    color: "#6E8FA8",
  },
  {
    slug: "just-hydration",
    name: "Just Hydration",
    tag: "Pure rehydrate",
    feel: ["dehydrated", "thirsty", "simple"],
    ingredients: ["500ml saline base", "Optional vitamin add-ons"],
    treats: "Fast rehydration and rejuvenation, build-your-own add-ons.",
    color: "#5BA3B0",
  },
  {
    slug: "iron-infusion",
    name: "Iron Infusion",
    tag: "Energy from within",
    feel: ["anemic", "exhausted", "low iron"],
    ingredients: ["Venofer iron"],
    treats: "Iron deficiency, anemia and cardiovascular health.",
    color: "#9C5A57",
  },
];

export type Service = {
  slug: string;
  name: string;
  blurb: string;
  group: "Hydration" | "Aesthetics" | "Wellness" | "Weight Loss";
};

export const services: Service[] = [
  { slug: "iv-hydration", name: "IV Hydration", group: "Hydration", blurb: "Customized vitamin infusions for energy, immunity, recovery and glow." },
  { slug: "vitamin-shots", name: "Vitamin Shots", group: "Hydration", blurb: "Fast B12, MIC and immunity boosters when you're short on time." },
  { slug: "injectables", name: "Injectables", group: "Aesthetics", blurb: "Tox and dermal fillers placed with a medical, natural-looking touch." },
  { slug: "micro-needling", name: "Micro-Needling", group: "Aesthetics", blurb: "Collagen-induction therapy for texture, tone and luminosity." },
  { slug: "laser-resurfacing", name: "Laser Resurfacing", group: "Aesthetics", blurb: "Skin rejuvenation that softens lines, scarring and sun damage." },
  { slug: "hair-restoration", name: "Hair Restoration", group: "Aesthetics", blurb: "Regenerative treatments to support thicker, healthier hair." },
  { slug: "medical-weight-loss", name: "Medical Weight Loss", group: "Weight Loss", blurb: "Provider-supervised plans built around your body and goals." },
  { slug: "tirzepatide", name: "Tirzepatide", group: "Weight Loss", blurb: "Next-generation GLP-1 therapy under full medical supervision." },
  { slug: "phentermine", name: "Phentermine", group: "Weight Loss", blurb: "Appetite-support medication as part of a guided program." },
  { slug: "hormone-replacement", name: "Hormone Replacement", group: "Wellness", blurb: "Bioidentical pellets and therapy to rebalance energy and mood." },
  { slug: "hgh-peptides", name: "HGH & Peptides", group: "Wellness", blurb: "Peptide therapy for recovery, performance and healthy aging." },
  { slug: "direct-primary-care", name: "Direct Primary Care", group: "Wellness", blurb: "Unhurried, membership-based access to your own provider." },
];

export const testimonials = [
  { name: "S. Deen", quote: "Best IV experience I've ever had. Truly professionals. I'm usually a difficult stick and the nurse got me on the first go, and I barely felt it." },
  { name: "Stephanie Marrero", quote: "Patricia is the best in the business! She listens, takes pride in her work, and ensures you're receiving the treatment you need." },
  { name: "James M.", quote: "Fantastic experience. I travel a lot for work and got the Immunity drip before a flight. I felt energized and hydrated." },
  { name: "Erin Delzingaro", quote: "Patricia was amazing. The entire procedure was painless, she guided me through the whole process and answered all my questions." },
  { name: "Prinze Mack", quote: "Patricia promptly treated my mother-in-law for dehydration. Courteous, reliable, and she literally saved our vacation." },
  { name: "Akayshia Farquharson", quote: "House calls are the BEST with ThrIVe! My energy was at an all-time low, so I booked with Patricia and felt like myself again." },
];

export const faqs = [
  { q: "Is IV therapy safe?", a: "Every infusion is prepared and administered by licensed medical professionals, led by a board-certified nurse practitioner and overseen by our medical director. We review your history before any treatment." },
  { q: "How long does a drip take?", a: "Most IV drips take 30 to 60 minutes. You'll relax in our lounge while the infusion does its work, then you're free to get on with your day." },
  { q: "Do you come to me?", a: "Yes. ThrIVe offers mobile house calls across the Orlando area for clients who'd rather recover at home, at the office, or before an event." },
  { q: "Can I book a group or party?", a: "Absolutely. Our ThrIVe Party brings the lounge to your celebration, and Corporate Wellness keeps your whole team performing at their best." },
  { q: "Do you accept FSA / HSA?", a: "Many of our medical wellness services are FSA/HSA eligible. Ask our team and we'll help you make the most of your benefits." },
];
