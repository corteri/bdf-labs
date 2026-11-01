// Task 3: a plain web server using only Node's built-in http module.
// Run with:  node basic-server.js
const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
  // Every request gets the same reply, whatever the path is.
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  response.end("Hello");
});

server.listen(PORT, () => {
  console.log(`Plain http server listening on http://localhost:${PORT}`);
});
