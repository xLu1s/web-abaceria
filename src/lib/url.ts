/** Prefijo de GitHub Pages, con barra final. En local coincide con `base` de Astro. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL;
  if (!path) return base;
  return `${base}${path.replace(/^\//, '')}`;
}
