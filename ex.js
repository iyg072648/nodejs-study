const cp = require('./models/cookieParser.js')

cookieText = "id=test; pw=123; name=테스트"
const cookie = cp.cookieParser(cookieText)

console.log(cookie)