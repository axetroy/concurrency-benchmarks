const http = require("http");
const fs = require("fs");

const port = 3000;

const content = fs.readFileSync("./test_file.js");

http
  .createServer(function(req, res) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(content);
  })
  .listen(port);

console.log(`listen http://localhost:${port}/`);
