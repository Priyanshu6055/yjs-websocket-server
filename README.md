# 🧠 Yjs WebSocket Server

This is a simple WebSocket server built with [Node.js](https://nodejs.org/) and [y-websocket](https://github.com/yjs/y-websocket) to enable **real-time collaborative editing** using the Yjs CRDT framework.

---

## 🚀 Features

- Runs a WebSocket server on a configurable port (default: `1235`)
- Integrates with the Yjs library via `y-websocket`
- Logs new client connections with their IP
- Logs incoming messages from clients (safe and trimmed)
- Supports real-time collaborative applications (e.g., collaborative code editors, documents)
- This server use in this project - https://github.com/Priyanshu6055/CodeCoLab.git

---

## 📦 Requirements

- Node.js (v14 or newer recommended)
- `y-websocket` package

Install dependencies:

```bash
npm install ws y-websocket
```

🛠️ How to Run
Clone the repo or copy the server file into your project.


Run the server with:
```bash

node server.js
