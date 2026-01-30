// src/tools/checkAvailability.js

import { checkAvailability } from "../services/thaisApi.js";

export const checkAvailabilityTool = {
  title: "thais_check_availability",
  description:
    "Vérifie la disponibilité des chambres pour une période donnée et un nombre d'adultes. À utiliser pour répondre à des questions comme : 'Y a-t-il une chambre disponible du 6 au 12 février pour 2 personnes ?'",

  inputSchema: {
    type: "object",
    properties: {
      checkIn: {
        type: "string",
        description: "Date de début du séjour au format YYYY-MM-DD",
      },
      checkOut: {
        type: "string",
        description: "Date de fin du séjour au format YYYY-MM-DD",
      },
      adults: {
        type: "number",
        description: "Nombre d'adultes",
      },
    },
    required: ["checkIn", "checkOut", "adults"],
  },

  async handler({ checkIn, checkOut, adults }) {
    const availability = await checkAvailability(
      checkIn,
      checkOut,
      adults
    );

    return {
      checkIn,
      checkOut,
      adults,
      availability,
    };
  },
};