const crypto = require('crypto')
const salt = 'ingoo'

function createToken(state){
    //JWT에 필요한 필수요소 - header, payload, signature
    const header = {
        typ: 'JWT',
        alg: 'HS256'
    }

    const payload = {
        ...state
    }

    //encoding한 헤더와 페이로드를 이용해서 signature 생성
    const encodingHeader = encoding(header)
    const encodingPayload = encoding(Payload)
    const signature = createSignature(encodingHeader, encodingPayload)

    return `${encodingHeader}. ${encodingPayload}.${signature}`
}

//인코딩 함수
function encoding(value){
    return Buffer.from(JSON.stringify(value)).toString('base64').replace(/[=]/g, '')
}

//signature 함수 생성
function createSignature(header, payload){
    const encoding = `${header}. ${payload}`
    const signature = crypto.createHmac('sha256', salt)
                            .update(encoding)
                            .digest('base64')
                            .replace(/[=]/g, '')
    return signature
}

module.exports = {
    createToken,
    createSignature
}