const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const bodyParser = require("body-parser")

app.set("view engine", "html")
nunjucks.configure("./views", {
    express: app
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/express", function(req, res){
    console.log(req.query)
    let name = req.query.name
    res.render("index.html", {
        user: name
    })
})

app.post("express", function(req, res){
    console.log(req.body)
    res.send("<h1>post요청</h1>")
})

app.listen(3000, ()=> {
    console.log('server onload')
})