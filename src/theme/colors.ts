// Yoba brand theme — warm earth/brown palette with a gold accent.
// Think: sun-baked terracotta walls, aged wood, gold adire thread.

export const colors = {
  // Backgrounds
  bg: "#1C0F07",           // near-black espresso brown, base canvas
  bgElevated: "#241408",   // cards / raised surfaces
  bgElevated2: "#2E1A0C",  // deeper card, modals
  bgSoft: "#3A2413",       // input fields, chips (unselected)

  // Brand
  primary: "#B5651D",      // burnt terracotta — main CTA color
  primaryDark: "#7A4415",
  primaryLight: "#D98A3D",
  gold: "#C9923A",         // accent gold, badges, highlights
  goldSoft: "#C9923A33",

  // Tone-marking colors (Yoruba tone: high / mid / low)
  toneHigh: "#E4A94A",     // á — gold, rises
  toneMid: "#C7A98A",      // a — neutral clay
  toneLow: "#8C6A4A",      // à — deep bark, falls

  // Text
  textPrimary: "#F7EEE0",  // warm cream
  textSecondary: "#CBB79C",
  textMuted: "#8A7460",

  // Borders / dividers
  border: "#3F2915",
  borderLight: "#4A3319",

  // Status
  success: "#7FA86B",
  danger: "#C1584A",

  // Gradients (use with expo-linear-gradient)
  gradientPrimary: ["#B5651D", "#7A4415"] as const,
  gradientHero: ["#2E1A0C", "#1C0F07"] as const,
  gradientGold: ["#E4A94A", "#B5651D"] as const,
};

export const radii = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 28,
  pill: 999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  hero: { fontSize: 32, fontWeight: "800" as const },
  h1: { fontSize: 26, fontWeight: "800" as const },
  h2: { fontSize: 20, fontWeight: "700" as const },
  body: { fontSize: 15, fontWeight: "400" as const },
  bodyBold: { fontSize: 15, fontWeight: "600" as const },
  caption: { fontSize: 12, fontWeight: "500" as const },
};
