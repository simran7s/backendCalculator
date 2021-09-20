// jshint esversion:6
const express = require("express")
const app = express();

// body-parser works alongside express. below is how to use it
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));


// HOME route
app.get("/", function(req, res){
        // res.send("Hello World")
        // __dirname automatically stores path of current files location
        res.sendFile(__dirname + '/index.html')
})

app.post("/", function(req,res){
        
        var num1 = Number(req.body.num1);
        var num2 = Number(req.body.num2);

        res.send("Answer: " +  (num1 + num2))
})

app.get("/bmi", function(req,res){
        res.sendFile(__dirname + '/bmiCalcuator.html')
})

app.post("/bmi", function(req,res){
        
        var weight = Number(req.body.weight);
        var height = Number(req.body.height);
        var bmi = weight/(height*height)

        res.send("Your BMI: " +  bmi)


})

// Starting Server on port 3000
app.listen(3000, function(){
        console.log("Server Started on port 3000")
})