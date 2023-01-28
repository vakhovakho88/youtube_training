const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const db = require('./config/db');



//create an express app.
//everythin we make here, is done with express
const app = express();


//listen to http requests
const port = 8000;



//to print json out.
app.use(bodyParser.urlencoded({extended: true}));


MongoClient.connect(db.url, (err, database)=>{
    if (err) return console.log(err);

//empty object since we dont have database {}
require('./app/routes')(app,database);

app.listen(port, ()=>{
    console.log("We are live on port: "+port);
});

})