//userid 체크

const { response } = require("express")

const userid = document.querySelector('#userid')
const btn = document.querySelector('#idcheck_btn')
const msg = document.querySelector('#msg')

btn.addEventListener('click', clickHandler)

function clickHandler(){
    const data = JSON.stringify({userid: userid.value}) //JSON을 스트링으로 변환

    //ajax
    const xhr = new XMLHttpRequest()

    //Request method,  URL 지정
    xhr.open('POST', '/idcheck', true) //첫번째 인자값은 request method, 두번째는 url

    //Request Header(요청해더) 조작
    xhr.setRequestHeader('Content-type', 'application/json')

    //Request Body에 데이터 넣어서 보내기
    xhr.send(data)

    //xhr.send()에 의해 서버로 내용이 전달되고 응답을
    //건네받으면 아래의 콜백함수가 실행
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
            try {
                // 1 가입 2 불가능
                const {result} = JSON.parse(xhr.response)
                if (result == 0) throw new Error('아이디가 중복되었습니다.')
                msg.innerHTML = '사용 가능한 아이디입니다.'
                msg.style.color = 'green'
            } catch(err){
                //가입불가
                msg.innerHTML = '중복된 아이디입니다.'
                msg.style.color = 'red'
            }
        }
        // console.log(xhr)
    }
}

function clickHandler2() {
    const userid = document.querySelector('#userid')
    const data = JSON.stringify({userid: userid.value})
    const opt = {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: data
    }

    //fetch문은 프로미스 객체를 반환
    //인자값으로 url와 옵션값(객체)을 전달
    fetch('http://localhost:3000/idcheck', opt)
    .then((res)=>{ //HTTP header 정보
        return res.json() //body 영역의 promiss 객체
    })
    .then((rst)=>{ //result 변수에 HTTP body 정보가 담긴다.
        console.log(rst)
    })
}

function clickHandler3() {
    const data = {userid: userid.value}

    //axios는 객체 형태로 데이터를 전달해도 string으로 변환해준다.
    //app.post('url',()=>{})과 비슷한 형태로 작성
    
    //로딩 만들기

    axios.post('http://localhost:3000/idcheck', data, {"Content-type":"application/json"})
    .then((response)=>{
        console.log(response.data)
        // 로딩 지우기
    })
}

async function clickHandler4() {
    const data = {userid: userid.value}

    //요청을 보내기 전
    //로딩페이지 만들기

    try{
        const response = await axios.post('http://localhost:3000/idcheck', data, {"Content-type": "application/json"})
    } catch (err){
        console.log(err)
    }

    //요청이 완료된 후
    //로딩 끝~

    console.log(response.data)
}