/*
 * @Description: 
 * @Author: YUYING
 * @Date: 2020-08-08 11:59:13
 * @LastEditTime: 2020-08-08 12:02:07
 */
var inquirer = require('inquirer')
inquirer.prompt([{
  type: 'confirm',
  name: 'test',
  message: 'Are you handsome?',
  default: true
}]).then((answers) => {
  console.log('结果为:');
  console.log(answers)
})
