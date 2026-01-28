// Firebase app initialization (Vite client-side).
//
// NOTE:
// - Vite only exposes env vars that start with `VITE_` to `import.meta.env`.
// - This file validates required Firebase env vars early to avoid silent misconfigurations.

import { initializeApp } from "firebase/app";

/**
 * Read a required Vite environment variable.
 * Throws a clear error if missing so misconfigurations are caught immediately.
 *
 * @param {keyof ImportMetaEnv | string} variableName
 * @returns {string}
 */
function getRequiredViteEnv(variableName) {
  const value = import.meta.env[variableName];

  // Vite injects env vars as strings; missing values are `undefined`.
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      [
        `[firebase] Missing required environment variable: ${String(
          variableName
        )}`,
        `Add it to ".env.local" (or your hosting provider env config).`,
        `Example: ${String(variableName)}=your_value_here`,
      ].join("\n")
    );
  }

  return value;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getRequiredViteEnv("VITE_apiKey"),
  authDomain: getRequiredViteEnv("VITE_authDomain"),
  projectId: getRequiredViteEnv("VITE_projectId"),
  storageBucket: getRequiredViteEnv("VITE_storageBucket"),
  messagingSenderId: getRequiredViteEnv("VITE_messagingSenderId"),
  appId: getRequiredViteEnv("VITE_appId"),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
