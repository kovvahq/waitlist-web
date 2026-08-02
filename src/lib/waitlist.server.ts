import { SignJWT, importPKCS8 } from "jose";
import type { WaitlistInput } from "./waitlist.schema";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";

export type WaitlistResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

let cachedToken: { access_token: string; expires_at: number } | null = null;

async function getAccessToken(): Promise<string | null> {
  const email = process.env["GOOGLE_SERVICE_ACCOUNT_EMAIL"];
  const privateKey = process.env["GOOGLE_PRIVATE_KEY"];

  if (!email || !privateKey) return null;

  if (cachedToken && Date.now() < cachedToken.expires_at) {
    return cachedToken.access_token;
  }

  const now = Math.floor(Date.now() / 1000);
  const key = await importPKCS8(privateKey, "RS256");

  const jwt = await new SignJWT({ scope: "https://www.googleapis.com/auth/spreadsheets" })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .setIssuedAt(now)
    .setExpirationTime(now + 3600)
    .setIssuer(email)
    .setAudience("https://oauth2.googleapis.com/token")
    .sign(key);

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    console.error("Failed to obtain Google access token:", await res.text());
    return null;
  }

  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    access_token: data.access_token,
    expires_at: Date.now() + (data.expires_in - 60) * 1000,
  };

  return cachedToken.access_token;
}

export async function appendWaitlistRow(entry: WaitlistInput): Promise<WaitlistResult> {
  const spreadsheetId = process.env["WAITLIST_SPREADSHEET_ID"];
  const range = process.env["WAITLIST_SHEET_RANGE"] ?? "Sheet1!A:F";

  const token = await getAccessToken();
  if (!token || !spreadsheetId) {
    return { ok: false, reason: "not_configured" };
  }

  const url = `${SHEETS_API}/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [
        [
          new Date().toISOString(),
          entry.name,
          entry.email,
          entry.phone,
          entry.occupation ?? "",
          entry.gender,
        ],
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(`Google Sheets append failed [${res.status}]: ${body}`);
    return { ok: false, reason: "failed" };
  }

  return { ok: true };
}
