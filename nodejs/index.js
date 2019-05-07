const http = require("http");
const fs = require("fs");
const path = require("path");
const readFile = require("util").promisify(fs.readFile);

const port = 3000;
const filePath = path.join(__dirname, "..", "test_data.json");

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

http
  .createServer(async function(request, response) {
    await sleep(500);
    const raw = await readFile(filePath);
    response.end(raw);
  })
  .listen(port);

console.log(`listen http://localhost:${port}/`);
