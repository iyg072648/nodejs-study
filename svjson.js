const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
//queryString 형태의 데이터 처리

app.use(express.json())
//JSON 타입의 데이터 처리

app.post('/', (req, res)=>{
    console.log(req.headers)
    let text = JSON.stringify(req.body)
    //json 데이터 타입을 String으로
    res.send(`hello ${text}`)
})

app.listen(3001, ()=>{
    console.log('server onload')
})