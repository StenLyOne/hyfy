export function useIsExternalLink(href?: string): boolean {
  if (typeof href !== "string" || href.length === 0) return false;
  if (href.startsWith("#")) return false;
  if (href.startsWith("/") && !href.startsWith("//")) return false;
  if (href.startsWith("//")) return true;

  const schemeMatch = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.exec(href);
  if (!schemeMatch) return false; // относительный путь → внутренний

  // Абсолютный URL: сравним origin с нашим доменом
  try {
    const site = new URL(process.env.NEXT_PUBLIC_SITE_URL!);
    const url = new URL(href, site); // работает и с http(s)
    // внешней считаем, если другой origin или не http(s)
    if (url.protocol !== "http:" && url.protocol !== "https:") return true;
    return url.origin !== site.origin;
  } catch {
    // если что-то пошло не так — перестрахуемся
    return true;
  }
}
