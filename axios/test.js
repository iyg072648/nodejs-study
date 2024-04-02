const { data } = require("jquery")

const fn = (num) => {
    //함수 안에 비동기 코드가 들어갈 경우
    setTimeout(()=>{
        return num + 1
    }, 0)
}

console.log(fn(1))


//프로미스는 객체이다.
//프로미스 객체는 인자값으로 콜백함수를 받는다.
//콜백함수의 인자값으로는 resolve와 reject가 들어간다.

const pr = new Promise((resolve, reject)=>{
<<<<<<< HEAD
    setTimeout(()=>{
        resolve(1)
    }, 0)
    // ..code
    //끝나는 시점을 알았을 때 resolve 함수에다가 내용을 넣는다. (인자값으로)
    //끝나는 시점에 혹시 에러가 났다면? reject 함수에다가 실패에 대한 내용을 넣는다.
=======
    // ..code
    //끝나는 시점을 알았을 때 resolve 함수에다가 내용을 넣는다. (인자값으로)
    //끝나는 시점에 혹시 에러가 났다면? reject 함수에다가 실패에 대한 내용을 넣는다.
    resolve(1)
>>>>>>> origin/main
})

// resolve() 함수 안의 1을 then() 메소드 콜백함수의 data라는 매개변수에게 전달
pr.then((data)=>{
<<<<<<< HEAD
    console.log(data+1)
})

async function test(){
    const data = await pr
    console.log(data)
}
test()
=======
    console.log(data)
})
>>>>>>> origin/main
