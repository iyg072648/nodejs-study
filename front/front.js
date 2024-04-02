const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = 3001

app.set('view engine', 'html')
nunjucks.configure('./views', {
    express: app,
    watch: true
})

app.get('/', (req, res)=>{
    res.render('index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))