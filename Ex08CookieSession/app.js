const express = require('express')
const cookieRouter = require('./routes/cookie') //쿠키 라우터 가져오기
const sessionRouter = require('./routes/session') // 세션 라우터 가져오기

const cookieParser = require('cookie-parser') // 쿠키parser 쿠키서명
const session  = require('express-session')
const fileStore = require('session-file-store')(session)


const app = express()



app.use(cookieParser('secretkey')) // 쿠키 암호화 키 설정
// *** 세션 설정
app.use(session({          //세션 관련 설정 >> app에서 한꺼번에함 ,  (쿠키는 각각설정함)
   httpOnly : true,        // http통신 할때만 허용하겠다!
   secret :  'secretkey' , // 암호화 키 설정
   resave : false ,        // 세션에 수정사항이 없더라도 다시 저장할 것인지 설정
   cookie : {              // 쿠키 설정해야할 내용을 여기다 추가작성하면됨! 
       httpOnly: true 
   },
   store : new fileStore()
})) 

//1. 쿠키 라우터 
app.use( '/c', cookieRouter)  //localhost:8888/c/... 로 시작하는 요청은 쿠키라우터임

//2. 세션 라우터
app.use('/s', sessionRouter)  // localhost:8888/s/... 세션라우터



app.set('port', process.env.POST||8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는 중...')
})