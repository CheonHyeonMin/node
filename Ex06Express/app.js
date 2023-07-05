const express = require('express')

const app = express() // app 생성


//get 요청 받고 응답 받기
//localhost:8888/
app.get('/', (req, res, next)=>{
    res.send('Hello Express!') //텍스트 응답
    next()
})

const myLOGGER = function(req,res){
    console.log('LOGGED');
}
app.use(myLOGGER) //app에 미들웨어 붙여주기

app.listen(8888, ()=>{
    console.log('8888 포트에서 서버 연결 기다리는중...');
})