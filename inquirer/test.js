const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: '输入名称',
      default: 'aaaa',
      suffix: "后缀",
      prefix: "前缀",
    },
    // {
    //   type: 'number',  // 非数字 为NaN
    //   name: 'phone',
    //   default: 13623241232,
    // },
    // {
    //   type: 'confirm',
    //   name: 'key3',
    // },
    // {
    //   type: 'list', // 默认值无效
    //   name: 'key4',
    //   choices: [111, 222, new inquirer.Separator(), 333],
    //   pageSize: 2,
    //   when: function (answers) { // 当key3为true的时候才会提问当前问题
    //     return answers.key3
    //   },
    //   filter: function (val) { // 使用filter将回答变为小写
    //     return val.toLowerCase();
    //   }
    // },
    // {
    //   type: 'rawlist', // 默认值无效
    //   name: 'key5',
    //   choices: [111, 222, 333]
    // },
    // {
    //   type: "expand",
    //   message: "请选择一种水果：",
    //   name: "fruit",
    //   choices: [
    //     {
    //       key: "a",
    //       name: "Apple",
    //       value: "apple"
    //     },
    //     {
    //       key: "O",
    //       name: "Orange",
    //       value: "orange"
    //     },
    //     {
    //       key: "p",
    //       name: "Pear",
    //       value: "pear"
    //     }
    //   ]
    // },
    // {
    //   type: "checkbox",
    //   message: "选择颜色:",
    //   name: "color",
    //   choices: [
    //     {
    //       name: "red"
    //     },
    //     new inquirer.Separator(), // 添加分隔符
    //     {
    //       name: "blur",
    //       checked: true // 默认选中
    //     },
    //     {
    //       name: "green"
    //     },
    //     new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
    //     {
    //       name: "yellow"
    //     }
    //   ]
    // },
    // {
    //   type: "password", // 密码为密文输入
    //   message: "请输入密码：",
    //   name: "pwd"
    // }
  ])
  .then((answers) => {
    console.log(answers)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });