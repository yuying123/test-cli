const path = require('path');
const fs = require("fs");
const chalk = require('chalk');
/*
 * @Description: 
 * @Author: YUYING
 * @Date: 2020-08-06 17:26:53
 * @LastEditTime: 2020-08-07 14:48:37
 */
module.exports = function (creator, options, callback) {
  const {
    name,
    description
  } = options
  // 获取当前命令的执行目录 
  const cwd = process.cwd()

  const projectPath = path.join(cwd, name)
  const pagePath = path.join(projectPath, "page")
  const srcPath = path.join(projectPath, "src")

  // 创建项目目录
  makeDir(projectPath)
  makeDir(pagePath)
  makeDir(srcPath)

  // fs.mkdir(pagePath, { recursive: true }, (err) => {
  //   if (err){
  //     console.log(err);
  //   }
  // });
  // fs.mkdir(srcPath, { recursive: true }, (err) => {
  //   if (err){
  //     console.log(err);
  //   }
  // });

  creator.copyTemplate('../../project/package.json', path.join(projectPath, 'package.json'), {
    name,
    description,
  });


  creator.copy('../../project/src/index.html', path.join(pagePath, 'index.html'));

  creator.copy('../../project/page/login.js', path.join(srcPath, 'login.js'));

  creator.fs.commit(() => {
    console.log();
    console.log(`${chalk.grey(`创建项目: ${name}`)} ${chalk.green('✔ ')}`);
    console.log(`${chalk.grey(`创建目录: ${name}/src`)} ${chalk.green('✔ ')}`);
    console.log(`${chalk.grey(`创建目录: ${name}/page`)} ${chalk.green('✔ ')}`);
    console.log(`${chalk.grey(`创建文件: ${name}/src/index.html`)} ${chalk.green('✔ ')}`);
    console.log(`${chalk.grey(`创建文件: ${name}/page/login.js`)} ${chalk.green('✔ ')}`);

    callback();
  });
}

function makeDir(path){
  fs.mkdirSync(path, { recursive: true }, (err) => {
    if (err){
      console.log(err);
    }
  });
}