/** GitHub Pages project site prefix, e.g. /aarvanta-site-main */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function siteOrigin(): string {
  if (basePath) {
    return `https://adminaarvanta.github.io${basePath}`;
  }
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://aarvanta.com";
}
