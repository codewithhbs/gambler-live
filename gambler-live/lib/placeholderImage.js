// Deterministic photographic placeholders keyed by slug, so the same
// casino/game always gets the same image. Swap this for real uploaded
// logos/screenshots later — every call site only needs the slug.
export function imgUrl(seed, width = 800, height = 600) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
