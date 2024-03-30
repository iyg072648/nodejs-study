const express = require('express');
const { Cookie } = require('express-session');
const nunjucks = require('nunjucks')
const app = express();

app.set('view engine', 'html')
nunjucks.configure('./views', {
    express: app,
    watch: true
})

app.get('/', (req,res)=>{
    res.setHeader("Set-Cookie", "token=1")
    res.render('cookie.html')
})

app.get('/cookie', (req,res)=>{
    let cookie = req.headers.cookie;
    if(cookie == undefined) {
        res.send("<h1>There is no cookie</h1>")
    }else {
        res.send('<h1>Cookie: ${cookie}</h1>')
    }    
})

app.listen(3000, ()=>{
    console.log("server load")
})