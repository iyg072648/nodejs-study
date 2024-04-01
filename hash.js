const crypto = require('crypto');

<<<<<<< HEAD
const salt = 'qwer1234';
const name = 'bitkunst';
const hash1 = crypto.createHash('sha256').update(name).digest('hex');
const hash2 = crypto.createHmac('sha256', Buffer.from(salt)).update(name).digest('hex');

console.log('without salt :', hash1)
console.log('with salt :', hash2)

/* from으로 전달하는 이유는 char-set일경우 다른 값이 들어갈수있기때문에
from을 사용해서 컴퓨터가 저장하는 형태의 값으로 salt값을 전달 */
//salt 값을 모르고 있는 한 똑같은 해시값을 만드는것은 불가능 (보안이 더 강화된 방법)
//서버를 만들고 배포할경우 .env 파일 같은곳에 보관 


// const name  = 'bitkunst';
// const sha265 = crypto.createHash('sha256').update(name).digest('hex');
// // 해쉬알고리즘, 해싱할 문자열, 인코딩

// console.log(sha265)

// const name2 = 'dfgavsdvsdfgadhdfgdahdrfadhjftufsgasdvav'
// const sha256_2 = crypto.createHash('sha256').update(name2).digest('hex');
// //name2 라는 변수에 임의의 길이의 문자열을 집어넣고 해싱한 결과 같은 길이의 해시값

// console.log(sha256_2)

=======
const name  = 'bitkunst';
const sha265 = crypto.createHash('sha256').update(name).digest('hex');
// 해쉬알고리즘, 해싱할 문자열, 인코딩

console.log(sha265)

const name2 = 'dfgavsdvsdfgadhdfgdahdrfadhjftufsgasdvav'
const sha256_2 = crypto.createHash('sha256').update(name2).digest('hex');
//name2 라는 변수에 임의의 길이의 문자열을 집어넣고 해싱한 결과 같은 길이의 해시값

console.log(sha256_2)
>>>>>>> origin/main
