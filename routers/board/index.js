const express = require('express')
const router = express.Router()

router.get('/list', (req, res)=> {
    res.send('<h1>게시판 페이지</h1>')
})

module.exports = router;