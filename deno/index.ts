import { serve } from "https://deno.land/std/http/server.ts";
const port = 3000;
const s = serve("127.0.0.1:" + port);

console.log(`listen http://localhost:${port}/`);

const byte = Deno.readFileSync("./test_file.js");
const headers = new Headers();
headers.set("Content-Type", "text/plain; charset=utf-8");

async function main() {
  for await (const req of s) {
    req.respond({
      body: byte,
      headers
    });
  }
}

main();
