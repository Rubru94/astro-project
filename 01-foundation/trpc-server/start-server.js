const { exec } = require("child_process");
require("dotenv").config();

const isProdEnv =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod";

const devCommand = `start-server-and-test 'tsx src/server' 0.0.0.0:${process.env.APP_PORT} 'tsx src/client'`;
const prodCommand = `start-server-and-test 'node dist/server' 0.0.0.0:${process.env.APP_PORT} 'node dist/client'`;

// Exec : display stdout "live" --> https://stackoverflow.com/questions/10232192/exec-display-stdout-live
exec(isProdEnv ? prodCommand : devCommand, (error, stdout, stderr) => {
  if (error) return console.log(`error: ${error.message}`);
  if (stderr) return console.log(`stderr: ${stderr}`);
  // console.log(`stdout: ${stdout}`);
}).stdout.on("data", (data) => console.log(data));
