// async가 붙은 함수는 promiss 객체를 return한다.

async function test1(){
    return 1 //resolve와 같다.
}

const test2 = new Promise((resolve, reject)=>{
    resolve(1)
})

console.log('test1 : ', test1())
console.log('test2 : ', test2)