import fetch from "node-fetch";
import { thaisConfig } from "../config/env.js";

const BASE_URL = "https://demo.thais-hotel.com/hub/api";

export async function checkAvailability(checkIn, checkOut, adults) {
  // 🟢 MODE MOCK (recommandé pour tests / entretien)
  if (process.env.MOCK_THAIS === "true") {
    return {
      available: true,
      period: { checkIn, checkOut },
      adults,
      rooms: [
        {
          type: "Double",
          capacity: 2,
          pricePerNight: 120,
          currency: "EUR"
        }
      ]
    };
  }

  // 🔴 VRAI appel API
  const url = `${BASE_URL}/availability?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          `${thaisConfig.username}:${thaisConfig.password}`
        ).toString("base64"),
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Thaïs API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
