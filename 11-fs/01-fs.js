const fs = require('fs')


// 创建目录
// fs.mkdir("./avatar",(err)=>{
//     console.log(err)
// })

// // rename
// fs.rename("./avatar","./avatar2",(err)=>{
//     console.log(err)
// })

//delete file
// fs.rmdir("./avatar2",(err)=>{
//     console.log(err)
// })


//writefile
//not cover
// fs.writeFile('./avatar/a.txt',"asdasdasdasdasdasd",(err)=>{
//         console.log(err)
// })


// // append content
// fs.appendFile('./avatar/a.txt',"\nhelloworld",(err)=>{
//     console.log(err)
// })




//read file


// error-first style
// fs.readFile('./avatar/a.txt',"utf-8",(err,data)=>{
//     console.log(err)

//     // console.log(data.toString("utf-8"))
//     console.log(data)

// })



// delete file
// fs.unlink('./avatar/a.txt',(err)=>{
//         console.log(err)
// })




// readdir
// fs.readdir("./avatar",(err,data)=>{
//             console.log(data)
// })




// 
// fs.stat('./avatar',(err,data)=>{
//     console.log(data.isFile())
//     console.log(data.isDirectory())
// })




// delete dir
// fs.readdir("./avatar",(err,data)=>{
//                 console.log(data)


//     data.forEach(item=>{
//         fs.unlink(`./avatar/${item}`,(err)=>{
//             console.log(err)
//         })

//     })

//     fs.readdir('./avatar',(err)=>{
//         console.log(err)
//     })

// })



// Sync 同步方法
// try{
//     fs.mkdirSync("./avatar2",(err)=>{
//         console.log(err)
//     })
// }catch(err){

// }



// 另一种一部写法 promise
const fs2 = require('fs').promises

// fs2.mkdir("./avatar2").then(data=>{
//         console.log(data)
// })

fs2.readFile("./avatar/1.txt","utf-8").then(data=>{
    console.log(data)
})




fs2.readdir("./avatar").then(async(data)=>{
    // method 1
    //     let arr =[]
    //     data.forEach(item => {
    //         arr.push(fs2.unlink(`./avatar/${item}`))
    //     });


    //    await Promise.all(arr)
 
    //method2


    await Promise.all(data.map(item=>fs2.unlink(`./avatar/${item}`)))



       await fs2.rmdir('./avatar')


})
















