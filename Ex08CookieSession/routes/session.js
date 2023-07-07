const express = require('express')
const router = express.Router()

// 1. 세션 생성
router.get('/setsession', (req, res)=>{
  // 사용자 구별은 id값(민증)은 클라이언트가 가지고 있음 >> id값을 서버로 보냄
  //          key값       value값
  req.session.nickname = 'newnick'
  req.session.lunch = 'hamburger'

  res.send('세션 생성!')
})

// 세션 확인
router.get('/getsession', (req,res)=>{
    res.send(req.session.nickname+","+req.session.lunch)
})

// 세션 삭제
router.get('/deletesessions' , (req, res)=>{
    req.session.destroy() // 모든 사용자 정보 전부 삭제
    res.send('세션삭제')
})
module.exports = router //라우터 내보내기