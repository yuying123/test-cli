/*
 * @Description: 
 * @Author: YUYING
 * @Date: 2020-08-11 16:20:13
 * @LastEditTime: 2020-08-11 17:10:38
 */
const {promisify} = require('util')

module.exports.clone = async function(repo, desc) {
  const download = promisify(require('download-git-repo')) // download-git-repo: Download and extract a git repository (GitHub, GitLab, Bitbucket)
  const ora = require('ora')
  const process = ora(`下载......${repo}`)
  process.start() // 进度条开始
  await download(repo, desc,  { clone: true })
  //  download-git-repo导出的APIdownload方法，第一个参数仓库地址:repo的格式
  // GitHub - github:owner/name or simply owner/name
  // GitLab - gitlab:owner/name
  // Bitbucket - bitbucket:owner/name
  process.succeed()
}

