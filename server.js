const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(products));
});

const PORT = process.env.PORT || 5000;

server.listen(5000, () => {
  console.log(`Server running on Port : ${PORT}`);
});
