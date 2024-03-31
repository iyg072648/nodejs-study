//user 데이터

const user = [
    {
        userid: 'testid',
        userpw: '1234',
        username: '테스트아이디'
    },
    {
        userid: 'admin',
        userpw: 'admin',
        username: '관리자'
    }
]

function findUser(id, pw){
    for (let i = 0; i < user.length; i++) {
        if(user[i].userid === id && user[i].userpw === pw){
            //사용자 정보와 관리자 정보가 일치할 경우 코드블록
            return true;
        }
    }
    return false;
}

module.exports = {
    user,
    findUser
}