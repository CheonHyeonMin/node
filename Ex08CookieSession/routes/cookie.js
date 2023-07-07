//라우터 생성
const express = require('express')
const router = express.Router()

// 쿠키 생성
router.get('/setcookie' , (req,res)=>{
    let nick = 'nickname1'
    // 닉네임이 담긴 쿠키생성
    // 쿠키 생성은 서버에서 생성함  -> 클라이언트로 응답 시 포함
    //  보관은 클라이언트에서 보관함
    // 서버-> 클라이언트는 무조건 응답! 이다.
     //         (키값 , value , {쿠키설정기간})
    res.cookie('nickname', nick , {
        maxAge : 100000000 , // 만료기간 (밀리초 단위 : 1000ms = 1초)
        signed : true        // 쿠키 서명 -> 암호화
    })

    res.cookie('lunch' ,'pizza' , {
        expires : new Date(Date.now() + 1000*60 *60*24)   //만료될 날짜 + 하루 후 만료
    })


    //문자열 응답
    res.send('쿠키 생성')
})

// 쿠키 값 확인하기
router.get('/getcookies', (req,res)=>{
    console.log(req.cookies.lunch); // 서명이 안된 쿠키만 가져올수있음 (req.cookies)
    console.log(req.signedCookies.nickname); // 서명이 된 쿠키 가져오기 (signed)

    res.send('쿠키 확인')
})

// 쿠키 임의적 삭제하기 (생성, 수정은 -> 서버에서 , 보관은 -> 클라이언트)
router.get('/deletecookie' , (req, res)=>{
  res.clearCookie('lunch')
  res.send('쿠키 삭제')
})

module.exports = router