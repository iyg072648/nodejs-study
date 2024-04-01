//userid 체크

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