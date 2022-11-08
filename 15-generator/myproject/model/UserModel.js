const mongoose = require('mongoose')

const usertype = {
    username:String,
    pwd:String,
    age:Number
}

// schema 限制数据类型
const userModel = mongoose.model("user", new mongoose.Schema(usertype))

// 模型user， 将会对应users集合
module.exports = userModel