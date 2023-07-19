const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const { response } = require("express");
const data_exporter = require('json2csv').Parser;




app.use(cors({
    origin:"*",
    methods:"GET",
    optionsSuccessStatus: 200,
}))

app.get("/", function(req, res){
    let sql = "SELECT * FROM  today_real_analysis"; // Replace with your sql table name
    connection.query(sql, function(err, results){
        if (err) throw err;
    res.send(results);
    });

});





app.get("/export", function(request, response, next){
    connection.query('SELECT * FROM today_real_analysis', function   (error, data){
     const mysql_data = JSON.parse(JSON.stringify(data)); // Replace with your mysql table name
 
     const file_header = ['temperature', 'humidity', 'record_date'];
     const json_data = new data_exporter({file_header});
     const csv_data =  json_data.parse(mysql_data);
 
     response.setHeader('Content-Type', 'text/CSV');
 
     response.setHeader('Content-Disposition', "attachment; filename=sample_data.csv");
 
     response.status(200).end(csv_data);
 
    }
    )
 
 });
 




app.listen(3000, function(){
    console.log("App listening on port 3000");
    connection.connect(function(err){
        if(err) throw err;
        console.log("Database connected!");
    })
})