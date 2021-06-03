const execa = require("execa");
const fs = require("fs");

execa("echo", ["hello world"]).then(result => {
  console.log(result.stdout);
});

execa("grep", ["lastname", "../handlebars/template"]).then(result => {
  console.log(result.stdout);
}).catch(err => console.log(err));

const subprocess = execa('echo', ['hello world!'])
subprocess.stdout.pipe(fs.createWriteStream('test.txt'))

console.log(execa.commandSync('ls', { cwd: '../'}).stdout);
