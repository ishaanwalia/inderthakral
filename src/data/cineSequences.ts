// Scroll-driven frame-sequence ("cine scroll") configuration.
//
// Each sequence is an ordered list of frame image paths under public/frames/.
// `playback` controls how scroll progress maps onto the frames:
//   - "scrub" (default): frame 0 at the top of the section, last frame at the bottom.
//   - "pingpong": the sequence plays forward then backward `cycles` times across
//     the scroll — for looping ambient shots (e.g. traffic circling a roundabout).
//
// If the frames list is empty or the first frame fails to load, the section
// renders as a static cinematic panel with the overlay copy instead.

export type CineOverlay = {
  /** Scroll-progress window [start, end], each 0..1, during which this overlay is visible. */
  range: [number, number];
  heading: string;
  caption?: string;
  position?: "top-left" | "center" | "bottom-left" | "bottom-right";
};

export type CineSequence = {
  id: string;
  /** Ordered public paths of the frames. */
  frames: string[];
  /** How scroll progress maps to frames. Default: linear scrub. */
  playback?: { mode: "pingpong"; cycles?: number };
  /** Optional poster image shown before frames load / in fallback mode. */
  poster?: string;
  /** Total scroll height of the section in vh (100vh of it is the pinned stage). */
  heightVh: number;
  overlays: CineOverlay[];
};

/** Builds paths like `${folder}/${prefix}230.webp` … zero-padded to `pad` digits (0 = no padding). */
const range = (folder: string, prefix: string, from: number, to: number, pad: number, ext = "webp") =>
  Array.from(
    { length: to - from + 1 },
    (_, k) => `${folder}/${prefix}${String(from + k).padStart(pad, "0")}.${ext}`
  );

export const cineSequences = {
  // Aerial view of a Tricity roundabout — only the traffic moves, so scroll
  // drives a back-and-forth loop through the 21 frames.
  cityBeautiful: {
    id: "city-beautiful",
    frames: range("/frames/city-beautiful", "ezgif-frame-", 230, 250, 3),
    playback: { mode: "pingpong", cycles: 3 },
    poster: "/frames/city-beautiful/ezgif-frame-230.webp",
    heightVh: 300,
    overlays: [
      {
        range: [0, 0.32],
        heading: "The City Beautiful",
        caption:
          "Chandigarh — Le Corbusier's planned masterpiece, and North India's most disciplined real-estate story.",
        position: "center",
      },
      {
        range: [0.34, 0.64],
        heading: "Order by Design",
        caption:
          "A sector grid that made land legible: clean titles, wide roads, deliberate growth. From the Capitol Complex to Sukhna's still water, this city was drawn before it was built.",
        position: "bottom-left",
      },
      {
        range: [0.66, 1],
        heading: "That Discipline Moves South",
        caption:
          "Mohali, New Chandigarh, Aerocity — the grid extends, and value follows it.",
        position: "center",
      },
    ],
  },
  // Ground-level flyover of a residential plot corridor, stitched from two
  // exports: ezgif-frame-001..194 followed by its continuation 1..81.
  growthCorridor: {
    id: "growth-corridor",
    frames: [
      ...range("/frames/growth-corridor", "ezgif-frame-", 1, 194, 3),
      ...range("/frames/growth-corridor", "", 1, 81, 0),
    ],
    poster: "/frames/growth-corridor/ezgif-frame-001.webp",
    heightVh: 340,
    overlays: [
      {
        range: [0, 0.3],
        heading: "Beyond the Grid",
        caption:
          "The airport corridor and the Sector 108–115 belt — where Chandigarh's order meets Mohali's momentum.",
        position: "center",
      },
      {
        range: [0.36, 0.64],
        heading: "Verified Ground",
        caption:
          "Every plot we recommend sits on land we have walked and titles we have checked. Thirty-eight years of knowing exactly where this city grows next.",
        position: "bottom-left",
      },
      {
        range: [0.7, 1],
        heading: "Invest Where the City Is Going",
        caption:
          "Personal advisory from Thakral Towers, Sector 108 — the corridor we call home.",
        position: "center",
      },
    ],
  },
} satisfies Record<string, CineSequence>;
