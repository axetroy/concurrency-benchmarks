const cluster = require("cluster");
const http = require("http");
const fs = require("fs");
const numCPUs = require("os").cpus().length;

const port = 3000;

const content = fs.readFileSync("./test_file.js");

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http
    .createServer((req, res) => {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end(content);
    })
    .listen(port);

  console.log(`Worker ${process.pid} started`);
}
