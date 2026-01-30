// src/config/env.js

import dotenv from "dotenv";

// Charge les variables depuis le fichier .env
dotenv.config({ quiet: true });

// Récupération des variables nécessaires
const { THAIS_USERNAME, THAIS_PASSWORD } = process.env;

// Vérification minimale (fail fast)
if (!THAIS_USERNAME || !THAIS_PASSWORD) {
  throw new Error(
    "Missing THAIS_USERNAME or THAIS_PASSWORD in environment variables"
  );
}

// Export propre des variables
export const thaisConfig = {
  username: THAIS_USERNAME,
  password: THAIS_PASSWORD,
};