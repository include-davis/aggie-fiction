import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Get the URL parameters
    const { searchParams } = new URL(request.url);
    const startParam = searchParams.get("start");
    const endParam = searchParams.get("end");

    // Parse the service account JSON from environment variable
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (!serviceAccountJson) {
      throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not set.");
    }

    // Parse the JSON string into an object
    let key;
    try {
      key = JSON.parse(serviceAccountJson);
    } catch (error) {
      console.error("Error parsing service account JSON:", error);
      throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT_JSON format");
    }

    const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Replace with your calendarId
    const calendarId = process.env.GOOGLE_CALENDAR;

    // Set up time range - default to current month if not specified
    const now = new Date();
    const timeMin = startParam
      ? new Date(startParam)
      : new Date(now.getFullYear(), now.getMonth(), 1);
    const timeMax = endParam
      ? new Date(endParam)
      : new Date(now.getFullYear(), now.getMonth() + 1, 0);
    timeMax.setHours(23, 59, 59, 999);

    // Make sure we're getting all events, not just future ones
    const response = await calendar.events.list({
      calendarId,
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      maxResults: 1000,
      singleEvents: true,
      orderBy: "startTime",
    });

    return NextResponse.json({ events: response.data.items });
  } catch (error) {
    console.error("Failed to fetch calendar events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events", details: error.message },
      { status: 500 }
    );
  }
}
