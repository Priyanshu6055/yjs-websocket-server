const WebSocket = require('ws');
const { setupWSConnection } = require('y-websocket/bin/utils.js');
const http = require('http');

const port = process.env.PORT || 1235;

// Create HTTP server
const server = http.createServer();

// Create WebSocket server on top of HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  const ip = req.socket.remoteAddress;
  console.log(`🔌 New client connected from ${ip}`);

  // Safely log incoming messages (don't override conn.send)
  conn.on('message', (msg) => {
    try {
      const messageStr = msg.toString();
      console.log(`📥 Received message from client:`, messageStr.slice(0, 100));
    } catch (err) {
      console.error('❌ Error parsing incoming message', err);
    }
  });

  // Setup Yjs WebSocket connection
  setupWSConnection(conn, req);
});

// Start server
server.listen(port, () => {
  console.log(`✅ y-websocket server running on port ${port}`);
});
