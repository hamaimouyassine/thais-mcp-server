// src/server.js

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { checkAvailabilityTool } from "./tools/checkAvailability.js";

const server = new McpServer({
  name: "thais-mcp-server",
  version: "1.0.0",
});

server.registerTool(
  "thais_check_availability",
  {
    title: checkAvailabilityTool.title,
    description: checkAvailabilityTool.description,
    inputSchema: checkAvailabilityTool.inputSchema,
    handler: checkAvailabilityTool.handler,
  }
);

const transport = new StdioServerTransport();

// ⚠️ AUCUN console.log ici
await server.connect(transport);

// ❌ rien après
