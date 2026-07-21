// Scroll-driven frame-sequence ("cine scroll") configuration.
//
// Each sequence is an ordered list of frame image paths under public/frames/.
// `playback` controls how scroll progress maps onto the frames:
//   - "scrub" (default): frame 0 at the top of the section, last frame at the
//     bottom — plays once, holds the final frame. Used for both sequences
//     below since each is now a single long painted shot, not a short loop.
//   - "loop": plays the frames forward `cycles` times across the scroll.
//   - "pingpong": forward then backward `cycles` times.
// `dayFrames`, when present, is used instead of `frames` while the site is in
// the day theme.
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
  /** Ordered public paths of the frames (used in night theme / by default). */
  frames: string[];
  /** Optional alternate frame list for the day theme. */
  dayFrames?: string[];
  /** How scroll progress maps to frames. Default: linear scrub. */
  playback?: { mode: "pingpong" | "loop"; cycles?: number };
  /** Optional poster image shown before frames load / in fallback mode. */
  poster?: string;
  /** Total scroll height of the section in vh (100vh of it is the pinned stage). */
  heightVh: number;
  overlays: CineOverlay[];
};

/** Builds paths like `${folder}/${prefix}0001.webp`, zero-padded to `pad` digits (0 = no padding). */
const range = (folder: string, prefix: string, from: number, to: number, pad: number, ext = "webp") =>
  Array.from(
    { length: to - from + 1 },
    (_, k) => `${folder}/${prefix}${String(from + k).padStart(pad, "0")}.${ext}`
  );

export const cineSequences = {
  // Aerial painting of a Tricity roundabout — a single long take, scrubbed
  // once from top to bottom of the section and held on its final frame.
  cityBeautiful: {
    id: "city-beautiful",
    frames: range("/frames/city-beautiful", "frame_", 1, 220, 4),
    poster: "/frames/city-beautiful/frame_0001.webp",
    heightVh: 460,
    overlays: [
      {
        range: [0, 0.32],
        heading: "The City Beautiful",
        caption:
          "Chandigarh — Le Corbusier's planned masterpiece, and North India's most disciplined real-estate story.",
        position: "bottom-right",
      },
      {
        range: [0.34, 0.64],
        heading: "Order by Design",
        caption:
          "A sector grid that made land legible: clean titles, wide roads, deliberate growth. This city was drawn before it was built.",
        position: "bottom-right",
      },
      {
        range: [0.66, 1],
        heading: "That Discipline Moves South",
        caption:
          "Mohali, New Chandigarh, Aerocity — the grid extends, and value follows it.",
        position: "bottom-right",
      },
    ],
  },
  // Cherry blossoms at the Open Hand — a single painted take. The footage
  // carries its own "inderthakral.com" signature baked into the opening and
  // closing stretch, so overlay copy lives top-left throughout rather than
  // bottom-right, keeping the two brand marks from ever colliding.
  cherryBlossom: {
    id: "lake",
    frames: range("/frames/lake", "frame_", 1, 220, 4),
    poster: "/frames/lake/frame_0090.webp",
    heightVh: 440,
    overlays: [
      {
        range: [0, 0.3],
        heading: "When Chandigarh Blooms",
        caption:
          "Cherry blossoms along the sector boulevards — proof this city was planned for beauty as much as function.",
        position: "top-left",
      },
      {
        range: [0.36, 0.64],
        heading: "Value Follows Quality of Life",
        caption:
          "Parks, tree-lined sectors, seasonal colour — the everyday beauty that keeps Tricity land in demand.",
        position: "top-left",
      },
      {
        range: [0.7, 1],
        heading: "A City Worth Investing In",
        caption: "Thirty-eight years watching this city bloom, season after season.",
        position: "top-left",
      },
    ],
  },
} satisfies Record<string, CineSequence>;
