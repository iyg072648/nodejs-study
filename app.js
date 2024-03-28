var express = require('express')
var app = express()

var path = require('path')

app.listen(3000, function(){
    console.log("start.express server on port 3000")
})

app.use(express.static('public'))
app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')))


app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/main.html")
})

// app.get('/main', function(req,res){
//     res.sendFile(__dirname + "/public/main.html")
// })

app.get('/ajax', function(req,res){
    res.sendFile(__dirname + "/public/ajax.html")
})

app.post('/ajax', function(req,res){
    var email = req.body.email
    var responseData = {}

    responseData.email = email

    res.json(responseData);
})