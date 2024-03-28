//아이디 중복체크

const express = require('express')
const nunjucks = require('nunjucks')
const {user} = require('./models/user')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'html')
nunjucks.configure('./views',{
    express: app,
    watch: true
})

app.get('/', (req, res)=>{
    res.render('./join.html')
})

app.post('/idcheck', (req,res)=>{
    const {userid} = req.body
    const [ item ] = user.fillter(v => v.userid == userid)
    let result = 1
    if (item != undefined) result = 0
    //1 = 가입가능 2 = 가입 불가능
    const response = {
        result
    }

    res.send(JSON.stringify(response))

})

app.listen(3000, ()=> {
    console.log('server onload')
})