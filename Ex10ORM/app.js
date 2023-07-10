const express = require('express')
const {sequelize} = require('./models') // => models/index
const indexRouter = require('./routes') //=> routes/index
const app = express()
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended:true})) //body안에 있는 데이터값을 가지고 올 수 있음
app.use(bodyParser.json())//json 데이터

//force : true -> 테이블이 존재할 경우 삭제/ false : 기존 테이블 건들지 않음 
sequelize.sync({force : false})
.then(()=>console.log('db연결 성공'))
.catch((err) => {console.log(err)})

app.use('/', indexRouter)

app.set('port', process.env.PORT||8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 기다리는중...');
})
