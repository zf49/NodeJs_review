

// import querystring from "querystring";
let querystring = require('querystring')


let str = 'name=chris&age=100&location=shenyang'

let obj = querystring.parse(str)


console.log(obj)



var myobj = {
    a:1,
    b:2,
    c:3
}

let mystr = querystring.stringify(myobj)



console.log(mystr)