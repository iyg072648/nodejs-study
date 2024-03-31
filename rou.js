const express = require("express");
const app = express();

// app.get <- 라우터
// (req,res) => { } <- 미들웨어

app.get('/express', (req, res, next)=>{
    console.log("next")
    next()
}, (req, res) => {
    res.send("<h1>Hello server!!</h1>")
})

// express가 아닌 다른 값을 입력하는것에 따라 name이 달라진다. /:ingoo
// req.params.변수명
// ********************************* 하지만 라우터를 작성할때 실행 순서에 주의 *********************************
app.get('/:ingoo', (req, res) => {
    let name = req.params.ingoo
    res.send(`<h1>Hello ${name}!!</h1>`)
})

// //변수를 사용
// let middle = (req, res, next) => {
//     console.log('next')
//     next()
// }

// app.get('/express', middle, (req, res)=> {
//     res.send("<h1>Hello server!!</h1>")
// })

//console로 next는 출력되지만 라우터는 실행되지 않는다.
//응답처리를 해주지 않아 계속해서 응답대기 상태
//3번째 인자값인 next()가 호츨되면서 조건에 맞는 라우터 실행
// app.use('/express', (req, res, next)=>{
//     console.log("next")
//     next()
// })

app.listen(3000, ()=>{
    console.log('server onload')
})