function test(){
    console.log('bbbbbbb')
}

// 哪里用哪引
let modulea = require('./a')
console.log(modulea.upper('aaaaa'))


module.exports = test