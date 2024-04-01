const express = require('express')
const nunjucks = require('nunjucks')
const cookieParser = require('cookie-parser')
const {user} = require('./models/user.js')
const {createToken} = require('./utils/jwt.js')
const {auth} = require('./middlewares/auth.js')
const app = express()
const port = 3000

app.set('view engine', 'html')
nunjucks.configure('./views', {
    express: app,
    watch: true
})

app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(auth)

app.get('/', (req, res)=>{
    const {user} = req
    res.render('index.html', {
        user
    })
})

app.get('/login', (req, res)=>{
    res.render('login.html')
})

app.post('/login', (req, res)=>{
    const {userid, userpw} = req.body
    const [ item ] = user.filter(v => v.userid == userid && v.userpw == userpw)

    try {
        if (item == undefined) throw new Error('일치하는 아이디가 존재하지 않음')
        const payload = {
            userid: item.userid,
            username: item.username,
            level: 1
        }
        //만들어 놓은 함수를 이용해 JWT 생성
        const token = createToken(payload)

        //생성한 토큰을 쿠키로 만들어서 브라우저에 전달
        res.cookie('AccessToken', token,{
            path: '/',
            httpOnly: true
        })
        res.redirect('/')
    } catch (err){
        console.log(err)
        res.send('로그인 실패')
    }
})

app.get('/logout', (req, res)=>{
    //쿠키 삭제
    res.clearCookie('AccessToken', {path: '/'})
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))