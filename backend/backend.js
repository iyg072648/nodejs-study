const express = require('express')
const cors = require('cors')
const app = express()
const port = 4001

app.use(express.json)
app.use(express.urlencoded({extended: true}))


app.use(cors({
    origin: true,
    credentials: true
}))
//라이브러리를 사용함으로써 주석처리된 부분의 내용들을 cors()가 처리하게 해주고
//cors 역시 객체 형태로 옵션값을 전달할 수 있는데 옵션값을 설정함으로써 각각 다른 처리를 해줄수있다.
//cors 라이브러리 사용

// app.use((req, res, next)=> {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
//     res.setHeader('Access-Control-Allow-Methods', 'POST. GET, OPTTIONS, DELETE') // method 사용여부
//     res.setHeader('Access-Control-Allow-Credentials', 'true')
//     res.setHeader('Access-COntrol-Allow-Headers', 'Content-type')
//     next()
// })

app.post('/', (req, res)=>{
    console.log(req.body)
    res.setHeader('Set-Cookie', 'name=bitkunst')
    res.send('data')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))