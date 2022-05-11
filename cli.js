#! /usr/bin/env node
const { execSync } = require("child_process");
const main = () => {
  const args = process.argv.slice(2);
  switch (args[0]) {
    case "start":
      execSync("npm run start", { stdio: "inherit", cwd: "./" });
      break;
    default:
      console.log("CLI simple as...");
  }
};
main();
