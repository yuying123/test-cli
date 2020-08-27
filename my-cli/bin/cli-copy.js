#!/usr/bin/env node
const Creator = require("../cli-copy/creator")

const project  =  new Creator()
project.init()

/**
 * 提问
 * 回答
 * 将答案（name, desc）写入package.json
 * copy
 */