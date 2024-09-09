import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from TypeScript server!\n");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

console.log("fun");
