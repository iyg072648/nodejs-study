const crypto = require('crypto');

const name  = 'bitkunst';
const sha265 = crypto.createHash('sha256').update(name).digest('hex');
// 해쉬알고리즘, 해싱할 문자열, 인코딩

console.log(sha265)

const name2 = 'dfgavsdvsdfgadhdfgdahdrfadhjftufsgasdvav'
const sha256_2 = crypto.createHash('sha256').update(name2).digest('hex');
//name2 라는 변수에 임의의 길이의 문자열을 집어넣고 해싱한 결과 같은 길이의 해시값

console.log(sha256_2)