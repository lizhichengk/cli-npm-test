const Handlebars = require('Handlebars');
const fs = require('fs');
const path = require('path');

const INFO_DATA = {
  name: 'lizhicheng',
  age: 1,
  html: '<html></html>',
  firstname: 'li',
  lastname: 'zhicheng',
  person: {
    firstname: 'li',
    lastname: 'zhicheng',
  },
  list: ['aaa', 'bbb', 'ccc']
}

const templateStr = fs.readFileSync(path.join(__dirname, 'template')).toString();

// console.log(templateStr)

Handlebars.registerHelper('loud', function (aString) {
  return aString.toUpperCase()
})

// 编译
const result2 = Handlebars.compile(templateStr)(INFO_DATA);


console.log(result2);

