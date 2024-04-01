const name = 'bitkunst'
const buff = Buffer.from(name)

console.log(buff)
console.log(typeof(buff))

const base64 = Buffer.from(name, 'base64')
console.log('base64 is : ', base64)
//buffer가 메모리에 담고있는 값은 2진수이지만
//16진수로 표기되는것

const decoding1 = buff.toString()
console.log('디코딩1:', decoding1)
//toStirng으로 원래의 문자열로 되돌릴수있다

