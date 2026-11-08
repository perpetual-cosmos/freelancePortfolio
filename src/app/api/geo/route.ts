// Returns the visitor's country from the hosting platform's IP-geolocation header.
// Vercel sets `x-vercel-ip-country`; Cloudflare sets `cf-ipcountry`. Used to pick ₹ (India) or $ (rest of world).
export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const h = request.headers;
  const raw = h.get('x-vercel-ip-country') || h.get('cf-ipcountry') || '';
  const country = /^[A-Za-z]{2}$/.test(raw) ? raw.toUpperCase() : null;
  return Response.json({ country }, { headers: { 'Cache-Control': 'private, no-store' } });
}
