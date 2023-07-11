const express = require('express')
const indexRouter = require('./routes')// ./routes/index
const nunjucks = require('nunjucks')
const app = express()


app.set('views', __dirname+'/views')
app.set('view engine', 'html')
nunjucks.configure('views',{
    express : app,
    watch : true
})



app.use('/', indexRouter)



app.set('port', process.env.PORT||8888)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는중...');
})