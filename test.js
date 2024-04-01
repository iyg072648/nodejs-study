const crypto = require('crypto');

const header = {
    alg : 'HS256',
    typ: 'JWT'
}

const payload = {
    userid: 'test1',
    username: '테스트'
}

const encodingHeader = Buffer.from(JSON.stringify(header)).toString('base64').replace(/[=]/g, '');
const encodingPayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace(/[=]/g, '');

const signature = crypto.createHmac('sha256', Buffer.from('qwer1234'))
                        .update(`${encodingHeader}.${encodingPayload}`)
                        .digest(`base64`)
                        .replace(/[=]/g, '');

//실제로 사용할때는 salt값이 공개되지 않도록 .env 파일 같은곳에 저장해서 사용

const jwt = `${encodingHeader}.${encodingPayload}.${signature}`

console.log('encodingHeader : ', encodingHeader)
console.log('encodingPayload : ', encodingPayload)
console.log('signature : ', signature)
console.log('JWT : ', jwt)

//JWT를 생성하고 쿠키에 토큰을 담아 클라에 저장한다.
//클라이언트에서 사용자인증이 필요한 요청이 올 때마다 쿠키에 담겨있는 인코딩된
//header,payload 그리고 서버쪽만 알고 있을 salt값을 이용해서 signature를 만든다

//클라에서 정보를 변조하면 서버쪽에서 검증과정을 통과 못한다.

const cookie = {
    token: jwt
}

const [head, pay, sign] = cookie.token.split('.');

const designature = crypto.createHmac('sha256', Buffer.from('qwer1234'))
                           .update(`${head}.${pay}`)
                           .digest('base64')
                           .replace(/[=]/g, '')

console.log(designature === sign)
//false가 나온다면 변조된것
//true가 나온다면 변조가 되지 않은것

const decodingPayload = JSON.parse(Buffer.from(head, 'base64').toString())
//toString()에 인자값이 없다면 디폴트값은 utf-8