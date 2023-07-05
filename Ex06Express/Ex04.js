const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/Ex04form.html')

})
//post 요청 데이터 -> body 에 데이터가 있음
//-> body를 파싱
app.use(express.urlencoded({extended : true}))


//a태그 요청 했을때 받아 줌
// :id : 콜론을 쓰는 이유는 값이 계속 달라질 수 있다는 것을 의미



app.get('/get/:id/:pw', (req,res)=>{
    //QueryString : ?id=test1&pw=test2
    // localhost:8888/login/test1/test2
    console.log(req.query.id);
    console.log(req.query.pw);
    res.send('get 완료')
})


app.post('/post', (req, res)=>{
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.pw);
    res.send('post 완료')
})

app.set('port', process.env.PORT || 8888)



app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버연결 기다리는중');
})