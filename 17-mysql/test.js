const express = require('express')
const app = express()
const port = 3000


// get the client
const mysql2 = require('mysql2');

// create the connection to database
const connection = mysql2.createPool({
  host: 'localhost',
  port:3306,
  user: 'root',
  password:"wzf!@#000",
  database: 'Employee',
  connectionLimit:1
});

// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

app.get("/",async(req,res)=>{

    const promisePool = connection.promise()
   var employee =  await promisePool.query("select * from DEPENDENT")


console.log(employee[0])

    res.send({
        ok:1
    })

        
        

})




dm




app.get('/', (req, res) => res.send('Hello World!'))







app.listen(port, () => console.log(`Example app listening on port ${port}!`))