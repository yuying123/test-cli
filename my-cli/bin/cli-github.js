#!/usr/bin/env node 
const commander = require("commander"); //命令行工具
const download = require("download-git-repo");
const inquirer = require("inquirer");
const handlebars = require("handlebars");
const fs = require("fs");
const ora = require("ora");
const chalk = require("chalk");
const symbols = require("log-symbols");

commander
  .version("0.0.1", "-v, --version")
  .command("init <projectname>")
  .action(projectname => {
    if (fs.existsSync(projectname)) {
      // 错误提示项目已存在，避免覆盖原有项目
      console.log(symbols.error, chalk.red("项目已存在"));
      return;
    }
    // 交互 （问题+答案）
    inquirer
      .prompt([
        {
          name: "description",
          message: "请输入项目描述"
        },
        {
          name: "author",
          message: "请输入作者名称"
        }
      ])
      .then(answers => {
        console.log(answers)

        // 下载一个项目模板到本地
        download(
          // "github:yuying123/test-cli.git",
          "direct:https://github.com/yuying123/test-cli.git",
          projectname,
          { clone: true },
          err => {

            const process  = ora("正在下载模板...");
            process.start(); // 进度条开始

            if (!err) {
              process.succeed();
              const meta = {
                projectname,
                description: answers.description,
                author: answers.author
              };

              // 将答案重写到package.json
              const fileName = `${projectname}/package.json`;
              if (fs.existsSync(fileName)) {
                const content = fs.readFileSync(fileName).toString();
                const result = handlebars.compile(content)(meta);
                fs.writeFileSync(fileName, result);
              }
              console.log(symbols.success, chalk.green("项目初始化完成"));
            } else {
              process .fail();
              console.log(symbols.error, chalk.red(`拉取远程仓库失败${err}`));
            }
          }
        );
      });
  });
//解析命令行
commander.parse(process.argv);

