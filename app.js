var mysql = require('mysql');
var express = require("express");
var app     = express();


var bodyParser = require('body-parser');
var urlencoderParser = bodyParser.urlencoded({extended:false}); 
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Samu@1108",
  database: "sampleinfoUI"
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
  });

  
  app.post("/infoinsert",urlencoderParser,(req,res)=>{

    //var firstName=req.body.firstname;
    //var lastName=req.body.lastname;
      //var age=req.body.age;
     
      connection.connect(function(err) {
        if (err) console.log("something wrooong");
        console.log("Connected!");
       // "INSERT INTO 'user11'('userid','firstname','lastname','age') VALUES ("+parseInt(req.body.userid)+",'"+req.body.firstname+"','"+req.body.lastname+"',"+parseInt(req.body.age)+")"


        var qry = "insert into user values("+parseInt(req.body.userid)+",'"+req.body.firstname+"','"+req.body.lastname+"',"+parseInt(req.body.age)+")";
    connection.query(qry,function(err,result,fields){
    
    if(err) throw err;
    
    else{
    console.log(result);
    res.send("successfully inserted record");
    
    }
    });
    });
    
});
    
app.listen(3000,()=>{

    console.log("server is listening to 3000");
})    
