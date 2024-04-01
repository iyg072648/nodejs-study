const express = require('express')
const nunjucks = require('nunjucks')
const {user} = require('./models/user.js')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'html')
nunjucks.configure('./views', {
    express: app,
    watch: true
})

app.get('/', (req, res)=>{
    res.render('./join.html')
})

app.post('/idcheck', (req, res)=>{
    const {userid} = req.body
    const [ item ] = user.filter(v => v.userid == userid)
    let result = 1
    if (item != undefined) result = 0
    //가입 가능 1, 가입불가능 0
    const response = {
        result
    }

    res.send(JSON.stringify(response))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))