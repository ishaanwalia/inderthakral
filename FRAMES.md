# Cine-Scroll Frames

The site has two scroll-scrubbed video sections on the home page, configured in `src/data/cineSequences.ts`:

| Sequence | Where it appears | Frames | Playback |
|---|---|---|---|
| `cityBeautiful` | After the marquee, before the stats bar | `public/frames/city-beautiful/frame_0001..0220.webp` | Linear scrub, plays once and holds the final frame |
| `cherryBlossom` | After Philosophy, before Market Insights | `public/frames/lake/frame_0001..0220.webp` | Linear scrub, plays once and holds the final frame |

Both sequences are painted (AI-generated) single takes, subsampled from a denser source export down to 220 frames each for a smooth scrub at a reasonable payload. The `cherryBlossom` footage has an "inderthakral.com" signature baked into its opening and closing stretch by the source render — that's why its overlay cards sit `top-left` instead of `bottom-right`, so the two brand marks never overlap.

If a frames folder is emptied or the first frame 404s, the section degrades to a static cinematic panel with the same overlay copy — the site never breaks.

## Changing or replacing footage

1. Drop the new frames into the sequence's folder (any consistent naming works).
2. Update the `frames` list for that sequence in `src/data/cineSequences.ts` — the `range(folder, prefix, from, to, pad)` helper builds numbered lists; concatenate multiple `range(...)` calls to stitch parts.
3. Adjust `heightVh` (scroll length), `playback` (`{ mode: "pingpong" | "loop", cycles: n }` for looping shots, omit for a linear single-play scrub), and the `overlays` copy/timing as needed.
4. Rebuild: `npm run build`.

## Processing a new export

`scripts/process-frames.js` is a one-off script (not wired into `npm run build`) that was used to turn raw JPG frame exports into the current webp sequences: it walks ordered source folders, evenly subsamples down to a target frame count, resizes, and re-encodes to webp. Re-purpose it (adjust `orderedSourceFiles`, `OUT_WIDTH`, `QUALITY`, `TARGET_FRAMES`) for the next footage swap rather than writing a new one from scratch.

## Export tips

- Prefer WebP quality ~60, 1280px wide — good enough for a full-bleed cover-fit canvas and keeps a 220-frame sequence around 15-20 MB (frames load lazily, nearest-first, so this isn't all fetched upfront).
- 150-240 frames is the sweet spot for a linear scrub.
