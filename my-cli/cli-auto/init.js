/*
 * @Description: 
 * @Author: YUYING
 * @Date: 2020-08-11 15:52:37
 * @LastEditTime: 2020-08-11 19:32:58
 */
const {promisify} = require('util') // util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足
const figlet = promisify(require('figlet')) //  util.promisify() 这个方法,方便快捷的把原来的异步回调方法改成返回 Promise 实例的方法

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content));
const {clone} = require('./download')
const open = require('open')

const spawn = async (...args) => {
  const {spawn} = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    console.log(...args)
    proc.stdout.pipe(process.stdout) // 子进程正常流搭到主进程的正常流
    proc.stderr.pipe(process.stderr) // 子进程错误流插到主进程的错误流
    proc.on('close', () => {
      resolve()
    })
  })
}


module.exports = async name => {
  // 打印欢迎界面
  clear()
  const data = await figlet('yuying Welcom') // figlet是把文字变成大字
  log(data);

  // clone
  log(`创建项目: ${name}`);
  await clone('direct:https://github.com/yuying123/test-cli.git', name)

  // 自动安装依赖
  log('安装依赖')
  console.log(spawn);
  await spawn('npm.cmd',['install'],{cwd: `./${name}`})
  // windows 要写成npm.cmd  
  log(`安装完成：To get Start: cd ${name} \n npm run server`)

  // // 自动打开浏览器
  // open(`http://localhost:8080`)
  // // 自动启动项目
  // await spawn('npm.cmd',['run', 'dev'],{cwd: `./${name}`})
}