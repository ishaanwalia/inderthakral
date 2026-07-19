// Scroll-driven frame-sequence ("cine scroll") configuration.
//
// Each sequence is an ordered list of frame image paths under public/frames/.
// `playback` controls how scroll progress maps onto the frames:
//   - "scrub" (default): frame 0 at the top of the section, last frame at the bottom.
//   - "loop": plays the frames forward `cycles` times across the scroll — for
//     seamless loops (traffic circling a roundabout).
//   - "pingpong": forward then backward `cycles` times — for non-loop clips.
// `dayFrames`, when present, is used instead of `frames` while the site is in
// the day theme (the Sukhna timelapse shows its daylight arc in day mode and
// its sunset-to-night arc in night mode).
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
  // Aerial view of a Tricity roundabout — a seamless traffic loop, played
  // forward three times across the scroll.
  cityBeautiful: {
    id: "city-beautiful",
    frames: range("/frames/city-beautiful", "frame_", 1, 144, 4),
    playback: { mode: "loop", cycles: 3 },
    poster: "/frames/city-beautiful/frame_0001.webp",
    heightVh: 380,
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
  // Sukhna Lake timelapse: one master shot spanning a full day. Day theme
  // scrubs morning -> golden hour (frames 1-148); night theme scrubs
  // sunset -> nightfall (frames 149-240).
  sukhnaLake: {
    id: "lake",
    frames: range("/frames/lake", "frame_", 149, 240, 4),
    dayFrames: range("/frames/lake", "frame_", 1, 148, 4),
    poster: "/frames/lake/frame_0160.webp",
    heightVh: 420,
    overlays: [
      {
        range: [0, 0.3],
        heading: "The City's Still Heart",
        caption:
          "Sukhna Lake — where Chandigarh slows down. A city that planned its calm as carefully as its commerce.",
        position: "bottom-right",
      },
      {
        range: [0.36, 0.64],
        heading: "Value Follows Quality of Life",
        caption:
          "Lakes, gardens, wide skies — the Tricity's liveability is exactly why its land holds value. We help you own a piece of it.",
        position: "bottom-right",
      },
      {
        range: [0.7, 1],
        heading: "From Sunrise to Skyline",
        caption:
          "Thirty-eight years watching this city change light. Personal advisory from Thakral Towers, Sector 108, Mohali.",
        position: "bottom-right",
      },
    ],
  },
} satisfies Record<string, CineSequence>;
