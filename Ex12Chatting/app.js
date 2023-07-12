const express = require('express')
const indexRouter = require('./routes')// ./routes/index
const nunjucks = require('nunjucks')
const {sequelize} = require('./models')
const memberRouter = require('./routes/memberRouter')
const chatRouter = require('./routes/chat')
const bodyParser = require('body-parser')
const session  = require('express-session')
const fileStore = require('session-file-store')(session)
const webSocket = require('./socket')
const app = express()

//force : false -> 기존 테이블은 건들지 않겠다
sequelize.sync({force : false})
.then(()=>{
    console.log('DB 연결성공!');
})
.catch((err)=>{
    console.log(err);
})
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())// json 형태 데이터 다룰 때 추가!
// app.use(bodyParser.json()) postman에서 사용할때  body에서 넘겨주는 타입이 json이라서 써준것임
app.use(session({          //세션 관련 설정 >> app에서 한꺼번에함 ,  (쿠키는 각각설정함)
    httpOnly : true,        // http통신 할때만 허용하겠다!
    secret :  'secretkey' , // 암호화 키 설정
    resave : false ,        // 세션에 수정사항이 없더라도 다시 저장할 것인지 설정
    cookie : {              // 쿠키 설정해야할 내용을 여기다 추가작성하면됨! 
        httpOnly: true 
    },
    store : new fileStore()
 })) 

app.set('views', __dirname+'/views')
app.set('view engine', 'html')
nunjucks.configure('views',{
    express : app,
    watch : true
})

app.use('/chat',chatRouter)
app.use('/member',memberRouter )
app.use('/', indexRouter)



app.set('port', process.env.PORT||8888)
const server = app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는중...');
})

webSocket(server)