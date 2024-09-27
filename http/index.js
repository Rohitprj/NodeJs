const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("My Server is running");
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running.......! ${port}`);
});
