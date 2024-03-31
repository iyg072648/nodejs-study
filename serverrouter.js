const express = require('express')
const boardRouter = require('./router.js')
//require 함수의 인자값은 router.js 파일의 경로 작성
const app = express()

app.use('/board', boardRouter)

app.listen(3000, ()=>{
    console.log('server onload')
})