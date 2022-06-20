const webpack = require("webpack");
const fs = require("fs");

const config = require("./config");

fs.rmSync("webpack", { recursive: true, force: true });

console.time("process");
webpack(config, (error, stats) => {
  console.timeEnd("process");
  if (error) throw error;

  console.log(
    stats.toString({
      colors: true,
    })
  );
});
