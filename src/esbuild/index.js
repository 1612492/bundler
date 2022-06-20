const esbuild = require("esbuild");
const fs = require("fs");

const config = require("./config");

fs.rmSync("esbuild", { recursive: true, force: true });

console.time("process");
esbuild.build(config).then(() => {
  console.timeEnd("process");
});
