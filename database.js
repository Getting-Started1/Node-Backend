const mysql = require('mysql2');

const connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"", //Replace with your own password
    database:"" //Replace with your own database name

})


module.exports = connection;



