const express = require('express')
const userRouter = require('./routes/user') //user.js 모듈 가져오는 것
const boardRouter = require('./routes/board')
const app = express()

app.use('/user', userRouter) // localhost:8888/user로 시작
app.use('/board', boardRouter) // localhost:8888/board로 시작

app.get('/user/test', (req,res)=>{
    res.send('user 요청!')
})




app.set('port', process.env.PORT || 8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는중...');
})