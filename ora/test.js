const ora = require('ora');
const spinner = ora('Loading start');
spinner.color = 'red';
spinner.start();
setTimeout(() => {
  // 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
  spinner.color = 'yellow';
  spinner.text = 'Loading yellow';
  spinner.prefixText = 'prefix';
}, 1000)

setTimeout(() => {
  spinner.succeed('haha')
}, 2000)

setTimeout(() => {
  spinner.fail('111')
  spinner.warn('222')
  spinner.info('333')
}, 3000)