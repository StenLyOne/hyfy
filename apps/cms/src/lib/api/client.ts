const BASE = process.env.CMS_URL!;

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status} on ${endpoint}`);
  }

  return res.json() as Promise<T>;
}
