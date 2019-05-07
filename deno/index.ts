import { serve } from "https://deno.land/std/http/server.ts";
const port = 3000;
const s = serve("127.0.0.1:" + port);

console.log(`listen http://localhost:${port}/`);

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  for await (const req of s) {
    await sleep(200);

    const bin = await Deno.readFile("./test_data.json");

    req.respond({ body: bin });
  }
}

main();
