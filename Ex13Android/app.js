const express = require('express')
const indexRouter = require('./routes')
const app = express()

app.use(express.urlencoded({extended : true})) //body 데이터를 다룰 수 있음

app.use('/', indexRouter)

app.set('port', process.env.PORT ||8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버연결 기다리는 중...');
})