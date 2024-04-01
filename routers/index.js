const express = require('express')
const {alertMove} = require("../util/alertMove.js")
const router = express.Router();
const userRouter = require('./user/index.js')
const boardRouter = require('./board/index.js')

router.get('/', (req, res)=>{
    //console.log('메인페이지', req.session)
    let {user} = req.session
    res.render('exsession.html', {
        user
    })
})

/* User Login */
router.use('/user', userRouter)

/* Board */
/* Auth 미들웨어를 따로 만들어주면서
 /board url로 접근할때 로그인 상태인지 아닌지 체크 */
const Auth = (req, res, next) => {
    const {user} = req.session;
    if (user != undefined) {
        next()
    } else {
        res.send(alertMove("회원만 이용가능한 페이지입니다.", '/'))
    }
}

router.use('/board', Auth, boardRouter)

module.exports = router;