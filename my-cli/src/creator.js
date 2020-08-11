/*
 * @Description: 
 * @Author: YUYING
 * @Date: 2020-08-06 16:42:48
 * @LastEditTime: 2020-08-10 10:41:49
 */

const chalk = require('chalk'); 
const fs = require('fs-extra');
const inquirer = require('inquirer');
const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');
const path = require('path');


class Creator {
  constructor() {
    // 创建内存store
    // const store = memFs.create()
    // this.fs = memFsEditor.create(store)

    // 存储命令行获取的数据
    this.options = {
      name: "",
      description: ""
    }

    // // 当前根目录
    // this.rootPath = path.resolve(__dirname, "../")
    // // 模板目录
    // this.templateDirPath = path.join(this.rootPath, "template")
  }

  // 初始化
  init() {
    console.log(chalk.green('my cli 开始'));
    console.log();
    this.ask().then((answers) => {
      this.options = Object.assign({}, this.options, answers)
      console.log(answers)

      console.log(this.options)
      // this.write();
    })
  }


  // 和命令行交互
  ask() {
    // 问题
    const prompt = []

    prompt.push({
      type: 'input',
      name: 'name',
      message: '请输入项目名称',
      validate(input) {
        if (!input) {
          return "请输入项目名称"
        }
        if (fs.existsSync(input)) {
          return "项目已重复"
        }
        return true
      }
    })

    prompt.push({
      type: "input",
      name: "description",
      message: "请输入项目描述"
    })

    // 返回promise
    return inquirer.prompt(prompt)
  }


  // 拷贝 & 写数据
  // write() {
  //   console.log(chalk.green('my cli 构建开始'));
  //   const templateBuilder = require('../template/index.js')
  //   templateBuilder(this, this.options, () => {
  //     console.log(chalk.green('my cli 构建完成'));
  //     console.log();
  //     console.log(chalk.grey(`开始项目:  cd ${this.options.name } && npm install`));
  //   });
  // }


  // getTemplatePath(file) {
  //   return path.join(this.templateDirPath, file)
  // }

  // // 拷贝文件并注入数据
  // copyTemplate(file, to, data = {}) {
  //   const templatePath = this.getTemplatePath(file)
  //   this.fs.copyTpl(templatePath, to, data)
  // }


  // // 直接拷贝文件
  // copy(file, to) {
  //   const tplPath = this.getTemplatePath(file);
  //   this.fs.copy(tplPath, to);
  // }
}

module.exports = Creator