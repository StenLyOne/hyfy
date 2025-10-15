import { Button } from "../types/ui/button";

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL ?? "";

export const normalizeCTA = (cta?: Button[]) =>
  (cta ?? []).map((c) => ({
    label: c.label,
    link: c.link,
    type: c.type,
    color: c.color,
    variant: c.variant,
  }));

export const assetsUrl = (raw?: string | null): string | null => {
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) return raw;
  const base = (BASE ?? "").replace(/\/+$/, "");
  const path = raw.replace(/^\/+/, "");
  return `${base}/${path}`;
};

export const normalizeImage = (m?: {
  url?: string | null;
  alt?: string | null;
}) => (assetsUrl(m?.url) ? { url: assetsUrl(m?.url)!, alt: m?.alt ?? "" } : undefined);
