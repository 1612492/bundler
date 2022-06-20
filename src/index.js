const greeting = require("./package-a");
const { NAME } = require("./package-b");

greeting({ name: NAME, message: "Hello " });
