const { spawn } = require("child_process")


// console.log(process.argv[2])

const ls = spawn(process.argv[2], ['--version']);

ls.stdout.on('data', (data) => {
  console.log(`${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(data)
})