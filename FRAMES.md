# Cine-Scroll Frames

The site has two scroll-scrubbed video sections on the home page, configured in `src/data/cineSequences.ts`:

| Sequence | Where it appears | Frames | Playback |
|---|---|---|---|
| `city-beautiful` | After the marquee, before the stats bar | `public/frames/city-beautiful/ezgif-frame-230..250.webp` (21) | Ping-pong loop ×3 — traffic circles the roundabout as you scroll |
| `growth-corridor` | After Philosophy, before Market Insights | `public/frames/growth-corridor/ezgif-frame-001..194.webp` + `1..81.webp` (275, stitched in that order) | Linear scrub |

If a frames folder is emptied or the first frame 404s, the section degrades to a static cinematic panel with the same overlay copy — the site never breaks.

## Changing or replacing footage

1. Drop the new frames into the sequence's folder (any consistent naming works).
2. Update the `frames` list for that sequence in `src/data/cineSequences.ts` — the `range(folder, prefix, from, to, pad)` helper builds numbered lists; concatenate multiple `range(...)` calls to stitch parts, exactly as `growthCorridor` does.
3. Adjust `heightVh` (scroll length), `playback` (`{ mode: "pingpong", cycles: n }` for looping shots, omit for a linear scrub), and the `overlays` copy/timing as needed.
4. Rebuild: `npm run build`.

## Export tips

- Prefer WebP ~quality 70, 1920px wide max; keep a sequence under ~12 MB where possible. `growth-corridor` is currently ~23 MB — it works (frames load lazily, nearest-first), but recompressing would speed up first scrub on slow connections:

  ```
  ffmpeg -i in.mp4 -vf "fps=12,scale=1920:-2" -quality 70 public/frames/<id>/frame_%04d.webp
  ```

- 90–150 frames is the sweet spot for a linear scrub; short loops (like the roundabout) can be much shorter since ping-pong stretches them across the scroll.
