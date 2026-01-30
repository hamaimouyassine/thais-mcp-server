// src/test-tool.js
import { checkAvailabilityTool } from "./tools/checkAvailability.js";

const result = await checkAvailabilityTool.handler({
  checkIn: "2026-02-06",
  checkOut: "2026-02-12",
  adults: 2
});

console.log(result);
