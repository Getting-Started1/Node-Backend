const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "temp-humid-2.cpjz7irotnnx.us-west-2.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "admin1234",
    database: "myarduinodatabase"

})

// const connection = mysql.createConnection({
//     host:"sql10.freesqldatabase.com",
//     user:"sql10608218",
//     password:"unt1JhpIgM",
//     database:"sql10608218"
// })




module.exports = connection;
