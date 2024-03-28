var express = require('express')
var app = express()

var path = require('path')

app.listen(3000, function(){
    console.log("start express server on port 3000")
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

//post방식으로 데이터를 받을 때 필요한 모듈입니다.
//req에 데이터를 담아줍니다.
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//cors정책을 피하기 위한 모듈
const cors = require('cors')
app.use(cors());

//받은 데이터를 다음과 같이 가공해 json을 통해 클라이언트로 보내줍니다.
app.post('/ajax', function(req,res){
  var responseData = `hi ${req.body.name} i'm balmostory`
  res.json(responseData);
})