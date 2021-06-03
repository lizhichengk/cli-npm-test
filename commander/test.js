const { program } = require('commander');
// --version 输出版本信息
program.version('0.0.1');
// 处理处理参数信息
program
  // 没有参数返回boolean 有参数返回参数
  // .option('-d, --debug', 'output extra debugging')
  // 设置默认值
  .option('-d, --debug', 'output extra debugging', true)
  .option('-s, --small', 'small pizza size')
  // 获取 必传参数 <type>  驼峰获取pizzaType
  // .option('-p, --pizza-type <type>', 'flavour of pizza')
  // [type...]多个参数
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  // 注意定义 --no-debug不会改变--debug 默认值，但运行时两者会互相覆盖 具体值取决于先后顺序
  .option('--no-debug', 'no debug');
  // 初始化init命令并获取projectName参数
program.command('init [projectName]').action((projectName) => {
  console.log('projectName', projectName);
})
// 打印参数 1启动Node.js进程的可执行文件所在的绝对路径 2 当前执行文件路径 ...3 余下参数
// console.log('process.argv',process.argv);

program.parse(process.argv);
// 未处理的参数
console.log('program.args', program.args)

const options = program.opts();
// 已处理的参数
console.log('options', options);
// debug参数
console.log('options.debug', options.debug);
