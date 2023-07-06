const express = require('express')
const router = express.Router()

//HTTP의 특징
//쿠키안에는 유지해야하는 상태 정보
//쿠키는 클라이언트(브라우저)에 저장되는 키와 값이 들어있는 작은 데이터 파일
//쿠키는 보안이 취약하기 떄문에 중요한 작업은 쿠키로 하지 않음

//쿠키 생성
router.get('/setcookie', (req,res) =>{
    let nick = 'nicknamea'
    //닉네임이 담긴 쿠키 생성
    //서버에서 생성해주기 -> 생성된 쿠키는 클라이언트로 응답시 포함
    res.cookie('nickname', nick , {
        maxAge : 1000000, //만료기간 (밀리초 단위 : 1000 ms -> 1s)
        signed : true // 쿠키 서명 -> 암호화
    })    

    res.cookie('lunch', '닭가슴살', {
        expires : new Date(Date.now() + 1000*60*60*24) //하루 후 만료
        
    })

    res.send('쿠키 생성')
})

//쿠키 값 확인하기
router.get('/getcookies', (req, res)=>{
    console.log(req.cookies); //서명이 안된 쿠키만 가지고 올 수 있음
    console.log(req.signedCookies.nickname); //서명이 된 쿠키만 가지고 올 수 있음

    res.send('쿠키 확인')
})

//쿠키 삭제
router.get('/deletecookie', (req,res)=>{
    res.clearCookie('lunch')
    res.send('쿠키 삭제')
})


module.exports = router

