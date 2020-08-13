/*
 * @Description: 
 * @Author: YUYING
 * @Date: 2020-08-08 11:59:13
 * @LastEditTime: 2020-08-13 14:47:45
 */
var inquirer = require('inquirer')
inquirer.prompt([
  // {
  //   type: 'confirm',
  //   name: 'test',
  //   message: 'Are you handsome?',
  //   default: true
  // },
  // {
  //   type: 'password',
  //   name: 'password',
  //   message: 'password?',
  // },
  // {
  //   type: 'input',
  //   message: '请输入手机号:',
  //   name: 'phone',
  //   validate: function (val) {
  //     if (val.match(/\d{11}/g)) { // 校验位数
  //       return true;
  //     }
  //     return "请输入11位数字";
  //   }
  // },
  // {
  //   type: 'list',
  //   message: '请选择一种水果:',
  //   name: 'fruit',
  //   choices: [
  //     "Apple",
  //     "Pear",
  //     "Banana"
  //   ],
  //   default: "Pear", //默认选中值
  //   filter: function (val) { // 使用filter将回答变为小写
  //     return val.toLowerCase();
  //   }
  // },
  // {
  //   type: 'rawlist', // 序列化list
  //   message: '请选择一种水果:',
  //   name: 'fruit',
  //   choices: [
  //     "Apple",
  //     "Pear",
  //     "Banana"
  //   ]
  // },
  // {
  //   type: "editor",
  //   message: "请输入备注：",
  //   name: "editor"
  // }
]).then((answers) => {
  console.log('结果为:');
  console.log(answers)
})