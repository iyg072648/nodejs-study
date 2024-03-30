function cookieParser(cookieText){
    let cookieArr = cookieText.split(';')
    let newCookieArr = []
    for (let i=0; i<cookieArr.length; i++){
        newCookieArr.push(cookieArr[i].trim())
    }

    let cookie = {}
    for (let i=0; i<newCookieArr.length; i++){
        let item = newCookieArr[i].split('=')
        let key = item[0]
        let value = item[1]
        let obj = { [key]: value }

        cookie = {
            ...cookie,
            ...obj
        }
    }

    return cookie
}

module.exports = {
    cookieParser
}