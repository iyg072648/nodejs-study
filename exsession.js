const express = require('express')
const nunjucks = require('nunjucks')
const session = require('express-session')
const Memorystore = require('memorystore')(session)
const router = require("./routers/index.js")
const app = express();

app.set('view engine', 'html')
nunjucks.configure('./views', {
    express: app,
    watch: true
})

let maxAge = 5*60*1000
app.use(session ({
    secret: "a34u@anf152!@#", // salt -> 암호화를 할 때 필요한 요소값
    resave: false,
    saveUninitialized: true,
    store: new Memorystore({ checkPeriod: maxAge }), //서버를 저장할 공간 설정
    // checkPeriod : 서버쪽 세션의 유효기간
    cookie: {
        maxAge: maxAge
    }
}))
// session() -> 세션을 생성해주는 미들웨어

app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen('3000', ()=>{
    console.log('server onload')
})