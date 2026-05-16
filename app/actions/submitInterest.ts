"use server";

import { google } from "googleapis";

type State = { success: true } | { error: string } | null;

export async function submitInterest(_prevState: State, formData: FormData): Promise<State> {
  const name = (formData.get("name") as string).trim();
  const email = (formData.get("email") as string).trim();
  const wantsToHelp = formData.get("wantsToHelp") === "on";
  const helpDetails = ((formData.get("helpDetails") as string) ?? "").trim();

  if (!email) return { error: "Email is required." };

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "A:D",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          new Date().toISOString(),
          name,
          email,
          wantsToHelp ? (helpDetails || "Yes") : "",
        ]],
      },
    });

    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "Something went wrong. Please try again." };
  }
}
