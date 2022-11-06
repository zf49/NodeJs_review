const fs = require('fs')

// const rs = fs.createReadStream('./1.txt',"utf-8")

// rs.on('data',(chunk)=>{
//     console.log("chunk----"+chunk)
// })


// rs.on("end",()=>{
//     console.log("end")
// })


// rs.on("err",(err)=>{
//     console.log(err)
// })



// // write
// const ws = fs.createWriteStream('./2.txt',"utf-8")

// ws.write("12djahldkajslkdjak l")
// ws.write("zxczxczxc")
// ws.write("cvbncvbncvbn")
// ws.write("qfla;kgjdlsfglksd")
// ws.write("oeritueworjtweirn")

// ws.end()




// read + write suitable for large file copy
const readStream = fs.createReadStream('./1.txt',"utf-8")



const writeStream = fs.createWriteStream('./2.txt',"utf-8")



readStream.pipe(writeStream)