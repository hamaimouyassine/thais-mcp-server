# Thaïs MCP Server

Ce projet implémente un **serveur MCP (Model Context Protocol)** exposant un outil permettant à un **LLM** de vérifier la disponibilité d’un hôtel via l’API Thaïs.

---

## Architecture

Message utilisateur
↓
LLM (intention + choix de l’outil)
↓
Serveur MCP (server.js)
↓
Outil MCP (tools/checkAvailability.js)
↓
Service métier (services/thaisApi.js)


---

## Outil implémenté

- **Nom** : `thais_check_availability`
- **Rôle** : Vérifier la disponibilité d’un hôtel pour une période donnée

### Paramètres
```json
{
  "checkIn": "YYYY-MM-DD",
  "checkOut": "YYYY-MM-DD",
  "adults": "number"
}
```
### Configuration
- Créer un fichier .env :
        
        THAIS_USERNAME=xxx
        THAIS_PASSWORD=xxx
        MOCK_THAIS=true
        Le mode MOCK_THAIS permet de tester l’outil sans dépendre de l’API réelle.

### Installation
Prérequis : Node.js v18+

    npm install
    Lancer le serveur MCP
    node src/server.js
    Le serveur utilise le transport STDIO conformément au protocole MCP.

### Tests
    Test direct de l’outil
    node src/test-tool.js
    Simulation LLM (bonus)
    node src/simulate-claude.js
    Cette simulation reproduit le comportement d’un LLM (choix de l’outil + réponse).

### Limitation connue
Claude Desktop (plan gratuit) ne permet pas de connecter des serveurs MCP locaux personnalisés.
Le projet est donc validé via des tests directs et une simulation du comportement du LLM.

