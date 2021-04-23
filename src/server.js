const http = require("http");
const countdown = require("countdown");

const hostname = "127.0.0.1";
const port = 8080;
const start = new Date(2021, 0, 1, 5, 50);
const end = new Date(2021, 0, 1, 5, 55);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`trolleybus will arrive in ${countdown(start, end).toString()}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
