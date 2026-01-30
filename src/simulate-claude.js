import { checkAvailabilityTool } from "./tools/checkAvailability.js";

async function simulateClaude(userMessage) {
  console.log("👤 User:", userMessage);

  // Simulation d’intention (ce que ferait un LLM)
  const intent = "CHECK_AVAILABILITY";

  if (intent === "CHECK_AVAILABILITY") {
    const params = {
      checkIn: "2026-02-06",
      checkOut: "2026-02-12",
      adults: 2,
    };

    console.log("🤖 Claude chose tool: thais_check_availability");
    console.log("📥 Tool params:", params);

    const result = await checkAvailabilityTool.handler(params);

    console.log("📤 Tool result:", JSON.stringify(result, null, 2));
    console.log("🗣️ Claude response:");
    console.log(
      `Yes, a room is available from ${params.checkIn} to ${params.checkOut} for ${params.adults} adults.`
    );
  }
}

simulateClaude(
  "Y a-t-il une chambre disponible pour 2 personnes du 6 au 12 février ?"
);
